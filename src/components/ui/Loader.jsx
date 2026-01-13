import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
    useEffect(() => {
        // Total animation time is approx 4 seconds
        const timer = setTimeout(() => {
            onComplete();
        }, 4500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    const pVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    };

    const sVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeInOut",
                delay: 1.0
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 3
            }
        }
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
                <svg
                    viewBox="0 0 113 124"
                    className="w-full h-full"
                    fill="none"
                    strokeWidth="3" // Adjusted for the 113x124 viewbox (approx equivalent to thick stroke)
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Yellow Shield (Main Shape) */}
                    <motion.path
                        d="M36.130867,55.242821 C34.121471,55.976383 32.112080,56.709949 29.334770,57.723858 C36.357162,73.240273 48.184135,83.336533 62.789364,90.730995 C57.732597,95.815575 57.214878,96.005402 51.780552,92.531288 C28.346104,77.549881 16.295506,56.196934 16.273832,28.284845 C16.267933,20.688314 17.247890,19.493132 24.257103,17.114353 C46.835339,9.451771 69.333733,9.236711 91.603973,18.245558 C93.485817,19.006807 95.997307,20.991234 96.208084,22.660902 C97.793625,35.221516 96.494774,47.424397 90.276123,58.984512 C88.109032,58.550365 86.238815,58.175690 84.153885,57.130489 C83.957771,55.665520 83.976372,54.871075 84.346939,54.007832 C85.244553,53.016830 85.790207,52.094631 86.528404,50.850853 C87.801613,43.189484 89.090614,35.869438 89.789406,28.493471 C89.931343,26.995275 88.194481,24.356943 86.738731,23.814646 C66.664207,16.336443 46.474628,16.841278 26.401957,23.862619 C25.003197,24.351900 23.270182,26.702551 23.343529,28.101030 C23.680632,34.528252 24.475414,40.942814 25.371391,47.324657 C25.830334,50.593586 27.775568,51.907887 31.073154,50.454483 C32.096741,51.516750 33.054871,52.273003 34.188751,53.284950 C34.953293,54.108036 35.542080,54.675426 36.130867,55.242821 z"
                        stroke="#d19a06"
                        variants={pVariants}
                        initial="hidden"
                        animate="visible"
                    />

                    {/* Black Stylized S (Top Part) */}
                    <motion.path
                        d="M31.073154,50.454483 C30.099749,44.428787 29.208504,38.706379 28.277016,32.990532 C27.788643,29.993761 28.485909,28.075605 31.844357,27.151342 C47.743214,22.775894 63.555305,22.346914 79.636604,26.507044 C85.061752,27.910498 85.633698,30.519365 84.321648,35.376556 C68.191330,29.419336 51.940571,28.666616 35.672554,33.414417 C35.447266,34.105846 35.220642,34.434151 35.263630,34.722229 C37.214088,47.793865 37.213821,47.760696 50.270123,46.550076 C62.358410,45.429218 74.138451,47.084278 86.009354,50.930225 C85.790207,52.094631 85.244553,53.016830 84.346939,54.007832 C83.127281,53.936604 82.259583,53.796577 81.201759,53.849838 C80.642281,53.984119 80.272919,53.925114 79.623474,53.852749 C74.927567,52.890896 70.508583,51.137428 66.096558,51.154751 C55.612957,51.195919 45.132648,52.075474 34.332008,52.822758 C33.054871,52.273003 32.096741,51.516750 31.073154,50.454483 z"
                        stroke="#1F2937"
                        variants={sVariants}
                        initial="hidden"
                        animate="visible"
                    />

                    {/* Black Stylized S (Bottom Part) */}
                    <motion.path
                        d="M66.510811,87.365326 C59.559437,82.879532 52.934132,78.550056 45.616539,73.768181 C55.859726,68.252312 60.188831,78.078644 68.101471,79.636261 C72.666580,74.047668 77.570679,68.044090 82.972664,61.431007 C84.404160,61.787956 86.568748,62.327709 89.165924,62.975327 C83.916107,72.444458 77.706734,80.481804 69.501312,86.877846 C68.844795,87.389595 67.735672,87.320694 66.510811,87.365326 z"
                        stroke="#1F2937"
                        variants={sVariants}
                        initial="hidden"
                        animate="visible"
                    />
                </svg>
            </div>

            <motion.h1
                className="mt-8 text-2xl md:text-3xl font-bold tracking-[0.3em] text-praz-dark uppercase"
                variants={textVariants}
                initial="hidden"
                animate="visible"
            >
                Prazamana
            </motion.h1>
        </motion.div>
    );
};

export default Loader;
