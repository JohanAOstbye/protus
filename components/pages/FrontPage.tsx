'use client'
import { Button } from 'components/elements/Button'
import ProtusLabel from 'components/elements/ProtusLabel'
import FrontPageImage from 'lib/assets/images/frontpageimage.svg'
import style from 'styles/pages/_frontPage.module.scss'
import { useSession } from 'next-auth/react'
import CourseCard from 'components/elements/CourseCard'
import { useCourse } from 'components/context/courseContext'
import Loading from 'components/elements/Loading'

export const FrontPage = () => {
  const { data: session, status } = useSession()
  const { courses } = useCourse()

  return (
    <div className={style.page}>
      <div className={style.intro}>
        <h2>Welcome to</h2>
        <ProtusLabel />
        <p>
          A programming tutoring systemdesigned for learners with no programming
          experience.
        </p>
      </div>
      <>
        {status == 'authenticated' ? (
          <div className={style.courses}>
            {courses.map((course, index) => (
              <CourseCard key={index} title={course.title} slug={course.slug} />
            ))}
          </div>
        ) : (
          <div>
            <div className={style.button}>
              <Button url="/auth/signin" text="Login" />
            </div>
            <svg
              viewBox="0 0 653 386"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_210_74)">
                <path
                  d="M203.814 227.612V21.0605C203.814 10.1846 212.663 1.33643 223.539 1.33643H633.09C643.965 1.33643 652.814 10.1846 652.814 21.0605V227.612C652.814 238.488 643.965 247.336 633.09 247.336H223.539C212.663 247.336 203.814 238.488 203.814 227.612ZM650.814 21.0605C650.814 11.2718 642.879 3.33643 633.09 3.33643H223.539C213.75 3.33643 205.814 11.272 205.814 21.061V227.612C205.814 237.401 213.75 245.336 223.539 245.336H502.109C584.237 245.336 650.814 178.759 650.814 96.6316V21.0605H650.814Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M348.1 38.9073H118.567C111.761 38.9073 106.227 44.4416 106.227 51.2476V135.567C106.227 142.373 111.761 147.907 118.567 147.907H348.1C354.906 147.907 360.441 142.373 360.441 135.567V51.2476C360.441 44.4416 354.906 38.9073 348.1 38.9073Z"
                  fill="white"
                />
                <path
                  d="M348.1 38.9073H118.567C111.761 38.9073 106.227 44.4416 106.227 51.2476V135.567C106.227 142.373 111.761 147.907 118.567 147.907H348.1C354.906 147.907 360.441 142.373 360.441 135.567V51.2476C360.441 44.4416 354.906 38.9073 348.1 38.9073ZM359.143 135.567C359.143 141.659 354.193 146.61 348.1 146.61H118.567C112.475 146.61 107.524 141.659 107.524 135.567V51.2476C107.524 45.1554 112.475 40.2049 118.567 40.2049H348.1C354.193 40.2049 359.143 45.1554 359.143 51.2476V135.567Z"
                  fill="#3F3D56"
                />
                <path
                  d="M129.314 77.3364H333.314C335.247 77.3364 336.814 78.9034 336.814 80.8364C336.814 82.7694 335.247 84.3364 333.314 84.3364H129.314C127.381 84.3364 125.814 82.7694 125.814 80.8364C125.814 78.9034 127.381 77.3364 129.314 77.3364Z"
                  fill="#63C2FF"
                />
                <path
                  d="M129.314 100.336H203.314C205.247 100.336 206.814 101.903 206.814 103.836C206.814 105.769 205.247 107.336 203.314 107.336H129.314C127.381 107.336 125.814 105.769 125.814 103.836C125.814 101.903 127.381 100.336 129.314 100.336Z"
                  fill="#63C2FF"
                />
                <path
                  d="M574.767 66.6435H434.767C432.561 66.6435 430.767 64.8491 430.767 62.6435C430.767 60.4379 432.561 58.6435 434.767 58.6435H574.767C576.972 58.6435 578.767 60.4379 578.767 62.6435C578.767 64.8491 576.972 66.6435 574.767 66.6435Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M601.307 153.392H406.226V152.392C470.459 162.242 535.551 161.432 601.307 152.392V153.392Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M574.767 117.643H434.767C432.561 117.643 430.767 115.849 430.767 113.643C430.767 111.438 432.561 109.643 434.767 109.643H574.767C576.972 109.643 578.767 111.438 578.767 113.643C578.767 115.849 576.972 117.643 574.767 117.643Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M602.307 166.392H407.226V167.392H602.307V166.392Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M574.767 91.3364H434.767C432.561 91.3364 430.767 89.542 430.767 87.3364C430.767 85.1309 432.561 83.3364 434.767 83.3364H574.767C576.972 83.3364 578.767 85.1309 578.767 87.3364C578.767 89.542 576.972 91.3364 574.767 91.3364Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M602.307 180.392C534.97 175.811 469.576 175.082 407.226 180.392V179.392H602.307V180.392Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M333.079 164.118L324.849 160.22C328.224 164.931 331.133 172.288 332.69 178.142C335.327 172.689 339.577 166.016 343.784 162.03L335.086 164.268C340.445 138 360.605 119.142 383.69 119.142V117.142C359.577 117.142 338.551 136.79 333.079 164.118Z"
                  fill="#3F3D56"
                />
                <path
                  d="M370.958 204.142H318.958C316.752 204.142 314.958 202.348 314.958 200.142C314.958 197.937 316.752 196.142 318.958 196.142H370.958C373.163 196.142 374.958 197.937 374.958 200.142C374.958 202.348 373.163 204.142 370.958 204.142Z"
                  fill="#63C2FF"
                />
                <path
                  d="M237.814 117.336C245.546 117.336 251.814 111.068 251.814 103.336C251.814 95.6044 245.546 89.3364 237.814 89.3364C230.082 89.3364 223.814 95.6044 223.814 103.336C223.814 111.068 230.082 117.336 237.814 117.336Z"
                  fill="#63C2FF"
                />
                <path
                  d="M245.096 95.1386C244.429 94.7484 243.41 94.9507 243.044 95.6768C241.38 98.9733 239.716 102.27 238.052 105.567C236.709 103.464 234.992 101.627 233 100.088C232.358 99.5928 231.319 99.9908 230.947 100.627C230.494 101.401 230.842 102.182 231.486 102.679C233.809 104.473 235.6 106.886 236.806 109.548C237.265 110.56 238.918 110.496 239.397 109.548C241.476 105.429 243.555 101.31 245.634 97.1909C245.999 96.468 245.825 95.5651 245.096 95.1386V95.1386V95.1386Z"
                  fill="white"
                />
                <path
                  d="M405.814 76.3364C413.546 76.3364 419.814 70.0684 419.814 62.3364C419.814 54.6044 413.546 48.3364 405.814 48.3364C398.082 48.3364 391.814 54.6044 391.814 62.3364C391.814 70.0684 398.082 76.3364 405.814 76.3364Z"
                  fill="#63C2FF"
                />
                <path
                  d="M413.096 54.1386C412.429 53.7484 411.41 53.9507 411.044 54.6768C409.38 57.9733 407.716 61.2699 406.052 64.5665C404.709 62.4636 402.992 60.6274 401 59.0884C400.358 58.5928 399.319 58.9908 398.947 59.6265C398.494 60.4014 398.842 61.1819 399.486 61.6788C401.809 63.4735 403.6 65.8856 404.806 68.5477C405.265 69.5597 406.918 69.4958 407.397 68.5477C409.476 64.4287 411.555 60.3098 413.634 56.1909C413.999 55.468 413.825 54.5651 413.096 54.1386V54.1386V54.1386Z"
                  fill="white"
                />
                <path
                  d="M606.814 99.3364C614.546 99.3364 620.814 93.0684 620.814 85.3364C620.814 77.6044 614.546 71.3364 606.814 71.3364C599.082 71.3364 592.814 77.6044 592.814 85.3364C592.814 93.0684 599.082 99.3364 606.814 99.3364Z"
                  fill="#63C2FF"
                />
                <path
                  d="M614.096 77.1386C613.429 76.7484 612.41 76.9507 612.044 77.6768C610.38 80.9733 608.716 84.2699 607.051 87.5665C605.709 85.4636 603.992 83.6274 602 82.0884C601.358 81.5928 600.319 81.9908 599.947 82.6265C599.494 83.4014 599.842 84.182 600.485 84.6788C602.809 86.4735 604.6 88.8856 605.806 91.5477C606.265 92.5597 607.918 92.4958 608.397 91.5477C610.476 87.4287 612.555 83.3098 614.634 79.1909C614.999 78.468 614.825 77.5651 614.096 77.1386V77.1386V77.1386Z"
                  fill="white"
                />
                <path
                  d="M293.03 172.917H259.309C257.215 172.917 255.512 171.214 255.512 169.12C251.053 156.088 251.141 143.319 255.512 130.797C255.512 128.703 257.215 127 259.309 127H293.03C295.124 127 296.827 128.703 296.827 130.797V169.12C296.827 171.214 295.124 172.917 293.03 172.917H293.03Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M266.534 128.131C261.071 128.131 256.643 132.56 256.643 138.022V168.307C256.643 170.228 258.2 171.786 260.122 171.786H278.77C288.118 171.786 295.696 164.208 295.696 154.86V131.61C295.696 129.689 294.138 128.131 292.217 128.131H266.534Z"
                  fill="white"
                />
                <path
                  d="M284.023 139.268H268.235C267.837 139.268 267.513 138.944 267.513 138.546C267.513 138.148 267.837 137.825 268.235 137.825H284.023C284.421 137.825 284.744 138.148 284.744 138.546C284.744 138.944 284.421 139.268 284.023 139.268Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M284.023 154.661H268.235C267.837 154.661 267.513 154.337 267.513 153.939C267.513 153.541 267.837 153.217 268.235 153.217H284.023C284.421 153.217 284.744 153.541 284.744 153.939C284.744 154.337 284.421 154.661 284.023 154.661Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M292.495 146.969H259.763C259.365 146.969 259.041 146.646 259.041 146.248C259.041 145.85 259.365 145.526 259.763 145.526H292.495C292.893 145.526 293.216 145.85 293.216 146.248C293.216 146.646 292.893 146.969 292.495 146.969Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M292.881 160.919H279.223C278.825 160.919 278.501 160.595 278.501 160.197C278.501 159.799 278.825 159.476 279.223 159.476H292.881C293.279 159.476 293.602 159.799 293.602 160.197C293.602 160.595 293.279 160.919 292.881 160.919Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M60.7026 68.071C61.5908 63.9747 61.8518 66.9923 63.7837 63.2767C62.4577 68.0781 64.9047 66.5058 68.1552 70.2707C90.9982 73.8524 92.4377 66.0287 100.891 66.2685L100.935 66.2681C102.795 66.238 103.75 64.0106 102.629 62.5262C99.8599 58.8608 96.8075 53.205 99.6963 49.6444C104.814 43.3364 100.304 30.4009 98.0982 33.1975C98.0982 22.4104 84.8141 15.3364 79.661 17.0891C70.1393 20.3276 61.3216 24.6955 60.2536 34.4687C60.0869 35.9948 59.8712 37.512 59.597 39.0225C59.0403 42.0899 56.7472 42.9045 57.5364 45.917L60.0041 48.4272C61.1622 52.848 60.7963 57.4891 59.2098 61.7749C58.3328 64.144 58.2113 66.1752 60.7026 68.071V68.071Z"
                  fill="#2F2E41"
                />
                <path
                  d="M84.484 53.5964C92.3919 53.5964 98.8025 47.1857 98.8025 39.2778C98.8025 31.3699 92.3919 24.9593 84.484 24.9593C76.576 24.9593 70.1654 31.3699 70.1654 39.2778C70.1654 47.1857 76.576 53.5964 84.484 53.5964Z"
                  fill="#A0616A"
                />
                <path
                  d="M62.1791 365.697L69.5529 365.871L73.6632 332.743L62.7813 332.486L62.1791 365.697Z"
                  fill="#A0616A"
                />
                <path
                  d="M87.4777 381.081C87.4777 382.327 86.5937 383.336 85.5032 383.336H70.8668C70.8668 383.336 69.4265 377.547 63.554 375.055L63.1487 383.336H55.5983L56.5131 370.02C56.5131 370.02 54.4933 362.896 58.6879 359.254C62.8826 355.613 59.4851 356.12 59.4851 356.12L61.1352 347.878L72.5447 349.22L72.6286 362.157L78.1655 374.999L86.2869 379.011C87.0097 379.368 87.4776 380.181 87.4776 381.081L87.4777 381.081H87.4777H87.4777Z"
                  fill="#2F2E41"
                />
                <path
                  d="M70.2886 335.642L76.1456 340.125L98.9771 315.772L90.3341 309.155L70.2886 335.642Z"
                  fill="#A0616A"
                />
                <path
                  d="M81.6748 362.974C80.9412 363.98 79.6321 364.276 78.7507 363.634L66.9217 355.014C66.9217 355.014 69.1674 349.486 65.8886 344.014L60.684 350.469L54.5818 346.022L63.1633 335.799C63.1633 335.799 65.7265 328.852 71.2613 328.379C76.7961 327.906 73.7516 326.315 73.7516 326.315L79.939 320.625L88.3699 328.429L80.8185 338.935L77.7306 352.574L81.9316 360.599C82.3055 361.313 82.2046 362.246 81.6748 362.973L81.6749 362.974H81.6748Z"
                  fill="#2F2E41"
                />
                <path
                  d="M49.1887 196.309C49.6333 198.132 48.8144 206.615 49.2722 209.534C50.4365 216.956 61.0736 257.421 59.2387 268.956C52.5153 311.222 61.8141 338.336 61.8141 338.336H76.8141L84.8141 210.336L92.6219 220.629L107.9 266.26L80.8739 314.852L94.9854 326.506L137.119 259.515L107.179 147.451L105.37 140.685L64.9171 139.556L67.1679 142.929L62.0475 147.988C62.0475 147.988 62.0406 148.002 62.0135 148.029C61.2247 149.131 43.6943 173.794 49.1887 196.309V196.309L49.1887 196.309Z"
                  fill="#2F2E41"
                />
                <path
                  d="M62.0134 148.029C66.6986 149.702 98.3593 147.975 107.179 147.451L105.37 140.685L64.917 139.556L67.1678 142.929L62.0474 147.988C62.0474 147.988 62.0406 148.002 62.0134 148.029V148.029H62.0134Z"
                  fill="#A0616A"
                />
                <path
                  d="M114.375 93.8429L112.918 101.575L112.564 103.429L104.814 119.336L105.833 142.657C106.485 145.386 78.9657 139.193 64.6699 145.591L53.542 92.3711L64.8254 67.8419L73.6559 62.936L75.1277 57.049H93.8338C94.83 61.7145 93.75 64.0134 91.8141 65.3364L96.4999 77.8331L114.375 93.8429V93.8429L114.375 93.8429Z"
                  fill="#63C2FF"
                />
                <path
                  d="M129.006 48.2387C128.775 50.2409 128.11 52.0249 127.192 53.3698L126.191 72.5829L117.063 71.8392L119.061 52.4295C118.474 50.9105 118.234 49.022 118.465 47.0198C118.994 42.4457 121.783 39.0106 124.693 39.3472C127.604 39.6838 129.535 43.6646 129.006 48.2387L129.006 48.2387V48.2387Z"
                  fill="#A0616A"
                />
                <path
                  d="M92.6232 68.4299L93.8141 71.3364C93.8141 71.3364 76.4138 69.5932 76.7854 78.6782C77.1024 86.4297 109.855 117.15 111.42 117.867V117.867C116.055 119.991 121.442 117.132 122.281 112.103C129.655 93.0761 131.184 75.9218 127.814 60.3365H117.814L114.558 72.6314L114.375 81.9837L109.102 93.2322L91.8141 71.3365L92.6232 68.43V68.4299Z"
                  fill="#63C2FF"
                />
                <path
                  d="M34.6502 175.224C35.2931 173.265 35.4403 171.323 35.1638 169.68L42.4674 151.405L33.6695 148.184L27.208 167.069C26.0118 168.229 24.9797 169.88 24.3368 171.839C22.868 176.314 23.9861 180.7 26.8341 181.635C29.6821 182.57 33.1814 179.699 34.6502 175.224V175.224Z"
                  fill="#A0616A"
                />
                <path
                  d="M76.7795 68.4399C76.7795 68.4399 65.9769 64.3437 59.8444 69.3489C57.3153 71.4131 46.1306 85.6364 44.4077 104.785C44.2727 106.285 43.2503 107.577 42.6744 108.98C39.1224 117.636 33.0074 121.623 30.4073 129.026C29.3912 131.919 31.2549 139.401 30.6128 141.897C27.251 154.966 28.4641 162.417 28.4641 162.417L37.5426 165.44L42.4673 161.959L50.5561 132.421L76.7795 68.4399L76.7795 68.4399Z"
                  fill="#63C2FF"
                />
                <path
                  d="M158.03 45.917H124.309C122.215 45.917 120.512 44.2137 120.512 42.12C116.053 29.0884 116.141 16.3191 120.512 3.79696C120.512 1.70328 122.215 0 124.309 0H158.03C160.124 0 161.827 1.70328 161.827 3.79696V42.12C161.827 44.2137 160.124 45.917 158.03 45.917Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M131.534 1.13129C126.071 1.13129 121.643 5.55954 121.643 11.022V41.3069C121.643 43.2282 123.2 44.7857 125.122 44.7857H143.77C153.118 44.7857 160.696 37.2076 160.696 27.8597V4.61003C160.696 2.68878 159.138 1.13129 157.217 1.13129H131.534Z"
                  fill="white"
                />
                <path
                  d="M149.023 12.2682H133.235C132.837 12.2682 132.513 11.9443 132.513 11.5463C132.513 11.1483 132.837 10.8246 133.235 10.8246H149.023C149.421 10.8246 149.744 11.1483 149.744 11.5463C149.744 11.9443 149.421 12.2682 149.023 12.2682Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M149.023 27.6607H133.235C132.837 27.6607 132.513 27.3369 132.513 26.9388C132.513 26.5408 132.837 26.2171 133.235 26.2171H149.023C149.421 26.2171 149.744 26.5408 149.744 26.9388C149.744 27.3369 149.421 27.6607 149.023 27.6607Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M157.495 19.9695H124.763C124.365 19.9695 124.041 19.6456 124.041 19.2476C124.041 18.8496 124.365 18.5259 124.763 18.5259H157.495C157.893 18.5259 158.216 18.8496 158.216 19.2476C158.216 19.6456 157.893 19.9695 157.495 19.9695Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M157.881 33.9193H144.223C143.825 33.9193 143.501 33.5954 143.501 33.1974C143.501 32.7994 143.825 32.4757 144.223 32.4757H157.881C158.279 32.4757 158.602 32.7994 158.602 33.1974C158.602 33.5954 158.279 33.9193 157.881 33.9193Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M167.737 366.84C169.803 366.97 170.945 364.403 169.382 362.907L169.226 362.289C169.247 362.239 169.267 362.19 169.288 362.14C171.377 357.159 178.458 357.193 180.529 362.182C182.368 366.61 184.709 371.046 185.285 375.728C185.544 377.795 185.427 379.9 184.969 381.929C189.277 372.518 191.544 362.242 191.544 351.908C191.544 349.311 191.402 346.715 191.111 344.125C190.872 342.006 190.543 339.901 190.116 337.814C187.811 326.537 182.818 315.796 175.616 306.825C172.154 304.932 169.267 301.974 167.523 298.428C166.897 297.149 166.406 295.774 166.173 294.372C166.567 294.424 167.659 288.423 167.362 288.055C167.911 287.222 168.894 286.808 169.493 285.995C172.476 281.952 176.585 282.658 178.73 288.152C183.312 290.465 183.356 294.3 180.544 297.989C178.756 300.336 178.51 303.511 176.94 306.024C177.102 306.231 177.27 306.431 177.431 306.638C180.392 310.435 182.953 314.518 185.112 318.806C184.502 314.04 185.403 308.298 186.939 304.597C188.687 300.379 191.964 296.827 194.849 293.181C198.315 288.802 205.423 290.713 206.033 296.265C206.039 296.319 206.045 296.372 206.051 296.426C205.622 296.668 205.202 296.925 204.792 297.196C202.452 298.743 203.261 302.37 206.033 302.798L206.096 302.807C205.941 304.351 205.676 305.882 205.288 307.387C208.99 321.703 200.998 326.917 189.587 327.151C189.335 327.28 189.09 327.409 188.838 327.532C189.994 330.787 190.917 334.126 191.602 337.511C192.216 340.501 192.642 343.524 192.881 346.56C193.178 350.39 193.152 354.239 192.829 358.063L192.849 357.927C193.669 353.716 195.955 349.783 199.275 347.057C204.221 342.994 211.208 341.498 216.543 338.233C219.112 336.661 222.403 338.692 221.955 341.67L221.933 341.813C221.138 342.135 220.363 342.51 219.614 342.93C219.186 343.172 218.766 343.429 218.356 343.7C216.016 345.247 216.825 348.874 219.597 349.302L219.659 349.311C219.705 349.318 219.743 349.324 219.789 349.331C218.426 352.567 216.527 355.57 214.15 358.16C211.835 370.657 201.894 371.843 191.26 368.203H191.253C190.091 373.267 188.392 378.215 186.209 382.93H168.189C168.124 382.729 168.066 382.523 168.008 382.322C169.674 382.426 171.354 382.329 172.994 382.025C171.657 380.385 170.32 378.731 168.983 377.091C168.951 377.059 168.925 377.026 168.899 376.994C168.221 376.154 167.536 375.321 166.858 374.481L166.858 374.48C166.815 371.903 167.124 369.334 167.737 366.841L167.737 366.84V366.84V366.84Z"
                  fill="#F2F2F2"
                />
                <path
                  d="M0.185791 384.476C0.185791 385.136 0.715821 385.666 1.37585 385.666H219.666C220.326 385.666 220.856 385.136 220.856 384.476C220.856 383.816 220.326 383.286 219.666 383.286H1.37585C0.715821 383.286 0.185791 383.816 0.185791 384.476Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M88.3654 22.3364H85.4504C76.9224 22.346 62.3458 34.4083 67.9862 42.8688C63.1698 55.7159 62.9943 62.4003 65.0388 65.8987C65.7914 67.1865 67.2858 67.7731 68.7737 67.6687C68.9721 67.6548 69.1718 67.6505 69.373 67.6572C70.8145 67.7048 72.7481 74.4812 74.0899 75.0022L77.6516 73.9195L83.4939 68.0816L80.5295 59.1776L74.7933 54.6897L75.5748 44.2959C71.7355 35.4718 75.9124 35.0399 78.263 32.1934L78.5008 41.3254L81.8673 38.0765C84.6095 38.1477 87.8141 39.3364 89.9443 36.8637C93.8141 32.3364 97.8256 37.8025 102.396 38.9073L103.814 37.785C103.863 35.239 103.486 32.7807 102.755 30.5795C102.411 29.5433 101.531 28.6894 101.494 27.6594C101.356 23.794 94.0499 20.0446 88.3655 22.3364H88.3654V22.3364Z"
                  fill="#2F2E41"
                />
              </g>
              <defs>
                <clipPath id="clip0_210_74">
                  <rect
                    width="652.628"
                    height="385.666"
                    fill="white"
                    transform="translate(0.185791)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        )}
      </>
    </div>
  )
}
