import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './PonyDetails.css'
import axios from "axios";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import Modal from 'react-modal';
import ReactPlayer from "react-player";

Modal.setAppElement('#root')

function PonyDetails() {
    const [index, setIndex] = useState(2);
    const [ponyData, setPonyData] = useState([])
    const params = useParams();
    console.log(params)

    const [isModalOpen, setIsModalOpen] = useState(false);

    async function getPonyData() {
        try {
            const result = await axios.get(`http://ponyweb.ml/v1/character/${params.id}?limit=1`);
            setPonyData(result.data.data);
            console.log(result.data.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getPonyData();
    }, [])

    function prevImage(num) {
        setIndex(checkNumber(num - 1));

    }

    function nextImage(num) {
        setIndex(checkNumber(num + 1));

    }

    function checkNumber(num) {
        if (num < 0) {
            return ponyData[0].image.length - 1;
        }
        if (num > ponyData[0].image.length - 1) {
            return 0;
        }
        return num;/*if none of the situation matches, then just return the num*/
    }

    return (
        <div className='pony-details-container'>
            {ponyData.map((pony) => {
                return (
                    <section className='pony-details-content' key={pony.id}>
                        <div className='img-section'>
                            <button className='pony-image-btn' onClick={() => prevImage(index)}>
                                <FaChevronLeft/>
                            </button>
                            <img className='pony-details-image' src={pony.image[index]}/>
                            <button className='pony-image-btn' onClick={() => nextImage(index)}>
                                <FaChevronRight/>
                            </button>

                        </div>
                        <div className='info-section'>
                            <p><strong>Name: </strong>{pony.name}</p>
                            <p><strong>Gender: </strong>{pony.sex}</p>
                            <p><strong>Occupation: </strong>{pony.occupation}</p>
                            <div className='pony-kind-wrapper'>
                                <p><strong>Kind: </strong></p>
                                {pony.kind.map((kind) => {
                                    return (
                                        <p className='pony-kind' key={kind.index}>{kind}</p>
                                    )
                                })}
                            </div>
                            {pony.id === 1 &&
                            <>
                                <button className='btn' onClick={() => setIsModalOpen(true)}>see video</button>
                                <Modal isOpen={isModalOpen}
                                       onRequestClose={() => setIsModalOpen(false)}
                                       shouldCloseOnOverlayClick={true}
                                       style={
                                           {
                                               overlay: {
                                                   backgroundColor: 'rgb(0,0,0,0.5)',
                                                   position: 'absolute',
                                                   top: '15vh',
                                                   left: 0
                                               },
                                               content: {
                                                   backgroundColor: 'var(--clr-pink-lighter)',
                                                   display: 'flex',
                                                   flexDirection: 'column',
                                                   justifyContent:'space-evenly',
                                                   alignItems:'center'
                                               }

                                           }
                                       }
                                >
                                    <ReactPlayer className='pony-video-section' width='70%' height='55vh' controls
                                                 url='https://www.youtube.com/watch?v=UXbSqJXTvJ0'/>
                                    <button className='btn-smaller' onClick={() => setIsModalOpen(false)}>close</button>
                                </Modal>
                            </>
                            }
                            {pony.id === 2 &&
                            <>
                                <button className='btn' onClick={() => setIsModalOpen(true)}>see video</button>
                                <Modal isOpen={isModalOpen}
                                       onRequestClose={() => setIsModalOpen(false)}
                                       shouldCloseOnOverlayClick={true}
                                       style={
                                           {
                                               overlay: {
                                                   backgroundColor: 'rgb(0,0,0,0.5)',
                                                   position: 'absolute',
                                                   top: '15vh',
                                                   left: 0
                                               },
                                               content: {
                                                   backgroundColor: 'var(--clr-pink-lighter)',
                                                   display: 'flex',
                                                   flexDirection: 'column',
                                                   justifyContent:'space-evenly',
                                                   alignItems:'center'
                                               }

                                           }
                                       }
                                >
                                    <ReactPlayer className='pony-video-section' width='70%' height='55vh' controls
                                                 url='https://www.youtube.com/watch?v=AHROhpTXssY'/>
                                    <button className='btn-smaller' onClick={() => setIsModalOpen(false)}>close</button>
                                </Modal>
                            </>
                            }
                            {pony.id === 3 &&
                            <>
                                <button className='btn' onClick={() => setIsModalOpen(true)}>see video</button>
                                <Modal isOpen={isModalOpen}
                                       onRequestClose={() => setIsModalOpen(false)}
                                       shouldCloseOnOverlayClick={true}
                                       style={
                                           {
                                               overlay: {
                                                   backgroundColor: 'rgb(0,0,0,0.5)',
                                                   position: 'absolute',
                                                   top: '15vh',
                                                   left: 0
                                               },
                                               content: {
                                                   backgroundColor: 'var(--clr-pink-lighter)',
                                                   display: 'flex',
                                                   flexDirection: 'column',
                                                   justifyContent:'space-evenly',
                                                   alignItems:'center'
                                               }

                                           }
                                       }
                                >
                                    <ReactPlayer className='pony-video-section' width='70%' height='55vh' controls
                                                 url='https://www.youtube.com/watch?v=NT0rSNxdw94'/>
                                    <button className='btn-smaller' onClick={() => setIsModalOpen(false)}>close</button>
                                </Modal>
                            </>
                            }
                            {pony.id === 4 &&
                            <>
                                <button className='btn' onClick={() => setIsModalOpen(true)}>see video</button>
                                <Modal isOpen={isModalOpen}
                                       onRequestClose={() => setIsModalOpen(false)}
                                       shouldCloseOnOverlayClick={true}
                                       style={
                                           {
                                               overlay: {
                                                   backgroundColor: 'rgb(0,0,0,0.5)',
                                                   position: 'absolute',
                                                   top: '15vh',
                                                   left: 0
                                               },
                                               content: {
                                                   backgroundColor: 'var(--clr-pink-lighter)',
                                                   display: 'flex',
                                                   flexDirection: 'column',
                                                   justifyContent:'space-evenly',
                                                   alignItems:'center'
                                               }

                                           }
                                       }
                                >
                                    <ReactPlayer className='pony-video-section' width='70%' height='55vh' controls
                                                 url='https://www.youtube.com/watch?v=tJiaBI3Ggkw'/>
                                    <button className='btn-smaller' onClick={() => setIsModalOpen(false)}>close</button>
                                </Modal>
                            </>
                            }
                            {pony.id === 5 &&
                            <>
                                <button className='btn' onClick={() => setIsModalOpen(true)}>see video</button>
                                <Modal isOpen={isModalOpen}
                                       onRequestClose={() => setIsModalOpen(false)}
                                       shouldCloseOnOverlayClick={true}
                                       style={
                                           {
                                               overlay: {
                                                   backgroundColor: 'rgb(0,0,0,0.5)',
                                                   position: 'absolute',
                                                   top: '15vh',
                                                   left: 0
                                               },
                                               content: {
                                                   backgroundColor: 'var(--clr-pink-lighter)',
                                                   display: 'flex',
                                                   flexDirection: 'column',
                                                   justifyContent:'space-evenly',
                                                   alignItems:'center'
                                               }

                                           }
                                       }
                                >
                                    <ReactPlayer className='pony-video-section' width='70%' height='55vh' controls
                                                 url='https://www.youtube.com/watch?v=pWhZ9dJAhWM'/>
                                    <button className='btn-smaller' onClick={() => setIsModalOpen(false)}>close</button>
                                </Modal>
                            </>
                            }
                            {pony.id === 6 &&
                            <>
                                <button className='btn' onClick={() => setIsModalOpen(true)}>see video</button>
                                <Modal isOpen={isModalOpen}
                                       onRequestClose={() => setIsModalOpen(false)}
                                       shouldCloseOnOverlayClick={true}
                                       style={
                                           {
                                               overlay: {
                                                   backgroundColor: 'grey',
                                                   position: 'absolute',
                                                   top: '15vh',
                                                   left: 0
                                               },
                                               content: {
                                                   color: '#000',
                                                   backgroundColor: 'lightPink',
                                                   display: 'flex',
                                                   flexDirection: 'column',
                                                   justifyContent:'space-evenly',
                                                   alignItems:'center'
                                               }

                                           }
                                       }
                                >
                                    <ReactPlayer className='pony-video-section' width='70%' height='55vh' controls
                                                 url='https://www.youtube.com/watch?v=XdHTSO4iY_g'/>
                                    <button className='btn-smaller' onClick={() => setIsModalOpen(false)}>close</button>
                                </Modal>
                            </>
                            }


                        </div>
                    </section>
                )
            })}
                </div>
                )

            }

export default PonyDetails;