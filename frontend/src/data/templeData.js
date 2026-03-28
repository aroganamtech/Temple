export const EVENTS = [
    { id: 1, img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', badge: 'Festival', deity: '🔱', title: 'Maha Shivaratri', tags: ['Shiva Pooja', 'All Night'], desc: 'The great night of Lord Shiva — an all-night vigil of devotion, fasting, and divine chanting.', date: 'Feb 26', time: '6:00 PM – 6:00 AM', location: 'Chidambaram Temple', prana: '+150 pts' },
    { id: 2, img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80', badge: 'Pooja', deity: '🪷', title: 'Saraswati Puja', tags: ['Learning', 'Blessings'], desc: 'Seek the blessings of Goddess Saraswati for wisdom, arts, and knowledge on this auspicious day.', date: 'Mar 2', time: '8:00 AM – 12:00 PM', location: 'Mylapore Temple', prana: '+80 pts' },
    { id: 3, img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80', badge: 'Satsang', deity: '📿', title: 'Vedic Discourse', tags: ['Wisdom', 'Meditation'], desc: 'Join our revered Guru for an immersive session on the Bhagavad Gita and path to liberation.', date: 'Mar 8', time: '5:00 PM – 7:00 PM', location: 'Virtual + Chennai', prana: '+60 pts' },
    { id: 4, img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80', badge: 'Seva', deity: '🌸', title: 'Annadanam Seva', tags: ['Community', 'Food'], desc: 'Participate in the sacred act of feeding 5,000 devotees as an offering to the divine.', date: 'Mar 15', time: '9:00 AM – 2:00 PM', location: 'Tirupati Temple', prana: '+200 pts' },
    { id: 5, img: 'https://images.unsplash.com/photo-1609766857585-a8e6e4e2e517?w=600&q=80', badge: 'Festival', deity: '🪔', title: 'Karthigai Deepam', tags: ['Light Festival', 'Prayers'], desc: 'The festival of lights — thousands of lamps illuminate the sacred hills in divine splendour.', date: 'Mar 22', time: 'Dusk – Midnight', location: 'Thiruvannamalai', prana: '+120 pts' },
    { id: 6, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', badge: 'Virtual', deity: '🕉', title: 'Online Abhishekam', tags: ['Virtual', 'Shiva'], desc: 'Participate in the sacred Abhishekam ritual from anywhere in the world via live stream.', date: 'Mar 28', time: '7:00 AM – 9:00 AM', location: 'Live Stream', prana: '+50 pts' },
    { id: 7, img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80', badge: 'Festival', deity: '🌺', title: 'Panguni Uthiram', tags: ['Murugan', 'Procession'], desc: 'The celestial wedding of Lord Murugan — a grand chariot procession through sacred streets.', date: 'Apr 5', time: 'All Day', location: 'Palani Temple', prana: '+180 pts' },
    { id: 8, img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80', badge: 'Satsang', deity: '🎵', title: 'Carnatic Bhajan Night', tags: ['Music', 'Devotion'], desc: 'An evening of soul-stirring classical devotional music by renowned artists from Tamil Nadu.', date: 'Apr 10', time: '6:30 PM – 10:00 PM', location: 'Kapaleeshwarar Temple', prana: '+70 pts' },
    { id: 9, img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', badge: 'Pooja', deity: '🔱', title: 'Pradosham Pooja', tags: ['Shiva', 'Monthly'], desc: 'The sacred bi-monthly Pradosham — an auspicious time to worship Lord Shiva and seek blessings.', date: 'Apr 14', time: '5:30 PM – 7:30 PM', location: 'Multiple Temples', prana: '+90 pts' },
    { id: 10, img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80', badge: 'Seva', deity: '📚', title: 'Vedic School Seva', tags: ['Education', 'Children'], desc: 'Volunteer to teach Vedic chanting and Sanskrit to underprivileged children at our gurukul.', date: 'Apr 20', time: '9:00 AM – 1:00 PM', location: 'Chennai Gurukul', prana: '+250 pts' },
    { id: 11, img: 'https://images.unsplash.com/photo-1609766857585-a8e6e4e2e517?w=600&q=80', badge: 'Festival', deity: '🌙', title: 'Aadi Perukku', tags: ['Water Festival', 'Goddess'], desc: 'Celebrate the sacred rivers with offerings to Goddess Kaveri — a joyful water festival.', date: 'May 3', time: 'Morning', location: 'Kaveri River Banks', prana: '+100 pts' },
    { id: 12, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', badge: 'Virtual', deity: '🧘', title: 'Meditation Retreat', tags: ['Wellness', 'Peace'], desc: 'A 3-day virtual meditation retreat guided by senior monks — find stillness in the divine.', date: 'May 10', time: '3 Days', location: 'Online', prana: '+300 pts' },
]

export const CAL_EVENTS = [
    { day: '26', mon: 'Feb', name: 'Maha Shivaratri', detail: 'Chidambaram • All Night', icon: '🔱' },
    { day: '02', mon: 'Mar', name: 'Saraswati Puja', detail: 'Mylapore • 8:00 AM', icon: '🪷' },
    { day: '15', mon: 'Mar', name: 'Annadanam Seva', detail: 'Tirupati • 9:00 AM', icon: '🌸' },
    { day: '22', mon: 'Mar', name: 'Karthigai Deepam', detail: 'Thiruvannamalai • Dusk', icon: '🪔' },
    { day: '05', mon: 'Apr', name: 'Panguni Uthiram', detail: 'Palani • All Day', icon: '🌺' },
    { day: '14', mon: 'Apr', name: 'Pradosham Pooja', detail: 'Multiple Temples • 5:30 PM', icon: '🔱' },
]

export const STORIES = [
    { avatar: '🙏', name: 'Priya Sharma', badge: true, text: '"The virtual Darshan brought tears to my eyes. I felt the divine presence from 10,000 miles away."', likes: 248 },
    { avatar: '🕉', name: 'Rajan Pillai', badge: false, text: '"Seva Match connected me with the perfect volunteer role. Annadanam changed my life."', likes: 183 },
    { avatar: '🪷', name: 'Meena Krishnan', badge: true, text: '"Prana Points motivated me to attend more events. Now I have Guru Glow status!"', likes: 312 },
]

export const FILTERS = [
    { label: '✦ All Events', value: 'all' },
    { label: '🎊 Festivals', value: 'Festival' },
    { label: '🧘 Satsangs', value: 'Satsang' },
    { label: '🌸 Community Seva', value: 'Seva' },
    { label: '🪔 Poojas', value: 'Pooja' },
    { label: '🌐 Virtual', value: 'Virtual' },
]

export const ORBIT_DATA = [
    { icon: '🔱', label: 'Shivaratri', angle: 0, r: 42 },
    { icon: '🪷', label: 'Saraswati', angle: 72, r: 42 },
    { icon: '🌸', label: 'Annadanam', angle: 144, r: 42 },
    { icon: '🪔', label: 'Deepam', angle: 216, r: 42 },
    { icon: '🌺', label: 'Panguni', angle: 288, r: 42 },
]
