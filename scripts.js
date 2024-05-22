const customEmojis = [
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%2588%25E3%2581%25A3%25E3%2581%2599%25E3%2581%2594_%25E3%2581%2599%25E3%2581%2594%25E3%2581%2584/e251e156f3d393e0.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%2588%25E3%2582%2589%25E3%2581%2584%25EF%25BC%25BF/2b5de0d8a96487a2.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%258A%25E3%2582%2582%25E3%2582%258D%25E3%2581%2584_%25E3%2581%258A%25E3%2582%2582%25E3%2581%2597%25E3%2582%258D%25E3%2581%2584/c3c7308aa5e236b1.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%258A%25E3%2581%25AF%25E3%2582%2588%25E3%2581%2586%25E3%2581%2594%25E3%2581%2596%25E3%2581%2584%25E3%2581%25BE%25E3%2581%25992/4f4c9f42eee96651.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%258B%25E3%2581%25A3%25E3%2581%2593%25E8%258D%2589/5e178127cad0c73e.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%258B%25E3%2581%25A3%25E3%2581%2591%25E3%2581%2587%25EF%25BC%25BF/7060ef499baaec48.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%258C%25E3%2582%2593%25E3%2581%25B0%25E3%2581%2587%25E3%2581%258C%25E3%2582%2593%25E3%2581%25B0%25E3%2582%258C/639c195687bce440.gif',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%2595%25E3%2581%2599%25E3%2581%258C_/f8be64c967c4dc48.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%2599%25E3%2581%2594%25E3%2581%2584/309d08aec99e5851.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%258B%25E3%2581%25A3%25E3%2581%2593%25E3%2581%2584%25E3%2581%2584/908f35e0d7892dbe.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E7%25A5%259E2/ca4b85fbe5421127.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E5%25A5%25BD%25E3%2581%258D/504594acb0e1ab4a.png',
    'https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-medium/1f603@2x.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%2588%25E3%2581%2588%25E3%2582%2584%25E3%2582%2593/1b63eaf613ef7ec7.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%2584%25E3%2581%2584/56737a673f26c36c.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%2582%25E3%2581%2582%25E3%2583%25BC_%25E3%2581%2584%25E3%2581%2584%25E3%2581%25A3%25E3%2581%2599%25E3%2581%25AD%25E3%2583%25BC/91cbfd87abe811d7.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/yoki/e18ddae859a8c2f9.gif',
    'https://emoji.slack-edge.com/TQ0UQJQN5/_%25E3%2581%2593%25E3%2582%258C%25E5%25A4%25A7%25E5%25A5%25BD%25E3%2581%258D/417c3e918b34dd74.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%258B%25E3%2582%258F%25E3%2581%2584%25E3%2581%2584/5a51b3077b6cc0bc.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/creeperponzu3/d7962067ad53e612.png',
    'https://a.slack-edge.com/production-standard-emoji-assets/14.0/apple-large/1f38a@2x.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E8%2589%25AF%25E3%2581%2584_%25E3%2581%2584%25E3%2581%2584_%25E3%2582%2588%25E3%2581%2584/788aa4583b9027d0.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%2593%25E3%2582%258C%25E5%25A5%25BD%25E3%2581%258D/be2185f4fc5ccaf2.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%258C%25E3%2582%2593%25E3%2581%25B0/696537b63b33443c.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%258C%25E3%2582%2593%25E3%2581%25B0/696537b63b33443c.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E6%259C%2580%25E9%25AB%2598-/ed945344b1a8d8ab.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E6%259C%2580%25E9%25AB%25980/848227e7ee4a4fbb.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E7%25AC%2591/ba3a33c88cb8b698.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E7%25A5%259E%25E6%25A5%25AD/72dc65520d4ec226.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E7%25B4%25A0%25E6%2595%25B5/80929406eb73b7b7.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E4%25BA%25BA%25E6%25B0%2597%25E3%2582%25B9%25E3%2583%259D%25E3%2582%25B8%25E3%2583%259C%25E3%2583%2596/9ce2e84f40781383.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E5%2590%258C%25E3%2581%2598%25E3%2581%258F2/3ca76b1bc94865c2.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/ablobattentionreverse/387cc48bbe66e9d9.gif',
    'https://emoji.slack-edge.com/TQ0UQJQN5/ablorpledance/e748fbff97cecc3d.gif',
    'https://emoji.slack-edge.com/TQ0UQJQN5/channels4_profile/ccd636ee5fae4fcb.jpg',
    'https://emoji.slack-edge.com/TQ0UQJQN5/ja_%25E3%2581%25AA%25E3%2582%2593%25E3%2581%25A7%25E3%2582%2584%25E3%2581%25AD%25E3%2582%2593/e538843872754d4a.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/iq%25E3%2582%25AB%25E3%2583%25B3%25E3%2582%25B9%25E3%2583%2588_%25E3%2581%2597%25E3%2581%25A6%25E3%2581%25A6%25E8%258D%2589/5056535d7ceada87.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/seyana/b730647d325d7de3.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/sorena2/60aa86586c4d77f8.png',
    'https://emoji.slack-edge.com/TQ0　UQJQN5/%25E3%2581%2582%25E3%2581%2596%25E3%2581%25A8%25E3%2581%2584_01/0b5c636af50b6d62.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/%25E3%2581%2588%25E3%2581%2590%25E3%2581%2584/00948d1d38d176fe.png',
    'https://emoji.slack-edge.com/TQ0UQJQN5/wwww_%25E8%25B5%25A4/829382ab6e421573.gif',
];

document.getElementById('postForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const content = document.getElementById('userContent').value;

    if (!content) {
        alert('テキストを入力してないのなんでなん⁉️検証してみよう🔥👊');
        return;
    }

    const postContainer = document.getElementById('postContainer');
    const post = document.createElement('div');
    post.className = 'post';

    const time = new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' });

    if (content) {
        const textElement = document.createElement('p');
        textElement.textContent = content;
        post.appendChild(textElement);
    }

    const reactions = document.createElement('div');
    reactions.className = 'reactions';
    post.appendChild(reactions);

    const emojiCount = getRandomInt(10, 20); // 表示する絵文字の数

    for (let i = 0; i < emojiCount; i++) {
        const emoji = customEmojis[Math.floor(Math.random() * customEmojis.length)];
        const reactionCount = 0; 
        setTimeout(() => {
            addReaction(reactions, emoji, reactionCount);
        }, i * 300); // 表示の間隔を長めに設定
    }

    postContainer.appendChild(post);

    document.getElementById('userContent').value = '';
});

function addReaction(container, emoji, reactionCount) {
    const reaction = document.createElement('div');
    reaction.className = 'reaction';

    const emojiElement = document.createElement('img');
    emojiElement.src = emoji;

    const countElement = document.createElement('span');
    countElement.textContent = reactionCount;

    reaction.appendChild(emojiElement);
    reaction.appendChild(countElement);

    container.appendChild(reaction);

    const increaseReactionInterval = setInterval(() => {
        const increaseAmount = getRandomInt(1, 10); // 増加量の範囲を小さく設定
        reactionCount += increaseAmount;
        countElement.textContent = reactionCount;
    }, getRandomInt(1000, 5000)); // 更新間隔を設定
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
