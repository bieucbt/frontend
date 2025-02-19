


const frames = [
    {
        heading: 'Planing & Design',
        options: ['Budget planning', 'Bridal Salon Selection', 'Bridesmaid Dres Selection', 'Wedding Cake'],
        paragraph: 'The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.'
    },
    {
        heading: 'Floral & Decor',
        options: ['Floral', 'Decor selection', 'Hair & makeup', 'Lighting & Sound'],
        paragraph: 'From maintaining your budget and managing RSVPs to curating the ideal creative team and negotiating vendor contracts, we’re here to labor over logistics so you don’t have to. You’ll have a clear understanding of what’s coming next throughout the process—without ever being inundated with unnecessary information, options that aren’t a right fit, or tedious to-dos.'
    },
    {
        heading: 'Paperie & Branding',
        options: ['Invitations', 'Venue selection & management', 'Stationery'],
        paragraph: 'We’ll collaborate to develop an aesthetic that speaks to your soul and stems from your story. From creating design boards and sourcing artisanal items—to keeping vendors on the same page and perfecting every last touchpoint across your entire affair— we’re here to deliver a cohesive collection of meaningful moments that, together, create the wedding of your wildest dreams.'
    }
]

const collapsible__mid = document.querySelector('#collapsible-bottom .collapsible-bottom__mid')

collapsible__mid.innerHTML = frames.map(item => `<div class="frame">
                        <h3 class="frame_heading">${item.heading}</h3>
                        <div class="option">
                            ${item.options.map(item => `
                                    <p>${item}</p>
                                    `).join('')
    }
                        </div>
                        <p>${item.paragraph}</p>
                    </div>
                    <div class="collapsible-bottom__mid-line"><div class="line"></div></div>`).join('')