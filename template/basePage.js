
const basePage = `    <header>
<div class="container header-container">
    <h1 id='main_title'>Art-quiz</h1>
</div>
</header>
<main>
<div class="container main-container">
    <div class="game_theme main_cont-element">
        <div class="theme-box" id="artist_card">
            <img src="./img/artist.jpeg" alt="artist_theme" class="theme_image">
            <h2 class="theme-box_name">Artists quiz</h2>
        </div>
        <div class="theme-box" id="picture_card">
            <img src="./img/picture.jpeg" alt="picture_theme" class="theme_image">
            <h2 class="theme-box_name">Pictures quiz</h2>
        </div>
    </div>
    <div class="settings_profile main_cont-element">
        <a href="#popup" id="setting_but">Settings</a>
    </div>
</div>
</main>
<footer>
<div class="container footer-container">
    <div class="gh_link"><a href="https://github.com/ButerBrot359" target="_blank">Batyrkhan Temirov</a></div>
    <div class="pj_date">2021</div>
    <div class="rs_logo_box"><a href="https://rs.school/js/" target="_blank"><img src="./img/rs_school_js.svg" alt="rs" class="rs_logo"></a></div>
</div>
</footer>
<div id="popup" class="popup">
    <div class="popup_body">
        <div class="popup_content popup_content_settings">
            <div class="setting_type" id="volume">
                <div class="setting_item">
                    <i class="fas fa-volume-up"></i>
                </div>
                <div class="input_setting">
                    <div><i class="fas fa-volume-off"></i></div><input type="range" id="volume_bar" max="1" min="0" step="0.01">
                </div>
                <div class="input_ok">
                    <input type="checkbox" id='off_on_volume'><span>ON/OFF</span>
                </div>
                <span class="setting_type_name">Volume</span>
            </div>
            <div class="setting_type" id="timer">
                <div class="setting_item">
                    <i class="fas fa-clock"></i>
                </div>
                <div class="input_setting">
                    <input type="range" id="timer_bar" max="30" min="5" step="5"><span></span>
                </div>
                <div class="input_ok">
                    <input type="checkbox" id='off_on_timer'><span>ON/OFF</span>
                </div>
                <span class="setting_type_name">Time</span>
            </div>
            <a href="#main_title" class='close_setting_popup'><i class="fas fa-times"></i></a>
        </div>
    </div>
</div>`

