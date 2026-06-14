import { css } from '@ds-token-test/styled-system-property-first/css';
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
  ChevronRight,
} from 'lucide-react';

export default function SettingsPage() {
  return (
    <div
      className={css({
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
      })}
    >
      {/* Left Sidebar */}
      <aside
        className={css({
          width: '200px',
          flexShrink: 0,
          backgroundColor: 'surface.neutral.subtle',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 12px',
          gap: '8px',
          overflowY: 'auto',
        })}
      >
        {/* Back link */}
        <a
          href="#"
          className={css({
            display: 'block',
            fontSize: '13px',
            color: 'text.neutral.muted',
            marginBottom: '8px',
            textDecoration: 'none',
            paddingLeft: '4px',
          })}
        >
          ← 대시보드
        </a>

        {/* Title */}
        <p
          className={css({
            fontSize: '16px',
            fontWeight: 700,
            color: 'text.neutral.default',
            marginBottom: '8px',
            paddingLeft: '4px',
          })}
        >
          설정
        </p>

        {/* Active menu item: 프로필 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 10px',
            borderRadius: '8px',
            backgroundColor: 'surface.brand.subtle',
            color: 'text.brand.default',
            cursor: 'pointer',
          })}
        >
          <User
            size={16}
            className={css({ color: 'icon.brand.default' })}
          />
          <span className={css({ fontSize: '14px', fontWeight: 500 })}>프로필</span>
        </div>

        {/* Inactive menu items */}
        {[
          { label: '구독 플랜', icon: <CreditCard size={16} /> },
          { label: '보안', icon: <ShieldCheck size={16} /> },
          { label: '알림', icon: <Bell size={16} /> },
        ].map((item) => (
          <div
            key={item.label}
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 10px',
              borderRadius: '8px',
              color: 'text.neutral.muted',
              cursor: 'pointer',
            })}
          >
            <span className={css({ color: 'icon.neutral.muted' })}>{item.icon}</span>
            <span className={css({ fontSize: '14px' })}>{item.label}</span>
          </div>
        ))}

        {/* Danger zone menu item */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 10px',
            borderRadius: '8px',
            color: 'text.critical.default',
            cursor: 'pointer',
          })}
        >
          <AlertTriangle
            size={16}
            className={css({ color: 'icon.critical.default' })}
          />
          <span className={css({ fontSize: '14px' })}>위험 구역</span>
        </div>
      </aside>

      {/* Right Content Area */}
      <main
        className={css({
          flex: 1,
          backgroundColor: 'surface.neutral.subtle',
          overflowY: 'auto',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        })}
      >
        {/* Breadcrumb */}
        <nav
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
          })}
        >
          <a
            href="#"
            className={css({
              color: 'text.neutral.muted',
              textDecoration: 'none',
              _hover: { color: 'text.brand.default' },
            })}
          >
            홈
          </a>
          <span className={css({ color: 'text.neutral.muted' })}>/</span>
          <a
            href="#"
            className={css({
              color: 'text.neutral.muted',
              textDecoration: 'none',
              _hover: { color: 'text.brand.default' },
            })}
          >
            설정
          </a>
          <span className={css({ color: 'text.neutral.muted' })}>/</span>
          <span className={css({ color: 'text.neutral.default', fontWeight: 500 })}>프로필</span>
        </nav>

        {/* Card 1: 프로필 정보 */}
        <div
          className={css({
            backgroundColor: 'surface.neutral.ghost',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid',
            borderColor: 'border.neutral.subtle',
          })}
        >
          <h2
            className={css({
              fontSize: '18px',
              fontWeight: 700,
              color: 'text.neutral.default',
              marginBottom: '20px',
            })}
          >
            프로필 정보
          </h2>

          {/* Avatar */}
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
            })}
          >
            <div
              className={css({
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'fill.brand',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                fontWeight: 700,
                color: 'text.inverse',
              })}
            >
              K
            </div>
            <div className={css({ display: 'flex', gap: '8px' })}>
              <button
                className={css({
                  padding: '6px 14px',
                  fontSize: '13px',
                  border: '1px solid',
                  borderColor: 'border.neutral.default',
                  borderRadius: '6px',
                  backgroundColor: 'surface.neutral.ghost',
                  color: 'text.neutral.default',
                  cursor: 'pointer',
                })}
              >
                사진 변경
              </button>
              <button
                className={css({
                  padding: '6px 14px',
                  fontSize: '13px',
                  border: 'none',
                  borderRadius: '6px',
                  backgroundColor: 'transparent',
                  color: 'text.neutral.muted',
                  cursor: 'pointer',
                })}
              >
                삭제
              </button>
            </div>
          </div>

          {/* Input grid */}
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
              <label className={css({ fontSize: '13px', fontWeight: 500, color: 'text.neutral.default' })}>이름</label>
              <input
                type="text"
                placeholder="홍길동"
                className={css({
                  padding: '8px 12px',
                  border: '1px solid',
                  borderColor: 'border.neutral.default',
                  borderRadius: '6px',
                  backgroundColor: 'surface.neutral.ghost',
                  color: 'text.neutral.default',
                  fontSize: '14px',
                  outline: 'none',
                  '&::placeholder': { color: 'text.neutral.muted' },
                })}
              />
            </div>

            {/* 이메일 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label className={css({ fontSize: '13px', fontWeight: 500, color: 'text.neutral.default' })}>이메일</label>
              <input
                type="email"
                placeholder="example@email.com"
                className={css({
                  padding: '8px 12px',
                  border: '1px solid',
                  borderColor: 'border.neutral.default',
                  borderRadius: '6px',
                  backgroundColor: 'surface.neutral.ghost',
                  color: 'text.neutral.default',
                  fontSize: '14px',
                  outline: 'none',
                  '&::placeholder': { color: 'text.neutral.muted' },
                })}
              />
            </div>

            {/* 전화번호 - disabled */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label className={css({ fontSize: '13px', fontWeight: 500, color: 'text.neutral.muted' })}>전화번호</label>
              <input
                type="tel"
                disabled
                defaultValue="010-0000-0000"
                className={css({
                  padding: '8px 12px',
                  border: '1px solid',
                  borderColor: 'border.neutral.subtle',
                  borderRadius: '6px',
                  backgroundColor: 'surface.neutral.muted',
                  color: 'text.neutral.muted',
                  fontSize: '14px',
                  outline: 'none',
                  cursor: 'not-allowed',
                })}
              />
            </div>

            {/* 부서 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label className={css({ fontSize: '13px', fontWeight: 500, color: 'text.neutral.default' })}>부서</label>
              <input
                type="text"
                placeholder="개발팀"
                className={css({
                  padding: '8px 12px',
                  border: '1px solid',
                  borderColor: 'border.neutral.default',
                  borderRadius: '6px',
                  backgroundColor: 'surface.neutral.ghost',
                  color: 'text.neutral.default',
                  fontSize: '14px',
                  outline: 'none',
                  '&::placeholder': { color: 'text.neutral.muted' },
                })}
              />
            </div>
          </div>

          {/* 소개 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' })}>
            <label className={css({ fontSize: '13px', fontWeight: 500, color: 'text.neutral.default' })}>소개</label>
            <textarea
              rows={4}
              placeholder="자기소개를 입력하세요"
              className={css({
                padding: '8px 12px',
                border: '1px solid',
                borderColor: 'border.neutral.default',
                borderRadius: '6px',
                backgroundColor: 'surface.neutral.ghost',
                color: 'text.neutral.default',
                fontSize: '14px',
                outline: 'none',
                resize: 'vertical',
                '&::placeholder': { color: 'text.neutral.muted' },
              })}
            />
            <span className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>최대 200자</span>
          </div>

          {/* Divider */}
          <div className={css({ height: '1px', backgroundColor: 'border.neutral.subtle', marginBottom: '20px' })} />

          {/* Buttons */}
          <div className={css({ display: 'flex', gap: '10px' })}>
            <button
              className={css({
                padding: '8px 18px',
                fontSize: '14px',
                fontWeight: 600,
                border: 'none',
                borderRadius: '8px',
                backgroundColor: 'fill.brand',
                color: 'text.inverse',
                cursor: 'pointer',
              })}
            >
              변경사항 저장
            </button>
            <button
              className={css({
                padding: '8px 18px',
                fontSize: '14px',
                border: 'none',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                color: 'text.neutral.muted',
                cursor: 'pointer',
              })}
            >
              취소
            </button>
          </div>
        </div>

        {/* Card 2: 구독 플랜 */}
        <div
          className={css({
            backgroundColor: 'surface.neutral.ghost',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid',
            borderColor: 'border.neutral.subtle',
          })}
        >
          <h2
            className={css({
              fontSize: '18px',
              fontWeight: 700,
              color: 'text.neutral.default',
              marginBottom: '20px',
            })}
          >
            구독 플랜
          </h2>

          {/* Current plan box */}
          <div
            className={css({
              backgroundColor: 'surface.brand.subtle',
              border: '1px solid',
              borderColor: 'border.brand.subtle',
              borderRadius: '10px',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px',
            })}
          >
            <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
              <Zap size={20} className={css({ color: 'icon.brand.default' })} />
              <div>
                <p className={css({ fontSize: '16px', fontWeight: 700, color: 'text.brand.default' })}>Pro</p>
                <p className={css({ fontSize: '13px', color: 'text.neutral.muted' })}>2025년 9월 1일 갱신</p>
              </div>
            </div>
            <span
              className={css({
                padding: '4px 10px',
                borderRadius: '999px',
                backgroundColor: 'fill.brand',
                color: 'text.inverse',
                fontSize: '12px',
                fontWeight: 600,
              })}
            >
              현재 플랜
            </span>
          </div>

          {/* Info banner */}
          <div
            className={css({
              backgroundColor: 'surface.info.subtle',
              border: '1px solid',
              borderColor: 'border.info.subtle',
              borderRadius: '8px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px',
            })}
          >
            <Info size={16} className={css({ color: 'icon.info.default', flexShrink: 0 })} />
            <p className={css({ fontSize: '13px', color: 'text.info.default' })}>
              결제일이 7일 후입니다. 카드 정보를 확인해 주세요.
            </p>
          </div>

          {/* Buttons */}
          <div className={css({ display: 'flex', gap: '10px' })}>
            <button
              className={css({
                padding: '8px 18px',
                fontSize: '14px',
                fontWeight: 600,
                border: 'none',
                borderRadius: '8px',
                backgroundColor: 'fill.brand',
                color: 'text.inverse',
                cursor: 'pointer',
              })}
            >
              Enterprise로 업그레이드
            </button>
            <button
              className={css({
                padding: '8px 18px',
                fontSize: '14px',
                border: '1px solid',
                borderColor: 'border.neutral.default',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                color: 'text.neutral.default',
                cursor: 'pointer',
              })}
            >
              플랜 비교 보기
            </button>
          </div>
        </div>

        {/* Card 3: 비밀번호 변경 */}
        <div
          className={css({
            backgroundColor: 'surface.neutral.ghost',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid',
            borderColor: 'border.neutral.subtle',
          })}
        >
          <h2
            className={css({
              fontSize: '18px',
              fontWeight: 700,
              color: 'text.neutral.default',
              marginBottom: '20px',
            })}
          >
            비밀번호 변경
          </h2>

          <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' })}>
            {/* 1. 현재 비밀번호 - default */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label className={css({ fontSize: '13px', fontWeight: 500, color: 'text.neutral.default' })}>현재 비밀번호</label>
              <input
                type="password"
                placeholder="현재 비밀번호"
                className={css({
                  padding: '8px 12px',
                  border: '1px solid',
                  borderColor: 'border.neutral.default',
                  borderRadius: '6px',
                  backgroundColor: 'surface.neutral.ghost',
                  color: 'text.neutral.default',
                  fontSize: '14px',
                  outline: 'none',
                  '&::placeholder': { color: 'text.neutral.muted' },
                })}
              />
            </div>

            {/* 2. 새 비밀번호 - focused */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label className={css({ fontSize: '13px', fontWeight: 500, color: 'text.neutral.default' })}>새 비밀번호</label>
              <input
                type="password"
                placeholder="새 비밀번호 입력"
                className={css({
                  padding: '8px 12px',
                  border: '2px solid',
                  borderColor: 'border.brand.default',
                  borderRadius: '6px',
                  backgroundColor: 'surface.neutral.ghost',
                  color: 'text.neutral.default',
                  fontSize: '14px',
                  outline: '2px solid',
                  outlineColor: 'focusRing.default',
                  outlineOffset: '1px',
                  '&::placeholder': { color: 'text.neutral.muted' },
                })}
              />
            </div>

            {/* 3. 비밀번호 확인 - error */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label className={css({ fontSize: '13px', fontWeight: 500, color: 'text.neutral.default' })}>비밀번호 확인</label>
              <input
                type="password"
                defaultValue="abc"
                className={css({
                  padding: '8px 12px',
                  border: '1px solid',
                  borderColor: 'border.critical.default',
                  borderRadius: '6px',
                  backgroundColor: 'surface.critical.subtle',
                  color: 'text.neutral.default',
                  fontSize: '14px',
                  outline: 'none',
                })}
              />
              <div className={css({ display: 'flex', alignItems: 'center', gap: '4px' })}>
                <XCircle size={14} className={css({ color: 'icon.critical.default' })} />
                <span className={css({ fontSize: '12px', color: 'text.critical.default' })}>비밀번호가 일치하지 않습니다.</span>
              </div>
            </div>

            {/* 4. 새 이메일 - success */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label className={css({ fontSize: '13px', fontWeight: 500, color: 'text.neutral.default' })}>새 이메일 (선택)</label>
              <input
                type="email"
                defaultValue="user@example.com"
                className={css({
                  padding: '8px 12px',
                  border: '1px solid',
                  borderColor: 'border.positive.default',
                  borderRadius: '6px',
                  backgroundColor: 'surface.positive.subtle',
                  color: 'text.neutral.default',
                  fontSize: '14px',
                  outline: 'none',
                })}
              />
              <div className={css({ display: 'flex', alignItems: 'center', gap: '4px' })}>
                <CheckCircle2 size={14} className={css({ color: 'icon.positive.default' })} />
                <span className={css({ fontSize: '12px', color: 'text.positive.default' })}>사용 가능한 이메일입니다.</span>
              </div>
            </div>

            {/* 5. 사용자 ID - disabled */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label className={css({ fontSize: '13px', fontWeight: 500, color: 'text.neutral.muted' })}>사용자 ID</label>
              <input
                type="text"
                disabled
                defaultValue="user_12847"
                className={css({
                  padding: '8px 12px',
                  border: '1px solid',
                  borderColor: 'border.neutral.subtle',
                  borderRadius: '6px',
                  backgroundColor: 'surface.neutral.muted',
                  color: 'text.neutral.muted',
                  fontSize: '14px',
                  outline: 'none',
                  cursor: 'not-allowed',
                })}
              />
              <span className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>변경 불가</span>
            </div>
          </div>

          {/* Save button */}
          <button
            className={css({
              padding: '8px 18px',
              fontSize: '14px',
              fontWeight: 600,
              border: 'none',
              borderRadius: '8px',
              backgroundColor: 'fill.brand',
              color: 'text.inverse',
              cursor: 'pointer',
            })}
          >
            저장
          </button>
        </div>

        {/* Card 4: 보안 설정 */}
        <div
          className={css({
            backgroundColor: 'surface.neutral.ghost',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid',
            borderColor: 'border.neutral.subtle',
          })}
        >
          <h2
            className={css({
              fontSize: '18px',
              fontWeight: 700,
              color: 'text.neutral.default',
              marginBottom: '20px',
            })}
          >
            보안 설정
          </h2>

          {/* 2FA Toggle row */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px',
            })}
          >
            <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
              <ShieldCheck size={20} className={css({ color: 'icon.positive.default' })} />
              <div>
                <p className={css({ fontSize: '15px', fontWeight: 600, color: 'text.neutral.default' })}>2단계 인증</p>
                <p className={css({ fontSize: '13px', color: 'text.neutral.muted' })}>계정 보안이 강화됩니다</p>
              </div>
            </div>
            <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' })}>
              {/* Toggle ON */}
              <div
                className={css({
                  width: '44px',
                  height: '24px',
                  borderRadius: '999px',
                  backgroundColor: 'fill.brand',
                  position: 'relative',
                  cursor: 'pointer',
                })}
              >
                <div
                  className={css({
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'text.inverse',
                  })}
                />
              </div>
              {/* 활성화됨 badge */}
              <span
                className={css({
                  padding: '2px 8px',
                  borderRadius: '999px',
                  backgroundColor: 'surface.positive.subtle',
                  border: '1px solid',
                  borderColor: 'border.positive.subtle',
                  color: 'text.positive.default',
                  fontSize: '11px',
                  fontWeight: 600,
                })}
              >
                활성화됨
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className={css({ height: '1px', backgroundColor: 'border.neutral.subtle', margin: '20px 0' })} />

          {/* Active sessions */}
          <h3 className={css({ fontSize: '15px', fontWeight: 600, color: 'text.neutral.default', marginBottom: '12px' })}>
            활성 세션
          </h3>

          <div className={css({ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' })}>
            {/* Session 1 - current */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px',
                borderRadius: '8px',
                backgroundColor: 'surface.brand.subtle',
                border: '1px solid',
                borderColor: 'border.brand.subtle',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                <Monitor size={18} className={css({ color: 'icon.brand.default' })} />
                <div>
                  <p className={css({ fontSize: '14px', fontWeight: 500, color: 'text.neutral.default' })}>Chrome · macOS</p>
                  <p className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>현재 위치 · 방금 전</p>
                </div>
              </div>
              <span
                className={css({
                  padding: '3px 10px',
                  borderRadius: '999px',
                  backgroundColor: 'fill.brand',
                  color: 'text.inverse',
                  fontSize: '12px',
                  fontWeight: 600,
                })}
              >
                현재
              </span>
            </div>

            {/* Session 2 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px',
                borderRadius: '8px',
                backgroundColor: 'surface.neutral.muted',
                border: '1px solid',
                borderColor: 'border.neutral.default',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                <Smartphone size={18} className={css({ color: 'icon.neutral.default' })} />
                <div>
                  <p className={css({ fontSize: '14px', fontWeight: 500, color: 'text.neutral.default' })}>Safari · iPhone</p>
                  <p className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>서울 · 2시간 전</p>
                </div>
              </div>
              <button
                className={css({
                  padding: '5px 12px',
                  fontSize: '13px',
                  border: '1px solid',
                  borderColor: 'border.critical.default',
                  borderRadius: '6px',
                  backgroundColor: 'transparent',
                  color: 'text.critical.default',
                  cursor: 'pointer',
                })}
              >
                종료
              </button>
            </div>

            {/* Session 3 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px',
                borderRadius: '8px',
                backgroundColor: 'surface.neutral.muted',
                border: '1px solid',
                borderColor: 'border.neutral.default',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                <Smartphone size={18} className={css({ color: 'icon.neutral.default' })} />
                <div>
                  <p className={css({ fontSize: '14px', fontWeight: 500, color: 'text.neutral.default' })}>Firefox · Windows</p>
                  <p className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>부산 · 3일 전</p>
                </div>
              </div>
              <button
                className={css({
                  padding: '5px 12px',
                  fontSize: '13px',
                  border: '1px solid',
                  borderColor: 'border.critical.default',
                  borderRadius: '6px',
                  backgroundColor: 'transparent',
                  color: 'text.critical.default',
                  cursor: 'pointer',
                })}
              >
                종료
              </button>
            </div>
          </div>

          {/* End all sessions */}
          <button
            className={css({
              padding: '8px 18px',
              fontSize: '14px',
              border: '1px solid',
              borderColor: 'border.critical.default',
              borderRadius: '8px',
              backgroundColor: 'transparent',
              color: 'text.critical.default',
              cursor: 'pointer',
            })}
          >
            모든 다른 세션 종료
          </button>
        </div>

        {/* Card 5: 알림 설정 */}
        <div
          className={css({
            backgroundColor: 'surface.neutral.ghost',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid',
            borderColor: 'border.neutral.subtle',
          })}
        >
          <h2
            className={css({
              fontSize: '18px',
              fontWeight: 700,
              color: 'text.neutral.default',
              marginBottom: '16px',
            })}
          >
            이메일 알림
          </h2>

          {/* Warning banner */}
          <div
            className={css({
              backgroundColor: 'surface.warning.subtle',
              border: '1px solid',
              borderColor: 'border.warning.subtle',
              borderRadius: '8px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px',
            })}
          >
            <AlertTriangle size={16} className={css({ color: 'icon.warning.default', flexShrink: 0 })} />
            <p className={css({ fontSize: '13px', color: 'text.warning.default' })}>
              일부 알림을 끄면 중요 서비스 공지를 놓칠 수 있습니다.
            </p>
          </div>

          {/* Notification items */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' })}>
            {/* 1. 시스템 알림 - checked + disabled */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'surface.neutral.muted',
                  border: '1px solid',
                  borderColor: 'border.neutral.subtle',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                  opacity: 0.5,
                })}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className={css({ fontSize: '14px', fontWeight: 500, color: 'text.neutral.muted' })}>시스템 알림</p>
                <p className={css({ fontSize: '12px', color: 'text.neutral.subtle' })}>서비스 이용에 필요한 필수 공지</p>
              </div>
            </div>

            {/* 2. 결제 알림 - checked */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'fill.brand',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                })}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className={css({ fontSize: '14px', fontWeight: 500, color: 'text.neutral.default' })}>결제 알림</p>
                <p className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>영수증 및 결제 관련 안내</p>
              </div>
            </div>

            {/* 3. 배포 알림 - checked */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'fill.brand',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                })}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className={css({ fontSize: '14px', fontWeight: 500, color: 'text.neutral.default' })}>배포 알림</p>
                <p className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>배포 완료 및 실패 알림</p>
              </div>
            </div>

            {/* 4. 보안 알림 - checked */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'fill.brand',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                })}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className={css({ fontSize: '14px', fontWeight: 500, color: 'text.neutral.default' })}>보안 알림</p>
                <p className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>로그인 및 보안 이벤트</p>
              </div>
            </div>

            {/* 5. 마케팅 알림 - unchecked */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'surface.neutral.ghost',
                  border: '1px solid',
                  borderColor: 'border.neutral.default',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                })}
              />
              <div>
                <p className={css({ fontSize: '14px', fontWeight: 500, color: 'text.neutral.default' })}>마케팅 알림</p>
                <p className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>제품 업데이트 및 프로모션</p>
              </div>
            </div>

            {/* 6. 뉴스레터 - unchecked */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'surface.neutral.ghost',
                  border: '1px solid',
                  borderColor: 'border.neutral.default',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                })}
              />
              <div>
                <p className={css({ fontSize: '14px', fontWeight: 500, color: 'text.neutral.default' })}>뉴스레터</p>
                <p className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>월간 뉴스레터</p>
              </div>
            </div>
          </div>

          {/* Save button */}
          <button
            className={css({
              padding: '8px 18px',
              fontSize: '14px',
              fontWeight: 600,
              border: 'none',
              borderRadius: '8px',
              backgroundColor: 'fill.brand',
              color: 'text.inverse',
              cursor: 'pointer',
            })}
          >
            저장
          </button>
        </div>

        {/* Card 6: 위험 구역 */}
        <div
          className={css({
            backgroundColor: 'surface.critical.subtle',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid',
            borderColor: 'border.critical.subtle',
          })}
        >
          {/* Card header */}
          <div className={css({ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' })}>
            <AlertTriangle size={20} className={css({ color: 'icon.critical.default' })} />
            <h2 className={css({ fontSize: '18px', fontWeight: 700, color: 'text.critical.default' })}>위험 구역</h2>
          </div>

          {/* Action 1 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '20px',
              borderBottom: '1px solid',
              borderColor: 'border.critical.subtle',
              marginBottom: '20px',
            })}
          >
            <div>
              <p className={css({ fontSize: '15px', fontWeight: 600, color: 'text.neutral.default' })}>계정 비활성화</p>
              <p className={css({ fontSize: '13px', color: 'text.neutral.muted' })}>
                계정을 일시적으로 비활성화합니다. 언제든 재활성화할 수 있습니다.
              </p>
            </div>
            <button
              className={css({
                padding: '8px 16px',
                fontSize: '14px',
                border: '1px solid',
                borderColor: 'border.critical.default',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                color: 'text.critical.default',
                cursor: 'pointer',
                flexShrink: 0,
                marginLeft: '16px',
              })}
            >
              비활성화
            </button>
          </div>

          {/* Action 2 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            })}
          >
            <div>
              <p className={css({ fontSize: '15px', fontWeight: 600, color: 'text.neutral.default' })}>계정 영구 삭제</p>
              <p className={css({ fontSize: '13px', color: 'text.neutral.muted' })}>
                계정과 모든 데이터가 영구 삭제됩니다. 되돌릴 수 없습니다.
              </p>
            </div>
            <button
              className={css({
                padding: '8px 16px',
                fontSize: '14px',
                border: 'none',
                borderRadius: '8px',
                backgroundColor: 'fill.critical',
                color: 'text.inverse',
                cursor: 'pointer',
                flexShrink: 0,
                marginLeft: '16px',
                fontWeight: 600,
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
