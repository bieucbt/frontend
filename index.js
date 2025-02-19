


const frames = [
    {
        heading: 'Planning & Design',
        options: ['Budget planning', 'Bridal Salon Selection', 'Bridesmaid Dres Selection', 'Wedding Cake'],
        paragraph: [
            'The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.',
            'We provide expert guidance to curate the perfect decor that complements your theme, ensuring a cohesive and stunning event design.',
            'Our professional stylists work with you to create a flawless look that enhances your natural beauty and aligns with your event’s style.',
            'Enhance your event ambiance with customized lighting and sound setups, tailored to create the perfect atmosphere for your special occasion.'
        ]
    },
    {
        heading: 'Floral & Decor',
        options: ['Floral', 'Decor selection', 'Hair & makeup', 'Lighting & Sound'],
        paragraph: [
            'Floral arrangements are carefully designed to match your vision, ensuring every petal complements the theme of your event.',
            'We provide expert guidance to curate the perfect decor that complements your theme, ensuring a cohesive and stunning event design.',
            'Our professional stylists work with you to create a flawless look that enhances your natural beauty and aligns with your event’s style.',
            'Enhance your event ambiance with customized lighting and sound setups, tailored to create the perfect atmosphere for your special occasion.'
        ]
    },
    {
        heading: 'Paperie & Branding',
        options: ['Invitations', 'Venue selection & management', 'Stationery'],
        paragraph: [
            'We craft custom invitations that reflect your style and set the perfect tone for your event, making a lasting first impression.',
            'Our team assists in selecting and managing the ideal venue, ensuring it aligns with your vision and logistical needs.',
            'From personalized place cards to custom signage, we ensure every paper element of your event seamlessly ties into the overall aesthetic.'
        ]
    }
];


const showMores = [
    {
        heading: 'cushion',
        descrip: `The Thayer's seat cushion features a core of high-resiliency foam wrapped with a layer of microfiber for a structured, supportive sit.`
    },
    {
        heading: 'Upholstery',
        descrip: `This modern coffee table is crafted from solid oak with a smooth finish, bringing warmth and elegance to any living space.`
    },
    {
        heading: 'frame',
        descrip: `The minimalist LED lamp provides adjustable brightness and a sleek design, making it perfect for reading or ambiance lighting.`
    },
    {
        heading: 'finish',
        descrip: `A sturdy and spacious bookshelf made of walnut wood, designed to showcase your book collection with style and durability.`
    }
];


const collapsible__mid = document.querySelector('#collapsible-bottom .collapsible-bottom__mid')
const showMoreDOM = document.querySelector('.collapsible__left .showMore')



collapsible__mid.innerHTML = frames.map((item, i) => `<div class="frame">
                        <h3 class="frame_heading" >${item.heading}</h3>
                        <div class="option">
                            ${item.options.map((item, i) => `<p class="option-item ${i == 0 ? 'active' : ''}" data-id="${i}">${item}</p>`).join('')}
                        </div>
                        ${item.paragraph.map((text, i) => `<p class="option-discrip ${i == 0 ? 'active' : ''}" >${text}</p>`).join('')}
                    </div>
                    <div class="collapsible-bottom__mid-line"><div class="line"></div></div>`).join('')


const listOption = document.querySelectorAll('.option-item')
listOption.forEach(item => {
    item.addEventListener('click', () => {
        const frame = item.closest('.frame')
        const items = frame.querySelectorAll('.option-item')
        items.forEach(item => item.classList.remove('active'))
        item.classList.add('active')
        const descripts = frame.querySelectorAll('.option-discrip')
        descripts.forEach(item => { item.classList.remove('active') })
        descripts[item.dataset.id].classList.add('active')
        descripts[item.dataset.id].innerText = frames.paragraph[item.dataset.id]

    })
})

showMoreDOM.innerHTML = showMores.map((item, i) => `
                    <div class="item" >
                        <div class="b-t"></div>
                        <div>
                            <span class="text">${item.heading}</span>
                            <i class="fa-solid fa-plus"></i>
                            <i class="fa-solid fa-minus"></i>
                        </div>
                        <p>${item.descrip}</p>
                    </div>`).join('')

const list = showMoreDOM.querySelectorAll('.item')
list.forEach(item => {
    item.addEventListener('click', () => {
        const discrip = item.querySelector('p')
        const borderTop = item.querySelector('.b-t')
        const minus = item.querySelector('.fa-minus')
        const plus = item.querySelector('.fa-plus')

        discrip.classList.toggle('active')
        borderTop.classList.toggle('active')
        minus.classList.toggle('active')
        plus.classList.toggle('active')
    })
})