const categPage = `    <header>
<div class="back_to_main"><i class="fas fa-home"></i></div>
<div class="container header-container">
    <h1 id='main_title'>Art-quiz</h1>
</div>
</header>
<main>
<div class="container category-container">
    <div class="category_card" id="portrait">
        <img src="" alt="card_image" class="card_img inactive" >
        <div class="card_name">Portrait<span></span></div>
        <a href="#popup" class="stats_overlay">Stats</a>
    </div>
    <div class="category_card" id="landscape">
        <img src="" alt="card_image" class="card_img inactive">
        <div class="card_name">Landscape<span></span></div>
        <a href="#popup" class="stats_overlay">Stats</a>
    </div>
    <div class="category_card" id="still_life">
        <img src="" alt="card_image" class="card_img inactive">
        <div class="card_name">Still Life<span></span></div>
        <a href="#popup" class="stats_overlay">Stats</a>
    </div>
    <div class="category_card" id="graphic">
        <img src="" alt="card_image" class="card_img inactive">
        <div class="card_name">Graphic<span></span></div>
        <a href="#popup" class="stats_overlay">Stats</a>
    </div>
    <div class="category_card" id="antique">
        <img src="" alt="card_image" class="card_img inactive">
        <div class="card_name">Antique<span></span></div>
        <a href="#popup" class="stats_overlay">Stats</a>
    </div>
    <div class="category_card" id="avant_garde">
        <img src="" alt="card_image" class="card_img inactive">
        <div class="card_name">Avant-Garde<span></span></div>
        <a href="#popup" class="stats_overlay">Stats</a>
    </div>
    <div class="category_card" id="renaissance">
        <img src="" alt="card_image" class="card_img inactive">
        <div class="card_name">Renaissance<span></span></div>
        <a href="#popup" class="stats_overlay">Stats</a>
    </div>
    <div class="category_card" id="surrealism">
        <img src="" alt="card_image" class="card_img inactive">
        <div class="card_name">Surrealism<span></span></div>
        <a href="#popup" class="stats_overlay">Stats</a>
    </div>
    <div class="category_card" id="kitsch">
        <img src="" alt="card_image" class="card_img inactive">
        <div class="card_name">Kitsch<span></span></div>
        <a href="#popup" class="stats_overlay">Stats</a>
    </div>
    <div class="category_card" id="minimalism">
        <img src="" alt="card_image" class="card_img inactive">
        <div class="card_name">Minimalism<span></span></div>
        <a href="#popup" class="stats_overlay">Stats</a>
    </div>
    <div class="category_card" id="avangard">
        <img src="" alt="card_image" class="card_img inactive">
        <div class="card_name">Avangard<span></span></div>
        <a href="#popup" class="stats_overlay">Stats</a>
    </div>
    <div class="category_card" id="industrial">
        <img src="" alt="card_image" class="card_img inactive">
        <div class="card_name">Industrial<span></span></div>
        <a href="#popup" class="stats_overlay">Stats</a>
    </div>
</div>
</main>
<footer>
<div class="container footer-container">
    <div class="gh_link"><a href="https://github.com/ButerBrot359" target="_blank">Batyrkhan Temirov</a></div>
    <div class="pj_date">2021</div>
    <div class="rs_logo_box"><a href="https://rs.school/js/" target="_blank"><img src="./img/rs_school_js.svg" alt="rs" class="rs_logo"></a></div>
</div>
</footer>
<div id="popup" class="popup">
<div class="popup_body">
    <div class="popup_content category_popup">
        <div class="statistic_panel">
            <a href="#main_title" class='close_stats_popup' id='stats_popup_homeback'>Home</a>
            <span class='final_score'><span></span>/10</span>
            <a href="#main_title" class='close_stats_popup' id='stats_popup_categback'>Category</a>
        </div>
        <div class="five_ans">
            <div class="card_gived_answers">
                <img src="" alt="" class='card_answer'>
                <div class="stats_text_overlay">
                    <span>asdasd</span>
                </div>
            </div>
            <div class="card_gived_answers">
                <img src="" alt="" class='card_answer'>
                    <div class="stats_text_overlay">
                </div>
            </div>
            <div class="card_gived_answers">
                <img src="" alt="" class='card_answer'>
                    <div class="stats_text_overlay">
                </div>
            </div>
            <div class="card_gived_answers">
                <img src="" alt="" class='card_answer'>
                    <div class="stats_text_overlay">
                </div>
            </div>
            <div class="card_gived_answers">
                <img src="" alt="" class='card_answer'>
                    <div class="stats_text_overlay">
                </div>
            </div>
        </div>
        <div class="five_ans">
            <div class="card_gived_answers">
                <img src="" alt="" class='card_answer'>
                    <div class="stats_text_overlay">
                </div>
            </div>
            <div class="card_gived_answers">
                <img src="" alt="" class='card_answer'>
                    <div class="stats_text_overlay">
                </div>
            </div>
            <div class="card_gived_answers">
                <img src="" alt="" class='card_answer'>
                    <div class="stats_text_overlay">
                    </div>
            </div>
            <div class="card_gived_answers">
                <img src="" alt="" class='card_answer'>
                    <div class="stats_text_overlay">
                </div>
            </div>
            <div class="card_gived_answers">
                <img src="" alt="" class='card_answer'>
                    <div class="stats_text_overlay">
                </div>
            </div>
        </div>
    </div>
</div>
</div>`

