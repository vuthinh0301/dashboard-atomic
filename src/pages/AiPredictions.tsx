import '../assets/css/aipredictions.css'
export const AiPredictions = () => {
  return (
    <div>
      <div className="header">
        <div className="container relative">
          <a href="http://thealchemist.ai/en" className="logo">The Alchemist</a>
          <ul className="menu-top">
            <li className="">
              <a href="https://thealchemist.ai/en/trade2">Confluence Trade</a>
            </li>
            <li className="">
              <a href="https://thealchemist.ai/en/chartpatterns">Chart Patterns</a>
            </li>
            <li className="active">
              <a href="https://thealchemist.ai/en/aipredictions">AI-Predictions</a>
            </li>
            <li className="">
              <a href="https://thealchemist.ai/en/academy">Academy</a>
            </li>
          </ul>
          <div className="head-right">
            <a href="https://thealchemist.ai/en/login" className="btn-login">Login</a>
            <button className="btn-connect-wallet" data-toggle="modal" data-target="#connect-wallet">Connect Wallet
            </button>
          </div>
          <div className="menu-mobile">
            <button id="btnMenuMobile">
              <img src="images/predictions/menu.svg" alt="icon menu" />
            </button>
          </div>
          <div data-radix-popper-content-wrapper="" className="dropdow-member drop-menu-ai">
            <div data-side="bottom" data-align="end" role="menu" aria-orientation="vertical" data-state="open"
                 data-radix-menu-content="" dir="ltr" id="radix-:r1:" aria-labelledby="radix-:r0:"
                 className="DropdownMenuContent"
                 data-orientation="vertical"
            >
              <div role="menuitem" className="DropdownMenuItem" data-orientation="vertical"
                   data-radix-collection-item="">
                <svg className="w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.00258 1.33331C6.04656 1.33331 4.4609 2.92574 4.4609 4.8901C4.4609 6.85445 6.04656 8.44688 8.00258 8.44688C9.95859 8.44688 11.5443 6.85445 11.5443 4.8901C11.5443 2.92574 9.95859 1.33331 8.00258 1.33331ZM8.0025 2.2984C9.42776 2.2984 10.5832 3.45873 10.5832 4.89007C10.5832 6.32141 9.42776 7.48174 8.0025 7.48174C6.57724 7.48174 5.42183 6.32141 5.42183 4.89007C5.42183 3.45873 6.57724 2.2984 8.0025 2.2984ZM6.55333 9.88057C6.03485 9.91656 5.51077 9.99058 4.99382 10.1014C3.99608 10.3069 3.19786 10.7175 2.85812 11.3999C2.72998 11.6668 2.66555 11.9525 2.66664 12.2418C2.66626 12.529 2.73016 12.8151 2.8537 13.0768C3.17992 13.7514 3.88516 14.1331 4.83745 14.3447L5.00804 14.3803C5.51095 14.4938 6.03519 14.5701 6.56294 14.606C6.60788 14.6192 6.71501 14.6314 6.83193 14.6374L6.9281 14.641C6.97755 14.6422 7.03368 14.6424 7.1173 14.6424C7.87586 14.6842 8.66224 14.672 9.44497 14.6054C9.86209 14.5768 10.282 14.5223 10.6984 14.4424L11.01 14.3777C12.0383 14.1748 12.8083 13.789 13.1457 13.0776C13.3958 12.5494 13.3958 11.9364 13.1458 11.4085C12.8093 10.6988 12.0491 10.3162 11.0022 10.1006C10.5915 10.0129 10.1741 9.94801 9.75374 9.90657L9.44643 9.88057C8.48391 9.79566 7.51584 9.79566 6.55333 9.88057ZM9.36224 10.842L9.37069 10.8426C9.85312 10.8766 10.3326 10.9443 10.8056 11.0453C11.5833 11.2055 12.111 11.4711 12.2779 11.8231C12.4036 12.0886 12.4036 12.3971 12.2778 12.6629C12.1218 12.9919 11.6479 13.246 10.9628 13.4014L10.8129 13.4331C10.3305 13.5407 9.85263 13.6101 9.37157 13.6431C8.62515 13.7066 7.88316 13.718 7.14304 13.678L6.88064 13.6735C6.8078 13.6698 6.74641 13.6628 6.68951 13.6513C6.23901 13.6173 5.83364 13.5635 5.44004 13.4855L5.20503 13.4358C4.425 13.2829 3.89263 13.0161 3.72002 12.6593C3.65963 12.5313 3.62736 12.3868 3.62756 12.2406C3.62702 12.0952 3.65885 11.954 3.72065 11.8252C3.88848 11.4882 4.45266 11.198 5.19057 11.046C5.66702 10.9439 6.14628 10.8762 6.62849 10.8426C7.54389 10.762 8.45568 10.762 9.36224 10.842Z"
                    fill="#333333"></path>
                </svg>
                <a className="grow hover:underline" href="/en/account">Your Profile</a>
              </div>
              <div role="menuitem" className="DropdownMenuItem group" data-orientation="vertical"
                   data-radix-collection-item="">
                <svg className="w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.55427 1.34766C9.14042 1.34766 10.435 2.59695 10.5077 4.16515L10.5109 4.30432V4.92632C10.5109 5.20247 10.2871 5.42632 10.0109 5.42632C9.7578 5.42632 9.54861 5.23822 9.5155 4.99417L9.51093 4.92632V4.30432C9.51093 3.26239 8.69625 2.4105 7.66922 2.35098L7.55427 2.34766H4.30427C3.2629 2.34766 2.4111 3.16241 2.35159 4.18937L2.34827 4.30432V11.7243C2.34827 12.7662 3.16287 13.6181 4.18937 13.6777L4.30427 13.681H7.56093C8.59917 13.681 9.44829 12.8693 9.50762 11.8462L9.51093 11.7317V11.103C9.51093 10.8268 9.73479 10.603 10.0109 10.603C10.2641 10.603 10.4733 10.7911 10.5064 11.0351L10.5109 11.103V11.7317C10.5109 13.3125 9.2664 14.603 7.70383 14.6776L7.56093 14.681H4.30427C2.71864 14.681 1.42416 13.4316 1.35148 11.8635L1.34827 11.7243V4.30432C1.34827 2.71829 2.59744 1.42356 4.16514 1.35087L4.30427 1.34766H7.55427ZM14.8932 8.36791C14.9101 8.35097 14.9259 8.33283 14.9402 8.31361L14.9413 8.31234C15.0873 8.11628 15.0711 7.83753 14.8926 7.65988L12.9406 5.71654L12.8844 5.66826C12.6884 5.52346 12.4106 5.54021 12.2335 5.71812L12.1852 5.7743C12.0404 5.97037 12.0572 6.24811 12.2351 6.42522L13.3296 7.51432H6.51233L6.44448 7.51889C6.20043 7.552 6.01233 7.76119 6.01233 8.01432C6.01233 8.29047 6.23619 8.51432 6.51233 8.51432H13.3284L12.235 9.60394L12.1865 9.65992C12.0409 9.85536 12.0564 10.1332 12.2336 10.311C12.4284 10.5067 12.745 10.5074 12.9407 10.3125L14.8927 8.36849L14.8932 8.36791Z"
                    fill="#333333"></path>
                </svg>
                <a href="/en/logout" className="grow hover:underline">Logout</a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-menu-mobile">
          <ul className="menu">
            <li className="">
              <a href="https://thealchemist.ai/en/trade2">Confluence Trade</a>
            </li>
            <li className="">
              <a href="https://thealchemist.ai/en/chartpatterns">Chart Patterns</a>
            </li>
            <li className="active">
              <a href="https://thealchemist.ai/en/aipredictions">AI-Predictions</a>
            </li>
            <li className="">
              <a href="https://thealchemist.ai/en/academy">Academy</a>
            </li>
          </ul>
          <div className="buttons">
            <a href="/" target="blank" className="btn-primary">
              Connect Wallet
            </a>
          </div>
        </div>
      </div>

      <div className="prediction-wrapper">
        <div className="container">
          <h2>AI Predictions</h2>
          <div className="relative">
            <div className="table-wrapper">
              <table className="table-responsive">
                <thead className="">
                <tr className="">
                  <th className="color-787878 min-w-180">Crypto Currencies</th>
                  <th className="color-787878 min-w-140">Time</th>
                  <th className="color-787878 min-w-120">Status</th>
                  <th className="color-1A64F0 min-w-120">Price</th>
                  <th className="color-0AAFA5 min-width-120">1H Prediction</th>
                  <th className="text-success color-787878 min-w-100">Correct Predictions</th>
                  <th className="color-787878 min-w-120">Total Predictions</th>
                  <th className="color-787878 min-w-150">Dashboard</th>
                </tr>
                </thead>
                <tbody>
                <tr className="item-currencies">
                  <td className="currency">
                    <div className="images">
                      <img src="img/coin_image/BTC.svg" alt="logo currency" />
                    </div>
                    <div className="currency-name">
                      <p className="name">
                        BTCUSDT
                      </p>
                      <p className="slug">
                        Bitcoin
                      </p>
                    </div>
                  </td>
                  <td className="datetime">
                    <p className="date">
                      2024-04-08
                    </p>
                    <p className="time">
                      02:09:03
                    </p>
                  </td>
                  <td className="status">
                    <div className="item increase">
                      <span>0.57%</span>
                    </div>
                  </td>
                  <td className="price">
                        <span className="">
                        69,330.80                                    </span>
                  </td>
                  <td className="prediction-1h">
                    <span>69,724.60</span>
                  </td>
                  <td className="correct text-success">
                    <span className="text-success"> 2,364</span>
                  </td>
                  <td className="total">
                        <span className="">
                        2,777                                    </span>
                  </td>
                  <td className="buttons">
                    <div className="button-wrapper">
                      <a target="_blank" href="/en/aipredictionsdashboard?coin=BTC&day=Year">
                        <span className="">Systerm</span>
                      </a>
                      <a target="_blank" href="https://t.me/thealchemistofficial">
                        <span className="">My</span>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="item-currencies">
                  <td className="currency">
                    <div className="images">
                      <img src="img/coin_image/ETH.svg" alt="logo currency" />
                    </div>
                    <div className="currency-name">
                      <p className="name">
                        ETHUSDT
                      </p>
                      <p className="slug">
                        Ethereum
                      </p>
                    </div>
                  </td>
                  <td className="datetime">
                    <p className="date">
                      2024-04-08
                    </p>
                    <p className="time">
                      02:09:27
                    </p>
                  </td>
                  <td className="status">
                    <div className="item increase">
                      <span>0.58%</span>
                    </div>
                  </td>
                  <td className="price">
                        <span className="">
                        3,381.53                                    </span>
                  </td>
                  <td className="prediction-1h">
                    <span>3,401.10</span>
                  </td>
                  <td className="correct text-success">
                    <span className="text-success"> 2,531</span>
                  </td>
                  <td className="total">
                        <span className="">
                        2,772                                    </span>
                  </td>
                  <td className="buttons">
                    <div className="button-wrapper">
                      <a target="_blank" href="/en/aipredictionsdashboard?coin=ETH&day=Year">
                        <span className="">Systerm</span>
                      </a>
                      <a target="_blank" href="https://t.me/thealchemistofficial">
                        <span className="">My</span>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="item-currencies">
                  <td className="currency">
                    <div className="images">
                      <img src="img/coin_image/SOL.svg" alt="logo currency" />
                    </div>
                    <div className="currency-name">
                      <p className="name">
                        SOLUSDT
                      </p>
                      <p className="slug">
                        Solana
                      </p>
                    </div>
                  </td>
                  <td className="datetime">
                    <p className="date">
                      2024-04-08
                    </p>
                    <p className="time">
                      02:10:09
                    </p>
                  </td>
                  <td className="status">
                    <div className="item increase">
                      <span>1.52%</span>
                    </div>
                  </td>
                  <td className="price">
                        <span className="">
                        178.39                                    </span>
                  </td>
                  <td className="prediction-1h">
                    <span>181.11</span>
                  </td>
                  <td className="correct text-success">
                    <span className="text-success"> 2,531</span>
                  </td>
                  <td className="total">
                        <span className="">
                        2,762                                    </span>
                  </td>
                  <td className="buttons">
                    <div className="button-wrapper">
                      <a target="_blank" href="/en/aipredictionsdashboard?coin=SOL&day=Year">
                        <span className="">Systerm</span>
                      </a>
                      <a target="_blank" href="https://t.me/thealchemistofficial">
                        <span className="">My</span>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="item-currencies">
                  <td className="currency">
                    <div className="images">
                      <img src="img/coin_image/DOT.svg" alt="logo currency" />
                    </div>
                    <div className="currency-name">
                      <p className="name">
                        DOTUSDT
                      </p>
                      <p className="slug">
                        Polkadot
                      </p>
                    </div>
                  </td>
                  <td className="datetime">
                    <p className="date">
                      2024-04-08
                    </p>
                    <p className="time">
                      02:09:19
                    </p>
                  </td>
                  <td className="status">
                    <div className="item decrease">
                      <span>-1.04%</span>
                    </div>
                  </td>
                  <td className="price">
                        <span className="">
                        8.58                                    </span>
                  </td>
                  <td className="prediction-1h">
                    <span>8.49</span>
                  </td>
                  <td className="correct text-success">
                    <span className="text-success"> 2,526</span>
                  </td>
                  <td className="total">
                        <span className="">
                        2,773                                    </span>
                  </td>
                  <td className="buttons">
                    <div className="button-wrapper">
                      <a target="_blank" href="/en/aipredictionsdashboard?coin=DOT&day=Year">
                        <span className="">Systerm</span>
                      </a>
                      <a target="_blank" href="https://t.me/thealchemistofficial">
                        <span className="">My</span>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="item-currencies">
                  <td className="currency">
                    <div className="images">
                      <img src="img/coin_image/KLAY.svg" alt="logo currency" />
                    </div>
                    <div className="currency-name">
                      <p className="name">
                        KLAYUSDT
                      </p>
                      <p className="slug">
                      </p>
                    </div>
                  </td>
                  <td className="datetime">
                    <p className="date">
                      2024-01-24
                    </p>
                    <p className="time">
                      00:09:30
                    </p>
                  </td>
                  <td className="status">
                    <div className="item decrease">
                      <span>-0.79%</span>
                    </div>
                  </td>
                  <td className="price">
                        <span className="">
                        0.19                                    </span>
                  </td>
                  <td className="prediction-1h">
                    <span>0.19</span>
                  </td>
                  <td className="correct text-success">
                    <span className="text-success"> 142</span>
                  </td>
                  <td className="total">
                        <span className="">
                        162                                    </span>
                  </td>
                  <td className="buttons">
                    <div className="button-wrapper">
                      <a target="_blank" href="/en/aipredictionsdashboard?coin=KLAY&day=Year">
                        <span className="">Systerm</span>
                      </a>
                      <a target="_blank" href="https://t.me/thealchemistofficial">
                        <span className="">My</span>
                      </a>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <button type="button" className="btn-primary"
                    id="load-more" title="Please login to see more !">Load more
            </button>
          </div>
        </div>
      </div>

      <div className="banner-top-glossary">
        <div className="container">
          <p className="glossary-title">
            The AI-Predicts platform use AI technology to forecast the next 1 hour session opening price of
            a coin/token.The platform is available for free, nevertheless, consider the hazards of trading
            using data from this platform.
          </p>
          <h2 className="glossary-heading">
            Our Awards
          </h2>
          <div className="glossary-award-wrapper">
            <div className="glossary-award-image">
              <img src="images/predictions/skeleton-award.png" alt="award image" />
            </div>
            <div className="glossary-award-image">
              <img src="images/predictions/skeleton-award.png" alt="award image" />
            </div>
            <div className="glossary-award-image">
              <img src="images/predictions/skeleton-award.png" alt="award image" />
            </div>
            <div className="glossary-award-image">
              <img src="images/predictions/skeleton-award.png" alt="award image" />
            </div>
          </div>
          <h2 className="glossary-heading">
            Our Backers
          </h2>
          <div className="glossary-backer-wrapper">
            <div className="glossary-backer-image">
              <img src="images/predictions/bsc.png" alt="backer image" />
            </div>
            <div className="glossary-backer-image">
              <img src="images/predictions/aws.png" alt="backer image" />
            </div>
            <div className="glossary-backer-image">
              <img src="images/predictions/web3.png" alt="backer image" />
            </div>
            <div className="glossary-backer-image">
              <img src="images/predictions/sonorus.png" alt="backer image" />
            </div>
          </div>
          <div className="glossary-button">
            <a href="https://t.me/thealchemistofficial" target="blank">
              Join Telegram Channel
            </a>
            <a href="https://twitter.com/TheAlchemist_AI" target="blank">
              Follow on Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="box-left">
            <a href="#" className="logo-ft"></a>
            <p className="des">
              At The Alchemist, we believe in the power of data and knowledge to bring clarity to our increasingly
              volatile
              market.
              By putting cutting-edge technology and information resources in the hands of more people,
              we empower them to make better, more informed decisions, build a long-lasting platform, and help millions
              of
              traders and investors.
            </p>
            <div className="box-network">
              <h2 className="title">Social Media</h2>
              <div className="list">
                <a href="#" className="icon wt">Twitter</a>
                <a href="#" className="icon m">M</a>
                <a href="#" className="icon youtobe">youtobe</a>
                <a href="#" className="icon telegam">Telegam</a>
                <a href="#" className="icon fb">facebook</a>
              </div>
            </div>
          </div>
          <div className="box-right">
            <div className="item">
              <h2 className="title">About Us</h2>
              <a href="#" className="alink">Whitepaper</a>
              <a href="#" className="alink">Business Contact </a>
              <a href="#" className="alink">Careers</a>
            </div>
            <div className="item">
              <h2 className="title">Products</h2>
              <a href="#" className="alink">Al Trade</a>
              <a href="#" className="alink">Dashboard</a>
              <a href="#" className="alink">Social</a>
              <a href="#" className="alink">Marketplace<span className="item-comingson">Coming Soon</span></a>
              <a href="#" className="alink">Box<span className="item-comingson">Coming Soon</span></a>
              <a href="#" className="alink">Launchpad<span className="item-comingson">Coming Soon</span></a>
              <a href="#" className="alink">Trend Spotter<span className="item-comingson">Coming Soon</span> </a>
            </div>
            <div className="item">
              <h2 className="title">Learn</h2>
              <a href="#" className="alink">Guide</a>
              <a href="#" className="alink">Academy</a>
              <a href="#" className="alink">News</a>
            </div>
            <div className="item">
              <h2 className="title">Support </h2>
              <a href="#" className="alink">Feedback</a>
              <a href="#" className="alink">Support Center</a>
              <a href="#" className="alink">Request</a>
            </div>
          </div>
          <div className="box-network-mobile">
            <h2 className="title">Social Media</h2>
            <div className="list">
              <a href="#" className="icon wt">Twitter</a>
              <a href="#" className="icon m">M</a>
              <a href="#" className="icon youtobe">youtobe</a>
              <a href="#" className="icon telegam">Telegam</a>
              <a href="#" className="icon fb">facebook</a>
            </div>
          </div>
          <div className="box-conpy-right">
            © 2022 The Alchemist - All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  )
    ;
};
