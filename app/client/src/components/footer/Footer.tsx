import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import { Logo, Newsletter } from '..';
import { footer } from '../../constants';

const Footer = () => {
  return (
    <footer className="footer-pt p-side bg-dark-gray">
      <div className="max-w-screen-wide w-full mx-auto pb-20">
        <div className=" w-full flex flex-col items-center gap-8 justify-center mb-52">
          <h2 className="text-3xl font-exo font-light text-center">
            Subscribe To Our Newsletter
          </h2>
          <Newsletter />
        </div>

        <div className="flex justify-between max-[960px]:flex-col max-[960px]:gap-10 max-[960px]:items-center max-[960px]:justify-center items-end">
          <div className="max-[960px]:text-center">
            <Logo />
            <p className="font-exo text-xs text-light-gray font-light">
              {footer.credit}
            </p>
          </div>

          <ul className="flex gap-16 font-exo font-light text-xl">
            {footer.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  className="flex items-end hover:text-light-gray transition-colors duration-200"
                >
                  <span>{link.label}</span>
                  <span>
                    <ArrowUpRightIcon className="h-7" strokeWidth={1.2} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
