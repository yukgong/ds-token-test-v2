import { chromium } from 'playwright';
const base='http://localhost:3300';
const shots=[];
for (const [arm,route] of [['E','intent-first'],['EN','e-nodesc'],['EC','e-canvas-hint'],['ES','step-rename'],['IV','inverse-desc'],['PF','property-first']]) {
  for (const page of ['dashboard','billing','notifications','settings'])
    for (const n of [1,2,3])
      shots.push([`${arm}_${page}_run${n}`, `${base}/${route}/${page}/run${n}`]);
}
const b=await chromium.launch();
const pg=await b.newPage({viewport:{width:1440,height:1024}});
for (const [name,url] of shots) {
  try{ await pg.goto(url,{waitUntil:'networkidle',timeout:30000}); await pg.waitForTimeout(400);
    await pg.screenshot({path:`eval/viewer/shots/${name}.png`,fullPage:true}); console.log('ok',name); }
  catch(e){ console.log('ERR',name,e.message); }
}
await b.close();
