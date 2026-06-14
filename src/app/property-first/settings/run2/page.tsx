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
            textDecoration: 'none',
            marginBottom: '12px',
            paddingLeft: '8px',
          })}
        >
          ← 대시보드
        </a>

        {/* Title */}
        <h2
          className={css({
            fontSize: '16px',
            fontWeight: '700',
            color: 'text.neutral.default',
            paddingLeft: '8px',
            marginBottom: '8px',
          })}
        >
          설정
        </h2>

        {/* Active: 프로필 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px',
            borderRadius: '6px',
            backgroundColor: 'surface.brand.muted',
            cursor: 'pointer',
          })}
        >
          <User
            size={16}
            className={css({ color: 'icon.brand.default' })}
          />
          <span
            className={css({
              fontSize: '14px',
              color: 'text.brand.default',
              fontWeight: '600',
            })}
          >
            프로필
          </span>
        </div>

        {/* 구독 플랜 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px',
            borderRadius: '6px',
            cursor: 'pointer',
          })}
        >
          <CreditCard
            size={16}
            className={css({ color: 'icon.neutral.muted' })}
          />
          <span
            className={css({
              fontSize: '14px',
              color: 'text.neutral.muted',
            })}
          >
            구독 플랜
          </span>
        </div>

        {/* 보안 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px',
            borderRadius: '6px',
            cursor: 'pointer',
          })}
        >
          <ShieldCheck
            size={16}
            className={css({ color: 'icon.neutral.muted' })}
          />
          <span
            className={css({
              fontSize: '14px',
              color: 'text.neutral.muted',
            })}
          >
            보안
          </span>
        </div>

        {/* 알림 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px',
            borderRadius: '6px',
            cursor: 'pointer',
          })}
        >
          <Bell
            size={16}
            className={css({ color: 'icon.neutral.muted' })}
          />
          <span
            className={css({
              fontSize: '14px',
              color: 'text.neutral.muted',
            })}
          >
            알림
          </span>
        </div>

        {/* 위험 구역 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px',
            borderRadius: '6px',
            cursor: 'pointer',
          })}
        >
          <AlertTriangle
            size={16}
            className={css({ color: 'icon.critical.default' })}
          />
          <span
            className={css({
              fontSize: '14px',
              color: 'text.critical.default',
            })}
          >
            위험 구역
          </span>
        </div>
      </aside>

      {/* Right Content */}
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
            fontSize: '14px',
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
          <span className={css({ color: 'text.neutral.default', fontWeight: '600' })}>
            프로필
          </span>
        </nav>

        {/* Card 1: 프로필 정보 */}
        <div
          className={css({
            backgroundColor: 'surface.neutral.ghost',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 4px token(colors.overlay.shadow.subtle)',
          })}
        >
          <h3
            className={css({
              fontSize: '18px',
              fontWeight: '700',
              color: 'text.neutral.default',
              marginBottom: '20px',
            })}
          >
            프로필 정보
          </h3>

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
                fontWeight: '700',
                color: 'text.inverse',
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
                  borderColor: 'border.neutral.default',
                  backgroundColor: 'surface.neutral.ghost',
                  color: 'text.neutral.default',
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
                  backgroundColor: 'surface.transparent',
                  color: 'text.neutral.muted',
                  fontSize: '13px',
                  cursor: 'pointer',
                })}
              >
                삭제
              </button>
            </div>
          </div>

          {/* Input Grid */}
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '16px',
            })}
          >
            {/* 이름 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.default' })}>
                이름
              </label>
              <input
                type="text"
                placeholder="이름 입력"
                className={css({
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.neutral.default',
                  backgroundColor: 'surface.neutral.ghost',
                  color: 'text.neutral.default',
                  fontSize: '14px',
                  _placeholder: { color: 'text.neutral.muted' },
                  outline: 'none',
                })}
              />
            </div>

            {/* 이메일 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.default' })}>
                이메일
              </label>
              <input
                type="email"
                placeholder="이메일 입력"
                className={css({
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.neutral.default',
                  backgroundColor: 'surface.neutral.ghost',
                  color: 'text.neutral.default',
                  fontSize: '14px',
                  _placeholder: { color: 'text.neutral.muted' },
                  outline: 'none',
                })}
              />
            </div>

            {/* 전화번호 — disabled */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.muted' })}>
                전화번호
              </label>
              <input
                type="tel"
                disabled
                placeholder="전화번호"
                className={css({
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.neutral.subtle',
                  backgroundColor: 'surface.neutral.muted',
                  color: 'text.neutral.muted',
                  fontSize: '14px',
                  cursor: 'not-allowed',
                  outline: 'none',
                })}
              />
            </div>

            {/* 부서 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.default' })}>
                부서
              </label>
              <input
                type="text"
                placeholder="부서 입력"
                className={css({
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.neutral.default',
                  backgroundColor: 'surface.neutral.ghost',
                  color: 'text.neutral.default',
                  fontSize: '14px',
                  _placeholder: { color: 'text.neutral.muted' },
                  outline: 'none',
                })}
              />
            </div>
          </div>

          {/* 소개 textarea */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '24px' })}>
            <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.default' })}>
              소개
            </label>
            <textarea
              placeholder="소개를 입력하세요"
              rows={4}
              className={css({
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'border.neutral.default',
                backgroundColor: 'surface.neutral.ghost',
                color: 'text.neutral.default',
                fontSize: '14px',
                resize: 'vertical',
                _placeholder: { color: 'text.neutral.muted' },
                outline: 'none',
              })}
            />
            <span className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>최대 200자</span>
          </div>

          {/* Divider */}
          <div
            className={css({
              height: '1px',
              backgroundColor: 'border.neutral.subtle',
              marginBottom: '16px',
            })}
          />

          {/* Buttons */}
          <div className={css({ display: 'flex', gap: '8px' })}>
            <button
              className={css({
                padding: '9px 20px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'fill.brand',
                color: 'text.inverse',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
              })}
            >
              변경사항 저장
            </button>
            <button
              className={css({
                padding: '9px 20px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'surface.transparent',
                color: 'text.neutral.muted',
                fontSize: '14px',
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
            boxShadow: '0 1px 4px token(colors.overlay.shadow.subtle)',
          })}
        >
          <h3
            className={css({
              fontSize: '18px',
              fontWeight: '700',
              color: 'text.neutral.default',
              marginBottom: '20px',
            })}
          >
            구독 플랜
          </h3>

          {/* Current Plan Box */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: 'surface.brand.subtle',
              border: '1px solid',
              borderColor: 'border.brand.subtle',
              marginBottom: '12px',
            })}
          >
            <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
              <Zap size={20} className={css({ color: 'icon.brand.default' })} />
              <div>
                <div className={css({ fontSize: '16px', fontWeight: '700', color: 'text.brand.default' })}>
                  Pro
                </div>
                <div className={css({ fontSize: '13px', color: 'text.neutral.muted' })}>
                  2025년 9월 1일 갱신
                </div>
              </div>
            </div>
            <span
              className={css({
                padding: '4px 10px',
                borderRadius: '999px',
                backgroundColor: 'fill.brand',
                color: 'text.inverse',
                fontSize: '12px',
                fontWeight: '600',
              })}
            >
              현재 플랜
            </span>
          </div>

          {/* Info Banner */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 16px',
              borderRadius: '8px',
              backgroundColor: 'surface.info.subtle',
              border: '1px solid',
              borderColor: 'border.info.subtle',
              marginBottom: '20px',
            })}
          >
            <Info size={16} className={css({ color: 'icon.info.default', flexShrink: 0 })} />
            <span className={css({ fontSize: '14px', color: 'text.info.default' })}>
              결제일이 7일 후입니다. 카드 정보를 확인해 주세요.
            </span>
          </div>

          {/* Buttons */}
          <div className={css({ display: 'flex', gap: '8px' })}>
            <button
              className={css({
                padding: '9px 20px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'fill.brand',
                color: 'text.inverse',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
              })}
            >
              Enterprise로 업그레이드
            </button>
            <button
              className={css({
                padding: '9px 20px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'border.neutral.default',
                backgroundColor: 'surface.transparent',
                color: 'text.neutral.default',
                fontSize: '14px',
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
            boxShadow: '0 1px 4px token(colors.overlay.shadow.subtle)',
          })}
        >
          <h3
            className={css({
              fontSize: '18px',
              fontWeight: '700',
              color: 'text.neutral.default',
              marginBottom: '20px',
            })}
          >
            비밀번호 변경
          </h3>

          <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' })}>
            {/* 1. 현재 비밀번호 — default */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.default' })}>
                현재 비밀번호
              </label>
              <input
                type="password"
                placeholder="현재 비밀번호"
                className={css({
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.neutral.default',
                  backgroundColor: 'surface.neutral.ghost',
                  color: 'text.neutral.default',
                  fontSize: '14px',
                  outline: 'none',
                })}
              />
            </div>

            {/* 2. 새 비밀번호 — focused */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.default' })}>
                새 비밀번호
              </label>
              <input
                type="password"
                placeholder="새 비밀번호 입력"
                className={css({
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '2px solid',
                  borderColor: 'border.brand.default',
                  backgroundColor: 'surface.neutral.ghost',
                  color: 'text.neutral.default',
                  fontSize: '14px',
                  outline: '2px solid',
                  outlineColor: 'focusRing.default',
                  outlineOffset: '1px',
                  _placeholder: { color: 'text.neutral.muted' },
                })}
              />
            </div>

            {/* 3. 비밀번호 확인 — error */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.default' })}>
                비밀번호 확인
              </label>
              <input
                type="password"
                defaultValue="abc"
                className={css({
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.critical.default',
                  backgroundColor: 'surface.critical.subtle',
                  color: 'text.neutral.default',
                  fontSize: '14px',
                  outline: 'none',
                })}
              />
              <div className={css({ display: 'flex', alignItems: 'center', gap: '4px' })}>
                <XCircle size={14} className={css({ color: 'icon.critical.default' })} />
                <span className={css({ fontSize: '12px', color: 'text.critical.default' })}>
                  비밀번호가 일치하지 않습니다.
                </span>
              </div>
            </div>

            {/* 4. 새 이메일 — success */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.default' })}>
                새 이메일 (선택)
              </label>
              <input
                type="email"
                defaultValue="user@example.com"
                className={css({
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.positive.default',
                  backgroundColor: 'surface.positive.subtle',
                  color: 'text.neutral.default',
                  fontSize: '14px',
                  outline: 'none',
                })}
              />
              <div className={css({ display: 'flex', alignItems: 'center', gap: '4px' })}>
                <CheckCircle2 size={14} className={css({ color: 'icon.positive.default' })} />
                <span className={css({ fontSize: '12px', color: 'text.positive.default' })}>
                  사용 가능한 이메일입니다.
                </span>
              </div>
            </div>

            {/* 5. 사용자 ID — disabled */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.muted' })}>
                사용자 ID
              </label>
              <input
                type="text"
                disabled
                defaultValue="user_12847"
                className={css({
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.neutral.subtle',
                  backgroundColor: 'surface.neutral.muted',
                  color: 'text.neutral.muted',
                  fontSize: '14px',
                  cursor: 'not-allowed',
                  outline: 'none',
                })}
              />
              <span className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>변경 불가</span>
            </div>
          </div>

          <button
            className={css({
              padding: '9px 20px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'fill.brand',
              color: 'text.inverse',
              fontSize: '14px',
              fontWeight: '600',
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
            boxShadow: '0 1px 4px token(colors.overlay.shadow.subtle)',
          })}
        >
          <h3
            className={css({
              fontSize: '18px',
              fontWeight: '700',
              color: 'text.neutral.default',
              marginBottom: '20px',
            })}
          >
            보안 설정
          </h3>

          {/* 2FA Toggle Row */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
            })}
          >
            <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
              <ShieldCheck size={20} className={css({ color: 'icon.positive.default' })} />
              <div>
                <div className={css({ fontSize: '15px', fontWeight: '600', color: 'text.neutral.default' })}>
                  2단계 인증
                </div>
                <div className={css({ fontSize: '13px', color: 'text.neutral.muted' })}>
                  계정 보안이 강화됩니다
                </div>
              </div>
            </div>
            <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' })}>
              {/* Toggle on */}
              <div
                className={css({
                  width: '44px',
                  height: '24px',
                  borderRadius: '999px',
                  backgroundColor: 'fill.brand',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  padding: '2px',
                  cursor: 'pointer',
                })}
              >
                <div
                  className={css({
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'text.inverse',
                  })}
                />
              </div>
              <span
                className={css({
                  padding: '2px 8px',
                  borderRadius: '999px',
                  backgroundColor: 'surface.positive.subtle',
                  border: '1px solid',
                  borderColor: 'border.positive.subtle',
                  color: 'text.positive.default',
                  fontSize: '11px',
                  fontWeight: '600',
                })}
              >
                활성화됨
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            className={css({
              height: '1px',
              backgroundColor: 'border.neutral.subtle',
              marginBottom: '20px',
            })}
          />

          {/* Active Sessions */}
          <h4
            className={css({
              fontSize: '15px',
              fontWeight: '600',
              color: 'text.neutral.default',
              marginBottom: '12px',
            })}
          >
            활성 세션
          </h4>

          <div className={css({ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' })}>
            {/* Session 1 — current */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: 'surface.brand.subtle',
                border: '1px solid',
                borderColor: 'border.brand.subtle',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                <Monitor size={18} className={css({ color: 'icon.brand.default' })} />
                <div>
                  <div className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.default' })}>
                    Chrome · macOS
                  </div>
                  <div className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>
                    현재 위치 · 방금 전
                  </div>
                </div>
              </div>
              <span
                className={css({
                  padding: '4px 10px',
                  borderRadius: '999px',
                  backgroundColor: 'fill.brand',
                  color: 'text.inverse',
                  fontSize: '12px',
                  fontWeight: '600',
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
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: 'surface.neutral.muted',
                border: '1px solid',
                borderColor: 'border.neutral.default',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                <Smartphone size={18} className={css({ color: 'icon.neutral.default' })} />
                <div>
                  <div className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.default' })}>
                    Safari · iPhone
                  </div>
                  <div className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>
                    서울 · 2시간 전
                  </div>
                </div>
              </div>
              <button
                className={css({
                  padding: '5px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.critical.default',
                  backgroundColor: 'surface.transparent',
                  color: 'text.critical.default',
                  fontSize: '13px',
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
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: 'surface.neutral.muted',
                border: '1px solid',
                borderColor: 'border.neutral.default',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                <Smartphone size={18} className={css({ color: 'icon.neutral.default' })} />
                <div>
                  <div className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.default' })}>
                    Firefox · Windows
                  </div>
                  <div className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>
                    부산 · 3일 전
                  </div>
                </div>
              </div>
              <button
                className={css({
                  padding: '5px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.critical.default',
                  backgroundColor: 'surface.transparent',
                  color: 'text.critical.default',
                  fontSize: '13px',
                  cursor: 'pointer',
                })}
              >
                종료
              </button>
            </div>
          </div>

          <button
            className={css({
              padding: '9px 20px',
              borderRadius: '6px',
              border: '1px solid',
              borderColor: 'border.critical.default',
              backgroundColor: 'surface.transparent',
              color: 'text.critical.default',
              fontSize: '14px',
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
            boxShadow: '0 1px 4px token(colors.overlay.shadow.subtle)',
          })}
        >
          <h3
            className={css({
              fontSize: '18px',
              fontWeight: '700',
              color: 'text.neutral.default',
              marginBottom: '16px',
            })}
          >
            이메일 알림
          </h3>

          {/* Warning Banner */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 16px',
              borderRadius: '8px',
              backgroundColor: 'surface.warning.subtle',
              border: '1px solid',
              borderColor: 'border.warning.subtle',
              marginBottom: '20px',
            })}
          >
            <AlertTriangle size={16} className={css({ color: 'icon.warning.default', flexShrink: 0 })} />
            <span className={css({ fontSize: '14px', color: 'text.warning.default' })}>
              일부 알림을 끄면 중요 서비스 공지를 놓칠 수 있습니다.
            </span>
          </div>

          {/* Notification Items */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' })}>
            {/* 1. 시스템 알림 — checked + disabled */}
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
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4.5L4 7.5L10 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={css({ color: 'text.neutral.default' })} />
                </svg>
              </div>
              <div>
                <div className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.muted' })}>
                  시스템 알림
                </div>
                <div className={css({ fontSize: '12px', color: 'text.neutral.subtle' })}>
                  서비스 이용에 필요한 필수 공지
                </div>
              </div>
            </div>

            {/* 2. 결제 알림 — checked */}
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
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4.5L4 7.5L10 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={css({ color: 'text.inverse' })} />
                </svg>
              </div>
              <div>
                <div className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.default' })}>
                  결제 알림
                </div>
                <div className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>
                  영수증 및 결제 관련 안내
                </div>
              </div>
            </div>

            {/* 3. 배포 알림 — checked */}
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
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4.5L4 7.5L10 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={css({ color: 'text.inverse' })} />
                </svg>
              </div>
              <div>
                <div className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.default' })}>
                  배포 알림
                </div>
                <div className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>
                  배포 완료 및 실패 알림
                </div>
              </div>
            </div>

            {/* 4. 보안 알림 — checked */}
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
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4.5L4 7.5L10 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={css({ color: 'text.inverse' })} />
                </svg>
              </div>
              <div>
                <div className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.default' })}>
                  보안 알림
                </div>
                <div className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>
                  로그인 및 보안 이벤트
                </div>
              </div>
            </div>

            {/* 5. 마케팅 알림 — unchecked */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  border: '1px solid',
                  borderColor: 'border.neutral.default',
                  backgroundColor: 'surface.neutral.ghost',
                  flexShrink: 0,
                  marginTop: '2px',
                })}
              />
              <div>
                <div className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.default' })}>
                  마케팅 알림
                </div>
                <div className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>
                  제품 업데이트 및 프로모션
                </div>
              </div>
            </div>

            {/* 6. 뉴스레터 — unchecked */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  border: '1px solid',
                  borderColor: 'border.neutral.default',
                  backgroundColor: 'surface.neutral.ghost',
                  flexShrink: 0,
                  marginTop: '2px',
                })}
              />
              <div>
                <div className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.default' })}>
                  뉴스레터
                </div>
                <div className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>
                  월간 뉴스레터
                </div>
              </div>
            </div>
          </div>

          <button
            className={css({
              padding: '9px 20px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'fill.brand',
              color: 'text.inverse',
              fontSize: '14px',
              fontWeight: '600',
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
          {/* Card Header */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px',
            })}
          >
            <AlertTriangle size={20} className={css({ color: 'icon.critical.default' })} />
            <h3
              className={css({
                fontSize: '18px',
                fontWeight: '700',
                color: 'text.critical.default',
              })}
            >
              위험 구역
            </h3>
          </div>

          {/* Action 1 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '20px',
              borderBottom: '1px solid',
              borderBottomColor: 'border.critical.subtle',
              marginBottom: '20px',
            })}
          >
            <div>
              <div className={css({ fontSize: '15px', fontWeight: '600', color: 'text.neutral.default', marginBottom: '4px' })}>
                계정 비활성화
              </div>
              <div className={css({ fontSize: '13px', color: 'text.neutral.muted' })}>
                계정을 일시적으로 비활성화합니다. 언제든 재활성화할 수 있습니다.
              </div>
            </div>
            <button
              className={css({
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'border.critical.default',
                backgroundColor: 'surface.transparent',
                color: 'text.critical.default',
                fontSize: '14px',
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
              <div className={css({ fontSize: '15px', fontWeight: '600', color: 'text.neutral.default', marginBottom: '4px' })}>
                계정 영구 삭제
              </div>
              <div className={css({ fontSize: '13px', color: 'text.neutral.muted' })}>
                계정과 모든 데이터가 영구 삭제됩니다. 되돌릴 수 없습니다.
              </div>
            </div>
            <button
              className={css({
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'fill.critical',
                color: 'text.inverse',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                flexShrink: 0,
                marginLeft: '16px',
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
