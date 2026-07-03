/* ==========================================================================
   VAKEELNET - CORE WEB LOGIC & DATABASE
   ========================================================================== */

// --- LOCATION HIERARCHY DATA ---
const LOCATION_DATA = {
    "India": {
        "Andhra Pradesh": ["Visakhapatnam","Vijayawada","Guntur","Nellore","Tirupati","Kakinada","Rajahmundry","Kurnool"],
        "Arunachal Pradesh": ["Itanagar","Naharlagun","Pasighat","Ziro","Bomdila"],
        "Assam": ["Guwahati","Silchar","Dibrugarh","Jorhat","Nagaon","Tinsukia","Tezpur"],
        "Bihar": ["Patna","Gaya","Bhagalpur","Muzaffarpur","Darbhanga","Purnia","Arrah"],
        "Chhattisgarh": ["Raipur","Bhilai","Bilaspur","Durg","Korba","Rajnandgaon"],
        "Goa": ["Panaji","Margao","Vasco da Gama","Mapusa","Ponda","Calangute"],
        "Gujarat": ["Ahmedabad","Surat","Vadodara","Rajkot","Bhavnagar","Jamnagar","Gandhinagar","Anand"],
        "Haryana": ["Gurugram","Faridabad","Ambala","Panipat","Rohtak","Hisar","Karnal","Sonipat"],
        "Himachal Pradesh": ["Shimla","Manali","Dharamshala","Solan","Mandi","Baddi","Palampur"],
        "Jharkhand": ["Ranchi","Jamshedpur","Dhanbad","Bokaro","Deoghar","Hazaribagh"],
        "Karnataka": ["Bangalore","Mysore","Hubli","Mangalore","Belgaum","Gulbarga","Davanagere","Tumkur"],
        "Kerala": ["Kochi","Trivandrum","Kozhikode","Thrissur","Kollam","Kannur","Alappuzha","Palakkad","Kottayam"],
        "Madhya Pradesh": ["Bhopal","Indore","Jabalpur","Gwalior","Ujjain","Sagar","Dewas","Ratlam"],
        "Maharashtra": ["Mumbai","Pune","Nagpur","Thane","Nashik","Aurangabad","Solapur","Navi Mumbai","Kolhapur"],
        "Manipur": ["Imphal","Thoubal","Bishnupur","Churachandpur"],
        "Meghalaya": ["Shillong","Tura","Cherrapunjee","Nongpoh"],
        "Mizoram": ["Aizawl","Lunglei","Champhai","Serchhip"],
        "Nagaland": ["Kohima","Dimapur","Mokokchung","Wokha"],
        "Odisha": ["Bhubaneswar","Cuttack","Rourkela","Berhampur","Puri","Sambalpur","Balasore"],
        "Punjab": ["Amritsar","Ludhiana","Jalandhar","Patiala","Mohali","Bathinda","Hoshiarpur"],
        "Rajasthan": ["Jaipur","Jodhpur","Udaipur","Kota","Bikaner","Ajmer","Alwar","Bhilwara","Sikar"],
        "Sikkim": ["Gangtok","Namchi","Mangan","Gyalshing"],
        "Tamil Nadu": ["Chennai","Coimbatore","Madurai","Trichy","Salem","Tirunelveli","Tiruppur","Vellore","Erode"],
        "Telangana": ["Hyderabad","Warangal","Nizamabad","Karimnagar","Secunderabad","Khammam"],
        "Tripura": ["Agartala","Dharmanagar","Udaipur","Kailasahar"],
        "Uttar Pradesh": ["Lucknow","Kanpur","Agra","Varanasi","Ghaziabad","Meerut","Noida","Prayagraj","Bareilly","Gorakhpur"],
        "Uttarakhand": ["Dehradun","Haridwar","Rishikesh","Nainital","Roorkee","Haldwani"],
        "West Bengal": ["Kolkata","Howrah","Durgapur","Siliguri","Asansol","Darjeeling","Malda"],
        "Delhi (UT)": ["New Delhi","Dwarka","Rohini","Laxmi Nagar","Saket","Janakpuri","Connaught Place"],
        "Chandigarh (UT)": ["Chandigarh"],
        "Jammu & Kashmir (UT)": ["Srinagar","Jammu","Anantnag","Sopore","Baramulla","Udhampur"],
        "Ladakh (UT)": ["Leh","Kargil"],
        "Puducherry (UT)": ["Puducherry","Karaikal","Mahe","Yanam"],
        "Andaman & Nicobar (UT)": ["Port Blair","Diglipur","Mayabunder"],
        "Lakshadweep (UT)": ["Kavaratti","Agatti","Minicoy"],
        "Dadra & Nagar Haveli (UT)": ["Silvassa","Daman","Diu"]
    },
    "United States": {
        "California": ["Los Angeles","San Francisco","San Diego","San Jose","Sacramento","Fresno","Oakland"],
        "New York": ["New York City","Buffalo","Rochester","Albany","Syracuse","Yonkers","Manhattan"],
        "Texas": ["Houston","Austin","Dallas","San Antonio","Fort Worth","El Paso","Arlington"],
        "Florida": ["Miami","Orlando","Tampa","Jacksonville","Tallahassee","Fort Lauderdale","St. Petersburg"],
        "Illinois": ["Chicago","Springfield","Naperville","Peoria","Rockford","Evanston","Aurora"],
        "Georgia": ["Atlanta","Savannah","Augusta","Columbus","Macon","Athens"],
        "Washington": ["Seattle","Spokane","Tacoma","Bellevue","Olympia","Redmond"]
    },
    "United Kingdom": {
        "England": ["London","Birmingham","Manchester","Leeds","Liverpool","Sheffield","Bristol","Newcastle","Nottingham"],
        "Scotland": ["Edinburgh","Glasgow","Aberdeen","Dundee","Inverness","Stirling"],
        "Wales": ["Cardiff","Swansea","Newport","Wrexham","Bangor"],
        "Northern Ireland": ["Belfast","Londonderry","Lisburn","Armagh"]
    },
    "Canada": {
        "Ontario": ["Toronto","Ottawa","Mississauga","Hamilton","Brampton","London","Markham","Kitchener"],
        "British Columbia": ["Vancouver","Victoria","Surrey","Burnaby","Richmond","Abbotsford","Kelowna"],
        "Quebec": ["Montreal","Quebec City","Laval","Gatineau","Longueuil","Sherbrooke"],
        "Alberta": ["Calgary","Edmonton","Red Deer","Lethbridge","Medicine Hat"]
    },
    "Australia": {
        "New South Wales": ["Sydney","Newcastle","Wollongong","Parramatta","Central Coast"],
        "Victoria": ["Melbourne","Geelong","Ballarat","Bendigo","Shepparton"],
        "Queensland": ["Brisbane","Gold Coast","Cairns","Townsville","Toowoomba"],
        "Western Australia": ["Perth","Fremantle","Bunbury","Geraldton","Kalgoorlie"]
    },
    "UAE": {
        "Dubai": ["Dubai City","Deira","Bur Dubai","Jumeirah","Business Bay","Dubai Marina","JLT"],
        "Abu Dhabi": ["Abu Dhabi City","Al Ain","Khalifa City","Yas Island","Reem Island"],
        "Sharjah": ["Sharjah City","Khor Fakkan","Dibba Al Hisn","Kalba"],
        "Ajman": ["Ajman City","Masfout"],
        "Ras Al Khaimah": ["RAK City","Digdagga","Al Hamra"]
    },
    "Germany": {
        "Bavaria": ["Munich","Nuremberg","Augsburg","Regensburg","Ingolstadt","Wurzburg"],
        "Berlin": ["Berlin City","Charlottenburg","Mitte","Prenzlauer Berg","Kreuzberg"],
        "Hamburg": ["Hamburg City","Harburg","Altona","Wandsbek","Eimsbuttel"],
        "North Rhine-Westphalia": ["Cologne","Dusseldorf","Dortmund","Essen","Bonn","Aachen","Wuppertal"]
    },
    "Singapore": {
        "Central Region": ["Downtown Core","Marina Bay","Orchard","Chinatown","Toa Payoh","Bishan"],
        "East Region": ["Tampines","Bedok","Pasir Ris","Changi","Geylang"],
        "West Region": ["Jurong","Clementi","Bukit Batok","Boon Lay","Queenstown"],
        "North Region": ["Woodlands","Yishun","Sembawang","Seletar","Mandai"]
    }
};

// --- INITIAL MOCK DATA & CURRENCY SYSTEM ---
const COUNTRY_CURRENCY = {
    "India": "₹",
    "United States": "$",
    "United Kingdom": "£",
    "Canada": "C$",
    "Australia": "A$",
    "UAE": "AED ",
    "Germany": "€",
    "Singapore": "S$"
};

function formatCurrency(amount, country) {
    const symbol = COUNTRY_CURRENCY[country] || "$";
    return `${symbol}${amount}`;
}

const DEFAULT_LAWYERS = [];

