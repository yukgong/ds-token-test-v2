import { css } from '@ds-token-test/styled-system-intent-first/css';
import {
  User,
  CreditCard,
  ShieldCheck,
  Bell,
  AlertTriangle,
  Zap,
  Info,
  XCircle,
  CheckCircle2,
  Monitor,
  Smartphone,
} from 'lucide-react';

export default function SettingsPage() {
  return (
    <div
      className={css({
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'neutral.canvas.01',
      })}
    >
      {/* 왼쪽 설정 메뉴 */}
      <aside
        className={`dark ${css({
          width: '200px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          padding: '16px',
          backgroundColor: 'neutral.canvas.01',
          overflowY: 'auto',
        })}`}
      >
        {/* 뒤로가기 링크 */}
        <a
          href="#"
          className={css({
            display: 'block',
            fontSize: '13px',
            color: 'neutral.text.low',
            textDecoration: 'none',
            marginBottom: '12px',
          })}
        >
          ← 대시보드
        </a>

        {/* 제목 */}
        <h2
          className={css({
            fontSize: '16px',
            fontWeight: '700',
            color: 'neutral.text.base',
            marginBottom: '8px',
          })}
        >
          설정
        </h2>

        {/* 메뉴 항목 — 활성: 프로필 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 10px',
            borderRadius: '6px',
            backgroundColor: 'neutral.fill.base',
            cursor: 'pointer',
          })}
        >
          <User
            size={16}
            className={css({ color: 'primary.icon.base' })}
          />
          <span className={css({ fontSize: '14px', color: 'primary.text.base', fontWeight: '600' })}>
            프로필
          </span>
        </div>

        {/* 구독 플랜 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 10px',
            borderRadius: '6px',
            cursor: 'pointer',
          })}
        >
          <CreditCard
            size={16}
            className={css({ color: 'neutral.icon.base', opacity: 0.6 })}
          />
          <span className={css({ fontSize: '14px', color: 'neutral.text.low' })}>
            구독 플랜
          </span>
        </div>

        {/* 보안 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 10px',
            borderRadius: '6px',
            cursor: 'pointer',
          })}
        >
          <ShieldCheck
            size={16}
            className={css({ color: 'neutral.icon.base', opacity: 0.6 })}
          />
          <span className={css({ fontSize: '14px', color: 'neutral.text.low' })}>
            보안
          </span>
        </div>

        {/* 알림 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 10px',
            borderRadius: '6px',
            cursor: 'pointer',
          })}
        >
          <Bell
            size={16}
            className={css({ color: 'neutral.icon.base', opacity: 0.6 })}
          />
          <span className={css({ fontSize: '14px', color: 'neutral.text.low' })}>
            알림
          </span>
        </div>

        {/* 위험 구역 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 10px',
            borderRadius: '6px',
            cursor: 'pointer',
          })}
        >
          <AlertTriangle
            size={16}
            className={css({ color: 'critical.icon.base' })}
          />
          <span className={css({ fontSize: '14px', color: 'critical.text.base' })}>
            위험 구역
          </span>
        </div>
      </aside>

      {/* 오른쪽 콘텐츠 영역 */}
      <main
        className={css({
          flex: 1,
          overflowY: 'auto',
          backgroundColor: 'neutral.canvas.01',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        })}
      >
        {/* 브레드크럼 */}
        <nav
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
          })}
        >
          <a href="#" className={css({ color: 'neutral.text.low', textDecoration: 'none' })}>홈</a>
          <span className={css({ color: 'neutral.text.low' })}>/</span>
          <a href="#" className={css({ color: 'neutral.text.low', textDecoration: 'none' })}>설정</a>
          <span className={css({ color: 'neutral.text.low' })}>/</span>
          <span className={css({ color: 'neutral.text.base', fontWeight: '600' })}>프로필</span>
        </nav>

        {/* 카드 1: 프로필 정보 */}
        <div
          className={css({
            backgroundColor: 'neutral.surface.base',
            borderRadius: '10px',
            border: '1px solid',
            borderColor: 'neutral.border.base',
            overflow: 'hidden',
          })}
        >
          <div className={css({ padding: '24px' })}>
            <h3 className={css({ fontSize: '16px', fontWeight: '700', color: 'neutral.text.base', marginBottom: '20px' })}>
              프로필 정보
            </h3>

            {/* 아바타 영역 */}
            <div className={css({ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' })}>
              <div
                className={css({
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'primary.fill.base',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  fontWeight: '700',
                  color: 'inverse.text.base',
                  flexShrink: 0,
                })}
              >
                K
              </div>
              <div className={css({ display: 'flex', gap: '8px' })}>
                <button
                  className={css({
                    padding: '6px 14px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    backgroundColor: 'neutral.surface.base',
                    color: 'neutral.text.base',
                    fontSize: '13px',
                    cursor: 'pointer',
                  })}
                >
                  사진 변경
                </button>
                <button
                  className={css({
                    padding: '6px 14px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    color: 'neutral.text.low',
                    fontSize: '13px',
                    cursor: 'pointer',
                  })}
                >
                  삭제
                </button>
              </div>
            </div>

            {/* 입력 필드 2열 그리드 */}
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginBottom: '16px',
              })}
            >
              {/* 이름 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '600', color: 'neutral.text.base' })}>
                  이름
                </label>
                <input
                  type="text"
                  placeholder="이름을 입력하세요"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    backgroundColor: 'neutral.surface.base',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    outline: 'none',
                    '&::placeholder': { color: 'neutral.text.low' },
                  })}
                />
              </div>

              {/* 이메일 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '600', color: 'neutral.text.base' })}>
                  이메일
                </label>
                <input
                  type="email"
                  placeholder="이메일을 입력하세요"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    backgroundColor: 'neutral.surface.base',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    outline: 'none',
                  })}
                />
              </div>

              {/* 전화번호 — 비활성화 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px', opacity: 0.38 })}>
                <label className={css({ fontSize: '13px', fontWeight: '600', color: 'neutral.text.base' })}>
                  전화번호
                </label>
                <input
                  type="tel"
                  placeholder="전화번호"
                  disabled
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    backgroundColor: 'neutral.canvas.02',
                    color: 'neutral.text.low',
                    fontSize: '14px',
                    cursor: 'not-allowed',
                  })}
                />
              </div>

              {/* 부서 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '600', color: 'neutral.text.base' })}>
                  부서
                </label>
                <input
                  type="text"
                  placeholder="부서를 입력하세요"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    backgroundColor: 'neutral.surface.base',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    outline: 'none',
                  })}
                />
              </div>
            </div>

            {/* 소개 textarea */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '600', color: 'neutral.text.base' })}>
                소개
              </label>
              <textarea
                rows={3}
                className={css({
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'neutral.border.base',
                  backgroundColor: 'neutral.surface.base',
                  color: 'neutral.text.base',
                  fontSize: '14px',
                  resize: 'vertical',
                  outline: 'none',
                })}
              />
              <span className={css({ fontSize: '12px', color: 'neutral.text.low' })}>최대 200자</span>
            </div>
          </div>

          {/* 구분선 + 버튼 */}
          <div className={css({ borderTop: '1px solid', borderColor: 'neutral.border.base', padding: '16px 24px', display: 'flex', gap: '10px' })}>
            <button
              className={css({
                padding: '8px 18px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'primary.fill.base',
                color: 'inverse.text.base',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
              })}
            >
              변경사항 저장
            </button>
            <button
              className={css({
                padding: '8px 18px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'transparent',
                color: 'neutral.text.low',
                fontSize: '14px',
                cursor: 'pointer',
              })}
            >
              취소
            </button>
          </div>
        </div>

        {/* 카드 2: 구독 플랜 */}
        <div
          className={css({
            backgroundColor: 'neutral.surface.base',
            borderRadius: '10px',
            border: '1px solid',
            borderColor: 'neutral.border.base',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          })}
        >
          <h3 className={css({ fontSize: '16px', fontWeight: '700', color: 'neutral.text.base' })}>
            구독 플랜
          </h3>

          {/* 현재 플랜 박스 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'primary.border.base',
              backgroundColor: 'primary.surface.base',
            })}
          >
            <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
              <Zap size={20} className={css({ color: 'primary.icon.base' })} />
              <div>
                <p className={css({ fontSize: '15px', fontWeight: '700', color: 'primary.text.base' })}>Pro</p>
                <p className={css({ fontSize: '13px', color: 'neutral.text.low' })}>2025년 9월 1일 갱신</p>
              </div>
            </div>
            <span
              className={css({
                padding: '4px 10px',
                borderRadius: '20px',
                backgroundColor: 'primary.fill.base',
                color: 'inverse.text.base',
                fontSize: '12px',
                fontWeight: '600',
              })}
            >
              현재 플랜
            </span>
          </div>

          {/* Info 배너 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'info.border.base',
              backgroundColor: 'info.surface.base',
            })}
          >
            <Info size={16} className={css({ color: 'info.icon.base', flexShrink: 0 })} />
            <p className={css({ fontSize: '13px', color: 'info.text.base' })}>
              결제일이 7일 후입니다. 카드 정보를 확인해 주세요.
            </p>
          </div>

          {/* 버튼 2개 */}
          <div className={css({ display: 'flex', gap: '10px' })}>
            <button
              className={css({
                padding: '8px 18px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'primary.fill.base',
                color: 'inverse.text.base',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
              })}
            >
              Enterprise로 업그레이드
            </button>
            <button
              className={css({
                padding: '8px 18px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                backgroundColor: 'transparent',
                color: 'neutral.text.base',
                fontSize: '14px',
                cursor: 'pointer',
              })}
            >
              플랜 비교 보기
            </button>
          </div>
        </div>

        {/* 카드 3: 비밀번호 변경 */}
        <div
          className={css({
            backgroundColor: 'neutral.surface.base',
            borderRadius: '10px',
            border: '1px solid',
            borderColor: 'neutral.border.base',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          })}
        >
          <h3 className={css({ fontSize: '16px', fontWeight: '700', color: 'neutral.text.base' })}>
            비밀번호 변경
          </h3>

          {/* 1. 현재 비밀번호 — 기본 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
            <label className={css({ fontSize: '13px', fontWeight: '600', color: 'neutral.text.base' })}>
              현재 비밀번호
            </label>
            <input
              type="password"
              className={css({
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                backgroundColor: 'neutral.surface.base',
                color: 'neutral.text.base',
                fontSize: '14px',
                outline: 'none',
              })}
            />
          </div>

          {/* 2. 새 비밀번호 — 포커스 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
            <label className={css({ fontSize: '13px', fontWeight: '600', color: 'neutral.text.base' })}>
              새 비밀번호
            </label>
            <input
              type="password"
              placeholder="새 비밀번호를 입력하세요"
              className={css({
                padding: '8px 12px',
                borderRadius: '6px',
                border: '2px solid',
                borderColor: 'primary.border.base',
                backgroundColor: 'neutral.surface.base',
                color: 'neutral.text.base',
                fontSize: '14px',
                outline: '2px solid',
                outlineColor: 'focus.border',
                outlineOffset: '2px',
                '&::placeholder': { color: 'neutral.text.low' },
              })}
            />
          </div>

          {/* 3. 비밀번호 확인 — 오류 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
            <label className={css({ fontSize: '13px', fontWeight: '600', color: 'neutral.text.base' })}>
              비밀번호 확인
            </label>
            <input
              type="password"
              defaultValue="abc"
              className={css({
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'critical.border.base',
                backgroundColor: 'critical.surface.base',
                color: 'neutral.text.base',
                fontSize: '14px',
                outline: 'none',
              })}
            />
            <div className={css({ display: 'flex', alignItems: 'center', gap: '6px' })}>
              <XCircle size={14} className={css({ color: 'critical.icon.base' })} />
              <span className={css({ fontSize: '12px', color: 'critical.text.base' })}>
                비밀번호가 일치하지 않습니다.
              </span>
            </div>
          </div>

          {/* 4. 새 이메일 — 성공 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
            <label className={css({ fontSize: '13px', fontWeight: '600', color: 'neutral.text.base' })}>
              새 이메일 (선택)
            </label>
            <input
              type="email"
              defaultValue="user@example.com"
              className={css({
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'positive.border.base',
                backgroundColor: 'positive.surface.base',
                color: 'neutral.text.base',
                fontSize: '14px',
                outline: 'none',
              })}
            />
            <div className={css({ display: 'flex', alignItems: 'center', gap: '6px' })}>
              <CheckCircle2 size={14} className={css({ color: 'positive.icon.base' })} />
              <span className={css({ fontSize: '12px', color: 'positive.text.base' })}>
                사용 가능한 이메일입니다.
              </span>
            </div>
          </div>

          {/* 5. 사용자 ID — 비활성화 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px', opacity: 0.38 })}>
            <label className={css({ fontSize: '13px', fontWeight: '600', color: 'neutral.text.base' })}>
              사용자 ID
            </label>
            <input
              type="text"
              defaultValue="user_12847"
              disabled
              className={css({
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'neutral.border.low',
                backgroundColor: 'neutral.canvas.02',
                color: 'neutral.text.low',
                fontSize: '14px',
                cursor: 'not-allowed',
              })}
            />
            <span className={css({ fontSize: '12px', color: 'neutral.text.low' })}>변경 불가</span>
          </div>

          <button
            className={css({
              alignSelf: 'flex-start',
              padding: '8px 18px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'primary.fill.base',
              color: 'inverse.text.base',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
            })}
          >
            저장
          </button>
        </div>

        {/* 카드 4: 보안 */}
        <div
          className={css({
            backgroundColor: 'neutral.surface.base',
            borderRadius: '10px',
            border: '1px solid',
            borderColor: 'neutral.border.base',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          })}
        >
          <h3 className={css({ fontSize: '16px', fontWeight: '700', color: 'neutral.text.base' })}>
            보안 설정
          </h3>

          {/* 2단계 인증 토글 행 */}
          <div className={css({ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' })}>
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <ShieldCheck size={20} className={css({ color: 'positive.icon.base', marginTop: '2px', flexShrink: 0 })} />
              <div>
                <p className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.base' })}>2단계 인증</p>
                <p className={css({ fontSize: '13px', color: 'neutral.text.low' })}>계정 보안이 강화됩니다</p>
              </div>
            </div>
            <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' })}>
              {/* 토글 — 켜진 상태 */}
              <div
                className={css({
                  width: '44px',
                  height: '24px',
                  borderRadius: '12px',
                  backgroundColor: 'primary.fill.base',
                  position: 'relative',
                  cursor: 'pointer',
                  flexShrink: 0,
                })}
              >
                <div
                  className={css({
                    position: 'absolute',
                    right: '2px',
                    top: '2px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'inverse.text.base',
                  })}
                />
              </div>
              <span
                className={css({
                  padding: '2px 8px',
                  borderRadius: '20px',
                  border: '1px solid',
                  borderColor: 'positive.border.base',
                  backgroundColor: 'positive.surface.base',
                  color: 'positive.text.base',
                  fontSize: '11px',
                  fontWeight: '600',
                })}
              >
                활성화됨
              </span>
            </div>
          </div>

          {/* 구분선 */}
          <hr className={css({ border: 'none', borderTop: '1px solid', borderColor: 'neutral.border.base' })} />

          {/* 활성 세션 */}
          <h4 className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.base' })}>활성 세션</h4>

          <div className={css({ display: 'flex', flexDirection: 'column', gap: '10px' })}>
            {/* 세션 1 — 현재 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'primary.border.base',
                backgroundColor: 'primary.surface.base',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
                <Monitor size={18} className={css({ color: 'primary.icon.base' })} />
                <div>
                  <p className={css({ fontSize: '13px', fontWeight: '600', color: 'neutral.text.base' })}>Chrome · macOS</p>
                  <p className={css({ fontSize: '12px', color: 'neutral.text.low' })}>현재 위치 · 방금 전</p>
                </div>
              </div>
              <span
                className={css({
                  padding: '4px 10px',
                  borderRadius: '20px',
                  backgroundColor: 'primary.fill.base',
                  color: 'inverse.text.base',
                  fontSize: '12px',
                  fontWeight: '600',
                })}
              >
                현재
              </span>
            </div>

            {/* 세션 2 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                backgroundColor: 'neutral.surface.base',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
                <Smartphone size={18} className={css({ color: 'neutral.icon.base' })} />
                <div>
                  <p className={css({ fontSize: '13px', fontWeight: '600', color: 'neutral.text.base' })}>Safari · iPhone</p>
                  <p className={css({ fontSize: '12px', color: 'neutral.text.low' })}>서울 · 2시간 전</p>
                </div>
              </div>
              <button
                className={css({
                  padding: '5px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'critical.border.base',
                  backgroundColor: 'transparent',
                  color: 'critical.text.base',
                  fontSize: '12px',
                  cursor: 'pointer',
                })}
              >
                종료
              </button>
            </div>

            {/* 세션 3 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                backgroundColor: 'neutral.surface.base',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
                <Smartphone size={18} className={css({ color: 'neutral.icon.base' })} />
                <div>
                  <p className={css({ fontSize: '13px', fontWeight: '600', color: 'neutral.text.base' })}>Firefox · Windows</p>
                  <p className={css({ fontSize: '12px', color: 'neutral.text.low' })}>부산 · 3일 전</p>
                </div>
              </div>
              <button
                className={css({
                  padding: '5px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'critical.border.base',
                  backgroundColor: 'transparent',
                  color: 'critical.text.base',
                  fontSize: '12px',
                  cursor: 'pointer',
                })}
              >
                종료
              </button>
            </div>
          </div>

          <button
            className={css({
              alignSelf: 'flex-start',
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid',
              borderColor: 'critical.border.base',
              backgroundColor: 'transparent',
              color: 'critical.text.base',
              fontSize: '13px',
              cursor: 'pointer',
            })}
          >
            모든 다른 세션 종료
          </button>
        </div>

        {/* 카드 5: 알림 설정 */}
        <div
          className={css({
            backgroundColor: 'neutral.surface.base',
            borderRadius: '10px',
            border: '1px solid',
            borderColor: 'neutral.border.base',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          })}
        >
          <h3 className={css({ fontSize: '16px', fontWeight: '700', color: 'neutral.text.base' })}>
            이메일 알림
          </h3>

          {/* Warning 배너 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'warning.border.base',
              backgroundColor: 'warning.surface.base',
            })}
          >
            <AlertTriangle size={16} className={css({ color: 'warning.icon.base', flexShrink: 0 })} />
            <p className={css({ fontSize: '13px', color: 'warning.text.base' })}>
              일부 알림을 끄면 중요 서비스 공지를 놓칠 수 있습니다.
            </p>
          </div>

          {/* 알림 항목 목록 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '14px' })}>
            {/* 1. 시스템 알림 — 체크됨 + 비활성화 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px', opacity: 0.38 })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'primary.fill.base',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                  cursor: 'not-allowed',
                })}
              >
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4L4 7.5L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.base' })}>시스템 알림</p>
                <p className={css({ fontSize: '12px', color: 'neutral.text.low' })}>서비스 이용에 필요한 필수 공지</p>
              </div>
            </div>

            {/* 2. 결제 알림 — 체크됨 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'primary.fill.base',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                  cursor: 'pointer',
                })}
              >
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4L4 7.5L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.base' })}>결제 알림</p>
                <p className={css({ fontSize: '12px', color: 'neutral.text.low' })}>영수증 및 결제 관련 안내</p>
              </div>
            </div>

            {/* 3. 배포 알림 — 체크됨 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'primary.fill.base',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                  cursor: 'pointer',
                })}
              >
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4L4 7.5L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.base' })}>배포 알림</p>
                <p className={css({ fontSize: '12px', color: 'neutral.text.low' })}>배포 완료 및 실패 알림</p>
              </div>
            </div>

            {/* 4. 보안 알림 — 체크됨 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'primary.fill.base',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                  cursor: 'pointer',
                })}
              >
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4L4 7.5L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.base' })}>보안 알림</p>
                <p className={css({ fontSize: '12px', color: 'neutral.text.low' })}>로그인 및 보안 이벤트</p>
              </div>
            </div>

            {/* 5. 마케팅 알림 — 체크 안됨 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  border: '1px solid',
                  borderColor: 'neutral.border.base',
                  backgroundColor: 'neutral.surface.base',
                  flexShrink: 0,
                  marginTop: '2px',
                  cursor: 'pointer',
                })}
              />
              <div>
                <p className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.base' })}>마케팅 알림</p>
                <p className={css({ fontSize: '12px', color: 'neutral.text.low' })}>제품 업데이트 및 프로모션</p>
              </div>
            </div>

            {/* 6. 뉴스레터 — 체크 안됨 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  border: '1px solid',
                  borderColor: 'neutral.border.base',
                  backgroundColor: 'neutral.surface.base',
                  flexShrink: 0,
                  marginTop: '2px',
                  cursor: 'pointer',
                })}
              />
              <div>
                <p className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.base' })}>뉴스레터</p>
                <p className={css({ fontSize: '12px', color: 'neutral.text.low' })}>월간 뉴스레터</p>
              </div>
            </div>
          </div>

          <button
            className={css({
              alignSelf: 'flex-start',
              padding: '8px 18px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'primary.fill.base',
              color: 'inverse.text.base',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
            })}
          >
            저장
          </button>
        </div>

        {/* 카드 6: 위험 구역 */}
        <div
          className={css({
            borderRadius: '10px',
            border: '1px solid',
            borderColor: 'critical.border.base',
            backgroundColor: 'critical.surface.base',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          })}
        >
          {/* 헤더 */}
          <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
            <AlertTriangle size={20} className={css({ color: 'critical.icon.base' })} />
            <h3 className={css({ fontSize: '16px', fontWeight: '700', color: 'critical.text.base' })}>
              위험 구역
            </h3>
          </div>

          {/* 액션 1: 계정 비활성화 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              paddingTop: '8px',
            })}
          >
            <div>
              <p className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.base' })}>계정 비활성화</p>
              <p className={css({ fontSize: '13px', color: 'neutral.text.low', marginTop: '4px' })}>
                계정을 일시적으로 비활성화합니다. 언제든 재활성화할 수 있습니다.
              </p>
            </div>
            <button
              className={css({
                flexShrink: 0,
                padding: '7px 14px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'critical.border.base',
                backgroundColor: 'transparent',
                color: 'critical.text.base',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
              })}
            >
              비활성화
            </button>
          </div>

          {/* 구분선 */}
          <hr className={css({ border: 'none', borderTop: '1px solid', borderColor: 'critical.border.base' })} />

          {/* 액션 2: 계정 영구 삭제 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
            })}
          >
            <div>
              <p className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.base' })}>계정 영구 삭제</p>
              <p className={css({ fontSize: '13px', color: 'neutral.text.low', marginTop: '4px' })}>
                계정과 모든 데이터가 영구 삭제됩니다. 되돌릴 수 없습니다.
              </p>
            </div>
            <button
              className={css({
                flexShrink: 0,
                padding: '7px 14px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'critical.fill.base',
                color: 'inverse.text.base',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
              })}
            >
              영구 삭제
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
