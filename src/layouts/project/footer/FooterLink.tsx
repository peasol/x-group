const FooterLink = () => {
  return (
    <div className="foot-link">
      <div className="footer-inner">
        <ul>
          <li>
            <a
              href="https://www.ex.co.kr/"
              target="_blank"
              rel="noopener noreferrer external"
            >
              <span>한국도로공사 포털</span>
              <span className="sr-only">(새 창)</span>
              <i aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://www.ex.co.kr/research"
              target="_blank"
              rel="noopener noreferrer external"
            >
              <span>도로교통 연구원 포털</span>
              <span className="sr-only">(새 창)</span>
              <i aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLink;