const DEFAULT_COURTS = [
    {
        id: "court-1",
        name: "Arbitration Suite Alpha",
        type: "Physical Room",
        rate: 100,
        capacity: 12,
        country: "United States",
        state: "New York",
        city: "New York City",
        features: ["Smart Screen", "Secure Audio System", "Private Lounge", "Beverage Bar"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
        desc: "Premium mediation boardroom overlooking Manhattan. Designed for secure high-stakes negotiations."
    },
    {
        id: "court-2",
        name: "Supreme Simulation Hearing Hall",
        type: "Physical Court",
        rate: 250,
        capacity: 40,
        country: "United States",
        state: "Illinois",
        city: "Chicago",
        features: ["Judge's Bench", "Witness Stand", "Full AV Recording", "Interactive Exhibits"],
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
        desc: "Full-scale mockup courtroom. Perfect for trial practice, mock juries, and binding regional arbitrations."
    },
    {
        id: "court-3",
        name: "Silicon Mediation Chambers",
        type: "Hybrid Hall",
        rate: 120,
        capacity: 8,
        country: "United States",
        state: "California",
        city: "San Francisco",
        features: ["360° Cameras", "Acoustic Insulation", "Electronic Whiteboard", "Fiber Internet"],
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
        desc: "Equipped with state-of-the-art virtual participation cameras and high-definition screens for hybrid legal disputes."
    },
    {
        id: "court-4",
        name: "Lex Cloud Virtual Room",
        type: "Virtual Space",
        rate: 50,
        capacity: 100,
        country: "Online",
        state: "Online",
        city: "Online",
        features: ["End-to-End Encryption", "Court Stenographer Bot", "DocuSign Integration", "HD Video Stream"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
        desc: "Secure, legally-certified virtual room environment for online depositions, hearings, and remote mediator sessions."
    },
    {
        id: "court-5",
        name: "Taj Arbitration Chambers",
        type: "Physical Room",
        rate: 150,
        capacity: 20,
        country: "India",
        state: "Maharashtra",
        city: "Mumbai",
        features: ["UHD Projection", "Secure Server Host", "Corporate Lounge", "Stenography Desk"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
        desc: "Ultra-premium dispute resolution suite near Mumbai Financial District. Excellent acoustic insulation."
    },
    {
        id: "court-6",
        name: "Deccan Mediation Suite",
        type: "Hybrid Hall",
        rate: 80,
        capacity: 10,
        country: "India",
        state: "Karnataka",
        city: "Bangalore",
        features: ["Interactive Screens", "Conference Audio", "Dual Camera System"],
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
        desc: "Modern collaborative space tailored for mediation, negotiation, and corporate advisory conferences."
    }
];

const DEFAULT_BOOKINGS = [
    {
        id: "booking-101",
        clientId: "client-1",
        clientName: "John Miller",
        lawyerId: "lawyer-1",
        lawyerName: "Sarah Cole, Esq.",
        country: "United States",
        state: "New York",
        city: "New York City",
        specialty: "Corporate Law",
        date: "2026-06-15",
        time: "10:30 AM",
        courtId: "court-1",
        courtName: "Arbitration Suite Alpha",
        notes: "Corporate expansion and seed round structuring advice.",
        counselFee: 350,
        courtFee: 300, // 3 hours * $100
        totalFee: 650,
        status: "Confirmed"
    },
    {
        id: "booking-102",
        clientId: "client-1",
        clientName: "John Miller",
        lawyerId: "lawyer-2",
        lawyerName: "Robert Vance, J.D.",
        country: "United States",
        state: "Illinois",
        city: "Chicago",
        specialty: "Criminal Defense",
        date: "2026-06-20",
        time: "02:00 PM",
        courtId: "",
        courtName: "",
        notes: "Consultation regarding pending audit review.",
        counselFee: 400,
        courtFee: 0,
        totalFee: 400,
        status: "Pending"
    }
];

const DEFAULT_CLIENTS = [
    {
        id: "client-1",
        name: "John Miller",
        email: "jmiller@example.com",
        password: "password123",
        role: "client"
    }
];

// --- LOCAL STORAGE DATA SYNC ---
class DB {
    static get(key, defaultVal) {
        const val = localStorage.getItem(key);
        return val ? JSON.parse(val) : defaultVal;
    }
    static set(key, val) {
        localStorage.setItem(key, JSON.stringify(val));
    }
}

// Initialize Database
let lawyers = DB.get("jb_lawyers", DEFAULT_LAWYERS);
let courts = DB.get("jb_courts", DEFAULT_COURTS);
let bookings = DB.get("jb_bookings", DEFAULT_BOOKINGS);
let clients = DB.get("jb_clients", DEFAULT_CLIENTS);

let currentUser = DB.get("jb_current_user", null); // Holds logged in user object (client or lawyer)

// Notifications for lawyers tracking client approaches
let lawyerNotifications = DB.get("jb_lawyer_notifications", {});

function saveDB() {
    DB.set("jb_lawyers", lawyers);
    DB.set("jb_courts", courts);
    DB.set("jb_bookings", bookings);
    DB.set("jb_clients", clients);
    DB.set("jb_lawyer_notifications", lawyerNotifications);
}

// Track client approach to lawyer
function recordLawyerApproach(lawyerId, clientName, clientEmail, specialty) {
    if (!lawyerNotifications[lawyerId]) {
        lawyerNotifications[lawyerId] = [];
    }
    
    const approach = {
        id: `approach-${Date.now()}`,
        clientName,
        clientEmail,
        specialty,
        timestamp: new Date().toISOString(),
        read: false
    };
    
    lawyerNotifications[lawyerId].unshift(approach);
    saveDB();
}

// Record lawyer login event
function recordLawyerLogin(lawyerId, lawyerName) {
    // This could be expanded to track login history
    // For now, just ensure notifications exist for this lawyer
    if (!lawyerNotifications[lawyerId]) {
        lawyerNotifications[lawyerId] = [];
    }
}

// Update notification UI in navbar for lawyer
function updateLawyerNotificationUI() {
    if (!currentUser || currentUser.role !== "lawyer") return;
    
    const lawyerId = currentUser.id;
    const notifications = lawyerNotifications[lawyerId] || [];
    const unreadCount = notifications.filter(n => !n.read).length;
    
    const badgeEl = document.getElementById("notification-count");
    const listEl = document.getElementById("notification-list");
    
    if (badgeEl) {
        if (unreadCount > 0) {
            badgeEl.textContent = unreadCount;
            badgeEl.style.display = "flex";
        } else {
            badgeEl.style.display = "none";
        }
    }
    
    if (listEl) {
        if (notifications.length === 0) {
            listEl.innerHTML = '<p class="notification-empty">No client approaches yet</p>';
            return;
        }
        
        listEl.innerHTML = notifications.map(notif => {
            const date = new Date(notif.timestamp);
            const timeStr = date.toLocaleDateString() + " " + date.toLocaleTimeString();
            const unreadClass = notif.read ? "" : "unread";
            
            return `
                <div class="notification-item ${unreadClass}" data-id="${notif.id}">
                    <div class="notification-item-header">
                        <span class="notification-item-name">${notif.clientName}</span>
                        <span class="notification-item-time">${timeStr}</span>
                    </div>
                    <div class="notification-item-message">Client approached you for a consultation</div>
                    <div class="notification-item-spec">${notif.specialty}</div>
                </div>
            `;
        }).join("");
    }
}

// Mark notification as read
function markNotificationRead(notifId) {
    if (!currentUser || currentUser.role !== "lawyer") return;
    
    const lawyerId = currentUser.id;
    const notifications = lawyerNotifications[lawyerId] || [];
    const notif = notifications.find(n => n.id === notifId);
    
    if (notif) {
        notif.read = true;
        saveDB();
        updateLawyerNotificationUI();
    }
}

// Mark all notifications as read
function markAllNotificationsRead() {
    if (!currentUser || currentUser.role !== "lawyer") return;
    
    const lawyerId = currentUser.id;
    const notifications = lawyerNotifications[lawyerId] || [];
    
    notifications.forEach(n => {
        n.read = true;
    });
    
    saveDB();
    updateLawyerNotificationUI();
}

// --- DOM ELEMENTS REFERENCE ---
const els = {
    // Views
    views: {
        home: document.getElementById("view-home"),
        browse: document.getElementById("view-browse"),
        courts: document.getElementById("view-courts"),
        clientDash: document.getElementById("view-client-dashboard"),
        lawyerDash: document.getElementById("view-lawyer-dashboard")
    },
    // Navigation
    nav: {
        logo: document.getElementById("nav-logo"),
        home: document.getElementById("nav-home"),
        findLawyer: document.getElementById("nav-find-lawyer"),
        courtBooking: document.getElementById("nav-court-booking"),
        howItWorks: document.getElementById("nav-how-it-works"),
        themeToggle: document.getElementById("theme-toggle"),
        guestActions: document.getElementById("guest-nav-actions"),
        userActions: document.getElementById("user-nav-actions"),
        lawyerActions: document.getElementById("lawyer-nav-actions"),
        
        userAvatar: document.getElementById("user-nav-avatar"),
        userName: document.getElementById("user-nav-name"),
        userBadgeTrigger: document.getElementById("user-badge-trigger"),
        userDropdown: document.getElementById("user-dropdown"),

        lawyerAvatar: document.getElementById("lawyer-nav-avatar"),
        lawyerName: document.getElementById("lawyer-nav-name"),
        lawyerBadgeTrigger: document.getElementById("lawyer-badge-trigger"),
        lawyerDropdown: document.getElementById("lawyer-dropdown"),

        // Dropdown Buttons
        btnUserDashboard: document.getElementById("btn-user-dashboard"),
        btnUserBookings: document.getElementById("btn-user-bookings"),
        btnUserLogout: document.getElementById("btn-user-logout"),
        btnLawyerDashboard: document.getElementById("btn-lawyer-dashboard"),
        btnLawyerProfile: document.getElementById("btn-lawyer-profile"),
        btnLawyerLogout: document.getElementById("btn-lawyer-logout"),

        // Header Buttons
        btnLoginTrigger: document.getElementById("btn-login-trigger"),
        btnRegisterTrigger: document.getElementById("btn-register-trigger")
    },
    // Home View
    home: {
        searchCountry: document.getElementById("search-country"),
        searchState: document.getElementById("search-state"),
        searchCity: document.getElementById("search-city"),
        searchSpecialty: document.getElementById("search-specialty"),
        btnSearch: document.getElementById("btn-main-search"),
        btnGeo: document.getElementById("btn-geo-detect"),
        geoStatus: document.getElementById("geo-status"),
        featuredTitle: document.getElementById("featured-title"),
        featuredSubtitle: document.getElementById("featured-subtitle"),
        featuredContainer: document.getElementById("featured-lawyers-container"),
        btnViewAll: document.getElementById("btn-view-all-lawyers")
    },
    // Browse View
    browse: {
        filterCountry: document.getElementById("filter-country"),
        filterState: document.getElementById("filter-state"),
        filterCity: document.getElementById("filter-city"),
        filterSpecialties: document.getElementById("filter-specialties"),
        filterExpRange: document.getElementById("filter-exp-range"),
        expVal: document.getElementById("exp-val"),
        filterMaxFee: document.getElementById("filter-max-fee"),
        btnClearFilters: document.getElementById("btn-clear-filters"),
        resultsCount: document.getElementById("results-count"),
        sortSelect: document.getElementById("sort-select"),
        resultsList: document.getElementById("lawyers-results-list")
    },
    // Court View
    courts: {
        container: document.getElementById("courts-container"),
        selectId: document.getElementById("court-select-id"),
        date: document.getElementById("court-booking-date"),
        slot: document.getElementById("court-booking-slot"),
        lawyer: document.getElementById("court-booking-lawyer"),
        purpose: document.getElementById("court-booking-purpose"),
        pricingSummary: document.getElementById("court-pricing-summary"),
        courtRate: document.getElementById("summary-court-rate"),
        courtTotal: document.getElementById("summary-court-total"),
        form: document.getElementById("court-booking-form")
    },
    // Client Dashboard View
    clientDash: {
        avatar: document.getElementById("client-dash-avatar"),
        name: document.getElementById("client-dash-name"),
        email: document.getElementById("client-dash-email"),
        statBookings: document.getElementById("client-stat-bookings"),
        statCourts: document.getElementById("client-stat-courts"),
        tabs: document.querySelectorAll("#view-client-dashboard .dash-tab"),
        tabAppointments: document.getElementById("tab-client-appointments"),
        tabCourts: document.getElementById("tab-client-courts"),
        appointmentsList: document.getElementById("client-appointments-list"),
        courtsList: document.getElementById("client-courts-list"),
        btnFindLawyersShortcut: document.getElementById("btn-find-lawyers-shortcut"),
        btnFindCourtsShortcut: document.getElementById("btn-find-courts-shortcut")
    },
    // Lawyer Dashboard View
    lawyerDash: {
        avatar: document.getElementById("lawyer-dash-avatar"),
        name: document.getElementById("lawyer-dash-name"),
        specialty: document.getElementById("lawyer-dash-specialty"),
        city: document.getElementById("lawyer-dash-city"),
        rating: document.getElementById("lawyer-dash-rating"),
        statAppointments: document.getElementById("lawyer-stat-appointments"),
        statRevenue: document.getElementById("lawyer-stat-revenue"),
        tabs: document.querySelectorAll("#view-lawyer-dashboard .dash-tab"),
        tabAppointments: document.getElementById("tab-lawyer-appointments"),
        tabSettings: document.getElementById("tab-lawyer-settings"),
        appointmentsList: document.getElementById("lawyer-appointments-list"),
        // Settings Form
        form: document.getElementById("lawyer-profile-form"),
        editName: document.getElementById("lawyer-edit-name"),
        editSpecialty: document.getElementById("lawyer-edit-specialty"),
        editCountry: document.getElementById("lawyer-edit-country"),
        editState: document.getElementById("lawyer-edit-state"),
        editCity: document.getElementById("lawyer-edit-city"),
        editFee: document.getElementById("lawyer-edit-fee"),
        editExp: document.getElementById("lawyer-edit-exp"),
        editImage: document.getElementById("lawyer-edit-image"),
        editBio: document.getElementById("lawyer-edit-bio")
    },
    // Modals
    modals: {
        auth: document.getElementById("modal-auth"),
        booking: document.getElementById("modal-booking"),
        success: document.getElementById("modal-success"),
        
        authOverlay: document.getElementById("auth-modal-overlay"),
        btnCloseAuth: document.getElementById("btn-close-auth"),
        authTabBtns: document.querySelectorAll(".auth-tab-btn"),
        authContents: document.querySelectorAll(".auth-content"),
        
        // Login
        loginForm: document.getElementById("login-form"),
        loginEmail: document.getElementById("login-email"),
        loginPassword: document.getElementById("login-password"),
        loginRoles: document.getElementsByName("login-role"),
 
        // Register
        regRoles: document.getElementsByName("reg-role"),
        regClientForm: document.getElementById("register-client-form"),
        regLawyerForm: document.getElementById("register-lawyer-form"),
        
        regClientName: document.getElementById("reg-client-name"),
        regClientEmail: document.getElementById("reg-client-email"),
        regClientPassword: document.getElementById("reg-client-password"),
        
        regLawyerName: document.getElementById("reg-lawyer-name"),
        regLawyerSpecialty: document.getElementById("reg-lawyer-specialty"),
        regLawyerCountry: document.getElementById("reg-lawyer-country"),
        regLawyerState: document.getElementById("reg-lawyer-state"),
        regLawyerCity: document.getElementById("reg-lawyer-city"),
        regLawyerFee: document.getElementById("reg-lawyer-fee"),
        regLawyerExp: document.getElementById("reg-lawyer-exp"),
        regLawyerEmail: document.getElementById("reg-lawyer-email"),
        regLawyerPassword: document.getElementById("reg-lawyer-password"),
 
        // Booking Modal
        bookingOverlay: document.getElementById("booking-modal-overlay"),
        btnCloseBooking: document.getElementById("btn-close-booking"),
        bookAvatar: document.getElementById("book-modal-avatar"),
        bookName: document.getElementById("book-modal-name"),
        bookSpecialty: document.getElementById("book-modal-specialty"),
        bookCity: document.getElementById("book-modal-city"),
        bookExp: document.getElementById("book-modal-exp"),
        bookFee: document.getElementById("book-modal-fee"),
        bookRating: document.getElementById("book-modal-rating"),
        
        appointmentForm: document.getElementById("appointment-booking-form"),
        appointmentDate: document.getElementById("appointment-date"),
        appointmentTime: document.getElementById("appointment-time"),
        appointmentIncludeCourt: document.getElementById("appointment-include-court"),
        courtSubform: document.getElementById("court-subform-fields"),
        appointmentCourtId: document.getElementById("appointment-court-id"),
        appointmentNotes: document.getElementById("appointment-notes"),
        
        summaryLawyerFee: document.getElementById("summary-lawyer-fee"),
        summaryCourtRow: document.getElementById("summary-court-addon-row"),
        summaryCourtFee: document.getElementById("summary-court-addon-fee"),
        summaryTotalFee: document.getElementById("summary-total-fee"),
 
        // Success Modal
        successOverlay: document.getElementById("success-modal-overlay"),
        btnSuccessClose: document.getElementById("btn-success-close"),
        receiptRef: document.getElementById("receipt-ref"),
        receiptLawyer: document.getElementById("receipt-lawyer"),
        receiptDatetime: document.getElementById("receipt-datetime"),
        receiptCourtRow: document.getElementById("receipt-court-row"),
        receiptCourt: document.getElementById("receipt-court")
    },
    // Communication Hub (Chat & Call)
    chat: {
        modal: document.getElementById("modal-chat-call"),
        overlay: document.getElementById("chat-modal-overlay"),
        recipientAvatar: document.getElementById("chat-recipient-avatar"),
        recipientName: document.getElementById("chat-recipient-name"),
        recipientStatus: document.getElementById("chat-recipient-status"),
        messagesList: document.getElementById("chat-messages-list"),
        fileInput: document.getElementById("chat-file-input"),
        messageInput: document.getElementById("chat-message-input"),
        btnSend: document.getElementById("btn-chat-send"),
        btnAttach: document.getElementById("btn-chat-attach-trigger"),
        btnClose: document.getElementById("btn-close-chat"),
        btnVoiceCall: document.getElementById("btn-voice-call"),
        btnVideoCall: document.getElementById("btn-video-call"),
        
        // Calling overlay
        callingOverlay: document.getElementById("calling-overlay"),
        callingAvatar: document.getElementById("calling-avatar"),
        callingName: document.getElementById("calling-name"),
        callingStatus: document.getElementById("calling-status"),
        callingTimer: document.getElementById("calling-timer"),
        voiceWave: document.getElementById("voice-wave"),
        videoFeedWrapper: document.getElementById("video-feed-wrapper"),
        remoteVideoAvatar: document.getElementById("remote-video-avatar"),
        localVideo: document.getElementById("local-video"),
        btnCallMute: document.getElementById("btn-call-mute"),
        btnCallVideo: document.getElementById("btn-call-video"),
        btnCallEnd: document.getElementById("btn-call-end")
    }
};
 
// --- APP STATE ---
let selectedLawyerForBooking = null;
let currentFilters = {
    country: "",
    state: "",
    city: "",
    specialties: [],
    minExp: 1,
    maxFee: null
};

// Cascading Country -> State -> City Dropdowns Setup
function setupCountryStateCityDropdowns(countryEl, stateEl, cityEl, initialValues = {}) {
    if (!countryEl || !stateEl || !cityEl) return;

    function populateCountries() {
        countryEl.innerHTML = '<option value="">Country...</option>';
        Object.keys(LOCATION_DATA).forEach(country => {
            const opt = document.createElement("option");
            opt.value = country;
            opt.textContent = country;
            countryEl.appendChild(opt);
        });
    }

    function handleCountryChange(selectedCountry, selectStateVal = "", selectCityVal = "") {
        stateEl.innerHTML = '<option value="">State...</option>';
        cityEl.innerHTML = '<option value="">City...</option>';
        stateEl.disabled = true;
        cityEl.disabled = true;

        if (selectedCountry && LOCATION_DATA[selectedCountry]) {
            stateEl.disabled = false;
            Object.keys(LOCATION_DATA[selectedCountry]).forEach(state => {
                const opt = document.createElement("option");
                opt.value = state;
                opt.textContent = state;
                stateEl.appendChild(opt);
            });
            if (selectStateVal) {
                stateEl.value = selectStateVal;
                handleStateChange(selectedCountry, selectStateVal, selectCityVal);
            }
        }
    }

    function handleStateChange(selectedCountry, selectedState, selectCityVal = "") {
        cityEl.innerHTML = '<option value="">City...</option>';
        cityEl.disabled = true;

        if (selectedCountry && selectedState && LOCATION_DATA[selectedCountry][selectedState]) {
            cityEl.disabled = false;
            LOCATION_DATA[selectedCountry][selectedState].forEach(city => {
                const opt = document.createElement("option");
                opt.value = city;
                opt.textContent = city;
                cityEl.appendChild(opt);
            });
            if (selectCityVal) {
                cityEl.value = selectCityVal;
            }
        }
    }

    // Bind event listeners (remove old ones first if any, but since this is vanilla, we add once)
    countryEl.onchange = () => {
        handleCountryChange(countryEl.value);
    };

    stateEl.onchange = () => {
        handleStateChange(countryEl.value, stateEl.value);
    };

    // Populate initial
    populateCountries();
    if (initialValues.country) {
        countryEl.value = initialValues.country;
        handleCountryChange(initialValues.country, initialValues.state, initialValues.city);
    }
}

// --- VIEW NAVIGATION CONTROLLER ---
function switchView(viewName) {
    // Hide all views
    Object.values(els.views).forEach(v => v.classList.add("hidden"));
    
    // Deactivate all nav links
    Object.values(els.nav).forEach(link => {
        if(link && link.classList) link.classList.remove("active");
    });

    // Show selected view & activate link
    switch(viewName) {
        case "home":
            els.views.home.classList.remove("hidden");
            els.nav.home.classList.add("active");
            renderFeaturedLawyers();
            break;
        case "browse":
            els.views.browse.classList.remove("hidden");
            els.nav.findLawyer.classList.add("active");
            renderBrowseLawyers();
            break;
        case "courts":
            els.views.courts.classList.remove("hidden");
            els.nav.courtBooking.classList.add("active");
            renderCourts();
            break;
        case "client-dash":
            els.views.clientDash.classList.remove("hidden");
            renderClientDashboard();
            break;
        case "lawyer-dash":
            els.views.lawyerDash.classList.remove("hidden");
            renderLawyerDashboard();
            break;
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close Dropdowns on Click Outside
window.addEventListener("click", (e) => {
    if (!els.nav.userBadgeTrigger.contains(e.target) && !els.nav.userDropdown.contains(e.target)) {
        els.nav.userDropdown.classList.add("hidden");
    }
    if (!els.nav.lawyerBadgeTrigger.contains(e.target) && !els.nav.lawyerDropdown.contains(e.target)) {
        els.nav.lawyerDropdown.classList.add("hidden");
    }
});

// Setup Navigation Event Listeners
els.nav.logo.addEventListener("click", () => switchView("home"));
els.nav.home.addEventListener("click", () => switchView("home"));
els.nav.findLawyer.addEventListener("click", () => switchView("browse"));
els.nav.courtBooking.addEventListener("click", () => switchView("courts"));
els.nav.howItWorks.addEventListener("click", (e) => {
    e.preventDefault();
    switchView("home");
    setTimeout(() => {
        const featSec = document.querySelector(".home-features");
        featSec.scrollIntoView({ behavior: "smooth" });
    }, 100);
});

// Dropdown Toggles
els.nav.userBadgeTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    els.nav.userDropdown.classList.toggle("hidden");
});
els.nav.lawyerBadgeTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    els.nav.lawyerDropdown.classList.toggle("hidden");
});

// Dashboard Actions
els.nav.btnUserDashboard.addEventListener("click", () => { switchView("client-dash"); els.nav.userDropdown.classList.add("hidden"); });
els.nav.btnUserBookings.addEventListener("click", () => {
    switchView("client-dash");
    els.nav.userDropdown.classList.add("hidden");
    els.clientDash.tabs[0].click();
});
els.nav.btnLawyerDashboard.addEventListener("click", () => { switchView("lawyer-dash"); els.nav.lawyerDropdown.classList.add("hidden"); });
els.nav.btnLawyerProfile.addEventListener("click", () => {
    switchView("lawyer-dash");
    els.nav.lawyerDropdown.classList.add("hidden");
    els.lawyerDash.tabs[1].click();
});

// Footer Navigation Links
document.querySelector(".nav-find-lawyer-footer").addEventListener("click", (e) => { e.preventDefault(); switchView("browse"); });
document.querySelector(".nav-court-booking-footer").addEventListener("click", (e) => { e.preventDefault(); switchView("courts"); });

// --- THEME MANAGEMENT ---
function initTheme() {
    const isDark = localStorage.getItem("jb_dark_mode") === "true";
    if (isDark) {
        document.body.classList.add("dark-theme");
        els.nav.themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.body.classList.remove("dark-theme");
        els.nav.themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

els.nav.themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("jb_dark_mode", isDark);
    els.nav.themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
});

// --- AUTHENTICATION STATE & HANDLERS ---
function updateAuthUI() {
    els.nav.guestActions.classList.add("hidden");
    els.nav.userActions.classList.add("hidden");
    els.nav.lawyerActions.classList.add("hidden");

    if (!currentUser) {
        els.nav.guestActions.classList.remove("hidden");
    } else if (currentUser.role === "client") {
        els.nav.userActions.classList.remove("hidden");
        els.nav.userName.textContent = currentUser.name;
        els.nav.userAvatar.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(currentUser.name)}&backgroundColor=c5a880`;
    } else if (currentUser.role === "lawyer") {
        els.nav.lawyerActions.classList.remove("hidden");
        els.nav.lawyerName.textContent = currentUser.name;
        els.nav.lawyerAvatar.src = currentUser.image || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(currentUser.name)}&backgroundColor=0f172a`;
        updateLawyerNotificationUI();
    }
}

