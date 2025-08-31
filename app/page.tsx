import React from 'react'
import VideoHero from './components/VideoHero'
import SubstackEmbed from './components/SubstackEmbed'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <VideoHero />
      <section id="about" className={styles.contentArea}>
        <div className={styles.blackStrip}>
          <h2 className={styles.sectionTitle}>Building the future through first principles in business, mathematics, and markets</h2>
        </div>
        <div className={styles.bioSection}>
          <div className={styles.bioContent}>
            <p className={styles.bioIntro}>
              Hi there, I'm Yash — welcome to my corner of the internet.
            </p>
            <p className={styles.bioParagraph}>
              I'm a Product Manager focused on building innovative financial technology solutions. Currently, I'm at Token Relations developing an onchain analytics platform that helps institutions, VCs, and traders navigate billions of dollars in stablecoins, tokenized assets, and blockchain data.
            </p>
            <p className={styles.bioParagraph}>
              My background spans quantitative finance, including LSTM models, pairs trading, and volatility trading, with professional experience at RegAlytics and QuantConnect. I've also built large-scale GenAI pipelines that help teams save time and resources across research, development, and business operations.
            </p>
            <p className={styles.bioParagraph}>
              Beyond the technical work, I bridge the gap between cutting-edge technology and practical application, whether implementing video generation models for personalized content at scale or crafting intuitive interfaces that make sophisticated analytics accessible.
            </p>
            <p className={styles.bioParagraph}>
              When I'm not analyzing markets or building products, you'll find me traveling, surfing, playing soccer, or supporting water and forest conservation efforts. I'm always excited to connect with others who share a vision for impactful technology.
            </p>
          </div>
        </div>
        <div className={styles.skillsSection}>
          <div className={styles.skillsContent}>
            <h3 className={styles.skillsTitle}>Skills & Expertise</h3>
            {/* Skills content will go here */}
          </div>
        </div>
      </section>
      <section className={styles.fullScreenBlocks}>
        <div className={styles.blocksContainer}>
          <div className={styles.block}>
            <div className={styles.blockContent}>
              <h3 className={styles.blockTitle}>AI</h3>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.blockContent}>
              <h3 className={styles.blockTitle}>Products</h3>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.blockContent}>
              <h3 className={styles.blockTitle}>Markets</h3>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.blockContent}>
              <h3 className={styles.blockTitle}>Creative</h3>
            </div>
          </div>
        </div>
      </section>
      <section id="publications" className={styles.contentArea}>
        <div className={styles.publicationsSection}>
          <div className={styles.publicationsContent}>
            <h2 className={styles.publicationsTitle}>Publications & Research</h2>
            <p className={styles.publicationsDescription}>Here are some of my favorite pieces I've written that I'm particularly proud of - covering everything from blockchain infrastructure to emerging market trends.</p>
            <div className={styles.publicationsGrid}>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>Polygon Biannual Report</h3>
                <a 
                  href="https://www.token-relations.xyz/p/polygon-biannual-report-390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}
                >
                  Read here
                </a>
              </div>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>Ripple Report</h3>
                <a 
                  href="https://www.token-relations.xyz/p/ripple-report"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}
                >
                  Read here
                </a>
              </div>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>DeCharge Report</h3>
                <a 
                  href="https://www.token-relations.xyz/p/decharge-report"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}
                >
                  Read here
                </a>
              </div>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>Polygon ranks top 2 in net flows while LATAM payments surges past $1B</h3>
                <a 
                  href="https://www.token-relations.xyz/p/polygon-ranks-top-2-in-net-flows"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}
                >
                  Read here
                </a>
              </div>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>Polygon expands European RWAs with Spanish equity token, $118M in German digital bonds</h3>
                <a 
                  href="https://www.token-relations.xyz/p/polygon-expands-european-rwas-with"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}
                >
                  Read here
                </a>
              </div>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>XRPL expands institutional RWA tokenization in Brazil and the Middle East, supported by Ripple</h3>
                <a 
                  href="https://www.token-relations.xyz/p/xrpl-expands-institutional-rwa-tokenization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}
                >
                  Read here
                </a>
              </div>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>AI platforms Magic Newton, Sentient Chat expand onchain use cases for Agglayer users</h3>
                <a 
                  href="https://www.token-relations.xyz/p/ai-platforms-magic-newton-sentient"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}
                >
                  Read here
                </a>
              </div>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>Miden raises $25M following Agglayer Breakout program graduation</h3>
                <a 
                  href="https://www.token-relations.xyz/p/miden-raises-25m-following-agglayer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}
                >
                  Read here
                </a>
              </div>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>Ripple alongside Peersyst and Axelar launch the XRPL EVM sidechain, bringing XRP to Ethereum ecosystem</h3>
                <a 
                  href="https://www.token-relations.xyz/p/ripple-launches-xrpl-evm-sidechain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}
                >
                  Read here
                </a>
              </div>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>Making sense of Ripple's $1.25B Hidden Road acquisition and RLUSD expansion to Aave, Kraken</h3>
                <a 
                  href="https://www.token-relations.xyz/p/making-sense-of-ripples-125b-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}
                >
                  Read here
                </a>
              </div>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>Polygon ranks top 3 for EVM transactions and surpasses $2B in stablecoin market cap</h3>
                <a 
                  href="https://www.token-relations.xyz/p/polygon-ranks-top-3-for-evm-transactions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}
                >
                  Read here
                </a>
              </div>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>Democratizing Real Estate: How Polygon's infrastructure is powering a tokenized property platform</h3>
                <a 
                  href="https://www.token-relations.xyz/p/democratizing-real-estate-how-polygons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}
                >
                  Read here
                </a>
              </div>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>Polygon stablecoin payments hits new highs with emerging market use heating up</h3>
                <a 
                  href="https://www.token-relations.xyz/p/polygon-stablecoin-payments-hits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}
                >
                  Read here
                </a>
              </div>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>Rethinking governance: Optimism and Uniswap experiment with futarchy</h3>
                <a 
                  href="https://www.token-relations.xyz/p/rethinking-governance-optimism-and"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}
                >
                  Read here
                </a>
              </div>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>World launches PBH on testnet to prioritize human transactions and decentralization</h3>
                <a 
                  href="https://www.token-relations.xyz/p/world-launches-pbh-on-testnet-to"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}
                >
                  Read here
                </a>
              </div>
              <div className={styles.publicationCard}>
                <h3 className={styles.publicationTitle}>Base is now 10x faster as Flashblocks introduce subsecond processing onchain</h3>
                <a 
                  href="https://www.token-relations.xyz/p/base-is-now-10x-faster-as-flashblocks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.publicationLink}
                >
                  Read here
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className={styles.contentArea}>
        <div className={styles.projectsSection}>
          <div className={styles.projectsContent}>
            <h2 className={styles.projectsTitle}>Products & Projects</h2>
            <p className={styles.projectsDescription}>A selection of products and platforms I've built or contributed to - from enterprise blockchain analytics products to quantitative finance research projects.</p>
            
            <div className={styles.projectsGrid}>
              <div className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>Token Relations Analytics Platform</h3>
                  <div className={styles.projectTags}>
                    <span className={styles.tag}>Blockchain Analytics</span>
                    <span className={styles.tag}>Real World Assets</span>
                    <span className={styles.tag}>Stablecoins</span>
                    <span className={styles.tag}>DeFi</span>
                    <span className={styles.tag}>Data Visualization</span>
                  </div>
                </div>
                <p className={styles.projectDescription}>
                  Onchain analytics platform helping institutions, VCs, and traders navigate billions of dollars in stablecoins, tokenized assets, and blockchain data. Features real-time tracking, portfolio analysis, and market intelligence across multiple networks.
                </p>
                <div className={styles.projectFeatures}>
                  <ul>
                    <li>Real-time blockchain data aggregation across 15+ networks such as Bitcoin, Ethereum, Avalanche</li>
                    <li>Institutional-grade portfolio tracking and analytics</li>
                    <li>Custom dashboards for VCs and trading firms</li>
                    <li>API endpoints for programmatic access</li>
                  </ul>
                </div>
                <div className={styles.projectLinks}>
                  <a href="https://www.token-relations.com/dashboard" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    View Platform
                  </a>
                </div>
              </div>

              <div className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>PCA Statistical Arbitrage for Pairs Trading</h3>
                  <div className={styles.projectTags}>
                    <span className={styles.tag}>Principal Component Analysis</span>
                    <span className={styles.tag}>Statistical Arbitrage</span>
                    <span className={styles.tag}>Quantitative Finance</span>
                    <span className={styles.tag}>Python</span>
                  </div>
                </div>
                <p className={styles.projectDescription}>
                  Principal Component Analysis implementation for statistical arbitrage in pairs trading by identifying pairs of stocks that exhibit similar behavior in response to market conditions. Uses dimensionality reduction techniques to find correlated trading opportunities.
                </p>
                <div className={styles.projectFeatures}>
                  <ul>
                    <li>PCA-based stock correlation analysis</li>
                    <li>Pairs identification through statistical modeling</li>
                    <li>Market-neutral trading strategy development</li>
                    <li>Risk-adjusted return optimization</li>
                  </ul>
                </div>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/yashh-d/Quant-Projects/blob/main/PCA_Pairs_StatArb.ipynb" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    View Code
                  </a>
                </div>
              </div>

              <div className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>Mega Cap Tech LSTM Prediction Model</h3>
                  <div className={styles.projectTags}>
                    <span className={styles.tag}>LSTM</span>
                    <span className={styles.tag}>Deep Learning</span>
                    <span className={styles.tag}>Stock Prediction</span>
                    <span className={styles.tag}>TensorFlow</span>
                  </div>
                </div>
                <p className={styles.projectDescription}>
                  Long Short-Term Memory neural network model for predicting mega-cap technology stock prices. Leverages sequential patterns in historical price data to forecast future movements for major tech companies like Apple, Microsoft, Google, and Amazon.
                </p>
                <div className={styles.projectFeatures}>
                  <ul>
                    <li>LSTM neural network architecture for time series forecasting</li>
                    <li>Multi-stock prediction across mega-cap tech companies</li>
                    <li>Feature engineering with technical indicators</li>
                    <li>Model evaluation with performance metrics and visualization</li>
                  </ul>
                </div>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/yashh-d/LSTM/blob/main/Mega_Cap_Tech_LSTM.ipynb" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    View Code
                  </a>
                </div>
              </div>

              <div className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>GenAI React Agents & LLM Research Pipelines</h3>
                  <div className={styles.projectTags}>
                    <span className={styles.tag}>Generative AI</span>
                    <span className={styles.tag}>React Agents</span>
                    <span className={styles.tag}>LLM Pipelines</span>
                    <span className={styles.tag}>Research Automation</span>
                  </div>
                </div>
                <p className={styles.projectDescription}>
                  Advanced generative AI systems built with React-based intelligent agents and automated LLM pipelines for research workflows. Streamlines data analysis, report generation, and market intelligence gathering through AI-powered automation.
                </p>
                <div className={styles.projectFeatures}>
                  <ul>
                    <li>Intelligent React agents for automated research tasks</li>
                    <li>LLM pipeline architecture for content generation</li>
                    <li>Multi-modal data processing and analysis</li>
                    <li>Automated report generation and market insights</li>
                  </ul>
                </div>
                <div className={styles.projectLinks}>
                  <span className={styles.projectStatus}>Proprietary Technology</span>
                </div>
              </div>

              <div className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>YD Terminal</h3>
                  <div className={styles.projectTags}>
                    <span className={styles.tag}>Market Intelligence</span>
                    <span className={styles.tag}>Data Aggregation</span>
                    <span className={styles.tag}>Social Media Automation</span>
                    <span className={styles.tag}>Custom Terminal</span>
                  </div>
                </div>
                <p className={styles.projectDescription}>
                  Custom-built market intelligence terminal that aggregates real-time data from diverse sources including major Twitter accounts, DEXs, insider trading feeds, Federal Reserve announcements, inflation data, Walter Bloomberg, Gold Telegraph, political events, and CNBC. Features LLM-powered content automation for personalized posting across X, LinkedIn, and Substack.
                </p>
                <div className={styles.projectFeatures}>
                  <ul>
                    <li>Multi-source data aggregation from social media, financial markets, and institutions</li>
                    <li>Real-time monitoring of insider trading, Fed meetings, and macro indicators</li>
                    <li>LLM-powered content generation in personalized writing style</li>
                    <li>Automated cross-platform posting to X, LinkedIn, and Substack</li>
                    <li>Custom terminal interface for market intelligence workflow</li>
                  </ul>
                </div>
                <div className={styles.projectLinks}>
                  <span className={styles.projectStatus}>Proprietary System</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className={styles.contentArea}>
        <div className={styles.skillsSection}>
          <div className={styles.skillsContent}>
            <h2 className={styles.skillsTitle}>Skills & Technologies</h2>
            <p className={styles.skillsDescription}>Technical expertise across product management, engineering, and quantitative analysis.</p>
            
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h3 className={styles.categoryTitle}>Programming & Development</h3>
                <div className={styles.skillTags}>
                  <span className={styles.skillTag}>Python</span>
                  <span className={styles.skillTag}>C++</span>
                  <span className={styles.skillTag}>JavaScript</span>
                  <span className={styles.skillTag}>TypeScript</span>
                  <span className={styles.skillTag}>SQL</span>
                  <span className={styles.skillTag}>Solidity</span>
                  <span className={styles.skillTag}>Smart Contracts</span>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h3 className={styles.categoryTitle}>AI & Machine Learning</h3>
                <div className={styles.skillTags}>
                  <span className={styles.skillTag}>Machine Learning</span>
                  <span className={styles.skillTag}>Artificial Intelligence</span>
                  <span className={styles.skillTag}>Generative AI</span>
                  <span className={styles.skillTag}>Large Language Models</span>
                  <span className={styles.skillTag}>Deep Learning</span>
                  <span className={styles.skillTag}>Neural Networks</span>
                  <span className={styles.skillTag}>Computer Vision</span>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h3 className={styles.categoryTitle}>Data Science & Analytics</h3>
                <div className={styles.skillTags}>
                  <span className={styles.skillTag}>Data Structures & Algorithms</span>
                  <span className={styles.skillTag}>Pandas</span>
                  <span className={styles.skillTag}>NumPy</span>
                  <span className={styles.skillTag}>Statistical Analysis</span>
                  <span className={styles.skillTag}>Data Visualization</span>
                  <span className={styles.skillTag}>Big Data Processing</span>
                  <span className={styles.skillTag}>ETL Pipelines</span>
                  <span className={styles.skillTag}>The Graph</span>
                  <span className={styles.skillTag}>Alchemy</span>
                  <span className={styles.skillTag}>Dune Analytics</span>
                  <span className={styles.skillTag}>Blockchain Data Indexing</span>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h3 className={styles.categoryTitle}>Web & Mobile Technologies</h3>
                <div className={styles.skillTags}>
                  <span className={styles.skillTag}>Next.js</span>
                  <span className={styles.skillTag}>React</span>
                  <span className={styles.skillTag}>React Native</span>
                  <span className={styles.skillTag}>Node.js</span>
                  <span className={styles.skillTag}>APIs</span>
                  <span className={styles.skillTag}>SDKs</span>
                  <span className={styles.skillTag}>GraphQL</span>
                  <span className={styles.skillTag}>REST APIs</span>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h3 className={styles.categoryTitle}>Database & Infrastructure</h3>
                <div className={styles.skillTags}>
                  <span className={styles.skillTag}>PostgreSQL</span>
                  <span className={styles.skillTag}>MongoDB</span>
                  <span className={styles.skillTag}>Redis</span>
                  <span className={styles.skillTag}>AWS</span>
                  <span className={styles.skillTag}>Docker</span>
                  <span className={styles.skillTag}>Kubernetes</span>
                  <span className={styles.skillTag}>CI/CD</span>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h3 className={styles.categoryTitle}>Blockchain & Web3</h3>
                <div className={styles.skillTags}>
                  <span className={styles.skillTag}>DeFi Protocols</span>
                  <span className={styles.skillTag}>Ethereum</span>
                  <span className={styles.skillTag}>Layer 2 Solutions</span>
                  <span className={styles.skillTag}>Staking</span>
                  <span className={styles.skillTag}>Restaking</span>
                  <span className={styles.skillTag}>Liquid Staking</span>
                  <span className={styles.skillTag}>Real World Asset Tokenization</span>
                  <span className={styles.skillTag}>Stablecoins</span>
                  <span className={styles.skillTag}>Yield Strategies</span>
                  <span className={styles.skillTag}>Pendle</span>
                  <span className={styles.skillTag}>Morpho</span>
                  <span className={styles.skillTag}>Aave</span>
                  <span className={styles.skillTag}>Uniswap</span>
                  <span className={styles.skillTag}>Tokenomics</span>
                  <span className={styles.skillTag}>On-chain Analytics</span>
                  <span className={styles.skillTag}>Cross-chain Bridges</span>
                  <span className={styles.skillTag}>MEV</span>
                  <span className={styles.skillTag}>Lending Protocols</span>
                  <span className={styles.skillTag}>AMMs</span>
                  <span className={styles.skillTag}>Governance Tokens</span>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h3 className={styles.categoryTitle}>Quantitative Finance</h3>
                <div className={styles.skillTags}>
                  <span className={styles.skillTag}>Algorithmic Trading</span>
                  <span className={styles.skillTag}>Risk Management</span>
                  <span className={styles.skillTag}>Portfolio Optimization</span>
                  <span className={styles.skillTag}>Statistical Arbitrage</span>
                  <span className={styles.skillTag}>Options Pricing</span>
                  <span className={styles.skillTag}>Backtesting</span>
                  <span className={styles.skillTag}>Market Microstructure</span>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h3 className={styles.categoryTitle}>Product Management</h3>
                <div className={styles.skillTags}>
                  <span className={styles.skillTag}>Product Strategy</span>
                  <span className={styles.skillTag}>Roadmap Planning</span>
                  <span className={styles.skillTag}>User Research</span>
                  <span className={styles.skillTag}>A/B Testing</span>
                  <span className={styles.skillTag}>Agile/Scrum</span>
                  <span className={styles.skillTag}>Go-to-Market</span>
                  <span className={styles.skillTag}>Stakeholder Management</span>
                  <span className={styles.skillTag}>Product Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="creative" className={styles.contentArea}>
        <div className={styles.creativeSection}>
          <div className={styles.creativeContent}>
            <h2 className={styles.creativeTitle}>Creative & Visual Work</h2>
            <p className={styles.creativeDescription}>Exploring the intersection of technology, finance, and creative expression through visual storytelling and multimedia content.</p>
            
            <div className={styles.creativeGrid}>
              <div className={styles.creativeCard}>
                <div className={styles.creativeHeader}>
                  <h3 className={styles.creativeItemTitle}>Realistic Waterfall</h3>
                  <div className={styles.creativeTags}>
                    <span className={styles.creativeTag}>AI Generated</span>
                    <span className={styles.creativeTag}>Video</span>
                    <span className={styles.creativeTag}>Nature</span>
                  </div>
                </div>
                <div className={styles.videoContainer}>
                  <video 
                    className={styles.creativeVideo}
                    controls
                    preload="metadata"
                    poster=""
                  >
                    <source src="/Realistic_Waterfall_Video_Generated.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className={styles.creativeDescription}>
                  A fun concept for a L'Oréal nail polish ad I dreamed up - AI-generated waterfall with flowing, 
                  glossy textures that mirror the polish aesthetic.
                </p>
              </div>

              <div className={styles.creativeCard}>
                <div className={styles.creativeHeader}>
                  <h3 className={styles.creativeItemTitle}>Singing Labrador Skydives</h3>
                  <div className={styles.creativeTags}>
                    <span className={styles.creativeTag}>AI Generated</span>
                    <span className={styles.creativeTag}>Video</span>
                    <span className={styles.creativeTag}>Surreal</span>
                  </div>
                </div>
                <div className={styles.videoContainer}>
                  <video 
                    className={styles.creativeVideo}
                    controls
                    preload="metadata"
                    poster=""
                  >
                    <source src="/Singing_Labrador_Skydives_Great_Barrier_Reef.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className={styles.creativeDescription}>
                  Because why not? A singing Labrador skydiving over the Great Barrier Reef - 
                  just me experimenting with AI's creative storytelling limits.
                </p>
              </div>

              <div className={styles.creativeCard}>
                <div className={styles.creativeHeader}>
                  <h3 className={styles.creativeItemTitle}>Meet Me Where the Sun Goes Down</h3>
                  <div className={styles.creativeTags}>
                    <span className={styles.creativeTag}>AI Generated</span>
                    <span className={styles.creativeTag}>Music</span>
                    <span className={styles.creativeTag}>Original</span>
                  </div>
                </div>
                <div className={styles.audioContainer}>
                  <audio 
                    className={styles.creativeAudio}
                    controls={true}
                    preload="none"
                  >
                    <source src="/Meet%20me%20where%20the%20sun%20goes%20down,%20colors%20.mp3" type="audio/mpeg" />
                    <source src="/Meet%20me%20where%20the%20sun%20goes%20down,%20colors%20.mp3" type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                <p className={styles.creativeDescription}>
                  An AI-generated song about colors and sunset vibes - 
                  exploring what happens when you let AI compose both lyrics and melody.
                </p>
              </div>

              <div className={styles.creativeCard}>
                <div className={styles.creativeHeader}>
                  <h3 className={styles.creativeItemTitle}>Ocean Glow</h3>
                  <div className={styles.creativeTags}>
                    <span className={styles.creativeTag}>AI Generated</span>
                    <span className={styles.creativeTag}>Music</span>
                    <span className={styles.creativeTag}>Ambient</span>
                  </div>
                </div>
                <div className={styles.audioContainer}>
                  <audio 
                    className={styles.creativeAudio}
                    controls={true}
                    preload="none"
                  >
                    <source src="/Ocean%20Glow.mp3" type="audio/mpeg" />
                    <source src="/Ocean%20Glow.mp3" type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                <p className={styles.creativeDescription}>
                  Atmospheric AI-generated track with oceanic vibes - 
                  perfect for those late-night coding sessions or deep research dives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 