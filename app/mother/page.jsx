"use client"
import React, { useEffect, useState } from 'react';

import { collection, doc, getDocs, query, where } from 'firebase/firestore';

import { db } from '@/firebase/firebase'; 
import Navbar from '@/components/Navbar';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Mother() {
  const [personPost, setPersonPost] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    const fetchPersonPost = async () => {

      try {
        const returnPostQuery = query(collection(db, 'mother'));
        const returnPostCollection = await getDocs(returnPostQuery);
        const returnPostData = returnPostCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPersonPost(returnPostData);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching item posts:', error);
      }
    };
    fetchPersonPost();
  }, []);
  return (
    <div className='bg-purple-200 h-[1150px]'>
      <div className="top-0 left-0 sticky">
                <Navbar />
            </div>
            <h3 className='text-center font-semibold text-2xl pt-[120px] text-purple-600'>මාතෘ හා ළමා සායන </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4  pt-[50px]">
        {loading? (<Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            onClick={() => {}}
          >
            <CircularProgress color="inherit" />
          </Backdrop>):(personPost.map((item) => {
          // Check if the item's date is equal to today's date


          return (
            <div key={item.id} className=" shadow-lg rounded-lg overflow-hidden pt-2 bg-purple-400">
              <div className='text-center font-bold text-purple-600 text-2xl'><h3>{item.title}</h3></div>

              <div className="p-6 ">
               
                <button
                  onClick={() => {
                    setSelectedPost(item);
                    setModalVisible(true);
                  }}
                  className="bg-purple-800 hover-bg-blue-600 text-white py-2 px-4 mt-4 rounded"
                >
                  View Details
                </button>
              </div>
            </div>
          )
        }))}
      
       
      </div>

      
      {modalVisible && selectedPost && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center jus">
                    <div className="modal-bg fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    <div className="modal-container bg-white w-3/4 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 text-left px-6">
                          <h3 className='text-purple-700 font-bold text-lg text-center'>{selectedPost.title}</h3>


                          <p className="text-gray-600 text-base font-semibold py-3">
                                January: <span className='text-blue-600  px-10'>{selectedPost.january}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                February: <span className='text-blue-600  px-10'>{selectedPost.february}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                March: <span className='text-blue-600  px-10'>{selectedPost.march}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                April: <span className='text-blue-600  px-10'>{selectedPost.april}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                May: <span className='text-blue-600  px-10'>{selectedPost.may}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                June: <span className='text-blue-600  px-10'>{selectedPost.june}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                July: <span className='text-blue-600  px-10'>{selectedPost.july}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                August: <span className='text-blue-600  px-10'>{selectedPost.august}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                September: <span className='text-blue-600  px-10'>{selectedPost.september}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                October: <span className='text-blue-600  px-10'>{selectedPost.october}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                November: <span className='text-blue-600  px-10'>{selectedPost.november}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3 mb-5">
                                December: <span className='text-blue-600  px-10'>{selectedPost.december}</span>
                            </p>

                            <button
                                onClick={() => setModalVisible(false)}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
    </div>
  )
}

export default Mother