// Logouts
els.nav.btnUserLogout.addEventListener("click", logout);
els.nav.btnLawyerLogout.addEventListener("click", logout);

function logout() {
    currentUser = null;
    DB.set("jb_current_user", null);
    updateAuthUI();
    switchView("home");
}

// Open Auth Modals
els.nav.btnLoginTrigger.addEventListener("click", () => openAuthModal("login"));
els.nav.btnRegisterTrigger.addEventListener("click", () => openAuthModal("register"));

function openAuthModal(tab = "login") {
    els.modals.auth.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    
    // Switch to target tab
    els.modals.authTabBtns.forEach(btn => {
        if(btn.dataset.tab === `tab-${tab}`) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    els.modals.authContents.forEach(content => {
        if(content.id === `tab-${tab}`) {
            content.classList.add("active");
        } else {
            content.classList.remove("active");
        }
    });
}

function closeAuthModal() {
    els.modals.auth.classList.add("hidden");
    document.body.style.overflow = "auto";
}

els.modals.btnCloseAuth.addEventListener("click", closeAuthModal);
els.modals.authOverlay.addEventListener("click", closeAuthModal);

// Switch Auth tabs inside Modal
els.modals.authTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        els.modals.authTabBtns.forEach(b => b.classList.remove("active"));
        els.modals.authContents.forEach(c => c.classList.remove("active"));
        
        btn.classList.add("active");
        const target = btn.dataset.tab;
        document.getElementById(target).classList.add("active");
    });
});

