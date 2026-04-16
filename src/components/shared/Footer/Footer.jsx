function Footer() {
  return (
    <div className="bg-[#244D3F] py-20">
      <div className="max-w-278 mx-auto">
        {/* Top Section */}
        <div className="flex flex-col items-center text-center gap-5">
          <img src="/Images/logo/logo-xl.png" alt="" />

          <p className="text-white/80 text-[1rem] mt-4">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex flex-col items-center gap-4">
            <h4 className="text-white text-xl font-medium">Social Links</h4>

            <div className="flex items-center gap-3">
              <a className="hover:brightness-90">
                <img src="/Images/icon/instagram.png" alt="" />
              </a>

              <a className="hover:brightness-90">
                <img src="/Images/icon/facebook.png" alt="" />
              </a>

              <a className="hover:brightness-90">
                <img src="/Images/icon/twitter.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1A8862]/20 mt-10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between pt-[30px] text-[#FAFAFA]/50 text-[1rem]">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex items-center gap-8">
            <a className="hover:text-white hover:underline">Privacy Policy</a>
            <a className="hover:text-white hover:underline">Terms of Service</a>
            <a className="hover:text-white hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
