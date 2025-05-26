import {useRef, useMemo, useCallback } from 'react';
import {motion} from "motion/react";
import { assets } from '../assets/assets';
import { useAPPContext } from '../context/AppContext';

export const Hero = () => {
  const { setSearchFilter, searchFilter } = useAPPContext()
  
  // Refs pour les champs de recherche
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  // Mémoisation des variants d'animation
  const variants = useMemo(() => ({
    container: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          staggerChildren: 0.1
        }
      }
    },
    hero: {
      hidden: { scale: 0.9, opacity: 0 },
      visible: { 
        scale: 1, 
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    },
    title: {
      hidden: { opacity: 0, y: -30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut"
        }
      }
    },
    number: {
      hidden: { scale: 0 },
      visible: { 
        scale: 1,
        transition: {
          duration: 0.5,
          delay: 0.8,
          type: "spring",
          stiffness: 200
        }
      }
    },
    searchBar: {
      hidden: { opacity: 0, y: 30, scale: 0.9 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.6,
          delay: 0.6,
          ease: "easeOut"
        }
      }
    },
    logoContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 1,
          staggerChildren: 0.1
        }
      }
    },
    logo: {
      hidden: { opacity: 0, y: 20, scale: 0.8 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }
    }
  }), []);

  // Mémoisation des logos
  const logosList = useMemo(() => [
    assets.microsoft_logo,
    assets.walmart_logo, 
    assets.accenture_logo,
    assets.samsung_logo,
    assets.amazon_logo,
    assets.adobe_logo
  ], []);

  // Gestionnaire de recherche optimisé
  const handleSearch = useCallback((e) => {
    e.preventDefault();
    
    const titleValue = titleRef.current?.value?.trim() || '';
    const locationValue = locationRef.current?.value?.trim() || '';
    
    setSearchFilter({
      title: titleValue,
      location: locationValue
    });
  }, [setSearchFilter]);

  // Gestionnaire pour les changements d'input
  const handleInputChange = useCallback((field) => (e) => {
    setSearchFilter(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  }, [setSearchFilter]);

  // Composant Particle optimisé
  const ParticleBackground = useMemo(() => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          initial={{ 
            x: Math.random() * 800, 
            y: Math.random() * 400,
            scale: 0 
          }}
          animate={{ 
            y: [null, -50, 450],
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear"
          }}
        />
      ))}
    </div>
  ), []);

  return (
    <motion.div 
      className='container 2xl:px-20 mx-auto my-10'
      variants={variants.container}
      initial="hidden"
      animate="visible"
    >
      {/* Section Hero Principale */}
      <motion.div 
        className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl shadow-2xl overflow-hidden relative'
        variants={variants.hero}
      >
        {/* Animation de particules d'arrière-plan optimisée */}
        {ParticleBackground}

        {/* Contenu principal */}
        <div className="relative z-10">
          <motion.h2 
            className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'
            variants={variants.title}
          >
            Over{' '}
            <motion.span
              className="inline-block text-yellow-300 font-bold"
              variants={variants.number}
            >
              10,000+
          </motion.span>
              {' '}jobs to apply
          </motion.h2>

          <motion.p 
            className='mb-8 max-w-xl mx-auto text-sm font-light px-5'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!
          </motion.p>

          {/* Barre de recherche corrigée */}
          <motion.form 
            onSubmit={handleSearch}
            className='flex items-center justify-between bg-white rounded-xl text-white md:max-w-2xl pl-4 mx-4 sm:mx-auto shadow-xl border border-purple-200'
            variants={variants.searchBar}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Champ de recherche Job */}
            <motion.div 
              className='flex items-center flex-1'
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <img src={assets.search_icon} className='h-4 sm:h-5 text-gray-400' alt='Search icon'/>
              <motion.input 
                type='text' 
                placeholder='Search for jobs'
                className='max-sm:text-xs p-3 rounded outline-none w-full text-gray-600 placeholder-gray-400 focus:placeholder-gray-300' 
                ref={titleRef}
                value={searchFilter.title}
                onChange={handleInputChange('title')}
                whileFocus={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>

            {/* Séparateur */}
            <div className="w-px h-8 bg-gray-200" role="separator"></div>

            {/* Champ de recherche Location */}
            <motion.div 
              className='flex items-center flex-1'
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <img src={assets.location_icon} className='h-4 sm:h-5 text-gray-400 ml-3' alt='Location icon'/>
              <motion.input 
                type='text' 
                placeholder='Location'
                className='max-sm:text-xs p-3 rounded outline-none w-full text-gray-600 placeholder-gray-400 focus:placeholder-gray-300' 
                ref={locationRef}
                value={searchFilter.location}
                onChange={handleInputChange('location')}
                whileFocus={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>

            {/* Bouton Search */}
            <motion.button 
              type="submit"
              className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-3 rounded-lg text-white m-2 font-semibold shadow-lg'
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 1, 
                type: "spring", 
                stiffness: 200 
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.4)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
            >
              Search
            </motion.button>
          </motion.form>
        </div>
      </motion.div>

      {/* Section Trusted By */}
      <motion.div 
        className='border border-gray-300 shadow-lg mt-5 mx-2 p-6 rounded-xl bg-white/80 backdrop-blur-sm'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className='flex justify-center gap-10 lg:gap-16 flex-wrap items-center'>
          <motion.p 
            className='font-semibold text-gray-600 text-lg'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Trusted by
          </motion.p>
          
          {/* Logos avec animation en cascade */}
          <motion.div
            className="flex gap-10 lg:gap-16 flex-wrap items-center"
            variants={variants.logoContainer}
            initial="hidden"
            animate="visible"
          >
            {logosList.map((logo, index) => (
              <motion.img 
                key={index}
                className='h-8 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' 
                src={logo} 
                alt={`Company logo ${index + 1}`}
                variants={variants.logo}
                whileHover={{ 
                  scale: 1.2,
                  filter: "grayscale(0%)",
                  transition: { duration: 0.2 }
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
