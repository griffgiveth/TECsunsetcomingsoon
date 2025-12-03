import { ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="w-full bg-transparent z-0 absolute bottom-0 left-0 select-none opacity-70">
        <img
          src="/bg-image.png"
          alt="TEC background gradient"
          draggable={false}
          className="w-full h-auto"
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            <img
              src="/teclogo-Photoroom.png"
              alt="TEC Logo"
              className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl"
            />

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
                  $TEC
                </span>
                {' '}is Sunsetting
              </h1>

              <p className="text-2xl md:text-3xl text-gray-300 font-light">
                Come back soon to redeem
              </p>
            </div>

            <div className="w-full max-w-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 space-y-6 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-lime-400">
                Your $TEC will remain in your wallet
              </h2>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                When you redeem, you'll receive your proportional share of <span className="font-semibold text-white">rETH</span> and <span className="font-semibold text-white">DAI</span>. Your TEC tokens won't be burned, they'll stay in your wallet as a transferable keepsake of the community. They won't have claim value anymore… but hey, maybe they'll have a future use.
              </p>

              <a
                href="https://forum.tecommons.org/t/tec-token-sunset/1531"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold rounded-xl hover:from-lime-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-lime-500/50"
              >
                Read More About the Proposal
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-8 text-gray-500 text-sm">
              Token Engineering Commons
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