const artistGamePage = `    <header>
<div class="back_to_categ"><i class="fas fa-chevron-left"></i></div>
<div class="back_to_main"><i class="fas fa-home"></i></div>
<div class="container header-container">
    <h1 id='main_title'>Art-quiz <span id='timer_id'></span></h1>
</div>
</header>
<main>
<div class="container question_container">
    <div class="question_field">
        <div class="question_img">
            <img src='' class='box_img'>
        </div>
        <div class="question_text">
            <h2 class="question_title">Кто написал эту картину ?</h2>
            <div class="answers_list">
                <a href="#popup" class="answer">A.<span class="answer_text"></span></a>
                <a href="#popup" class="answer">B.<span class="answer_text"></span></a>
                <a href="#popup" class="answer">C.<span class="answer_text"></span></a>
                <a href="#popup" class="answer">D.<span class="answer_text"></span></a>
            </div>
        </div>
    </div>
    <div class="progress_bar">
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
    </div>
</div>

</main>
<footer>
<div class="container footer-container">
    <div class="gh_link"><a href="https://github.com/ButerBrot359" target="_blank">Batyrkhan Temirov</a></div>
    <div class="pj_date">2021</div>
    <div class="rs_logo_box"><a href="https://rs.school/js/" target="_blank"><img src="./img/rs_school_js.svg" alt="rs" class="rs_logo"></a></div>
</div>
</footer>
<div id="popup" class="popup">
<div class="popup_body">
    <div class="popup_content">
        <div class="popup_answer_type"></div>
        <div class="popup_img"><img alt=""></div>
        <div class="popup_answer">
            <span class='popup_answer-picname'>Девочка на шаре</span>
            <span class='popup_answer-author'>Коксик ле шмоксик</span>
            <span class='popup_answer-date'>1985</span>
        </div>
        <div class="popup_buttons_block">
            <a href="#main_title" class="popup_buttons next_question_btn">Next</a>
        </div>
    </div>
</div>
</div>`

const pictureGamePage = `    <header>
<div class="back_to_categ"><i class="fas fa-chevron-left"></i></div>
<div class="back_to_main"><i class="fas fa-home"></i></div>
<div class="container header-container">
    <h1 id='main_title'>Art-quiz <span id='timer_id'></span></h1>
</div>
</header>
<main>
<div class="container question_container">
    <div class="question_field question_field-picture">
        <div class="question_text">
            <h2 class="question_title question_title_for_pic">Какую картину написал <span>Илья Репин</span>?</h2>
            <div class="answers_list answers_list_for_pic">
                <div class='answers_pic_rows'>
                    <a href="#popup" class="answer answer_for_pic"><img src="" alt=""></a>
                    <a href="#popup" class="answer answer_for_pic"><img src="" alt=""></a>
                </div>
                <div class='answers_pic_rows'>
                    <a href="#popup" class="answer answer_for_pic"><img src="" alt=""></a>
                    <a href="#popup" class="answer answer_for_pic"><img src="" alt=""></a>
                </div>
                

            </div>
        </div>
    </div>
    <div class="progress_bar">
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
        <div class="progress_circle"></div>
    </div>
</div>

</main>
<footer>
<div class="container footer-container">
    <div class="gh_link"><a href="https://github.com/ButerBrot359" target="_blank">Batyrkhan Temirov</a></div>
    <div class="pj_date">2021</div>
    <div class="rs_logo_box"><a href="https://rs.school/js/" target="_blank"><img src="./img/rs_school_js.svg" alt="rs" class="rs_logo"></a></div>
</div>
</footer>
<div id="popup" class="popup">
<div class="popup_body">
    <div class="popup_content">
        <div class="popup_answer_type"></div>
        <div class="popup_img"><img alt=""></div>
        <div class="popup_answer">
            <span class='popup_answer-picname'></span>
            <span class='popup_answer-author'></span>
            <span class='popup_answer-date'></span>
        </div>
        <div class="popup_buttons_block">
            <a href="#main_title" class="popup_buttons next_question_btn">Next</a>
        </div>
    </div>
</div>
</div>`

export {basePage, categPage, artistGamePage, pictureGamePage}