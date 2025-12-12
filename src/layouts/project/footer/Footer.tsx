const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="sr-only">푸터영역</h1>
      <div className="footer-inner">
        <div className="logo-footer" aria-label="한국도로공사"></div>
        <p className="addr">한국도로공사 도로교통연구원  : 우) 18489 경기도 화성시 동탄순환대로 17길, ITS 인증평가센터</p>
        <div className="nums">
          <div>
            <strong>대표전화 1350</strong><p>(유료, 평일 09시~18시)</p>
          </div>
          <div>
            <strong>당직실 전화 031-8098-6004</strong><p>(평일 18시~익일 09시, 주말ㆍ공휴일 24시)</p>
          </div>
        </div>
        <div className="foot">
          <ul className="link">
            <li><a href="#">개인정보처리방침</a></li>
            <li><a href="#">이메일주소 무단수집거부</a></li>
            <li><a href="#">찾아오시는길</a></li>
          </ul>
          <p className="copyright">Copyright© 2025 Korea Expressway Corporation, All Rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
