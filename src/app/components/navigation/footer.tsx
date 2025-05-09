export function Footer() {
  return (
    <footer
      className="relative py-12 px-6 border-t"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        borderColor: "var(--foreground)",
      }}
    >
      <div className="px-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600" />
              <span className="text-xl font-bold tracking-tight">
                BlizzStudios
              </span>
            </div>
            <p className="mb-6 max-w-md" style={{ color: "var(--foreground)" }}>
              We are a creative design agency specializing in brand identity,
              web design, and digital experiences that captivate and convert.
            </p>
            <div className="flex gap-4">
              {["Twitter", "Instagram", "LinkedIn", "Dribbble"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: "var(--foreground)",
                      color: "var(--background)",
                    }}
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5" />
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Brand Identity",
                "Web Design",
                "UI/UX Design",
                "Motion Graphics",
                "Digital Marketing",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors"
                    style={{ color: "var(--foreground)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Our Work",
                "Careers",
                "Contact",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors"
                    style={{ color: "var(--foreground)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center"
          style={{ borderColor: "var(--foreground)" }}
        >
          <p className="text-sm" style={{ color: "var(--foreground)" }}>
            © 2023 BlizzStudios. All rights reserved.
          </p>
          <p
            className="text-sm mt-2 md:mt-0"
            style={{ color: "var(--foreground)" }}
          >
            Crafting digital wonders since 2015
          </p>
        </div>
      </div>
    </footer>
  );
}