// Role selection toggles registration form fields
els.modals.regRoles.forEach(radio => {
    radio.addEventListener("change", (e) => {
        if(e.target.value === "lawyer") {
            els.modals.regClientForm.classList.add("hidden");
            els.modals.regLawyerForm.classList.remove("hidden");
        } else {
            els.modals.regClientForm.classList.remove("hidden");
            els.modals.regLawyerForm.classList.add("hidden");
        }
    });
});

// Auth Submission Forms
els.modals.loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = els.modals.loginEmail.value.trim().toLowerCase();
    const password = els.modals.loginPassword.value;
    let selectedRole = "client";
    
    els.modals.loginRoles.forEach(r => { if(r.checked) selectedRole = r.value; });

    if (selectedRole === "client") {
        const found = clients.find(c => c.email.toLowerCase() === email && c.password === password);
        if (found) {
            currentUser = found;
            DB.set("jb_current_user", currentUser);
            updateAuthUI();
            closeAuthModal();
            alert(`Logged in successfully as client: ${found.name}`);
            if (selectedLawyerForBooking) {
                openBookingModal(selectedLawyerForBooking);
            } else {
                switchView("client-dash");
            }
        } else {
            alert("Invalid client credentials. Use email: jmiller@example.com, password: password123");
        }
    } else {
        const found = lawyers.find(l => l.email.toLowerCase() === email && l.password === password);
        if (found) {
            currentUser = found;
            DB.set("jb_current_user", currentUser);
            updateAuthUI();
            closeAuthModal();
            
            // Record login and show notification count
            recordLawyerLogin(found.id, found.name);
            updateLawyerNotificationUI();
            
            const approachCount = (lawyerNotifications[found.id] || []).length;
            const unreadCount = (lawyerNotifications[found.id] || []).filter(n => !n.read).length;
            alert(`Welcome back, ${found.name}!\n\nYou have ${approachCount} client approach(es) with ${unreadCount} new message(s).`);
            switchView("lawyer-dash");
        } else {
            alert("Invalid lawyer credentials. Try scole@chambers.com or rvance@defense.com, password: password123");
        }
    }
});

els.modals.regClientForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = els.modals.regClientName.value.trim();
    const email = els.modals.regClientEmail.value.trim().toLowerCase();
    const password = els.modals.regClientPassword.value;

    if (clients.some(c => c.email.toLowerCase() === email) || lawyers.some(l => l.email.toLowerCase() === email)) {
        alert("This email is already registered.");
        return;
    }

    const newClient = {
        id: `client-${Date.now()}`,
        name,
        email,
        password,
        role: "client"
    };

    clients.push(newClient);
    saveDB();
    
    currentUser = newClient;
    DB.set("jb_current_user", currentUser);
    updateAuthUI();
    closeAuthModal();
    
    alert(`Account created successfully! Welcome, ${name}`);
    if (selectedLawyerForBooking) {
        openBookingModal(selectedLawyerForBooking);
    } else {
        switchView("client-dash");
    }
});

els.modals.regLawyerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name     = els.modals.regLawyerName.value.trim();
    const email    = els.modals.regLawyerEmail.value.trim().toLowerCase();
    const password = els.modals.regLawyerPassword.value;
    const specialty = els.modals.regLawyerSpecialty.value;
    const country  = els.modals.regLawyerCountry.value;
    const state    = els.modals.regLawyerState.value;
    const city     = els.modals.regLawyerCity.value;
    const fee      = parseFloat(els.modals.regLawyerFee.value);
    const exp      = parseInt(els.modals.regLawyerExp.value);

    if (!country || !state || !city) {
        alert("Please select your Country, State, and City.");
        return;
    }

    if (clients.some(c => c.email.toLowerCase() === email) || lawyers.some(l => l.email.toLowerCase() === email)) {
        alert("This email is already registered.");
        return;
    }

    const newLawyer = {
        id: `lawyer-${Date.now()}`,
        name, email, password,
        country, state, city,
        specialty,
        experience: exp,
        fee,
        rating: 5.0,
        reviews: 1,
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80",
        bio: `Professional counsel specializing in ${specialty} in ${city}, ${state}. Committed to delivering high-fidelity legal representation.`,
        role: "lawyer"
    };

    lawyers.push(newLawyer);
    saveDB();
    
    currentUser = newLawyer;
    DB.set("jb_current_user", currentUser);
    updateAuthUI();
    closeAuthModal();
    
    alert(`Partner registration complete! Welcome, ${name}`);
    switchView("lawyer-dash");
});

