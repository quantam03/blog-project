import { useState, createContext } from "react";

export const MainContext = createContext();

export const DataContext = (props) => {
  const [Data, setData] = useState([
    {
        id: "1",
        title: ` Artificial Intelligence (AI) and Machine Learning`,
        body: `Artificial Intelligence, or AI, has already received a lot of buzz in the past decade, but it continues to be one of the new technology trends because of its notable effects on how we live, work and play are only in the early stages.`,
        category: `Technology`,
        date: `March 16, 2021`,
        url: `	https://hackr.io/blog/ai-vs-machine-learning/thumbnail/large`,
      },
  
      {
        id: "2",
        title: `Robotic Process Automation (RPA)`,
        body: `Like AI and Machine Learning, Robotic Process Automation, or RPA, is another technology that is automating jobs. RPA is the use of software to automate business processes such as interpreting applications, processing transactions, dealing with data, and even replying to emails. RPA automates repetitive tasks that people used to do. `,
        category: `Technology`,
        date: `March 16, 2022`,
        url: `https://enterprisersproject.com/sites/default/files/styles/google_discover/public/images/cio_rpa_robot_automation.png?itok=ZK5ua3iR`,
      },
      {
        id: "3",
        title: `Edge Computing`,
        body: `Formerly a new technology trend to watch, cloud computing has become mainstream, with major players AWS (Amazon Web Services), Microsoft Azure and Google Cloud Platform dominating the market. The adoption of cloud computing is still growing, as more and more businesses migrate to a cloud solution. But it’s no longer the emerging technology trend. Edge is.`,
        category: `Technology`,
        date: `January 16, 2022`,
        url: `https://www.thinkebiz.net/wp-content/uploads/2019/02/Edge-Computing-Blog_image01-2.png`,
      },
      {
        id: "4",
        title: `Quantum Computing `,
        body: `Next remarkable technology trend is quantum computing, which is a form of computing that takes advantage of quantum phenomena like superposition and quantum entanglement. This amazing technology trend is also involved in preventing the spread of the coronavirus, and to develop potential vaccines, thanks to its ability to easily query, monitor, analyze and act on data, regardless of the source. Another field where quantum computing is finding applications is banking and finance, to manage credit risk, for high-frequency trading and fraud detection.`,
        category: `Technology`,
        date: `August 16, 2021`,
        url: `	https://www.gao.gov/assets/extracts/248bdf93a9626f7c95b9ebad017fa3ec/Fast_Facts_v3_104422-AM-1.png`,
      },
      {
        id: "5",
        title: ` Blockchain`,
        body: `Although most people think of blockchain technology in relation to cryptocurrencies such as Bitcoin, blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change. Hence the term “chain” because you’re making a chain of data. Not being able to change the previous blocks is what makes it so secure. In addition, blockchains are consensus-driven, so no one entity can take control of the data. With blockchain, you don’t need a trusted third-party to oversee or validate transactions.y`,
        category: `Technology`,
        date: `April 22, 2022`,
        url: `https://analyticsinsight.b-cdn.net/wp-content/uploads/2021/11/The-Current-State-of-Blockchain-Technology-in-Financial-Industries.jpg`,
      },
    {
      id: "1",
      title: `Istanbul, Turkey`,
      body: `Turkey's capital city is another destination that offers a great mix of culture, food, and history. There are thousands of years of history here, starting with Ancient Greeks and Ancient Romans and leading up through the Ottoman Empire.`,
      category: "Tourism",
      date: `March 14, 2022`,
      url: `https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-istanbul-turkey.jpg`,
    },
    {
      id: "2",
      title: " Machu Picchu, Peru",
      body: `Located high in the Andes mountains of Peru, Machu Picchu is now believed to have been a sacred royal retreat for the Incan rulers. Built in the 15th century AD and abandoned less than a 100 years later, the remote site continues to amaze with its perfectly joined, mortarless, intricate stonework. Huge multi-ton blocks of stone are perfectly joined with each other, without the use of mortar or cement.`,
      category: "Tourism",
      date: `March 14, 2022`,
      url: `https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-machu-picchu-peru.jpg`,
    },
    {
      id: "3",
      title: "Rome,Italy",
      body: `It is known as the “Heart of India” because of a lot many things that it has to offer. It has been home to cultural and spiritual heritage of almost all the religions.`,
      category: "Tourism",
      date: `March 14, 2022`,
      url: `https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-rome-italy.jpg`,
    },
    {
      id: "4",
      title: "Maui, Hawaii",
      body: `This Hawaiian island offers a wide range of experiences for visitors. You can surf, enjoy a meal on the beach at a five-star luxury resort in Wailea, ride a horse across a dormant volcano in Haleakala National Park, or hike through a rainforest in the West Maui Mountains. The natural scenery is amazing-it's truly one of the most beautiful islands in the world.`,
      category: "Tourism",
      date: `March 14, 2022`,
      url: `https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-maui-hawaii.jpg`,
    },
    {
      id: "5",
      title: " Cartagena, Columbia",
      body: `Colorful Cartagena, one of the great historical Spanish cities of the Caribbean, pulses with life along the north coast of Colombia. Founded in 1533, its old walled city has seen its fortunes rise and fall through the centuries and has more recently experienced a resurgence and revitalization.`,
      category: "Tourism",
      date: `March 14, 2022`,
      url: `https://www.planetware.com/wpimages/2021/11/best-places-to-visit-in-the-world-colombia-cartagena-walled-city.jpg`,
    },
    {
      id: "1",
      title: `Samsung Galaxy Z Flip3`,
      body: `This is the first foldable phone that might be worth a go. The first few iterations of foldables were marred with reliability issues and huge price tags. However at £949, this phone is likely to cost as much on contract as the latest Apple or Google devices.`,
      category: "Gadgets",
      date: `March 14, 2022`,
      url: "https://images.immediate.co.uk/production/volatile/sites/4/2021/08/Samsung-Galaxy-Z-Flip3-5G-Smartphone-8448c40.jpg?webp=true&quality=90&resize=620%2C425",
    },
    {
      id: "2",
      title: `Tag Heuer Connected Calibre E4`,
      body: `If you like the idea of a smartwatch, but also want to feel like the classy individual you are, the Tag Heuer Connected Calibre E4 could be just what you need. It is by no means affordable at £1550 but that price is pretty normal from a brand like this.,`,
      category: "Gadgets",
      date: `March 14, 2022`,
      url: `https://images.immediate.co.uk/production/volatile/sites/4/2022/03/tag_heuer.0-6bb5ce0-e1646819187441.jpg?webp=true&quality=90&resize=620%2C413`,
    },
    {
      id: "3",
      title: `LEGO App-controlled Transformation Vehicle`,
      body: `When it comes to LEGO, there is a lot of choice. However, this new LEGO Technic set has a unique feature to help it stand out – the ability to control it via an app.
      With the app, you can drive the vehicle around, and when you flip the car over (or hit a wall), it will reveal a completely different car below. Because the LEGO car features suspension, you can even drive it over uneven surfaces.`,
      category: "Gadgets",
      date: `March 15, 2022`,
      url: `https://images.immediate.co.uk/production/volatile/sites/4/2022/03/Lego-set-9eacf64-e1646818279991.jpg?webp=true&quality=90&resize=620%2C646`,
    },
    {
      id: "4",
      title: `Mac Studio`,
      body: `In its latest launch event, Apple listed off a host of new gadgets, but it’s the new Mac Studio that stands out as the most interesting addition. A small desktop computer with a surprisingly high amount of power, the Mac Studio is aimed at creatives with digitally-intensive work.`,
      category: "Gadgets",
      date: `March 15, 2022`,
      url: `https://images.immediate.co.uk/production/volatile/sites/4/2022/03/mac-studio-202203-gallery-4-652779b.jpeg?webp=true&quality=90&resize=620%2C413`,
    },
    {
      id: "5",
      title: `Skydio 2+`,
      body: `There are a lot of drones on the market right now, all offering something slightly different. However, Skydio’s 2+ has a unique feature we haven’t seen elsewhere that really helps it to stand out.`,
      category: "Gadgets",
      date: `March 16, 2022`,
      url: `https://images.immediate.co.uk/production/volatile/sites/4/2022/02/Skydio-dc14caf.png?webp=true&quality=90&resize=620%2C413`,
    },
   
    {
      id: "1",
      title: "Gangubaikathiawadi",
      body: `Gangubai Kathiawadi is a Bollywood drama movie, helmed by Sanjay Leela Bhansali. The movie star Alia Bhatt in the lead role. The movie has its screenplay by Hussain Zaidi. The movie depicts the story of Gangubai Kothewali, a young girl who has been sold into prostitution by her suitor Ramnik Lal, and how she becomes the madam of a brothel in Kamathipura.
      `,
      category: "Bollywood",
      date: "March 9, 2022",
      url: `https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/gangubaikathiawadi-20200116102213-18864.jpg`,
    },
    
    {
      id: "2",
      title: "Jhund",
      body: `Jhund is 2022 Bollywood sports drama, which has been directed by Nagraj Manjule. The movie star Amitabh Bachchan in the lead role.  In Jhund, Amitabh Bachchan will be seen essaying the role of a retired sports teacher who starts a slum soccer movement. The movie is produced by Bhushan Kumar, Krishan Kumar, Savita Raj, Raaj Hiremath and Nagraj Manjule.`,
      category: "Bollywood",
      date: "March 26, 2021",
      url: "https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/jhund-20220202100800-17208.jpg",
    },
    {
        id: "3",
        title: "The Kashmir Files",
        body: `The Kashmir Flies is a Bollywood drama, helmed by Vivek Ranjan Agnihotri. The Kashmir Flies stars Darshan Kumar, Mithun Chakraborty, Anupam Kher and Pallavi Joshi in the lead roles. The movie is produced by Tej Narayan Agarwal, Abhishek Agarwal, Pallavi Joshi and Vivek Agnihotri under the Zee Studios, IAmBuddha and Abhishek Agarwal Arts banners. The movie depicts the story of the exodus of Kashmiri Hindus in the early 1990's due to the Kashmir Insurgency..`,
        category: "Bollywood",
        date: "March 6, 2022",
        url: "https://static.toiimg.com/photo/89726146.jpeg",
      },
    {
      id: "4",
      title: "Looop Lapeta",
      body: `Looop Lapeta is 2022 Indian Hindi-language comedy thriller film directed by Aakash Bhatia and jointly produced by Sony Pictures Films India, Ellipsis Entertainment and Aayush Maheshwari. An official adaptation of the award-winning German film Run Lola Run by Tom Tykwer, the film stars Taapsee Pannu and Tahir Raj Bhasin in the lead roles.`,
      category: "Bollywood",
      date: "march 1, 2022",
      url: `https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1641636960119.jpg-org`,
    },
  
    {
      id: "5",
      title: "Love Hostel",
      body: `Love Hostel is a Bollywood drama, helmed by Shanker Raman. The movie stars Sanya Malhotra, Vikrant Massey and Bobby Deol in the lead roles. Love Hostel will be produced by Gauri Khan, Manish Mundra and Gaurav Verma. The movie 'Love Hostel' is all about an eloped couple. How things turn upside down when they are being hunted by a greedy man.`,
      category: "Bollywood",
      date: "March 2, 2022",
      url: `https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/lovehostel-20220220101004-19629.jpg`,
    },
    {
      id: "1",
      title: `IPL Teams Rejoice As Rabada, Jansen & Markram Excluded From SA Squad For Bangladesh Tests`,
      body: `South Africa excluded players like Kagiso Rabada, Marco Jansen, Aiden Markram from the upcoming Tests against Bangladesh, which allows them to play in the IPL.`,
      category: "Sports",
      date: `March 13, 2022`,
      url: `https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/cifwxhjjf5feebvy_1647595698.jpeg`,
    },
    {
      id: "2",
      title: `CL Draw`,
      body: `The winner of Benfica vs Liverpool will be up against the winner of Villarreal vs Bayern in the semi-finals. While the winner of Manchester City vs Atletico Madrid will be up against the winners of the Chelsea vs Real Madrid tie..`,
      category: "Sports",
      date: `March 14, 2022`,
      url: `https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/n0ynpo09q6gcrkm0_1647598834.jpeg`,
    },
    {
      id: "3",
      title: `Brave Barcelona beat the boo boys for brilliant European win`,
      body: `After being kept awake at all hours thanks to that old tried and tested trick from local supporters of letting off fireworks and making noise outside the team hotel, it’s a wonder that Barca’s players had the energy to compete in what was expected to be a high-octane European night. `,
      category: "Sports",
      date: `March 14, 2022`,
      url: `https://cdn.vox-cdn.com/thumbor/amhSHN7466ZPFA6Je6rl_9_dooE=/0x0:3084x2056/1220x813/filters:focal(925x178:1417x670):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70639663/1239271317.0.jpg`,
    },

    {
      id: "4",
      title: `Players of India women’s cricket team celebrate Holi in New Zealand. BCCI shares post`,
      body: `It’s the festival of colours and people across the country are celebrating the joyous occasion, which is Holi. Social media platforms have been buzzing with photos and videos of netizens enjoying the festival with colours and it has indeed made everyone’s timelines colourful. However, one post has made Twitter a bit more brighter on Holi and that is a tweet from the BCCI.`,
      category: "Sports",
      date: `March 14, 2022`,
      url: `https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/cc.jpg?JNdaKvmvRlQTh9vqz.Fmj1WCQwuU9AU.&size=770:433`,
    },
    {
      id: "5",
      title: `All England Open 2022: Lakshya Sen gets walkover into semis`,
      body: `India's rising star Lakshya Sen has progressed to the semi-final of the prestigious All England Open 2022 after his Chinese opponent Lu Guang Zu gave a walkover from their quarter-final outing on Friday in Birmingham. The top-ranked Indian men's singles shutter gets a much-needed break after a whirlwind European campaign so far. `,
      category: "Sports",
      date: `March 14, 2022`,
      url: `https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/lakshyasenbwfworldchampionship_0_1200x768.jpeg?sRFCR2W7MC3eyQq9Y7iwoXpy9XcZp85q&size=770:433`,
    },
  ]);

  return (
    <>
      <MainContext.Provider value={[Data, setData]}>
        {props.children}
      </MainContext.Provider>
    </>
  );
};
