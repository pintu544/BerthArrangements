import React, { useState, useEffect } from 'react'
import {  bookTrainSeat } from './utils/seatApi'

function Seat() {
    const [inputSeatsNo, setInputSeatsNo] = useState({
        noOfSeats: 0
    })
    const [AllSeats, setAllSeats] = useState([{ row1: [] }, { row2: [] }, { row3: [] }, { row4: [] }, { row5: [] }, { row6: [] }, { row7: [] }, { row8: [] }, { row9: [] }, { row10: [] }, { row11: [] }, { row12: [] }])


    useEffect(() => {
        (async () => {
            const res = await fetch('https://berth-arrangements-636h-egazg2ya7-pintu870.vercel.app/getAllSeats');
            const data = await res.json()
            const SeatList = Object.values(data.data)

            // console.log("SeatList", SeatList[0]);
            let array = []
            for (let i = 0; i < SeatList.length; i++) {
                let name = `row${i + 1}`
                array.push({ [name]: SeatList[i] })
            }

            setAllSeats(array)
            console.log(AllSeats);
        })()

    }, [AllSeats])


    // handle form submit
    const bookSeats = async () => {
        console.log(inputSeatsNo)
        const apiResponce = await bookTrainSeat(inputSeatsNo)
        console.log("apiResponce", apiResponce);

    }

    // handle input change
    const handleChange = (e) => {
        setInputSeatsNo({
            noOfSeats: e.target.value
        })
    }

    console.log(AllSeats);
    console.log(AllSeats[0].row1[2]);

    return (
        <div>
            <div className="plane">
                <h2 style={{color: 'White'}}>Berth Reservation System</h2>

                {/* form input */}
                <div>
                    <input type="number"
                        id='input-box'
                        placeholder="Enter No. of persons"
                        onChange={(e) => handleChange(e)}
                        required />
                    <input className='submit-btn' type="submit" onClick={() => bookSeats()} value="Submit" />
                </div>

                {/* seat map */}
                <h4>Availability</h4>


                <ol className="cabin ">
                    <li className="row row-1">
                        <ol className="seats" type="A">
                            <li className='seat'>
                                <input type="checkbox" />
                                {/* <label >{1===5?1:0}</label> */}
                                <label className={AllSeats[0].row1[0] === 1 ? 'booked' : 'not-booked'}>1</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[0].row1[1] === 2 ? 'booked' : 'not-booked'}>2</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[0].row1[2] === 3 ? 'booked' : 'not-booked'}>3</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[0].row1[3] === 4 ? 'booked' : 'not-booked'}>4</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[0].row1[4] === 5 ? 'booked' : 'not-booked'}>5</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[0].row1[5] === 6 ? 'booked' : 'not-booked'}>6</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[0].row1[6] === 7 ? 'booked' : 'not-booked'}>7</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--2">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[1].row2[0] === 8 ? 'booked' : 'not-booked'}>8</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[1].row2[1] === 9 ? 'booked' : 'not-booked'}>9</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[1].row2[2] === 10 ? 'booked' : 'not-booked'}>10</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[1].row2[3] === 11 ? 'booked' : 'not-booked'}>11</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[1].row2[4] === 12 ? 'booked' : 'not-booked'}>12</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[1].row2[5] === 13 ? 'booked' : 'not-booked'}>13</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[1].row2[6] === 14 ? 'booked' : 'not-booked'}>14</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--3">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[2].row3[0] === 15 ? 'booked' : 'not-booked'}>15</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[2].row3[1] === 16 ? 'booked' : 'not-booked'}>16</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[2].row3[2] === 17 ? 'booked' : 'not-booked'}>17</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[2].row3[3] === 18 ? 'booked' : 'not-booked'}>18</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[2].row3[4] === 19 ? 'booked' : 'not-booked'}>19</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[2].row3[5] === 20 ? 'booked' : 'not-booked'}>20</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[2].row3[6] === 21 ? 'booked' : 'not-booked'}>21</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--4">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[3].row4[0] === 22 ? 'booked' : 'not-booked'}>22</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[3].row4[1] === 23 ? 'booked' : 'not-booked'}>23</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[3].row4[2] === 24 ? 'booked' : 'not-booked'}>24</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[3].row4[3] === 25 ? 'booked' : 'not-booked'}>25</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[3].row4[4] === 26 ? 'booked' : 'not-booked'}>26</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[3].row4[5] === 27 ? 'booked' : 'not-booked'}>27</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[3].row4[6] === 28 ? 'booked' : 'not-booked'}>28</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--5">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[4].row5[0] === 29 ? 'booked' : 'not-booked'}>29</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[4].row5[1] === 30 ? 'booked' : 'not-booked'}>30</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[4].row5[2] === 31 ? 'booked' : 'not-booked'}>31</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[4].row5[3] === 32 ? 'booked' : 'not-booked'}>32</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[4].row5[4] === 33 ? 'booked' : 'not-booked'}>33</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[4].row5[5] === 34 ? 'booked' : 'not-booked'}>34</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[4].row5[6] === 35 ? 'booked' : 'not-booked'}>35</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--6">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[5].row6[0] === 36 ? 'booked' : 'not-booked'}>36</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[5].row6[1] === 37 ? 'booked' : 'not-booked'}>37</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[5].row6[2] === 38 ? 'booked' : 'not-booked'}>38</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[5].row6[3] === 39 ? 'booked' : 'not-booked'}>39</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[5].row6[4] === 40 ? 'booked' : 'not-booked'}>40</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[5].row6[5] === 41 ? 'booked' : 'not-booked'}>41</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[5].row6[6] === 42 ? 'booked' : 'not-booked'}>42</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--7">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[6].row7[0] === 43 ? 'booked' : 'not-booked'}>43</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[6].row7[1] === 44 ? 'booked' : 'not-booked'}>44</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[6].row7[2] === 45 ? 'booked' : 'not-booked'}>45</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[6].row7[3] === 46 ? 'booked' : 'not-booked'}>46</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[6].row7[4] === 47 ? 'booked' : 'not-booked'}>47</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[6].row7[5] === 48 ? 'booked' : 'not-booked'}>48</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[6].row7[6] === 49 ? 'booked' : 'not-booked'}>49</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--8">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[7].row8[0] === 50 ? 'booked' : 'not-booked'}>50</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[7].row8[1] === 51 ? 'booked' : 'not-booked'}>51</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[7].row8[2] === 52 ? 'booked' : 'not-booked'}>52</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[7].row8[3] === 53 ? 'booked' : 'not-booked'}>53</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[7].row8[4] === 54 ? 'booked' : 'not-booked'}>54</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[7].row8[5] === 55 ? 'booked' : 'not-booked'}>55</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[7].row8[6] === 56 ? 'booked' : 'not-booked'}>56</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--9">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[8].row9[0] === 57 ? 'booked' : 'not-booked'}>57</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[8].row9[1] === 58 ? 'booked' : 'not-booked'}>58</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[8].row9[2] === 59 ? 'booked' : 'not-booked'}>59</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[8].row9[3] === 60 ? 'booked' : 'not-booked'}>60</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[8].row9[4] === 61 ? 'booked' : 'not-booked'}>61</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[8].row9[5] === 62 ? 'booked' : 'not-booked'}>62</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[8].row9[6] === 63 ? 'booked' : 'not-booked'}>63</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--10">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[9].row10[0] === 64 ? 'booked' : 'not-booked'}>64</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[9].row10[1] === 65 ? 'booked' : 'not-booked'}>65</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[9].row10[2] === 66 ? 'booked' : 'not-booked'}>66</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[9].row10[3] === 67 ? 'booked' : 'not-booked'}>67</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[9].row10[4] === 68 ? 'booked' : 'not-booked'}>68</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[9].row10[5] === 69 ? 'booked' : 'not-booked'}>69</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[9].row10[6] === 70 ? 'booked' : 'not-booked'}>70</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--11">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[10].row11[0] === 71 ? 'booked' : 'not-booked'}>71</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[10].row11[1] === 72 ? 'booked' : 'not-booked'}>72</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[10].row11[2] === 73 ? 'booked' : 'not-booked'}>73</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[10].row11[3] === 74 ? 'booked' : 'not-booked'}>74</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[10].row11[4] === 75 ? 'booked' : 'not-booked'}>75</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[10].row11[5] === 76 ? 'booked' : 'not-booked'}>76</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[10].row11[6] === 77 ? 'booked' : 'not-booked'}>77</label>
                            </li>
                        </ol>
                    </li>
                    <li className="row row--12">
                        <ol className="seats" type="A">
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[11].row12[0] === 78 ? 'booked' : 'not-booked'}>78</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[11].row12[1] === 79 ? 'booked' : 'not-booked'}>79</label>
                            </li>
                            <li className="seat">
                                <input type="checkbox" />
                                <label className={AllSeats[11].row12[2] === 80 ? 'booked' : 'not-booked'}>80</label>
                            </li>

                        </ol>
                    </li>
                </ol>

                {/* <div className="fuselage">

                </div> */}
            </div>
        </div>
    )
}

export default Seat