// --- RENDER HOME VIEW LAWYERS ---
function renderFeaturedLawyers(filteredList = null) {
    const listToRender = filteredList || lawyers.slice(0, 4);
    els.home.featuredContainer.innerHTML = "";
    
    if (listToRender.length === 0) {
        els.home.featuredContainer.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px; border: 1px dashed var(--border-color); border-radius: var(--border-radius-md);">
                <i class="fa-solid fa-gavel" style="font-size: 32px; color: var(--color-accent); margin-bottom: 12px;"></i>
                <p>No attorneys found matching these regional filters.</p>
            </div>`;
        return;
    }

    listToRender.forEach(lawyer => {
        const card = document.createElement("div");
        card.className = "lawyer-card";
        card.innerHTML = `
            <div class="lawyer-card-image-wrapper">
                <img src="${lawyer.image}" alt="${lawyer.name}" class="lawyer-card-img">
                <span class="lawyer-card-rate">${formatCurrency(lawyer.fee, lawyer.country)}/Hr</span>
            </div>
            <div class="lawyer-card-details">
                <span class="lawyer-card-specialty">${lawyer.specialty}</span>
                <h3 class="lawyer-card-name">${lawyer.name}</h3>
                <div class="lawyer-card-meta">
                    <span><i class="fa-solid fa-location-dot"></i> ${lawyer.city}</span>
                    <span><i class="fa-solid fa-briefcase"></i> ${lawyer.experience} Yrs Exp</span>
                </div>
                <div class="lawyer-card-rating">
                    <i class="fa-solid fa-star"></i>
                    <span>${lawyer.rating.toFixed(1)}</span>
                    <span class="review-count">(${lawyer.reviews} reviews)</span>
                </div>
                <div class="lawyer-card-actions">
                    <button class="btn btn-primary btn-block btn-book-lawyer" data-id="${lawyer.id}">Book Consultation</button>
                </div>
            </div>
        `;
        els.home.featuredContainer.appendChild(card);
    });

    // Add event listeners to buttons
    document.querySelectorAll(".btn-book-lawyer").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const lawyer = lawyers.find(l => l.id === id);
            openBookingModal(lawyer);
        });
    });
}

// Nearby Lawyer Suggestion (Mock Geolocation)
els.home.btnGeo.addEventListener("click", () => {
    els.home.geoStatus.textContent = "Detecting regional network...";
    els.home.btnGeo.disabled = true;
    
    setTimeout(() => {
        // Mock Chicago Geolocation
        const mockCity = "Chicago";
        els.home.geoStatus.innerHTML = `<i class="fa-solid fa-location-arrow"></i> Position locked: <strong>${mockCity}</strong>`;
        
        // Update Title & Render
        els.home.featuredTitle.textContent = `Counsel Recommended Near ${mockCity}`;
        els.home.featuredSubtitle.textContent = "Recommended advocates representing cases in your local jurisdiction.";
        
        const localLawyers = lawyers.filter(l => l.city === mockCity);
        renderFeaturedLawyers(localLawyers);
        els.home.btnGeo.disabled = false;
    }, 1200);
});

// View all counsel button
els.home.btnViewAll.addEventListener("click", () => {
    currentFilters = { country: "", state: "", city: "", specialties: [], minExp: 1, maxFee: null };
    syncFiltersUI();
    switchView("browse");
});

// Main search card submission
els.home.btnSearch.addEventListener("click", () => {
    currentFilters.country = els.home.searchCountry.value;
    currentFilters.state   = els.home.searchState.value;
    currentFilters.city    = els.home.searchCity.value;
    currentFilters.specialties = els.home.searchSpecialty.value ? [els.home.searchSpecialty.value] : [];
    syncFiltersUI();
    switchView("browse");
});

// --- BROWSE LAWYERS VIEW LOGIC ---
function buildFiltersSidebar() {
    // Setup cascading location dropdowns for browse sidebar
    setupCountryStateCityDropdowns(
        els.browse.filterCountry,
        els.browse.filterState,
        els.browse.filterCity,
        { country: currentFilters.country, state: currentFilters.state, city: currentFilters.city }
    );

    // Update Max Fee label with correct currency symbol
    const maxFeeLabel = document.getElementById("filter-max-fee-label");
    if (maxFeeLabel) {
        const symbol = COUNTRY_CURRENCY[currentFilters.country] || "$";
        maxFeeLabel.textContent = `Max Consultation Fee (${symbol}/Hr)`;
    }

    // Hook filter changes into renderBrowseLawyers
    els.browse.filterCountry.onchange = () => {
        currentFilters.country = els.browse.filterCountry.value;
        currentFilters.state = "";
        currentFilters.city = "";
        
        const symbol = COUNTRY_CURRENCY[currentFilters.country] || "$";
        const label = document.getElementById("filter-max-fee-label");
        if (label) {
            label.textContent = `Max Consultation Fee (${symbol}/Hr)`;
        }
        
        renderBrowseLawyers();
    };
    els.browse.filterState.onchange = () => {
        currentFilters.state = els.browse.filterState.value;
        currentFilters.city = "";
        renderBrowseLawyers();
    };
    els.browse.filterCity.onchange = () => {
        currentFilters.city = els.browse.filterCity.value;
        renderBrowseLawyers();
    };

    // Populate Specialties list
    const specSet = new Set(lawyers.map(l => l.specialty));
    els.browse.filterSpecialties.innerHTML = "";
    specSet.forEach(spec => {
        const wrapper = document.createElement("label");
        wrapper.className = "filter-checkbox-wrapper";
        const isChecked = currentFilters.specialties.includes(spec) ? "checked" : "";
        wrapper.innerHTML = `<input type="checkbox" class="spec-filter-chk" value="${spec}" ${isChecked}> ${spec}`;
        els.browse.filterSpecialties.appendChild(wrapper);
    });

    // Experience slider update
    els.browse.filterExpRange.value = currentFilters.minExp;
    els.browse.expVal.textContent = `${currentFilters.minExp} Yr${currentFilters.minExp > 1 ? 's' : ''}`;
    
    // Fee input
    els.browse.filterMaxFee.value = currentFilters.maxFee || "";

    document.querySelectorAll(".spec-filter-chk").forEach(chk => {
        chk.addEventListener("change", () => {
            if (chk.checked) {
                if (!currentFilters.specialties.includes(chk.value)) currentFilters.specialties.push(chk.value);
            } else {
                currentFilters.specialties = currentFilters.specialties.filter(s => s !== chk.value);
            }
            renderBrowseLawyers();
        });
    });
}

function syncFiltersUI() {
    buildFiltersSidebar();
}

els.browse.filterExpRange.addEventListener("input", (e) => {
    currentFilters.minExp = parseInt(e.target.value);
    els.browse.expVal.textContent = `${currentFilters.minExp} Yr${currentFilters.minExp > 1 ? 's' : ''}`;
    renderBrowseLawyers();
});

els.browse.filterMaxFee.addEventListener("input", (e) => {
    const val = e.target.value;
    currentFilters.maxFee = val ? parseFloat(val) : null;
    renderBrowseLawyers();
});

els.browse.btnClearFilters.addEventListener("click", () => {
    currentFilters = { country: "", state: "", city: "", specialties: [], minExp: 1, maxFee: null };
    syncFiltersUI();
    renderBrowseLawyers();
});

els.browse.sortSelect.addEventListener("change", renderBrowseLawyers);

function renderBrowseLawyers() {
    els.browse.resultsList.innerHTML = "";
    
    // Perform Filtering
    let results = lawyers.filter(lawyer => {
        // Country match
        if (currentFilters.country && lawyer.country !== currentFilters.country) return false;
        // State match
        if (currentFilters.state && lawyer.state !== currentFilters.state) return false;
        // City match
        if (currentFilters.city && lawyer.city !== currentFilters.city) return false;
        // Specialty match
        if (currentFilters.specialties.length > 0 && !currentFilters.specialties.includes(lawyer.specialty)) return false;
        // Experience match
        if (lawyer.experience < currentFilters.minExp) return false;
        // Max fee match
        if (currentFilters.maxFee !== null && lawyer.fee > currentFilters.maxFee) return false;
        return true;
    });

    // Perform Sorting
    const sortBy = els.browse.sortSelect.value;
    if (sortBy === "rating") {
        results.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "exp-desc") {
        results.sort((a, b) => b.experience - a.experience);
    } else if (sortBy === "fee-asc") {
        results.sort((a, b) => a.fee - b.fee);
    } else if (sortBy === "fee-desc") {
        results.sort((a, b) => b.fee - a.fee);
    }

    // Update results count
    els.browse.resultsCount.textContent = `Showing ${results.length} Lawyer${results.length !== 1 ? 's' : ''}`;

    if (results.length === 0) {
        els.browse.resultsList.innerHTML = `
            <div class="no-results-big" style="background-color: var(--bg-card); border: 1px dashed var(--border-color); border-radius: var(--border-radius-md); padding: 60px 20px; text-align: center;">
                <i class="fa-solid fa-gavel" style="font-size: 48px; color: var(--color-accent); margin-bottom: 16px;"></i>
                <h3>No Legal Partners Match Your Selection</h3>
                <p class="text-muted" style="margin-top: 8px;">Try clearing some filters or expanding your consultation rate budget.</p>
                <button class="btn btn-primary" id="btn-reset-results" style="margin-top: 20px;">Reset Filters</button>
            </div>`;
        document.getElementById("btn-reset-results").addEventListener("click", () => {
            els.browse.btnClearFilters.click();
        });
        return;
    }

    results.forEach(lawyer => {
        const card = document.createElement("div");
        card.className = "lawyer-list-card";
        card.innerHTML = `
            <div class="lawyer-list-img-wrapper">
                <img src="${lawyer.image}" alt="${lawyer.name}" class="lawyer-list-img">
            </div>
            <div class="lawyer-list-info">
                <div class="lawyer-list-header">
                    <div class="lawyer-list-title">
                        <span class="lawyer-card-specialty">${lawyer.specialty}</span>
                        <h3>${lawyer.name}</h3>
                        <div class="lawyer-list-meta-row">
                            <span><i class="fa-solid fa-location-dot"></i> ${lawyer.city}</span>
                            <span><i class="fa-solid fa-briefcase"></i> ${lawyer.experience} Years Exp</span>
                            <span><i class="fa-solid fa-star" style="color: #f59e0b;"></i> ${lawyer.rating.toFixed(1)} (${lawyer.reviews} reviews)</span>
                        </div>
                    </div>
                </div>
                <p class="lawyer-list-bio">${lawyer.bio}</p>
                <div class="lawyer-list-footer">
                    <div class="lawyer-list-price">
                        Consultation rate: <strong>${formatCurrency(lawyer.fee, lawyer.country)}</strong> / Hour
                    </div>
                    <button class="btn btn-primary btn-book-lawyer-browse" data-id="${lawyer.id}">Book Consultation</button>
                </div>
            </div>
        `;
        els.browse.resultsList.appendChild(card);
    });

    // Action button listeners
    document.querySelectorAll(".btn-book-lawyer-browse").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const lawyer = lawyers.find(l => l.id === id);
            openBookingModal(lawyer);
        });
    });
}

// --- COURT BOOKING VIEW LOGIC ---
function renderCourts() {
    els.courts.container.innerHTML = "";
    els.courts.selectId.innerHTML = '<option value="">-- Select Room --</option>';

    courts.forEach(court => {
        // Add to main list
        const card = document.createElement("div");
        card.className = "court-card";
        
        let featureBadgesHTML = court.features.map(f => `<span class="court-feature-badge">${f}</span>`).join("");
        
        card.innerHTML = `
            <div class="court-img-wrapper">
                <img src="${court.image}" alt="${court.name}" class="court-img">
            </div>
            <div class="court-details">
                <span class="court-type">${court.type} (${court.city})</span>
                <h3>${court.name}</h3>
                <p>${court.desc}</p>
                <div class="court-features">
                    ${featureBadgesHTML}
                </div>
                <div class="court-footer">
                    <span class="court-rate">Hourly Rate: <strong>${formatCurrency(court.rate, court.country)}</strong> / Hr</span>
                    <button class="btn btn-outline btn-sm btn-quick-select-court" data-id="${court.id}">Select Facility</button>
                </div>
            </div>
        `;
        els.courts.container.appendChild(card);

        // Add to form dropdown select
        const option = document.createElement("option");
        option.value = court.id;
        option.textContent = `${court.name} (${formatCurrency(court.rate, court.country)}/Hr) - ${court.city}`;
        els.courts.selectId.appendChild(option);
    });

    // Populate associated lawyer dropdown
    els.courts.lawyer.innerHTML = '<option value="">No lawyer assigned (Room reservation only)</option>';
    lawyers.forEach(lawyer => {
        const option = document.createElement("option");
        option.value = lawyer.id;
        option.textContent = `${lawyer.name} (${lawyer.specialty} - ${lawyer.city})`;
        els.courts.lawyer.appendChild(option);
    });

    // Bind Select buttons
    document.querySelectorAll(".btn-quick-select-court").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            els.courts.selectId.value = id;
            updateCourtPricingSummary();
            els.courts.selectId.focus();
            
            // Scroll to form on mobile
            if (window.innerWidth <= 768) {
                document.querySelector(".court-form-card").scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function updateCourtPricingSummary() {
    const courtId = els.courts.selectId.value;
    const court = courts.find(c => c.id === courtId);

    if (court) {
        els.courts.pricingSummary.classList.remove("hidden");
        els.courts.courtRate.textContent = `${formatCurrency(court.rate, court.country)}/Hr`;
        // Assuming 3 hours standard courtroom simulation/mediation
        els.courts.courtTotal.textContent = `${formatCurrency(court.rate * 3, court.country)}`;
    } else {
        els.courts.pricingSummary.classList.add("hidden");
    }
}

els.courts.selectId.addEventListener("change", updateCourtPricingSummary);

// Submit Direct Court Booking
els.courts.form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!currentUser) {
        alert("You must be signed in to reserve court facilities.");
        openAuthModal("login");
        return;
    }

    const courtId = els.courts.selectId.value;
    const date = els.courts.date.value;
    const slot = els.courts.slot.value;
    const lawyerId = els.courts.lawyer.value;
    const purpose = els.courts.purpose.value.trim();

    const court = courts.find(c => c.id === courtId);
    let assignedLawyer = lawyers.find(l => l.id === lawyerId);

    // Create unique booking
    const newBooking = {
        id: `booking-${Date.now()}`,
        clientId: currentUser.id,
        clientName: currentUser.name,
        lawyerId: assignedLawyer ? assignedLawyer.id : "",
        lawyerName: assignedLawyer ? assignedLawyer.name : "Unassigned Counsel",
        country: court.country,
        city: court.city,
        specialty: assignedLawyer ? assignedLawyer.specialty : "General ADR",
        date,
        time: slot,
        courtId: court.id,
        courtName: court.name,
        notes: purpose,
        counselFee: 0, // Direct court booking has no consultation fee
        courtFee: court.rate * 3, // mock 3 hours
        totalFee: court.rate * 3,
        status: "Confirmed" // Auto-confirmed courtroom
    };

    bookings.push(newBooking);
    saveDB();

    // Success modal trigger
    els.modals.receiptRef.textContent = newBooking.id.toUpperCase();
    els.modals.receiptLawyer.textContent = newBooking.lawyerName;
    els.modals.receiptDatetime.textContent = `${date} | Slot: ${slot}`;
    els.modals.receiptCourtRow.classList.remove("hidden");
    els.modals.receiptCourt.textContent = court.name;

    els.courts.form.reset();
    updateCourtPricingSummary();

    els.modals.success.classList.remove("hidden");
    document.body.style.overflow = "hidden";
});

// --- BOOKING MODAL LOGIC (FROM LAWYER CARD) ---
function openBookingModal(lawyer) {
    if (!currentUser) {
        selectedLawyerForBooking = lawyer;
        alert("Sign in required to book consultations.");
        openAuthModal("login");
        return;
    }

    if (currentUser.role === "lawyer" && currentUser.id === lawyer.id) {
        alert("You cannot book an appointment with yourself.");
        return;
    }

    selectedLawyerForBooking = lawyer;
    
    // Set date input min value to today
    const today = new Date().toISOString().split("T")[0];
    els.modals.appointmentDate.setAttribute("min", today);

    // Populate modal profile card
    els.modals.bookAvatar.src = lawyer.image;
    els.modals.bookName.textContent = lawyer.name;
    els.modals.bookSpecialty.textContent = lawyer.specialty;
    els.modals.bookCity.textContent = lawyer.city;
    els.modals.bookExp.textContent = lawyer.experience;
    els.modals.bookFee.textContent = formatCurrency(lawyer.fee, lawyer.country);
    els.modals.bookRating.textContent = lawyer.rating.toFixed(1);

    // Reset Form & Checklist
    els.modals.appointmentForm.reset();
    els.modals.courtSubform.classList.add("hidden");
    
    // Populate Court drop-down option based on lawyer's city or virtual
    els.modals.appointmentCourtId.innerHTML = '<option value="">-- Choose Chamber --</option>';
    courts.filter(c => c.city === lawyer.city || c.city === "Online").forEach(court => {
        const opt = document.createElement("option");
        opt.value = court.id;
        opt.textContent = `${court.name} (+${formatCurrency(court.rate, court.country)}/Hr) - ${court.city}`;
        els.modals.appointmentCourtId.appendChild(opt);
    });

    updateAppointmentPricingSummary();
    
    els.modals.booking.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeBookingModal() {
    els.modals.booking.classList.add("hidden");
    document.body.style.overflow = "auto";
    selectedLawyerForBooking = null;
}

els.modals.btnCloseBooking.addEventListener("click", closeBookingModal);
els.modals.bookingOverlay.addEventListener("click", closeBookingModal);

els.modals.appointmentIncludeCourt.addEventListener("change", (e) => {
    if (e.target.checked) {
        els.modals.courtSubform.classList.remove("hidden");
        els.modals.appointmentCourtId.required = true;
    } else {
        els.modals.courtSubform.classList.add("hidden");
        els.modals.appointmentCourtId.required = false;
        els.modals.appointmentCourtId.value = "";
    }
    updateAppointmentPricingSummary();
});

els.modals.appointmentCourtId.addEventListener("change", updateAppointmentPricingSummary);

function updateAppointmentPricingSummary() {
    if (!selectedLawyerForBooking) return;

    const lawyerFee = selectedLawyerForBooking.fee;
    let courtFee = 0;

    const courtId = els.modals.appointmentCourtId.value;
    const court = courts.find(c => c.id === courtId);
    const country = selectedLawyerForBooking.country;
    
    if (els.modals.appointmentIncludeCourt.checked && court) {
        courtFee = court.rate * 1; // Assuming 1 hour counsel booking, or court rate adds flat for consultation duration
        els.modals.summaryCourtRow.classList.remove("hidden");
        els.modals.summaryCourtFee.textContent = formatCurrency(courtFee, country);
    } else {
        els.modals.summaryCourtRow.classList.add("hidden");
    }

    els.modals.summaryLawyerFee.textContent = formatCurrency(lawyerFee, country);
    els.modals.summaryTotalFee.textContent = formatCurrency(lawyerFee + courtFee, country);
}

// Submit Appointment Booking
els.modals.appointmentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!currentUser || !selectedLawyerForBooking) return;

    const date = els.modals.appointmentDate.value;
    const time = els.modals.appointmentTime.value;
    const includeCourt = els.modals.appointmentIncludeCourt.checked;
    const courtId = els.modals.appointmentCourtId.value;
    const notes = els.modals.appointmentNotes.value.trim();

    const court = courts.find(c => c.id === courtId);
    const lawyerFee = selectedLawyerForBooking.fee;
    const courtFee = includeCourt && court ? court.rate * 1 : 0;

    const newBooking = {
        id: `booking-${Date.now()}`,
        clientId: currentUser.id,
        clientName: currentUser.name,
        lawyerId: selectedLawyerForBooking.id,
        lawyerName: selectedLawyerForBooking.name,
        country: selectedLawyerForBooking.country,
        city: selectedLawyerForBooking.city,
        specialty: selectedLawyerForBooking.specialty,
        date,
        time,
        courtId: includeCourt && court ? court.id : "",
        courtName: includeCourt && court ? court.name : "",
        notes,
        counselFee: lawyerFee,
        courtFee: courtFee,
        totalFee: lawyerFee + courtFee,
        status: "Pending" // Starts pending for lawyer confirmation
    };

    bookings.push(newBooking);
    saveDB();

    // Record that a client approached this lawyer
    recordLawyerApproach(
        selectedLawyerForBooking.id,
        currentUser.name,
        currentUser.email,
        selectedLawyerForBooking.specialty
    );

    closeBookingModal();

    // Success Modal
    els.modals.receiptRef.textContent = newBooking.id.toUpperCase();
    els.modals.receiptLawyer.textContent = newBooking.lawyerName;
    els.modals.receiptDatetime.textContent = `${date} at ${time}`;
    if (includeCourt && court) {
        els.modals.receiptCourtRow.classList.remove("hidden");
        els.modals.receiptCourt.textContent = court.name;
    } else {
        els.modals.receiptCourtRow.classList.add("hidden");
    }

    els.modals.success.classList.remove("hidden");
    document.body.style.overflow = "hidden";
});

// Success Close Action
els.modals.btnSuccessClose.addEventListener("click", () => {
    els.modals.success.classList.add("hidden");
    document.body.style.overflow = "auto";
    if (currentUser.role === "client") {
        switchView("client-dash");
    } else {
        switchView("home");
    }
});
els.modals.successOverlay.addEventListener("click", () => {
    els.modals.success.classList.add("hidden");
    document.body.style.overflow = "auto";
});

// --- CLIENT DASHBOARD SYSTEM ---
function renderClientDashboard() {
    if (!currentUser || currentUser.role !== "client") {
        switchView("home");
        return;
    }

    // Set Profile details
    els.clientDash.name.textContent = currentUser.name;
    els.clientDash.email.textContent = currentUser.email;
    els.clientDash.avatar.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(currentUser.name)}&backgroundColor=c5a880`;

    // Filter Bookings
    const clientBookings = bookings.filter(b => b.clientId === currentUser.id);
    
    // Stats
    const appointmentBookings = clientBookings.filter(b => b.lawyerId !== "");
    const directCourts = clientBookings.filter(b => b.courtId !== "");
    
    els.clientDash.statBookings.textContent = appointmentBookings.length;
    els.clientDash.statCourts.textContent = directCourts.length;

    // Render Appointment list
    els.clientDash.appointmentsList.innerHTML = "";
    
    const appointmentsOnly = clientBookings.filter(b => b.lawyerId !== "");
    if (appointmentsOnly.length === 0) {
        els.clientDash.appointmentsList.innerHTML = `
            <tr>
                <td colspan="7" class="text-center text-muted" style="padding: 30px;">
                    No consult bookings. <a href="#" id="dash-find-lawyer-link" style="color: var(--color-accent); font-weight: 600;">Find a lawyer now</a>
                </td>
            </tr>`;
        setTimeout(() => {
            const link = document.getElementById("dash-find-lawyer-link");
            if (link) link.addEventListener("click", (e) => { e.preventDefault(); switchView("browse"); });
        }, 10);
    } else {
        appointmentsOnly.forEach(b => {
            const tr = document.createElement("tr");
            const commBtn = b.status === "Confirmed" ? `<button class="btn btn-primary btn-sm btn-open-chat" data-booking-id="${b.id}" style="margin-right: 6px;"><i class="fa-solid fa-comments"></i> Chat / Call</button>` : '';
            tr.innerHTML = `
                <td><strong>${b.lawyerName}</strong></td>
                <td>${b.city}</td>
                <td>${b.specialty}</td>
                <td>${b.date} | ${b.time}</td>
                <td>${b.courtName ? `<span class="gold-text"><i class="fa-solid fa-landmark"></i> ${b.courtName}</span>` : 'N/A'}</td>
                <td><span class="badge-status ${b.status.toLowerCase()}">${b.status}</span></td>
                <td>
                    ${commBtn}
                    ${b.status !== "Declined" ? `<button class="btn btn-outline btn-sm text-danger btn-cancel-booking" data-id="${b.id}">Cancel</button>` : ''}
                </td>
            `;
            els.clientDash.appointmentsList.appendChild(tr);
        });
    }

    // Render Court list
    els.clientDash.courtsList.innerHTML = "";
    const courtsOnly = clientBookings.filter(b => b.courtId !== "");
    if (courtsOnly.length === 0) {
        els.clientDash.courtsList.innerHTML = `
            <tr>
                <td colspan="7" class="text-center text-muted" style="padding: 30px;">
                    No courtroom reservations. <a href="#" id="dash-book-court-link" style="color: var(--color-accent); font-weight: 600;">Reserve court room now</a>
                </td>
            </tr>`;
        setTimeout(() => {
            const link = document.getElementById("dash-book-court-link");
            if (link) link.addEventListener("click", (e) => { e.preventDefault(); switchView("courts"); });
        }, 10);
    } else {
        courtsOnly.forEach(b => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${b.courtName}</strong></td>
                <td>${b.lawyerId ? 'Consultation Chamber' : 'Arbitration Hall'}</td>
                <td>${b.date} | ${b.time}</td>
                <td>${b.notes || 'General Hearing'}</td>
                <td>${formatCurrency(b.courtFee, b.country || "United States")}</td>
                <td><span class="badge-status confirmed">Confirmed</span></td>
                <td>
                    <button class="btn btn-outline btn-sm text-danger btn-cancel-booking" data-id="${b.id}">Cancel</button>
                </td>
            `;
            els.clientDash.courtsList.appendChild(tr);
        });
    }

    // Bind cancel buttons
    document.querySelectorAll(".btn-cancel-booking").forEach(btn => {
        btn.addEventListener("click", () => {
            if (confirm("Are you sure you want to cancel this booking?")) {
                const id = btn.dataset.id;
                bookings = bookings.filter(b => b.id !== id);
                saveDB();
                renderClientDashboard();
            }
        });
    });
}

// Client dashboard tabs navigation
els.clientDash.tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        els.clientDash.tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const target = tab.dataset.target;
        els.clientDash.tabAppointments.classList.add("hidden");
        els.clientDash.tabCourts.classList.add("hidden");
        
        document.getElementById(target).classList.remove("hidden");
    });
});

els.clientDash.btnFindLawyersShortcut.addEventListener("click", () => switchView("browse"));
els.clientDash.btnFindCourtsShortcut.addEventListener("click", () => switchView("courts"));

// --- LAWYER PANEL SYSTEM ---
function renderLawyerDashboard() {
    if (!currentUser || currentUser.role !== "lawyer") {
        switchView("home");
        return;
    }

    // Profile Card
    els.lawyerDash.name.textContent = currentUser.name;
    els.lawyerDash.specialty.textContent = currentUser.specialty;
    els.lawyerDash.city.textContent = currentUser.city;
    els.lawyerDash.avatar.src = currentUser.image || "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=150&q=80";
    els.lawyerDash.rating.textContent = (currentUser.rating || 5.0).toFixed(1);

    // Bookings and stats
    const lawyerBookings = bookings.filter(b => b.lawyerId === currentUser.id);
    const confirmedCount = lawyerBookings.filter(b => b.status === "Confirmed").length;
    const totalEarnings = lawyerBookings.filter(b => b.status === "Confirmed").reduce((acc, curr) => acc + (curr.counselFee || 0), 0);

    els.lawyerDash.statAppointments.textContent = lawyerBookings.length;
    els.lawyerDash.statRevenue.textContent = formatCurrency(totalEarnings, currentUser.country);

    // Render list
    els.lawyerDash.appointmentsList.innerHTML = "";
    if (lawyerBookings.length === 0) {
        els.lawyerDash.appointmentsList.innerHTML = `
            <tr>
                <td colspan="8" class="text-center text-muted" style="padding: 30px;">
                    No pending litigation consultation requests.
                </td>
            </tr>`;
    } else {
        lawyerBookings.forEach(b => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${b.clientName}</strong></td>
                <td>${b.date}</td>
                <td>${b.time}</td>
                <td>${b.courtName ? `<span class="gold-text"><i class="fa-solid fa-landmark"></i> ${b.courtName}</span>` : 'None'}</td>
                <td>${b.notes}</td>
                <td>${formatCurrency(b.counselFee, currentUser.country)}</td>
                <td><span class="badge-status ${b.status.toLowerCase()}">${b.status}</span></td>
                <td>
                    ${b.status === "Pending" ? `
                        <div class="row-actions" style="display: flex; gap: 6px;">
                            <button class="btn btn-primary btn-sm btn-accept-booking" data-id="${b.id}">Accept</button>
                            <button class="btn btn-outline btn-sm text-danger btn-decline-booking" data-id="${b.id}">Decline</button>
                        </div>
                    ` : `
                        ${b.status === "Confirmed" ? `<button class="btn btn-primary btn-sm btn-open-chat" data-booking-id="${b.id}"><i class="fa-solid fa-comments"></i> Chat / Call</button>` : `<span class="text-muted" style="font-size: 12px; font-style: italic;">No actions</span>`}
                    `}
                </td>
            `;
            els.lawyerDash.appointmentsList.appendChild(tr);
        });
    }

    // Bind accept/decline buttons
    document.querySelectorAll(".btn-accept-booking").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const b = bookings.find(x => x.id === id);
            if (b) {
                b.status = "Confirmed";
                saveDB();
                renderLawyerDashboard();
            }
        });
    });

    document.querySelectorAll(".btn-decline-booking").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const b = bookings.find(x => x.id === id);
            if (b) {
                b.status = "Declined";
                saveDB();
                renderLawyerDashboard();
            }
        });
    });

    // Populate Settings form fields — setup cascading dropdowns with current values
    els.lawyerDash.editName.value    = currentUser.name;
    els.lawyerDash.editSpecialty.value = currentUser.specialty;
    els.lawyerDash.editFee.value     = currentUser.fee;
    els.lawyerDash.editExp.value     = currentUser.experience;
    els.lawyerDash.editImage.value   = currentUser.image || "";
    els.lawyerDash.editBio.value     = currentUser.bio || "";

    const editFeeLabel = document.getElementById("lawyer-edit-fee-label");
    if (editFeeLabel) {
        const symbol = COUNTRY_CURRENCY[currentUser.country] || "$";
        editFeeLabel.textContent = `Hourly Consultation Fee (${symbol})`;
    }

    setupCountryStateCityDropdowns(
        els.lawyerDash.editCountry,
        els.lawyerDash.editState,
        els.lawyerDash.editCity,
        { country: currentUser.country || "", state: currentUser.state || "", city: currentUser.city || "" }
    );
}

// Profile edit submission
els.lawyerDash.form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!currentUser || currentUser.role !== "lawyer") return;

    // Update in currentUser object
    currentUser.name       = els.lawyerDash.editName.value.trim();
    currentUser.specialty  = els.lawyerDash.editSpecialty.value;
    currentUser.country    = els.lawyerDash.editCountry.value;
    currentUser.state      = els.lawyerDash.editState.value;
    currentUser.city       = els.lawyerDash.editCity.value;
    currentUser.fee        = parseFloat(els.lawyerDash.editFee.value);
    currentUser.experience = parseInt(els.lawyerDash.editExp.value);
    currentUser.image      = els.lawyerDash.editImage.value.trim() || "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80";
    currentUser.bio        = els.lawyerDash.editBio.value.trim();

    // Update in lawyers array
    const idx = lawyers.findIndex(l => l.id === currentUser.id);
    if(idx !== -1) {
        lawyers[idx] = { ...lawyers[idx], ...currentUser };
    }

    saveDB();
    DB.set("jb_current_user", currentUser);
    updateAuthUI();
    renderLawyerDashboard();
    
    alert("Professional profile details updated successfully!");
    els.lawyerDash.tabs[0].click(); // Switch back to consultations
});

// Lawyer dashboard tabs navigation
els.lawyerDash.tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        els.lawyerDash.tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const target = tab.dataset.target;
        els.lawyerDash.tabAppointments.classList.add("hidden");
        els.lawyerDash.tabSettings.classList.add("hidden");
        
        document.getElementById(target).classList.remove("hidden");
    });
});

