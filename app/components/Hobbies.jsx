import { useState, useRef } from "react";
import { assets, initialBooks, hobbies } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion'

export default function BooksStack() {
  const constraintRef = useRef(null);
  const [books, setBooks] = useState(
    [...initialBooks].sort(
      (a, b) => new Date(b.dateRead) - new Date(a.dateRead)
    )
  );

  function bringToFront(id) {
    setBooks((prevBooks) => {
      const index = prevBooks.findIndex((b) => b.id === id);
      if (index === -1) return prevBooks;

      const newBooks = [...prevBooks];
      const [selected] = newBooks.splice(index, 1);
      newBooks.unshift(selected);
      return newBooks;
    });
  }

  return (
    <div id="hobbies" className="w-full px-[12%] scroll-mt-20 py-10">
      <h2 className="text-center text-5xl font-ovo py-4">My Hobbies</h2>
      <p className="max-w-2xl mx-auto font-ovo text-center mb-10">
        Let's explore my interests and hobbies beyond the digital realm!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-full mx-auto">

      {/* Hobbies */}
      <div className="flex flex-col items-center w-full h-[400px] shadow-md p-4 border-[0.5px] border-gray-400
                        rounded-xl relative">
          <p className="text-2xl mb-2 font-ovo text-center w-full">You can play with them 😉</p>
          <div className="relative flex-1 w-full px-[10%]" ref={constraintRef}>
            {hobbies.map(hobby => (
              <motion.div
                key={hobby.title}
                className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-grab active:cursor-grabbing select-none"
                style={{
                  left: hobby.left,
                  top: hobby.top,
                }}
                drag
                dragConstraints={constraintRef}
              >
                <span className="font-medium font-ovo">{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* photo*/}
        <div className="flex flex-col items-center w-full h-[400px] shadow-md p-4 border-[0.5px] border-gray-400
                        rounded-xl">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              alt="Saeed"
              src={assets.user_image}
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>
        </div>

        {/* My Reads */}
        <div className="flex flex-col items-center w-full h-[400px] shadow-md p-4 border-[0.5px] border-gray-400
                        rounded-xl relative">
          <p className="text-2xl mb-2 font-ovo w-full text-center">My Reads</p>
          <div className="relative w-full max-w-[240px] h-[350px] mx-auto overflow-hidden rounded-lg">
            {books.map((book, index) => {
              const offset = index * 12; 
              return (
                <div
                  key={book.id}
                  onClick={() => bringToFront(book.id)}
                  className="absolute cursor-pointer rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 overflow-hidden"
                  style={{
                    top: offset,
                    left: offset,
                    width: 200,
                    height: 300,
                    zIndex: books.length - index,
                  }}
                >
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-2 rounded-b-lg text-center font-ovo z-10">
                    {book.dateRead}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        

      </div>
    </div>
  );
}
