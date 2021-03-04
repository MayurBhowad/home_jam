import React from 'react'

const Upcomming = () => {
    return (
        <div className="upcomming-shows">
            <div className="title-bar">
                <h1 className="title">Upcomming Shows</h1>
                <h4 className="title-flag">View All</h4>
            </div>
            <div className="celeb-cards">
                <div className="card">
                    <img className="celeb-photo" src="https://superstarsbio.com/wp-content/uploads/2018/09/Benny-Dayal-1.jpg" width="250" height="200" alt="" />
                    <div className="celeb-details">
                        <div className="celeb-flag">Folk</div>
                        <h1>Benny Dayal</h1>
                        <div className="card-footer">
                            <div className="more-info">More Info <span>&rarr;</span></div>
                            <div class="verticalLine">
                                <img src="assets/images/ticket-icon.png" width="25px" height="auto" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img className="celeb-photo" src="https://static.toiimg.com/thumb/msid-72255865,imgsize-55826,width-800,height-600,resizemode-75/72255865.jpg" width="250" height="200" alt="" />
                    <div className="celeb-details">
                        <div className="celeb-flag">Bollywood</div>
                        <h1>Vijay Yesudas</h1>
                        <div className="card-footer">
                            <div className="more-info">More Info <span>&rarr;</span></div>
                            <div class="verticalLine">
                                <img src="assets/images/ticket-icon.png" width="25px" height="auto" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img className="celeb-photo" src="https://www.filmibeat.com/img/2019/08/c-032-1565590568.jpg" width="250" height="200" alt="" />
                    <div className="celeb-details">
                        <div className="celeb-flag">Folk</div>
                        <h1>Andrea Jeremiah</h1>
                        <div className="card-footer">
                            <div className="more-info">More Info <span>&rarr;</span></div>
                            <div class="verticalLine">
                                <img src="assets/images/ticket-icon.png" width="25px" height="auto" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img className="celeb-photo" src="https://www.bizasialive.com/wp/wp-content/uploads/2020/11/Shilpa-Rao-1200x.jpg" width="250" height="200" alt="" />
                    <div className="celeb-details">
                        <div className="celeb-flag">Folk</div>
                        <h1>Shilpa Rao</h1>
                        <div className="card-footer">
                            <div className="more-info">More Info <span>&rarr;</span></div>
                            <div class="verticalLine">
                                <img src="assets/images/ticket-sold-icon.png" width="25px" height="auto" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcomming
