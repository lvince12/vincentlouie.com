import React  from 'react';
import git from '../assets/github.svg'
import gamejolt from '../assets/gamejolt.png'
import mtdmenu from '../assets/mtd-menu.png'
import graph from '../assets/consoless.png'
import card from '../assets/cardgame.png'
import site from '../assets/site.png'
import web from '../assets/web.svg'
import idle from '../assets/idlegame.png'

function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="title">Projects</div>
            <div className="section">
                <img className='menu' src={mtdmenu} alt="Medieval Tower Defense Main Menu"/>
                <div className='text'>
                    Medieval Tower Defense
                    <a href="https://github.com/godbil/tower-defense-game"><img src={git} alt="GitHub"/></a>
                    <a href="https://gamejolt.com/games/medievaltowerdefense/678221"><img className='gamejolt' src={gamejolt} alt="GameJolt"/></a>
                    <div className="break"></div>
                    <p>My first graphical game which is heavily inspired by Bloons Tower Defense 6. Use your towers to defeat creatures and protect your village. This game
                        has a medieval theme. The towers that can be used include attack mages, support mages, warriors, tack shooters, catapults, mortars, farms and ballistas.
                        There are 3 different gamemodes which are easy, normal and hard, and there are 4 different maps so far. All tower, enemies and sprites were drawn by me, 
                        albeit, some designs were inspired by Bloons Tower Defense 6. The game was made using Java for my grade 12 culminating project.
                    </p>
                </div>
            </div>
            <div className="section">
                <img className='graph' src={graph} alt="Graph"/>
                <div className='text'>
                    NBA Statistic Graph
                    <a href="https://github.com/godbil/nba-player-graph"><img src={git} alt="GitHub"/></a>
                    <div className="break"></div>
                    <p>A project which was made using Python. This project was made to used graphs and statisics to analyze different basketball players' careers. We took the top 75 NBA players in history
                        and then researched every award they won to allow users to have a clear idea of which player won which award. For example, you can filter the program to show players who won the MVP 
                        or filter to show players only in the 90's. We then used this program to determine a new statistic called award score which allows us to see the greatest players based on the awards 
                        thats they have won.
                    </p>
                </div>
            </div>
            <div className="section">
                <img className='site' src={site} alt="Website"/>
                <div className='text'>
                    vincentlouie.com
                    <a href="https://github.com/godbil/vincentlouie.com"><img src={git} alt="GitHub"/></a>
                    <a href="https://godbil.github.io/vincentlouie.com/"><img src={web} alt="Web"/></a>
                    <div className="break"></div>
                    <p>This website! After learning HTML, CSS, JavaScript and React, I decided to write this website to show some of my projects that I have created throughout my time studying computer science.
                        As I do more projects, whether for school or for myself, I plan to put them on this website.
                    </p>
                </div>
            </div>
            <div className="section">
                <img className='idle' src={idle} alt="Idle Game"/>
                <div className='text'>
                    Idle Game
                    <a href="https://github.com/godbil/idle-game"><img src={git} alt="GitHub"/></a>
                    <a href="https://lvince12.github.io/idle-game/"><img src={web} alt="Web"/></a>
                    <div className="break"></div>
                    <p>A game that I am currently working on right now which uses HTML, CSS, JavaScript and React. The game is based off of Clickere Heroes and uses sprites from my previous game, Medieval
                        Tower Defense. Currently the game is semi-playable but has minimal graphics and content. There may be a few bugs and I will be continuing to work on the game.
                    </p>
                </div>
            </div>
            <div className="section">
                <img className='card' src={card} alt="Card Game"/>
                <div className='text'>
                    Console Based BlackJack and Three Card Poker
                    <a href="https://github.com/godbil/cardgame"><img src={git} alt="GitHub"/></a>
                    <div className="break"></div>
                    <p>My very first game which was made using Java for my grade 12 culminating project. This game is a card game where you can play BlackJack or Three Card Poker, either singleplayer or multiplayer 
                        (on the same computer). The game is played in the Java console and has no graphics.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Projects;