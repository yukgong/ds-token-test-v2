// v3 E+ 재테스트용 summary.json + viewer/data.js 재생성 (raw 오용률 단일, 별첨 폐지)
// 사용: node eval/_rebuild.mjs
import { readdirSync, readFileSync, writeFileSync } from 'fs';

const RES = 'eval/results';
const ROUTE = { E: 'intent-first', EN: 'e-nodesc', EC: 'e-canvas-hint', ES: 'step-rename', IV: 'inverse-desc', PF: 'property-first' };
const ARM_LABEL = {
  PF: 'PF · property-first 이름만 (slot-first 네이밍, 설명 없음)',
  EN: 'E− · intent-first 이름만 (설명 없음)',
  EC: 'EC · intent-first 이름만 + canvas/surface 구분 설명만 (E−에 그 설명만 추가)',
  E: 'E+ · intent-first 이름 + 설명',
  ES: 'ES · intent-first 이름 + 설명 (step 어휘 변경: muted/subtle/default/strongest/emphasis)',
  IV: 'INV · slot-first 이름 + 설명 (셀 E 토큰, 순서 반전)',
};
const ORDER = ['PF', 'EN', 'EC', 'E', 'ES', 'IV'];

const files = readdirSync(RES).filter(f => /^(E|EN|EC|ES|IV|PF)_.*_run\d+\.json$/.test(f));
const cells = files.map(f => {
  const j = JSON.parse(readFileSync(`${RES}/${f}`, 'utf8'));
  const { cell, page, run } = j;
  const route = ROUTE[cell];
  // raw 단일 오용률: 별첨/보정 폐지 → adjusted=raw, excluded=0 으로 뷰어 호환 채움
  return {
    cell, page, run,
    total_usages: j.total_usages,
    slot: j.slot | 0, intent: j.intent | 0, fg_text: j.fg_text | 0,
    hardcode: j.hardcode | 0, hallucination: j.hallucination | 0,
    misuse_count: j.misuse_count,
    misuse_rate: j.misuse_rate,
    details: (j.details || []).map(d => ({ ...d, excluded: false })),
    excluded_count: 0,
    adjusted_misuse: j.misuse_count,
    adjusted_rate: j.misuse_rate,
    shot: `shots/${cell}_${page}_run${run}.png`,
    code: `/${route}/${page}/run${run}`,
    codepath: `src/app/${route}/${page}/run${run}/page.tsx`,
  };
}).sort((a, b) =>
  ORDER.indexOf(a.cell) - ORDER.indexOf(b.cell) ||
  a.page.localeCompare(b.page) || a.run - b.run);

const summary = {};
for (const c of ORDER) {
  const cc = cells.filter(x => x.cell === c);
  const sum = k => cc.reduce((s, x) => s + (x[k] || 0), 0);
  const usages = sum('total_usages'), misuse = sum('misuse_count');
  summary[c] = {
    label: ARM_LABEL[c],
    cells: cc.length,
    usages, misuse,
    rate: usages ? +(misuse / usages * 100).toFixed(2) : 0,
    excluded: 0,
    adjusted_misuse: misuse,
    adjusted_rate: usages ? +(misuse / usages * 100).toFixed(2) : 0,
    slot: sum('slot'), intent: sum('intent'), fg_text: sum('fg_text'),
    hardcode: sum('hardcode'), hallucination: sum('hallucination'),
  };
}

writeFileSync(`${RES}/summary.json`, JSON.stringify(summary, null, 2));
const data = { summary, arm_label: ARM_LABEL, cells, order: ORDER, appendix: [] };
writeFileSync('eval/viewer/data.js', 'window.DATA=' + JSON.stringify(data) + ';\n');

console.log('rebuilt. summary:');
for (const c of ORDER) console.log(' ', c, JSON.stringify(summary[c]));
