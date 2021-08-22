//style using 
function style(player) {
    player.style.border = '1px solid red';
    player.style.margin = '10px';
    player.style.padding = '10px';
    player.style.borderRadius = '10px'

}


const players = document.getElementsByClassName('player');
for (const player of players) {
    // console.log(player);
    style(player);
    //add event listener
    // player.addEventListener('click',function(){
    //     player.style.backgroundColor='red '

    // })

}

function addPlayer() {
    const counterPlayer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    // console.log(player);
    player.innerHTML = `
                 <h4 class="player-name">New Player</h4>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro amet sunt, natus numquam aspernatur
                    assumenda nisi quaerat dolor commodi, incidunt accusantium ea placeat quae repudiandae voluptatum
                    animi et? Quos, eveniet.
                </p>
    `;
    // console.log(player)
    counterPlayer.appendChild(player);
    style(player)
}
//event bubble
document.getElementById('players').addEventListener('click', function (event) {

    // console.log(event.target.tagName)
    console.log(event.target.tagName.toLowerCase());
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow'
    }
    else {
        // console.log(event.target.parentNode)
        event.target.parentNode.style.backgroundColor = 'red'
    }
})