// --- COMMUNICATION HUB (CHAT & CALL) LOGIC ---
let activeChatBooking = null;
let activeCallStream = null;
let callTimerInterval = null;
let callDurationSeconds = 0;
let ringingEngine = null;
let simulatedOpponentReplyTimeout = null;

// Initialize chat messages object in database
let chatMessages = DB.get("jb_chat_messages", {});

function saveChatDB() {
    DB.set("jb_chat_messages", chatMessages);
}

// Global click handler to open chat from dashboards
document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-open-chat");
    if (btn) {
        const bookingId = btn.dataset.bookingId;
        openChatModal(bookingId);
    }
});

// Open Chat Modal
function openChatModal(bookingId) {
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) return;

    activeChatBooking = booking;
    
    // Find recipient details
    let recipientName = "";
    let recipientAvatar = "";
    
    if (currentUser.role === "client") {
        recipientName = booking.lawyerName;
        // Search lawyer profile image
        const lawyerObj = lawyers.find(l => l.id === booking.lawyerId);
        recipientAvatar = lawyerObj ? lawyerObj.image : "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=100&q=80";
    } else {
        recipientName = booking.clientName;
        recipientAvatar = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(booking.clientName)}&backgroundColor=c5a880`;
    }

    els.chat.recipientName.textContent = recipientName;
    els.chat.recipientAvatar.src = recipientAvatar;
    els.chat.recipientStatus.innerHTML = '<span class="status-dot online"></span> Online';
    
    // Clear message input
    els.chat.messageInput.value = "";
    
    // Render message list
    renderChatMessages();

    // Show modal
    els.chat.modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeChatModal() {
    if (ringingEngine) {
        ringingEngine.stop();
        ringingEngine = null;
    }
    if (callTimerInterval) {
        clearInterval(callTimerInterval);
        callTimerInterval = null;
    }
    if (activeCallStream) {
        activeCallStream.getTracks().forEach(t => t.stop());
        activeCallStream = null;
    }
    if (simulatedOpponentReplyTimeout) {
        clearTimeout(simulatedOpponentReplyTimeout);
        simulatedOpponentReplyTimeout = null;
    }
    
    // Hide call overlay if active
    els.chat.callingOverlay.classList.add("hidden");
    
    // Hide modal
    els.chat.modal.classList.add("hidden");
    document.body.style.overflow = "auto";
    activeChatBooking = null;
}

els.chat.btnClose.addEventListener("click", closeChatModal);
els.chat.overlay.addEventListener("click", closeChatModal);

// Render Message List
function renderChatMessages() {
    if (!activeChatBooking) return;
    
    const messages = chatMessages[activeChatBooking.id] || [];
    els.chat.messagesList.innerHTML = "";
    
    if (messages.length === 0) {
        // Show initial system message
        const initialMsg = document.createElement("div");
        initialMsg.className = "message system";
        initialMsg.innerHTML = `<div class="message-bubble">Consultation communication channel established for ${activeChatBooking.specialty}.</div>`;
        els.chat.messagesList.appendChild(initialMsg);
    } else {
        messages.forEach(msg => {
            const isMe = msg.senderId === currentUser.id;
            const msgEl = document.createElement("div");
            msgEl.className = `message ${isMe ? 'sent' : 'received'}`;
            
            let contentHTML = "";
            if (msg.type === "file") {
                const isImage = msg.fileName.match(/\.(jpeg|jpg|gif|png)$/i);
                if (isImage) {
                    contentHTML = `
                        <img src="${msg.content}" class="file-preview-img" alt="Shared image">
                        <a href="${msg.content}" download="${msg.fileName}" class="file-message-card">
                            <div class="file-icon-box"><i class="fa-solid fa-file-image"></i></div>
                            <div class="file-info">
                                <span class="file-name">${msg.fileName}</span>
                                <span class="file-size">${msg.fileSize}</span>
                            </div>
                            <div class="file-download-btn"><i class="fa-solid fa-arrow-down-long"></i></div>
                        </a>
                    `;
                } else {
                    const isPdf = msg.fileName.match(/\.pdf$/i);
                    const iconClass = isPdf ? 'fa-file-pdf' : 'fa-file-lines';
                    contentHTML = `
                        <a href="${msg.content}" download="${msg.fileName}" class="file-message-card">
                            <div class="file-icon-box"><i class="fa-solid ${iconClass}"></i></div>
                            <div class="file-info">
                                <span class="file-name">${msg.fileName}</span>
                                <span class="file-size">${msg.fileSize}</span>
                            </div>
                            <div class="file-download-btn"><i class="fa-solid fa-arrow-down-long"></i></div>
                        </a>
                    `;
                }
            } else if (msg.type === "system") {
                msgEl.className = "message system";
                contentHTML = `<div class="message-bubble">${msg.content}</div>`;
            } else {
                contentHTML = `<div class="message-bubble">${escapeHTML(msg.content)}</div>`;
            }
            
            if (msg.type !== "system") {
                const date = new Date(msg.timestamp);
                const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                msgEl.innerHTML = `
                    ${contentHTML}
                    <span class="message-time">${timeStr}</span>
                `;
            } else {
                msgEl.innerHTML = contentHTML;
            }
            
            els.chat.messagesList.appendChild(msgEl);
        });
    }
    
    // Scroll to bottom
    setTimeout(() => {
        els.chat.messagesList.scrollTop = els.chat.messagesList.scrollHeight;
    }, 50);
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

// Send Text Message
function sendTextMessage() {
    if (!activeChatBooking) return;
    const text = els.chat.messageInput.value.trim();
    if (!text) return;
    
    if (!chatMessages[activeChatBooking.id]) {
        chatMessages[activeChatBooking.id] = [];
    }
    
    const msg = {
        id: `msg-${Date.now()}`,
        bookingId: activeChatBooking.id,
        senderId: currentUser.id,
        senderRole: currentUser.role,
        type: "text",
        content: text,
        timestamp: new Date().toISOString()
    };
    
    chatMessages[activeChatBooking.id].push(msg);
    saveChatDB();
    renderChatMessages();
    els.chat.messageInput.value = "";
    
    // Auto response timeout simulation
    triggerAutoResponder(text);
}

els.chat.btnSend.addEventListener("click", sendTextMessage);
els.chat.messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendTextMessage();
    }
});

// File Sharing triggers
els.chat.btnAttach.addEventListener("click", () => {
    els.chat.fileInput.click();
});

els.chat.fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Check file size: Limit to 2MB (2 * 1024 * 1024 bytes)
    if (file.size > 2 * 1024 * 1024) {
        alert("File size exceeds 2MB limit. FIR documents and PDFs must be smaller than 2MB to fit local browser session storage.");
        els.chat.fileInput.value = "";
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(evt) {
        const dataUrl = evt.target.result;
        
        if (!chatMessages[activeChatBooking.id]) {
            chatMessages[activeChatBooking.id] = [];
        }
        
        const fileMsg = {
            id: `msg-${Date.now()}`,
            bookingId: activeChatBooking.id,
            senderId: currentUser.id,
            senderRole: currentUser.role,
            type: "file",
            content: dataUrl,
            fileName: file.name,
            fileSize: formatBytes(file.size),
            timestamp: new Date().toISOString()
        };
        
        chatMessages[activeChatBooking.id].push(fileMsg);
        
        // Add supportive system message
        const sysMsg = {
            id: `msg-${Date.now()}-sys`,
            bookingId: activeChatBooking.id,
            senderId: "system",
            senderRole: "system",
            type: "system",
            content: `Document "${file.name}" shared successfully.`,
            timestamp: new Date().toISOString()
        };
        chatMessages[activeChatBooking.id].push(sysMsg);
        
        saveChatDB();
        renderChatMessages();
        
        // Dynamic mock lawyer response trigger if client uploaded document
        if (currentUser.role === "client") {
            triggerAutoResponder("[uploaded document]");
        }
    };
    reader.readAsDataURL(file);
    els.chat.fileInput.value = ""; // reset
});

function formatBytes(bytes, decimals = 1) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Auto Responder Simulation
function triggerAutoResponder(text) {
    if (simulatedOpponentReplyTimeout) clearTimeout(simulatedOpponentReplyTimeout);
    
    simulatedOpponentReplyTimeout = setTimeout(() => {
        if (!activeChatBooking) return;
        
        let responseText = "";
        const isClient = currentUser.role === "client";
        
        if (isClient) {
            responseText = getMockLawyerResponse(text);
        } else {
            responseText = getMockClientResponse(text);
        }
        
        const opponentId = isClient ? activeChatBooking.lawyerId : activeChatBooking.clientId;
        const opponentRole = isClient ? "lawyer" : "client";
        
        const replyMsg = {
            id: `msg-${Date.now()}`,
            bookingId: activeChatBooking.id,
            senderId: opponentId,
            senderRole: opponentRole,
            type: "text",
            content: responseText,
            timestamp: new Date().toISOString()
        };
        
        chatMessages[activeChatBooking.id].push(replyMsg);
        saveChatDB();
        renderChatMessages();
    }, 2000);
}

function getMockLawyerResponse(text) {
    const textLower = text.toLowerCase();
    if (textLower.includes("hello") || textLower.includes("hi") || textLower.includes("hey")) {
        return `Hello, this is ${activeChatBooking.lawyerName}. Thank you for reaching out! How can I assist you with your case today?`;
    }
    if (textLower.includes("file") || textLower.includes("document") || textLower.includes("pdf") || textLower.includes("fir") || textLower.includes("[uploaded document]")) {
        return "I see the shared documents. I will review the FIR details, witness statements, and related legal files before our booked slot to prepare our litigation strategy.";
    }
    if (textLower.includes("fee") || textLower.includes("charge") || textLower.includes("rate") || textLower.includes("cost")) {
        const feeFormatted = formatCurrency(activeChatBooking.counselFee, activeChatBooking.country);
        return `My consulting rate is ${feeFormatted} per hour, as confirmed in our booking. If we proceed with litigation drafting, I'll provide a full cost structure.`;
    }
    if (textLower.includes("court") || textLower.includes("chamber") || textLower.includes("arbitration")) {
        return activeChatBooking.courtName 
            ? `Yes, I see we have reserved ${activeChatBooking.courtName} for our session. It will provide a secure space for our discussions.`
            : "If you'd like to reserve a physical chamber or virtual hearing hall for our consultation, you can check the courtroom availability in the main panel.";
    }
    return "Thank you for sharing this information. I am reviewing your case details now and will prepare the necessary legal notes for our consultation.";
}

