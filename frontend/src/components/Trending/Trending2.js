import React from 'react'
import { NavLink } from "react-router-dom"

function Trending2() {
  return (
    <div className=' relative h-screen w-screen  '>
      {/* Green box */}

      <div className='flex flex-col items-center'>


        <div className='bg-lime-300 w-[1000px] h-96  rounded-lg p-10 shadow-lg mb-20'>

          <div className='flex justify-between items-center'>
            <div className='flex justify-center items-center '>
              <h1
                style={{
                  fontFamily: 'Medium',
                }}
                className='text-4xl leading-loose'>365 Magazines Straight
                <br />To Your Magazine</h1>
            </div>
            <div className='flex justify-center items-center'>
              <h1 className='tracking-wide '>Sign up to our weekly newsletter to be the first to
                know what's on in South East.</h1>
            </div>
          </div>

          <div
            style={{
              fontFamily: 'Medium',
            }}
            className='flex justify-between items-center border-t border-black mt-24 pt-3'>
            <input placeholder='Enter your email address' className='outline-none bg-transparent placeholder:text-black' />
            <div className='flex justify-center items-center hover:ease-in-out '>
              <h1 className='cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 '>Subscribe</h1>
            </div>

          </div>

        </div>


        <div className='w-full'>

          {/* Personalized section */}
          <h1
            style={{
              fontFamily: 'Medium',
            }}
            className='text-left text-4xl mb-4 ml-44'>☐ Personalized news for you</h1>
          <div className='flex justify-center items-center'>
            <NavLink
              to={
                '/article'
              }
              state={{
                title: `11th Edition of India Design ID from Feb 23 to 26`,
                desc: `New Delhi, Feb 17 (IANSlife): India Design' 23 takes place at the NSIC grounds in Okhla, New Delhi, and includes five main sections: the ID Exhibit, a well-curated showcase of some of the known Indian and international brands; ID Symposium, where one can experience panel discussions, dialogues and inspiration through presentations with key industry names such as Arthur Mamou-Mani, Sabine Marcellis, Habibeh Madjdabadi, Mallika Sarabhai, Sameep Padora, Sanjay Puri, Emmanuel Galllina, Manuela Gatto (Zaha Hadid Architects); ID Honors, a platform that recognises and celebrates India's best architecture and design projects; ID Hunar -- Curated by Shabnam Gupta and Preeti Singh, this group exhibition celebrates and showcases 20 techniques, innovations and crafts that are being explored and experimented by the topmost architectural and interior design practices across India.

                With an intent to bring forth the myriad of creative design expressions being used by studios in their works, ID Hunar showcases works of designers and architects of the likes of Ashiesh Shah, Abin Design Studio, Ravi Vazirani Studio, Studio Lotus, The Busride Studio, ClaY Architecture, Sanjyt Singh, Dipen Gada & Associates, Saka Studio, Anagram to name a few.
                
                ID Collectibles is a groundbreaking collectible. Misha Bains, Head of Strategy at India, is the curator of the pavilion at ID 2023. Design ID, an exclusively selected area of ID Collectibles, shows modern design discoveries through the eyes of visionary Indian designers. It also features modern designs made using traditional skills and methods, illuminating the country's growing design history. This sector offers a variety of limited-edition goods for design aficionados, collectors, and the general public that have distinctive form, function, and value. Atelier Ashiesh Shah, Klove, Pinakin Studio, BeatRoot Co, Stem Design, Design in Dukaan, and Josmo are just a handful of the top companies represented in this pavilion.
                
                Living Traditions, a ceramics show, including some of the best female ceramic artists in the nation, was specially curated by Farah Siddhique and Natasha Mehta this year. Ceramicists have produced items that have become significant remnants of art, history, and culture, ranging from delicate painted motifs to highly polished bowls, animal figures, and totems. Living Traditions honours the ongoing contributions of working, professional Indian women ceramic artists who are inspired by inventiveness and tenacity.

                    `,
                image: 'https://images.adsttc.com/media/images/63c5/be44/7643/4a60/ed06/2e62/newsletter/diseno-biofilico-en-departamentos-mexico_21.jpg?1673903708'
              }}>
              <div className='relative border-t border-black  ml-20 mr-20 '>
                <div className='mt-10'>
                  <h3
                    style={{
                      fontFamily: 'Medium',
                    }}
                    className=''>♦Design</h3>

                  <h1
                    style={{
                      fontFamily: 'Medium',

                    }}
                    className='text-4xl bg-white rounded-lg px-3 py-2 '>11th Edition of India Design ID from Feb 23 to 26</h1>
                  <img
                    className='rounded-2xl shadow-lg w-full h-84 object-cover'
                    src="https://images.adsttc.com/media/images/63c5/be44/7643/4a60/ed06/2e62/newsletter/diseno-biofilico-en-departamentos-mexico_21.jpg?1673903708" alt="" />
                </div>
              </div>
            </NavLink>
            <NavLink
              to={
                '/article'
              }
              state={{
                title: `Mercedes Cars Become More Elusive After 43% Jump in Prices`,
                desc: `(Bloomberg) -- Driving a shiny new Mercedes-Benz may soon become a distant dream for many but the most affluent. 

                The average price of a Mercedes reached some €72,900 ($76,590) last year — a 43% increase over 2019 levels. That chimes with the carmaker’s push even further upmarket by focusing on top-end models like the S-Class sedan to bolster profits. The company has been working through pent-up demand after chip shortages curbed production last year.
                
                Mercedes is hiking the prices even of entry-level models like the A-Class hatchback. Drivers are increasingly only be able to buy versions of the car with bells-and-whistle options as standard.
                
                Mercedes isn’t alone. Around the world, manufacturers are reaping the benefits of selling fewer but more expensive cars. In the US, average monthly payments for a new car nearly doubled from late 2019. And as battery-powered vehicles tend to cost more than the average combustion-engine car, the shift to EVs may make the affordability crisis even worse.
                    `,
                image: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iERNdDps.qs8/v1/-1x-1.jpg'
              }}>
              <div className='relative border-t border-black  ml-20 mr-20 '>
                <div className='mt-10'>
                  <h3
                    style={{
                      fontFamily: 'Medium',
                    }}
                    className=''>♦Automobile</h3>

                  <h1
                    style={{
                      fontFamily: 'Medium',

                    }}
                    className='text-4xl absolute bg-white rounded-r-full px-3 py-2'>Mercedes Cars Become</h1>
                  <h1
                    style={{
                      fontFamily: 'Medium',

                    }}
                    className='text-4xl absolute bg-white rounded-r-full mt-[50px] px-5 py-3 left-[-3px]'> More Elusive After 43% Jump in Prices</h1>
                  <img
                    className='rounded-2xl shadow-lg'
                    src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iERNdDps.qs8/v1/-1x-1.jpg" alt="" />
                </div>
              </div>
            </NavLink>


          </div>
          <NavLink
            to={
              '/article'
            }
            state={{
              title: `Haute Couture Covers a Curiously Broad Waterfront`,
              desc: `PARIS — Maria Grazia Chiuri’s celebrations of women for Christian Dior have most often been spun around the work of a female artist where the inspiration is necessarily more abstract, but the couture collection she showed on Monday was rooted in a real life, that of entertainer, activist and Black icon Josephine Baker and it was all the stronger for it. Chiuri’s starting point was a trove of old photos of Baker performing in New York in the 1950s, dressed in Dior, but the designer drew a narrative thread back to the 1920s, when Baker first arrived in Paris and created a sensation at the Revue Nègre and, later, the Folies Bergère. Sinuous metallic sheaths and flapper dresses fringed with crystal evoked the Jazz Age, undergarments wrapped in velvet robes suggested loungewear for backstage dressing rooms. A clutch of spectacularly simple columnar evening gowns in glistening satin and decadently toned crushed velvet — all of them crumpled, lived in — sang to the single spotlight of the cabaret star.

            A good half of the collection was made up of daywear: tailored suits, coats, dresses, some in the men’s fabrics favoured by Monsieur Dior. Lengths were a sober mid-calf, which loaned a vintage flavour compounded by the hair, the makeup and the footwear (embroidered velvet shoes with a hunky mid-heel). But it was quite a pleasing effect. Chiuri said she was drawn to Baker because she understood the power of dress to confront racial stereotypes, and confound expectations of gender roles, like another famous Dior customer, Marlene Dietrich. Those women resonated with her, to the point where Chiuri picked the tuxedo coat as a personal favourite from her new collection. (Baker and Dietrich did almost as much for a man’s tuxedo as Fred Astaire and Cary Grant.) “That’s what I like for myself, really clean and timeless,” she added. And maybe it was that intimate personal resonance that gave this collection its subtle kick. It had soul.
                    `,
              image: 'https://img.businessoffashion.com/resizer/O0PjrmpttThkX_fZp0usZPBzcVI=/1800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/5VOICRFEMRBCVAT7QVU6KTPNYI.jpg'
            }}>
            <div className=' ml-20 mr-20 '>
              <div className='relative mt-10'>
                <h3
                  style={{
                    fontFamily: 'Medium',
                  }}
                  className='text-xl absolute bg-white rounded-r-full mt-[458px] ml-10 px-5 py-2'>♦Fashion</h3>

                <h1
                  style={{
                    fontFamily: 'Medium',
                  }}
                  className='text-6xl absolute bg-white rounded-r-full mt-[500px] ml-10 px-5 py-5'>Haute Couture Covers</h1>
                <h1
                  style={{
                    fontFamily: 'Medium',
                  }}
                  className='text-6xl absolute bg-white rounded-r-full mt-[570px] ml-10 px-5 py-5'>a Curiously Broad Waterfront</h1>
                <img
                  className='rounded-2xl shadow-lg m-10'
                  src="https://img.businessoffashion.com/resizer/O0PjrmpttThkX_fZp0usZPBzcVI=/1800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/5VOICRFEMRBCVAT7QVU6KTPNYI.jpg" alt="" />
              </div>
            </div>
          </NavLink>

        </div>

        <div className='w-full'>

          {/* Latest section */}
          <h1
            style={{
              fontFamily: 'Medium',
            }}
            className='text-left text-4xl mb-4 ml-44'>☐ Latest News</h1>
          <div className='flex justify-center items-center'>
            <NavLink
              to={
                '/article'
              }
              state={{
                title: `Twitter Shuts Delhi, Mumbai Offices, Asks Staff To Work From Home: Report`,
                desc: `

                    `,
                image: 'https://c.ndtvimg.com/2022-03/7uqu6q28_twitter-office_625x300_04_March_22.jpg'
              }}>
              <div className='relative border-t border-black  ml-20 mr-20 '>
                <div className='mt-10'>
                  <h3
                    style={{
                      fontFamily: 'Medium',
                    }}
                    className=''>♦Design</h3>

                  <h1
                    style={{
                      fontFamily: 'Medium',

                    }}
                    className='text-4xl bg-white rounded-lg px-3 py-2 '>Twitter Shuts Delhi, Mumbai Offices, Asks Staff To Work From Home: Report</h1>
                  <img
                    className='rounded-2xl shadow-lg w-full h-84 object-cover'
                    src="https://c.ndtvimg.com/2022-03/7uqu6q28_twitter-office_625x300_04_March_22.jpg" alt="" />
                </div>
              </div>
            </NavLink>
            <NavLink
              to={
                '/article'
              }
              state={{
                title: `When Fiji President told Jaishankar about his favourite Hindi film`,
                desc: `External affairs minister S Jaishankar on Thursday recalled Fiji President Wiliame Katonivere's comment on the influence of Hindi cinema on him and his favourite Hindi film. Speaking at the World Hindi Conference in Suva, Jaishankar said that the goal was to make Hindi a global language and the conference becomes a platform where every Hindi lover can participate.

                "I think everyone is hopeful that this conference will be a Mahakumbh of Hindi where people from all over the world will come. It will become a platform for a global networking platform in the subject of Hindi," he said.
                
                Jaishankar said India has assured Fiji that they will help to fulfill the demand for teaching Hindi, Tamil, and other languages.
                
                Recalling Fiji's President's remark on Hindi Cinema's influence, Jaishankar said that Katonivere told him Hindi film has a great impact on him and has seen many films.
                
                “When I asked which is his favourite film, he said 'no question, Sholay'. He said that he still remembers the song 'Yeh Dosti',” the minister said.
                
                India and Fiji share close, friendly and long-standing relations with a strong element of development partnership. This year marks the 75th year of the establishment of India's diplomatic presence in Fiji.

Jaishankar's visit marks the first high-level visit to Fiji since the change of government in December 2022, the MEA statement said.

Jaishankar had earlier addressed the Indian diaspora in Suva.

"The Indian community spreading across the world has achieved its own milestones, and is today an enormous asset to both India, to the country where they live, and the world," the external affairs minister said while addressing the Indian Diaspora in Fiji on Thursday.


                    `,
                image: 'https://www.hindustantimes.com/ht-img/img/2023/02/17/550x309/jaishankar_with_fiji_president_1676597467705_1676597467858_1676597467858.jpg'
              }}>
              <div className='relative border-t border-black  ml-20 mr-20 '>
                <div className='mt-10'>
                  <h3
                    style={{
                      fontFamily: 'Medium',
                    }}
                    className=''>♦Geopolitics</h3>


                  <h1
                    style={{
                      fontFamily: 'Medium',

                    }}
                    className='text-2xl'>When Fiji President told Jaishankar about his favourite Hindi film</h1>
                  <img
                    className='rounded-2xl shadow-lg'
                    src="https://www.hindustantimes.com/ht-img/img/2023/02/17/550x309/jaishankar_with_fiji_president_1676597467705_1676597467858_1676597467858.jpg" alt="" />
                </div>
              </div>
            </NavLink>


          </div>
          <NavLink
            to={
              '/article'
            }
            state={{
              title: `Hermès Wins Trademark Lawsuit Against MetaBirkins NFTs, Setting Powerful Precedent for NFT Creators`,
              desc: `After several days of deliberation, the nine-person jury in the copyright infringement trial between Hèrmes and non-fungible token (NFT) artist Mason Rothschild ruled Wednesday in favor of the French luxury brand.
              The Hermès lawsuit involved Rothschild's MetaBirkins NFT collection. The jury awarded $133,000 in damages to Hermès, determining that Rothschild did, in fact, profit off Hermès' goodwill by producing NFTs based on the design house's Birkin bags.
              The jury also decided the NFTs were not protected under the First Amendment of the U.S. Constitution, as Rothschild's lawyers had argued during the trial.
              The case sets an important precedent for NFT creators and builds the framework for intellectual property (IP) law as it relates to digital creations. Down the line, creators like Rothschild might have to be more careful creating NFTs with other brands' IP to avoid future trademark lawsuits.
              David Leichtman, Leichtman Law managing partner, told CoinDesk TV on Tuesday that the case wasn’t necessarily about Mason Rothschild’s use of the protected Birkin brand. Rather, it was about whether he intended to mislead consumers into believing the MetaBirkin NFTs were associated with Hermès’ flagship product.
              “The question is, were [consumers] really going to be confused by the MetaBirkins, whether or not the relevant consuming audience for Hermès products would be confused by the defendant’s works,” said Leichtman.
              Hermès filed suit against Rothschild in January 2022 after the Los Angeles-based artist released an NFT collection titled MetaBirkins based on the brand’s iconic Birkin handbag. In the filing, the fashion house claimed that Rothschild was "stealing the goodwill in Hermès' famous intellectual property to create and sell his own line of products," which could create confusion among its consumer base.

                    `,
              image: 'https://img.businessoffashion.com/resizer/im9AjToZX872xGLRu6Hk_w-MCDE=/1800x0/filters:format(jpg):quality(70):focal(829x500:839x510)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/CHUNTQT6AZFOTFV7OM5ADQ67XM.jpg'
            }}>
            <div className=' ml-20 mr-20 '>
              <div className='relative mt-10'>
                <h3
                  style={{
                    fontFamily: 'Medium',
                  }}
                  className='text-xl absolute bg-white rounded-r-full mt-[458px] ml-10 px-5 py-2'>♦Technology</h3>

                <h1
                  style={{
                    fontFamily: 'Medium',
                  }}
                  className='text-6xl absolute bg-white rounded-r-full mt-[500px] ml-10 px-5 py-5'>Hermès Wins Trademark Lawsuit Against MetaBirkins NFTs,</h1>
                <h1
                  style={{
                    fontFamily: 'Medium',
                  }}
                  className='text-6xl absolute bg-white rounded-r-full mt-[580px] ml-10 px-5 py-5'>Setting Powerful Precedent for NFT Creators</h1>
                <img
                  className='rounded-2xl shadow-lg m-10'
                  src="https://img.businessoffashion.com/resizer/im9AjToZX872xGLRu6Hk_w-MCDE=/1800x0/filters:format(jpg):quality(70):focal(829x500:839x510)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/CHUNTQT6AZFOTFV7OM5ADQ67XM.jpg" alt="" />
              </div>
            </div>
          </NavLink>

        </div>



      </div>

    </div >
  )
}

export default Trending2