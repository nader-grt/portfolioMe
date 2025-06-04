import React from 'react';
import headers from './header.module.css';
import TypeWriter from './TypeWriter';
import { motion } from 'framer-motion';

function Header() {
  return (
    <div className={headers.header}>
      <div className="container text-white">
        <div className="row mt-5">
          <div className="col-9 mx-auto">
            <div className={`d-flex justify-content-between align-items-center p-4 ${headers.headersm}`}>

              {/* Animated Image */}
              <motion.div
                className={`col-md-5 col-sm-6 ${headers.img_attachment}`}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.img
                  src="https://avatars.githubusercontent.com/u/60844663?v=4&size=256"
                  alt="Profile"
                  className="img-fluid rounded-circle shadow-lg"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>

              {/* Text and Typewriter */}
              <motion.div
                className="col-md-5 col-sm-6 d-flex justify-content-center align-items-center"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              >
                <h3 className="text-center">
                  <span>
                    I'm kossay Chargui{' '}
                  </span>
                  <span style={{ color: 'red' }}>
                    <TypeWriter />
                  </span>
                </h3>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