function getMockClientResponse(text) {
    const textLower = text.toLowerCase();
    if (textLower.includes("hello") || textLower.includes("hi") || textLower.includes("hey")) {
        return `Hello, Advocate. Thank you for taking my case. I wanted to verify what materials I should send you.`;
    }
    if (textLower.includes("file") || textLower.includes("document") || textLower.includes("pdf") || textLower.includes("fir")) {
        return "I have the PDFs ready. I will attach the files right now using the paperclip button. Let me know if you can open them.";
    }
    if (textLower.includes("ready") || textLower.includes("prepare")) {
        return "Excellent! I am looking forward to our consultation. Let me know if there's anything else I should do in the meantime.";
    }
    return "Understood, Advocate. I will make sure we have all details aligned before our consultation slot.";
}

// --- CALLING SIMULATION SYSTEM ---
let audioCtx = null;
let ringInterval = null;

function playRingingSound() {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === "suspended") {
            audioCtx.resume();
        }
        let active = true;
        
        function ring() {
            if (!active) return;
            // Dual frequency standard telephone ring (440Hz + 480Hz)
            let osc1 = audioCtx.createOscillator();
            let osc2 = audioCtx.createOscillator();
            let gainNode = audioCtx.createGain();
            
            osc1.type = "sine";
            osc2.type = "sine";
            osc1.frequency.value = 440;
            osc2.frequency.value = 480;
            
            gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 0.1);
            gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime + 1.4);
            gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.5);
            
            osc1.connect(gainNode);
            osc2.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            osc1.start();
            osc2.start();
            
            setTimeout(() => {
                try {
                    osc1.stop();
                    osc2.stop();
                } catch(e){}
            }, 1600);
        }
        
        ring();
        ringInterval = setInterval(ring, 4000);
        
        return {
            stop: () => {
                active = false;
                clearInterval(ringInterval);
            }
        };
    } catch (err) {
        console.warn("AudioContext ringing failed:", err);
        return { stop: () => clearInterval(ringInterval) };
    }
}

function playConnectSound() {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === "suspended") {
            audioCtx.resume();
        }
        let osc = audioCtx.createOscillator();
        let gainNode = audioCtx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(400, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.35);
        
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.05);
        gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.35);
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.start();
        setTimeout(() => {
            try { osc.stop(); } catch(e){}
        }, 400);
    } catch(err) {
        console.warn("AudioContext connect failed:", err);
    }
}

function startCallSimulation(callType) {
    if (!activeChatBooking) return;
    
    // Set recipient info in call overlay
    let recipientName = "";
    let recipientAvatar = "";
    
    if (currentUser.role === "client") {
        recipientName = activeChatBooking.lawyerName;
        const lawyerObj = lawyers.find(l => l.id === activeChatBooking.lawyerId);
        recipientAvatar = lawyerObj ? lawyerObj.image : "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=100&q=80";
    } else {
        recipientName = activeChatBooking.clientName;
        recipientAvatar = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(activeChatBooking.clientName)}&backgroundColor=c5a880`;
    }
    
    els.chat.callingName.textContent = recipientName;
    els.chat.callingAvatar.src = recipientAvatar;
    els.chat.remoteVideoAvatar.src = recipientAvatar;
    
    // Reset buttons state
    els.chat.btnCallMute.classList.remove("active");
    els.chat.btnCallMute.querySelector("i").className = "fa-solid fa-microphone";
    
    els.chat.btnCallVideo.classList.remove("active");
    els.chat.btnCallVideo.querySelector("i").className = "fa-solid fa-video";
    
    // UI states
    els.chat.callingStatus.textContent = "Ringing...";
    els.chat.callingTimer.classList.add("hidden");
    els.chat.voiceWave.classList.add("hidden");
    els.chat.videoFeedWrapper.classList.add("hidden");
    els.chat.btnCallVideo.classList.add("hidden");
    
    // Show calling overlay
    els.chat.callingOverlay.classList.remove("hidden");
    
    // Start ring sound
    ringingEngine = playRingingSound();
    
    if (callType === "video") {
        els.chat.btnCallVideo.classList.remove("hidden");
        // Try requesting webcam
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                activeCallStream = stream;
                els.chat.localVideo.srcObject = stream;
                els.chat.localVideo.style.display = "block";
            })
            .catch(err => {
                console.warn("Camera permission denied or failed:", err);
                els.chat.btnCallVideo.classList.add("hidden");
            });
    }
    
    // Simulate connection after 3.5 seconds
    setTimeout(() => {
        if (!ringingEngine || !activeChatBooking) return; // call aborted
        
        ringingEngine.stop();
        ringingEngine = null;
        
        playConnectSound();
        
        els.chat.callingStatus.textContent = "Connected";
        els.chat.callingTimer.classList.remove("hidden");
        
        if (callType === "voice") {
            els.chat.voiceWave.classList.remove("hidden");
        } else {
            els.chat.videoFeedWrapper.classList.remove("hidden");
        }
        
        // Start duration counter
        callDurationSeconds = 0;
        els.chat.callingTimer.textContent = "00:00";
        callTimerInterval = setInterval(() => {
            callDurationSeconds++;
            const mins = Math.floor(callDurationSeconds / 60).toString().padStart(2, "0");
            const secs = (callDurationSeconds % 60).toString().padStart(2, "0");
            els.chat.callingTimer.textContent = `${mins}:${secs}`;
        }, 1000);
        
    }, 3500);
}

function endCallSimulation() {
    if (ringingEngine) {
        ringingEngine.stop();
        ringingEngine = null;
    }
    if (callTimerInterval) {
        clearInterval(callTimerInterval);
        callTimerInterval = null;
    }
    
    let callDurationStr = "00:00";
    if (callDurationSeconds > 0) {
        const mins = Math.floor(callDurationSeconds / 60).toString().padStart(2, "0");
        const secs = (callDurationSeconds % 60).toString().padStart(2, "0");
        callDurationStr = `${mins}:${secs}`;
    }
    
    if (activeCallStream) {
        activeCallStream.getTracks().forEach(t => t.stop());
        activeCallStream = null;
        els.chat.localVideo.srcObject = null;
    }
    
    // Hide overlay
    els.chat.callingOverlay.classList.add("hidden");
    
    // Insert call summary message
    if (activeChatBooking) {
        if (!chatMessages[activeChatBooking.id]) {
            chatMessages[activeChatBooking.id] = [];
        }
        
        const systemCallMsg = {
            id: `msg-${Date.now()}-call-sys`,
            bookingId: activeChatBooking.id,
            senderId: "system",
            senderRole: "system",
            type: "system",
            content: `Consultation call ended. Duration: ${callDurationStr}`,
            timestamp: new Date().toISOString()
        };
        
        chatMessages[activeChatBooking.id].push(systemCallMsg);
        saveChatDB();
        renderChatMessages();
    }
    
    callDurationSeconds = 0;
}

// Call controls event bindings
els.chat.btnVoiceCall.addEventListener("click", () => startCallSimulation("voice"));
els.chat.btnVideoCall.addEventListener("click", () => startCallSimulation("video"));
els.chat.btnCallEnd.addEventListener("click", endCallSimulation);

els.chat.btnCallMute.addEventListener("click", () => {
    const icon = els.chat.btnCallMute.querySelector("i");
    els.chat.btnCallMute.classList.toggle("active");
    const isMuted = els.chat.btnCallMute.classList.contains("active");
    
    if (isMuted) {
        icon.className = "fa-solid fa-microphone-slash";
        if (activeCallStream) {
            activeCallStream.getAudioTracks().forEach(t => t.enabled = false);
        }
    } else {
        icon.className = "fa-solid fa-microphone";
        if (activeCallStream) {
            activeCallStream.getAudioTracks().forEach(t => t.enabled = true);
        }
    }
});

els.chat.btnCallVideo.addEventListener("click", () => {
    const icon = els.chat.btnCallVideo.querySelector("i");
    els.chat.btnCallVideo.classList.toggle("active");
    const isVideoOff = els.chat.btnCallVideo.classList.contains("active");
    
    if (isVideoOff) {
        icon.className = "fa-solid fa-video-slash";
        if (activeCallStream) {
            activeCallStream.getVideoTracks().forEach(t => t.enabled = false);
        }
        els.chat.localVideo.style.opacity = "0";
    } else {
        icon.className = "fa-solid fa-video";
        if (activeCallStream) {
            activeCallStream.getVideoTracks().forEach(t => t.enabled = true);
        }
        els.chat.localVideo.style.opacity = "1";
    }
});

// --- APP INITIALIZER ---
function init() {
    initTheme();
    updateAuthUI();
    
    // Wire up cascading dropdowns for home search bar
    setupCountryStateCityDropdowns(
        els.home.searchCountry,
        els.home.searchState,
        els.home.searchCity
    );

    // Wire up cascading dropdowns for lawyer registration form
    setupCountryStateCityDropdowns(
        els.modals.regLawyerCountry,
        els.modals.regLawyerState,
        els.modals.regLawyerCity
    );

    // Update currency labels when lawyer registers
    els.modals.regLawyerCountry.addEventListener("change", () => {
        const symbol = COUNTRY_CURRENCY[els.modals.regLawyerCountry.value] || "$";
        const label = document.getElementById("reg-lawyer-fee-label");
        if (label) label.textContent = `Hourly Consultation Fee (${symbol})`;
    });

    // Update currency labels when lawyer edits profile
    els.lawyerDash.editCountry.addEventListener("change", () => {
        const symbol = COUNTRY_CURRENCY[els.lawyerDash.editCountry.value] || "$";
        const label = document.getElementById("lawyer-edit-fee-label");
        if (label) label.textContent = `Hourly Consultation Fee (${symbol})`;
    });

    // Build filter sidebar (includes cascading dropdowns for browse view)
    buildFiltersSidebar();
    
    // Switch to Home view initially
    switchView("home");
}

window.addEventListener("DOMContentLoaded", init);

// --- NOTIFICATION BELL EVENT LISTENERS ---
const notificationBell = document.getElementById("lawyer-notification-bell");
const notificationDropdown = document.getElementById("notification-dropdown");
const notificationList = document.getElementById("notification-list");
const btnMarkAllRead = document.getElementById("btn-mark-all-read");

if (notificationBell) {
    notificationBell.addEventListener("click", (e) => {
        e.stopPropagation();
        notificationDropdown.classList.toggle("hidden");
    });
}

if (btnMarkAllRead) {
    btnMarkAllRead.addEventListener("click", () => {
        markAllNotificationsRead();
        updateLawyerNotificationUI();
    });
}

// Close notification dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (notificationDropdown && !notificationDropdown.contains(e.target) && e.target !== notificationBell) {
        notificationDropdown.classList.add("hidden");
    }
});

// Handle notification item clicks (mark as read)
document.addEventListener("click", (e) => {
    const item = e.target.closest(".notification-item");
    if (item) {
        const notifId = item.dataset.id;
        markNotificationRead(notifId);
    }
});

// Notifications button in dropdown menu
const btnLawyerNotifications = document.getElementById("btn-lawyer-notifications");
if (btnLawyerNotifications) {
    btnLawyerNotifications.addEventListener("click", (e) => {
        e.preventDefault();
        // Just update UI to show all messages - notification UI is already visible
        updateLawyerNotificationUI();
    });
}
