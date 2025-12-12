import XcInput from "@/components/xc/ui/XcInput";

import qrCode from '@/assets/images/common/qr_code.svg';
import markKOLAS from '@/assets/images/common/mark_kolas.svg';

const sampleMain = () => {
  return (
    <section className="main">
      <h1 className="sr-only">메인</h1>
      <div className="key-visual">
        키비주얼 영역
      </div>   
      <div className="inner">

        <div className="cont-block">
          <div className="title-area">
            <h2 className="title">자주찾는 서비스</h2>
          </div>
          <div className="goto-link-wrap">
            <button className="btn-goto" aria-label="ITS성능평가 신청">
              <i className="i01"/>
              <span>ITS성능평가<br/>신청</span>
            </button>
            <button className="btn-goto" aria-label="하이패스 적합등록 신청">
              <i className="i02"/>
              <span>하이패스<br/>적합등록 신청</span>
            </button>
            <button className="btn-goto" aria-label="ITS성능평가 절차안내">
              <i className="i03"/>
              <span>ITS성능평가<br/>절차안내</span>
            </button>
            <button className="btn-goto" aria-label="하이패스 적합등록 절차안내">
              <i className="i04"/>
              <span>하이패스 적합등록<br/>절차안내</span>
            </button>
            <button className="btn-goto" aria-label="자료실">
              <i className="i05"/>
              <span>자료실</span>
            </button>
            <button className="btn-goto" aria-label="FAQ">
              <i className="i06"/>
              <span>FAQ</span>
            </button>
          </div>
        </div>

        <div className="cont-block">
          <div className="title-area">
            <h2 className="title">공지 알림</h2>
            <button className="btn-more">
              <span>더보기</span><i/>
            </button>
          </div>
          <div className="board-box">
            <div className="top">
              <h3>공지사항</h3>
              <button className="btn-more">
                <span>더보기</span><i/>
              </button>
            </div>
            <ul>
              <li>
                <a href="#">
                  <div>
                    <i/>
                    <span>[ITS성능평가] ITS성능평가서비스가 완전히 달라져 사용자에게 편안함을 제공합니다.</span>
                  </div>
                  <div className="date">2025-04-12</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>
                    <i/>
                    <span>[ITS성능평가] ITS성능평가서비스가 완전히 달라져 사용자에게 편안함을 제공</span>
                  </div>
                  <div className="date">2025-04-12</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>
                    <i/>
                    <span>[ITS성능평가] ITS성능평가서비스가 완전히 달라져 사용자에게 편안함을 제공</span>
                  </div>
                  <div className="date">2025-04-12</div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="cols-group">
          <div className="cont-block">
            <div className="title-area">
              <h2 className="title">성적서 위변조 조회</h2>
            </div>
            <div className="info-block type1">
              <div className="flex justify-between">
                <div className="flex flex-col gap-[3px]">
                  <span className="t1">성적서 위변조 조회</span>
                  <span className="t2">
                    성적서 번호를 입력하여 성적서의 정보를<br/>
                    확인할 수 있습니다.
                  </span>
                  <span className="t3">*모바일을 통해 확인시 QR코드 스캔</span>
                </div>
                <img src={qrCode} alt="성적서 위변조 조회 QR 코드" />
              </div>
              <div className="input-wrap">
                <XcInput
                  placeholder="성적서의 번호를 입력 해 주세요."
                  className="input"
                />
                <button type="button" className="btn-search" aria-label="검색">
                  <i />
                </button>
              </div>
            </div>
          </div>

          <div className="cont-block">
            <div className="title-area">
              <h2 className="title">KOLAS 공인시험성적서도 안내</h2>
              <button className="btn-more">
                <span>더보기</span><i/>
              </button>
            </div>
            <div className="info-block type2">
              <div className="flex flex-col gap-[3px]">
                <span className="t1">KOLAS 공인시험성적서도 안내</span>
                <span className="t4">
                  KOLAS 공인시험성적서는<br/>
                  KOLAS 국제 공인시험 기관에서 공인시험원이 ISO/IEC등<br/>
                  국제표준을 기반으로 공정하고 객관적인 시험 평가를 통해서<br/>
                  발행하는 국제적으로 공신력 있는 시험성적서입니다.
                </span>
              </div>
              <img src={markKOLAS} alt="KOLAS" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default sampleMain;