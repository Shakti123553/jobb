import react from 'react';
function Featured() {
  return (
  <>
  <section className="bg-gray-50 py-20 px-8 md:px-20">
  <div className="pl-10"> {/* Add padding-left here */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Logos Grid */}
      <div className="grid grid-cols-3 gap-x-25 gap-y-6">
        {[
          {
            src: "https://web.moxcreative.com/jobbe/wp-content/uploads/sites/2/elementor/thumbs/velocity-9-q0ndt17m4914kda627u8yhtmw0qb4hvu7plz42qbr4.png",
            alt: "Velocity9",
          },
          {
            src: "https://web.moxcreative.com/jobbe/wp-content/uploads/sites/2/elementor/thumbs/treva-q0ndszbxqkyjx5cwd70ztiapp8zkp3odjgb05it43k.png",
            alt: "Treva",
          },
          {
            src: "https://web.moxcreative.com/jobbe/wp-content/uploads/sites/2/elementor/thumbs/muzica-q0ndsye3jqx9lje9iomd90j93v47hekn7bnio8ui9s.png",
            alt: "Muzica",
          },
          {
            src: "https://web.moxcreative.com/jobbe/wp-content/uploads/sites/2/elementor/thumbs/goldline-q0ndswif62uoybgztnt4410bx3dh20d6j2cjpoxam8.png",
            alt: "Goldline",
          },
          {
            src: "https://web.moxcreative.com/jobbe/wp-content/uploads/sites/2/elementor/thumbs/fox-hub-q0ndsvkkz8tempicz5ehjj8vbpi3ub9g6xp28eyosg.png",
            alt: "FoxHUB",
          },
          {
            src: "https://web.moxcreative.com/jobbe/wp-content/uploads/sites/2/elementor/thumbs/code-lab-q0ndssr2eqpjnvmgfm6lu1yhjjw077y96jqlsl2vb4.png",
            alt: "CodeLab",
          },
          {
            src: "https://web.moxcreative.com/jobbe/wp-content/uploads/sites/2/elementor/thumbs/aven-q0ndsrt87wo9c9ntl3rz9k70y60mziuiuf34bb49hc.png",
            alt: "Aven",
          },
          {
            src: "https://web.moxcreative.com/jobbe/wp-content/uploads/sites/2/elementor/thumbs/asgardia-q0ndspxju8lop1qjw2yq4ko3re9wk4n265s5cr71ts.png",
            alt: "Asgardia",
          },
          {
            src: "https://web.moxcreative.com/jobbe/wp-content/uploads/sites/2/elementor/thumbs/earth-2.0-q0ndstowlkqtzhl3a4l8ejpy4xrdex1zioe39v1h4w.png",
            alt: "Earth2.0",
          },
        ].map((logo, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center w-[250px] h-[90px]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-17 w-50 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div className="pl-30">
        <h2 className="text-5xl md:text-5xl font-bold mb-4">
          Featured Company
        </h2>
        <p className="text-gray-600 mb-6">
          Dui vel aliquam nullam natoque iaculis viverra <br /> conubia letius.
          Primis non rhoncus dolor a urna finibus <br /> ultricies libero.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold transition">
          BROWSE COMPANY
        </button>
      </div>
    </div>
  </div>
</section>
  </>
    
  );
}
export default Featured;