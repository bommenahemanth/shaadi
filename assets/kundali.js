var CITIES_DATA = {"New York, NY": [40.7127, -74.006, "America/New_York"], "Los Angeles, CA": [34.0537, -118.2428, "America/Los_Angeles"], "Chicago, IL": [41.8756, -87.6244, "America/Chicago"], "Houston, TX": [29.7589, -95.3677, "America/Chicago"], "Phoenix, AZ": [33.4484, -112.0741, "America/Denver"], "Philadelphia, PA": [39.9527, -75.1635, "America/New_York"], "San Antonio, TX": [29.4246, -98.4951, "America/Chicago"], "San Diego, CA": [32.7174, -117.1628, "America/Los_Angeles"], "Dallas, TX": [32.7763, -96.7969, "America/Chicago"], "San Jose, CA": [37.3362, -121.8906, "America/Los_Angeles"], "Austin, TX": [30.2711, -97.7437, "America/Chicago"], "Jacksonville, FL": [30.3262, -81.6579, "America/New_York"], "Fort Worth, TX": [32.7532, -97.3327, "America/Chicago"], "Columbus, OH": [39.9623, -83.0007, "America/New_York"], "Charlotte, NC": [35.2272, -80.8431, "America/New_York"], "San Francisco, CA": [37.7879, -122.4075, "America/Los_Angeles"], "Indianapolis, IN": [39.7683, -86.1584, "America/Chicago"], "Seattle, WA": [47.6038, -122.3301, "America/Los_Angeles"], "Denver, CO": [39.7392, -104.9849, "America/Denver"], "Washington, DC": [38.8951, -77.0364, "America/New_York"], "Boston, MA": [42.3588, -71.0578, "America/New_York"], "El Paso, TX": [31.7601, -106.487, "America/Denver"], "Nashville, TN": [36.1623, -86.7743, "America/Chicago"], "Detroit, MI": [42.3316, -83.0466, "America/New_York"], "Oklahoma City, OK": [35.473, -97.5171, "America/Chicago"], "Portland, OR": [45.5202, -122.6742, "America/Los_Angeles"], "Las Vegas, NV": [36.1674, -115.1484, "America/Los_Angeles"], "Memphis, TN": [35.146, -90.0518, "America/Chicago"], "Louisville, KY": [38.2542, -85.7594, "America/Chicago"], "Baltimore, MD": [39.2909, -76.6108, "America/New_York"], "Milwaukee, WI": [43.0386, -87.9091, "America/Chicago"], "Albuquerque, NM": [35.0841, -106.651, "America/Denver"], "Tucson, AZ": [32.2229, -110.9748, "America/Denver"], "Fresno, CA": [36.7394, -119.7848, "America/Los_Angeles"], "Mesa, AZ": [33.4151, -111.8315, "America/Denver"], "Sacramento, CA": [38.5811, -121.4939, "America/Los_Angeles"], "Atlanta, GA": [33.7545, -84.3898, "America/New_York"], "Kansas City, MO": [39.1001, -94.5781, "America/Chicago"], "Colorado Springs, CO": [38.834, -104.8253, "America/Denver"], "Miami, FL": [25.7742, -80.1936, "America/New_York"], "Raleigh, NC": [35.7804, -78.6391, "America/New_York"], "Omaha, NE": [41.2587, -95.9384, "America/Chicago"], "Long Beach, CA": [33.769, -118.1916, "America/Los_Angeles"], "Virginia Beach, VA": [36.8497, -75.9761, "America/New_York"], "Oakland, CA": [37.8045, -122.2714, "America/Los_Angeles"], "Minneapolis, MN": [44.9773, -93.2655, "America/Chicago"], "Tulsa, OK": [36.1563, -95.9928, "America/Chicago"], "Tampa, FL": [27.945, -82.4583, "America/New_York"], "Arlington, TX": [32.7356, -97.1071, "America/Chicago"], "New Orleans, LA": [29.9561, -90.0734, "America/Chicago"], "Wichita, KS": [37.6922, -97.3375, "America/Chicago"], "Cleveland, OH": [41.4997, -81.6937, "America/New_York"], "Bakersfield, CA": [35.3739, -119.0195, "America/Los_Angeles"], "Aurora, CO": [39.7405, -104.831, "America/Denver"], "Anaheim, CA": [33.8348, -117.9117, "America/Los_Angeles"], "Honolulu, HI": [21.3045, -157.8557, "America/Los_Angeles"], "Santa Ana, CA": [33.7495, -117.8732, "America/Los_Angeles"], "Riverside, CA": [33.9825, -117.3742, "America/Los_Angeles"], "Corpus Christi, TX": [27.7635, -97.4033, "America/Chicago"], "Lexington, KY": [38.0464, -84.497, "America/New_York"], "Stockton, CA": [37.9577, -121.2908, "America/Los_Angeles"], "St. Louis, MO": [38.6254, -90.19, "America/Chicago"], "Pittsburgh, PA": [40.4407, -80.0026, "America/New_York"], "Cincinnati, OH": [39.1013, -84.5127, "America/New_York"], "Anchorage, AK": [61.2163, -149.8949, "America/Los_Angeles"], "Henderson, NV": [36.032, -114.9823, "America/Denver"], "Greensboro, NC": [36.0726, -79.792, "America/New_York"], "Plano, TX": [33.0137, -96.6925, "America/Chicago"], "Newark, NJ": [40.7357, -74.1724, "America/New_York"], "Lincoln, NE": [40.8089, -96.7078, "America/Chicago"], "Orlando, FL": [28.5421, -81.379, "America/New_York"], "Irvine, CA": [33.6857, -117.826, "America/Los_Angeles"], "Toledo, OH": [41.6529, -83.5378, "America/New_York"], "Jersey City, NJ": [40.7216, -74.0475, "America/New_York"], "Chula Vista, CA": [32.6401, -117.0842, "America/Los_Angeles"], "Durham, NC": [35.9967, -78.9018, "America/New_York"], "Fort Wayne, IN": [41.08, -85.1386, "America/Chicago"], "St. Petersburg, FL": [27.7712, -82.634, "America/New_York"], "Laredo, TX": [27.5079, -99.507, "America/Chicago"], "Buffalo, NY": [42.8864, -78.8781, "America/New_York"], "Madison, WI": [43.0747, -89.3842, "America/Chicago"], "Lubbock, TX": [33.5856, -101.847, "America/Denver"], "Chandler, AZ": [33.3062, -111.8412, "America/Denver"], "Scottsdale, AZ": [33.4942, -111.926, "America/Denver"], "Reno, NV": [39.5262, -119.8127, "America/Los_Angeles"], "Glendale, AZ": [33.5387, -112.186, "America/Denver"], "Gilbert, AZ": [33.3528, -111.789, "America/Denver"], "Winston-Salem, NC": [36.0998, -80.2441, "America/New_York"], "North Las Vegas, NV": [36.2005, -115.1215, "America/Los_Angeles"], "Norfolk, VA": [36.8494, -76.29, "America/New_York"], "Chesapeake, VA": [36.7168, -76.2494, "America/New_York"], "Irving, TX": [32.8295, -96.9442, "America/Chicago"], "Hialeah, FL": [25.8268, -80.2814, "America/New_York"], "Garland, TX": [32.9126, -96.6389, "America/Chicago"], "Fremont, CA": [37.5483, -121.9886, "America/Los_Angeles"], "Boise, ID": [43.6166, -116.2009, "America/Los_Angeles"], "Richmond, VA": [37.5385, -77.4343, "America/New_York"], "Baton Rouge, LA": [30.4494, -91.187, "America/Chicago"], "Des Moines, IA": [41.5869, -93.6249, "America/Chicago"], "San Bernardino, CA": [34.8253, -116.0833, "America/Los_Angeles"], "Bentonville, AR": [36.3729, -94.2088, "America/Chicago"], "Fayetteville, AR": [36.0626, -94.1574, "America/Chicago"], "Rogers, AR": [36.3349, -94.1194, "America/Chicago"], "Springdale, AR": [36.1867, -94.1288, "America/Chicago"], "Little Rock, AR": [34.7465, -92.2896, "America/Chicago"], "Hyderabad, Telangana": [17.3606, 78.4741, "Asia/Kolkata"], "Warangal, Telangana": [17.9821, 79.5971, "Asia/Kolkata"], "Nizamabad, Telangana": [18.6733, 78.0978, "Asia/Kolkata"], "Karimnagar, Telangana": [18.4348, 79.1328, "Asia/Kolkata"], "Khammam, Telangana": [17.2465, 80.15, "Asia/Kolkata"], "Ramagundam, Telangana": [18.7615, 79.4788, "Asia/Kolkata"], "Mahbubnagar, Telangana": [16.7435, 77.9923, "Asia/Kolkata"], "Nalgonda, Telangana": [17.0504, 79.2669, "Asia/Kolkata"], "Adilabad, Telangana": [19.6759, 78.534, "Asia/Kolkata"], "Suryapet, Telangana": [17.08, 79.7925, "Asia/Kolkata"], "Miryalaguda, Telangana": [16.871, 79.5617, "Asia/Kolkata"], "Siddipet, Telangana": [18.0056, 78.8961, "Asia/Kolkata"], "Jagtial, Telangana": [18.8214, 78.9151, "Asia/Kolkata"], "Mancherial, Telangana": [18.9813, 79.5198, "Asia/Kolkata"], "Nirmal, Telangana": [19.0915, 78.3966, "Asia/Kolkata"], "Kamareddy, Telangana": [18.3166, 78.0539, "Asia/Kolkata"], "Kothagudem, Telangana": [17.5513, 80.6145, "Asia/Kolkata"], "Bodhan, Telangana": [18.6537, 77.8937, "Asia/Kolkata"], "Sangareddy, Telangana": [17.8684, 77.8227, "Asia/Kolkata"], "Metpally, Telangana": [18.1836, 78.9031, "Asia/Kolkata"], "Zahirabad, Telangana": [17.6758, 77.6107, "Asia/Kolkata"], "Medak, Telangana": [17.9375, 78.2117, "Asia/Kolkata"], "Vikarabad, Telangana": [17.2703, 77.7453, "Asia/Kolkata"], "Wanaparthy, Telangana": [16.2853, 77.9864, "Asia/Kolkata"], "Narayanpet, Telangana": [16.7006, 77.6165, "Asia/Kolkata"], "Gadwal, Telangana": [16.2347, 77.7946, "Asia/Kolkata"], "Mahabubabad, Telangana": [17.7139, 80.0413, "Asia/Kolkata"], "Bhadrachalam, Telangana": [17.6688, 80.894, "Asia/Kolkata"], "Bhongir, Telangana": [17.5173, 78.8863, "Asia/Kolkata"], "Jangaon, Telangana": [17.7466, 79.2407, "Asia/Kolkata"], "Peddapalli, Telangana": [18.6207, 79.495, "Asia/Kolkata"], "Koratla, Telangana": [19.6627, 78.5275, "Asia/Kolkata"], "Huzurabad, Telangana": [18.2018, 79.3957, "Asia/Kolkata"], "Armoor, Telangana": [18.7904, 78.2907, "Asia/Kolkata"], "Bellampally, Telangana": [19.0753, 79.4766, "Asia/Kolkata"], "Tandur, Telangana": [17.2509, 77.5841, "Asia/Kolkata"], "Shadnagar, Telangana": [17.0672, 78.2046, "Asia/Kolkata"], "Medchal, Telangana": [17.634, 78.4843, "Asia/Kolkata"], "Shamshabad, Telangana": [17.2611, 78.3932, "Asia/Kolkata"], "Secunderabad, Telangana": [17.4337, 78.5007, "Asia/Kolkata"], "Kukatpally, Telangana": [17.4931, 78.4054, "Asia/Kolkata"], "Gachibowli, Telangana": [17.4436, 78.352, "Asia/Kolkata"], "Madhapur, Telangana": [17.4409, 78.3916, "Asia/Kolkata"], "Kondapur, Telangana": [17.4588, 78.3731, "Asia/Kolkata"], "Begumpet, Telangana": [17.4462, 78.463, "Asia/Kolkata"], "Banjara Hills, Telangana": [17.4177, 78.4399, "Asia/Kolkata"], "Jubilee Hills, Telangana": [17.4308, 78.4103, "Asia/Kolkata"], "Ameerpet, Telangana": [17.4375, 78.4483, "Asia/Kolkata"], "Dilsukhnagar, Telangana": [17.3684, 78.5234, "Asia/Kolkata"], "LB Nagar, Telangana": [17.3502, 78.5511, "Asia/Kolkata"], "Uppal, Telangana": [17.4025, 78.5613, "Asia/Kolkata"], "ECIL, Telangana": [17.45, 78.5809, "Asia/Kolkata"], "Kompally, Telangana": [17.5401, 78.4909, "Asia/Kolkata"], "Miyapur, Telangana": [17.4982, 78.3568, "Asia/Kolkata"], "BHEL, Telangana": [17.5022, 78.2821, "Asia/Kolkata"], "Lingampally, Telangana": [17.4882, 78.3161, "Asia/Kolkata"], "Vijayawada, Andhra Pradesh": [16.5115, 80.616, "Asia/Kolkata"], "Visakhapatnam, Andhra Pradesh": [17.6936, 83.2921, "Asia/Kolkata"], "Guntur, Andhra Pradesh": [16.2915, 80.4542, "Asia/Kolkata"], "Nellore, Andhra Pradesh": [14.4494, 79.9874, "Asia/Kolkata"], "Kurnool, Andhra Pradesh": [15.8309, 78.0425, "Asia/Kolkata"], "Kadapa, Andhra Pradesh": [14.4753, 78.8217, "Asia/Kolkata"], "Rajahmundry, Andhra Pradesh": [17.005, 81.7805, "Asia/Kolkata"], "Tirupati, Andhra Pradesh": [13.6316, 79.4232, "Asia/Kolkata"], "Kakinada, Andhra Pradesh": [16.9437, 82.2351, "Asia/Kolkata"], "Anantapur, Andhra Pradesh": [14.6783, 77.6065, "Asia/Kolkata"], "Eluru, Andhra Pradesh": [16.7104, 81.1154, "Asia/Kolkata"], "Ongole, Andhra Pradesh": [15.5059, 80.0499, "Asia/Kolkata"], "Vizianagaram, Andhra Pradesh": [18.1141, 83.4114, "Asia/Kolkata"], "Tenali, Andhra Pradesh": [16.2378, 80.6464, "Asia/Kolkata"], "Proddatur, Andhra Pradesh": [14.7556, 78.5502, "Asia/Kolkata"], "Nandyal, Andhra Pradesh": [15.4736, 78.4807, "Asia/Kolkata"], "Chittoor, Andhra Pradesh": [13.325, 79.6481, "Asia/Kolkata"], "Machilipatnam, Andhra Pradesh": [16.1817, 81.1348, "Asia/Kolkata"], "Adoni, Andhra Pradesh": [15.6261, 77.2724, "Asia/Kolkata"], "Srikakulam, Andhra Pradesh": [18.2949, 83.8939, "Asia/Kolkata"], "Bhimavaram, Andhra Pradesh": [16.5428, 81.5273, "Asia/Kolkata"], "Hindupur, Andhra Pradesh": [13.8306, 77.4926, "Asia/Kolkata"], "Tadepalligudem, Andhra Pradesh": [16.8102, 81.5266, "Asia/Kolkata"], "Amaravati, Andhra Pradesh": [16.5097, 80.5185, "Asia/Kolkata"], "Mangalagiri, Andhra Pradesh": [16.4318, 80.5688, "Asia/Kolkata"], "Narasaraopet, Andhra Pradesh": [16.2389, 80.0473, "Asia/Kolkata"], "Madanapalle, Andhra Pradesh": [13.5558, 78.5015, "Asia/Kolkata"], "Dharmavaram, Andhra Pradesh": [14.4138, 77.7208, "Asia/Kolkata"], "Gudivada, Andhra Pradesh": [16.433, 80.9937, "Asia/Kolkata"], "Kavali, Andhra Pradesh": [14.9136, 79.9927, "Asia/Kolkata"], "Bangalore, Karnataka": [12.9768, 77.5901, "Asia/Kolkata"], "Bengaluru, Karnataka": [12.9768, 77.5901, "Asia/Kolkata"], "Mysore, Karnataka": [12.3052, 76.6554, "Asia/Kolkata"], "Hubli, Karnataka": [15.3518, 75.138, "Asia/Kolkata"], "Mangalore, Karnataka": [12.8698, 74.843, "Asia/Kolkata"], "Belgaum, Karnataka": [15.8573, 74.5069, "Asia/Kolkata"], "Gulbarga, Karnataka": [17.331, 76.8334, "Asia/Kolkata"], "Davanagere, Karnataka": [14.2559, 75.8303, "Asia/Kolkata"], "Bellary, Karnataka": [15.143, 76.9173, "Asia/Kolkata"], "Bijapur, Karnataka": [16.827, 75.7175, "Asia/Kolkata"], "Shimoga, Karnataka": [14.0557, 75.2381, "Asia/Kolkata"], "Tumkur, Karnataka": [13.3401, 77.1006, "Asia/Kolkata"], "Raichur, Karnataka": [16.0547, 76.9004, "Asia/Kolkata"], "Bidar, Karnataka": [18.0207, 77.2487, "Asia/Kolkata"], "Hospet, Karnataka": [15.2665, 76.3872, "Asia/Kolkata"], "Hassan, Karnataka": [13.0302, 76.1745, "Asia/Kolkata"], "Udupi, Karnataka": [13.527, 74.8732, "Asia/Kolkata"], "Chitradurga, Karnataka": [14.3049, 76.5297, "Asia/Kolkata"], "Mandya, Karnataka": [12.6369, 76.7275, "Asia/Kolkata"], "Kolar, Karnataka": [13.1805, 78.2669, "Asia/Kolkata"], "Whitefield, Bangalore": [12.9964, 77.7614, "Asia/Kolkata"], "Electronic City, Bangalore": [12.8488, 77.6483, "Asia/Kolkata"], "Koramangala, Bangalore": [12.9357, 77.6241, "Asia/Kolkata"], "Indiranagar, Bangalore": [12.9733, 77.6405, "Asia/Kolkata"], "HSR Layout, Bangalore": [12.9116, 77.6389, "Asia/Kolkata"], "BTM Layout, Bangalore": [12.914, 77.6103, "Asia/Kolkata"], "Marathahalli, Bangalore": [12.9553, 77.6984, "Asia/Kolkata"], "Sarjapur, Bangalore": [12.9116, 77.6389, "Asia/Kolkata"], "Hebbal, Bangalore": [13.0382, 77.5919, "Asia/Kolkata"], "Yelahanka, Bangalore": [13.1007, 77.5963, "Asia/Kolkata"], "JP Nagar, Bangalore": [12.9097, 77.5866, "Asia/Kolkata"], "Banashankari, Bangalore": [12.9278, 77.5566, "Asia/Kolkata"], "Chennai, Tamil Nadu": [13.0837, 80.2702, "Asia/Kolkata"], "Coimbatore, Tamil Nadu": [11.0018, 76.9628, "Asia/Kolkata"], "Madurai, Tamil Nadu": [9.9261, 78.1141, "Asia/Kolkata"], "Tiruchirappalli, Tamil Nadu": [10.8071, 78.6881, "Asia/Kolkata"], "Salem, Tamil Nadu": [11.647, 78.2107, "Asia/Kolkata"], "Tirunelveli, Tamil Nadu": [8.5495, 77.5805, "Asia/Kolkata"], "Tiruppur, Tamil Nadu": [10.7915, 77.5325, "Asia/Kolkata"], "Vellore, Tamil Nadu": [12.9022, 79.0611, "Asia/Kolkata"], "Erode, Tamil Nadu": [11.4905, 77.3505, "Asia/Kolkata"], "Thoothukkudi, Tamil Nadu": [8.7567, 78.0798, "Asia/Kolkata"], "Dindigul, Tamil Nadu": [10.4257, 77.8157, "Asia/Kolkata"], "Thanjavur, Tamil Nadu": [10.659, 79.2014, "Asia/Kolkata"], "Ranipet, Tamil Nadu": [12.9186, 79.4082, "Asia/Kolkata"], "Sivakasi, Tamil Nadu": [9.4628, 77.7891, "Asia/Kolkata"], "Karur, Tamil Nadu": [10.8218, 78.3829, "Asia/Kolkata"], "Udhagamandalam, Tamil Nadu": [11.4127, 76.7031, "Asia/Kolkata"], "Hosur, Tamil Nadu": [12.7183, 77.8229, "Asia/Kolkata"], "Nagercoil, Tamil Nadu": [8.184, 77.4315, "Asia/Kolkata"], "T. Nagar, Chennai": [13.0344, 80.2302, "Asia/Kolkata"], "Anna Nagar, Chennai": [13.0872, 80.2164, "Asia/Kolkata"], "Adyar, Chennai": [13.0064, 80.2578, "Asia/Kolkata"], "Velachery, Chennai": [12.9802, 80.2229, "Asia/Kolkata"], "Tambaram, Chennai": [12.9318, 80.0997, "Asia/Kolkata"], "Porur, Chennai": [13.032, 80.1583, "Asia/Kolkata"], "OMR, Chennai": [12.8887, 80.2273, "Asia/Kolkata"], "Sholinganallur, Chennai": [12.9174, 80.2165, "Asia/Kolkata"], "Mumbai, Maharashtra": [19.055, 72.8692, "Asia/Kolkata"], "Pune, Maharashtra": [18.5214, 73.8545, "Asia/Kolkata"], "Nagpur, Maharashtra": [21.1498, 79.0821, "Asia/Kolkata"], "Thane, Maharashtra": [19.3654, 73.3685, "Asia/Kolkata"], "Nashik, Maharashtra": [20.0112, 73.7902, "Asia/Kolkata"], "Aurangabad, Maharashtra": [19.8773, 75.339, "Asia/Kolkata"], "Solapur, Maharashtra": [17.8499, 75.2763, "Asia/Kolkata"], "Kolhapur, Maharashtra": [16.7028, 74.2405, "Asia/Kolkata"], "Amravati, Maharashtra": [21.1545, 77.6443, "Asia/Kolkata"], "Navi Mumbai, Maharashtra": [19.0308, 73.0199, "Asia/Kolkata"], "Sangli, Maharashtra": [17.1727, 74.5868, "Asia/Kolkata"], "Jalgaon, Maharashtra": [20.8429, 75.5261, "Asia/Kolkata"], "Akola, Maharashtra": [20.7618, 77.1921, "Asia/Kolkata"], "Latur, Maharashtra": [18.3553, 76.7549, "Asia/Kolkata"], "Andheri, Mumbai": [19.1197, 72.8464, "Asia/Kolkata"], "Bandra, Mumbai": [19.055, 72.8402, "Asia/Kolkata"], "Dadar, Mumbai": [19.0174, 72.843, "Asia/Kolkata"], "Borivali, Mumbai": [19.2298, 72.8471, "Asia/Kolkata"], "Malad, Mumbai": [19.1867, 72.8486, "Asia/Kolkata"], "Powai, Mumbai": [19.1187, 72.9073, "Asia/Kolkata"], "Goregaon, Mumbai": [19.1649, 72.8495, "Asia/Kolkata"], "Kandivali, Mumbai": [19.2041, 72.8517, "Asia/Kolkata"], "Kurla, Mumbai": [19.0653, 72.8794, "Asia/Kolkata"], "Delhi, NCR": [28.6882, 77.1212, "Asia/Kolkata"], "Noida, UP": [28.5706, 77.3272, "Asia/Kolkata"], "Gurgaon, Haryana": [28.4646, 77.0299, "Asia/Kolkata"], "Faridabad, Haryana": [28.4031, 77.3106, "Asia/Kolkata"], "Ghaziabad, UP": [28.775, 77.4587, "Asia/Kolkata"], "Greater Noida, UP": [28.4671, 77.5138, "Asia/Kolkata"], "Kolkata, West Bengal": [22.5726, 88.3639, "Asia/Kolkata"], "Ahmedabad, Gujarat": [23.0215, 72.5801, "Asia/Kolkata"], "Surat, Gujarat": [21.2095, 72.8317, "Asia/Kolkata"], "Jaipur, Rajasthan": [26.9155, 75.819, "Asia/Kolkata"], "Lucknow, UP": [26.8381, 80.9346, "Asia/Kolkata"], "Kanpur, UP": [26.4609, 80.3218, "Asia/Kolkata"], "Chandigarh": [30.7334, 76.7797, "Asia/Kolkata"], "Indore, MP": [22.7204, 75.8682, "Asia/Kolkata"], "Bhopal, MP": [23.2585, 77.402, "Asia/Kolkata"], "Patna, Bihar": [25.6093, 85.1235, "Asia/Kolkata"], "Kochi, Kerala": [9.9679, 76.2444, "Asia/Kolkata"], "Thiruvananthapuram, Kerala": [8.4882, 76.9476, "Asia/Kolkata"]};
/* Vedic Kundali / Ashtakoot Guna Milan — real algorithm
   Reference tables: standard Parashari Hora Shastra Ashtakoot
   Ephemeris: astronomy-engine (Don Cross, MIT)
   Ayanamsa: Lahiri (Chitrapaksha)
   Hemanth's chart (fixed): Pushya nakshatra (#8), Cancer rashi (#4)
*/
(function(global){
'use strict';

// ───────── Reference data ─────────
var NAKSHATRAS = [
  'Ashwini','Bharani','Krittika','Rohini','Mrigashira','Ardra','Punarvasu','Pushya','Ashlesha',
  'Magha','Purva Phalguni','Uttara Phalguni','Hasta','Chitra','Swati','Vishakha','Anuradha','Jyeshtha',
  'Mula','Purva Ashadha','Uttara Ashadha','Shravana','Dhanishta','Shatabhisha','Purva Bhadrapada','Uttara Bhadrapada','Revati'
];
var RASHIS = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
var RASHIS_SANSKRIT = ['Mesha','Vrishabha','Mithuna','Karkataka','Simha','Kanya','Tula','Vrischika','Dhanu','Makara','Kumbha','Meena'];

// Nakshatra → Yoni (animal). Each yoni has a sex (M/F). 14 yonis.
// Standard mapping (Parashara):
var YONI_BY_NAK = [
  // 1 Ashwini → Horse(M)        2 Bharani → Elephant(M)    3 Krittika → Sheep(F)
  ['horse','M'],['elephant','M'],['sheep','F'],
  // 4 Rohini → Serpent(M)       5 Mrigashira → Serpent(F)  6 Ardra → Dog(F)
  ['snake','M'],['snake','F'],['dog','F'],
  // 7 Punarvasu → Cat(F)        8 Pushya → Sheep(M)        9 Ashlesha → Cat(M)
  ['cat','F'],['sheep','M'],['cat','M'],
  // 10 Magha → Rat(M)           11 P.Phalguni → Rat(F)     12 U.Phalguni → Cow(M)
  ['rat','M'],['rat','F'],['cow','M'],
  // 13 Hasta → Buffalo(F)       14 Chitra → Tiger(F)       15 Swati → Buffalo(M)
  ['buffalo','F'],['tiger','F'],['buffalo','M'],
  // 16 Vishakha → Tiger(M)      17 Anuradha → Deer(F)      18 Jyeshtha → Deer(M)
  ['tiger','M'],['deer','F'],['deer','M'],
  // 19 Mula → Dog(M)            20 P.Ashadha → Monkey(M)   21 U.Ashadha → Mongoose(F)
  ['dog','M'],['monkey','M'],['mongoose','F'],
  // 22 Shravana → Monkey(F)     23 Dhanishta → Lion(F)     24 Shatabhisha → Horse(F)
  ['monkey','F'],['lion','F'],['horse','F'],
  // 25 P.Bhadra → Lion(M)       26 U.Bhadra → Cow(F)       27 Revati → Elephant(F)
  ['lion','M'],['cow','F'],['elephant','F']
];

// Yoni friendship matrix. Same yoni = 4; friend = 3; neutral = 2; enemy = 1; mortal enemy = 0
// Standard relationships (Parashara):
var YONI_REL = {
  // mortal enemies (score 0)
  'horse|buffalo':0,'cow|tiger':0,'elephant|lion':0,'snake|mongoose':0,
  'dog|deer':0,'cat|rat':0,'monkey|sheep':0,
  // enemies (score 1)
  'horse|elephant':1,'cow|buffalo':1,'lion|deer':1,'tiger|sheep':1,
  // neutrals (score 2)
  'horse|sheep':2,'horse|deer':2,'horse|cat':2,
  'elephant|sheep':2,'elephant|deer':2,
  'snake|dog':2,'snake|cat':2,
  // friends (score 3) — most remaining cross-species
};
function yoniScore(a,b){
  if(a[0]===b[0]) return 4;
  var k1=a[0]+'|'+b[0], k2=b[0]+'|'+a[0];
  if(YONI_REL[k1]!==undefined) return YONI_REL[k1];
  if(YONI_REL[k2]!==undefined) return YONI_REL[k2];
  return 3; // default friend
}

// Gana: Deva / Manushya / Rakshasa (9 each)
var GANA_BY_NAK = [
  'D','M','R','M','D','M','D','D','R',  // 1-9
  'R','M','M','D','M','D','R','D','R',  // 10-18
  'R','M','M','D','R','R','M','M','D'   // 19-27
];
function ganaScore(a,b){
  if(a===b) return 6;
  if((a==='D'&&b==='M')||(a==='M'&&b==='D')) return 5;
  if((a==='M'&&b==='R')||(a==='R'&&b==='M')) return 1;
  // Deva-Rakshasa
  return 0;
}

// Nadi: Adi / Madhya / Antya (9 each, cyclic)
// Standard: 1,6,7,12,13,18,19,24,25 → Adi; 2,5,8,11,14,17,20,23,26 → Madhya; 3,4,9,10,15,16,21,22,27 → Antya
var NADI_BY_NAK = ['A','M','N','N','M','A','A','M','N','N','M','A','A','M','N','N','M','A','A','M','N','N','M','A','A','M','N'];
function nadiScore(a,b){ return a===b ? 0 : 8; }

// Varna by rashi (0-indexed). Brahmin > Kshatriya > Vaishya > Shudra
// Cancer(3)/Scorpio(7)/Pisces(11) → Brahmin; Aries(0)/Leo(4)/Sag(8) → Kshatriya;
// Taurus(1)/Virgo(5)/Cap(9) → Vaishya; Gemini(2)/Libra(6)/Aqua(10) → Shudra
var VARNA = ['K','V','S','B','K','V','S','B','K','V','S','B'];
var VARNA_RANK = {B:4,K:3,V:2,S:1};
function varnaScore(boyR,girlR){
  return VARNA_RANK[VARNA[boyR]] >= VARNA_RANK[VARNA[girlR]] ? 1 : 0;
}

// Vashya by rashi: Quadruped/Manava/Jalachara/Vanachara/Keeta. Half-signs simplified.
// Aries-Q, Taurus-Q, Gem-M, Cancer-J, Leo-V, Virgo-M, Libra-M, Scorpio-K, Sag-Q(half)+M, Cap-J(half)+Q, Aqua-M, Pisces-J
var VASHYA = ['Q','Q','M','J','V','M','M','K','Q','J','M','J']; // simplified
var VASHYA_REL = {
  'Q':{'Q':2,'M':1,'J':1,'V':0,'K':1},
  'M':{'Q':1,'M':2,'J':1,'V':0,'K':0.5},
  'J':{'Q':1,'M':1,'J':2,'V':0.5,'K':0},
  'V':{'Q':0,'M':0,'J':1,'V':2,'K':0},
  'K':{'Q':1,'M':0,'J':0,'V':1,'K':2}
};
function vashyaScore(boyR,girlR){
  return VASHYA_REL[VASHYA[boyR]][VASHYA[girlR]];
}

// Tara: count nakshatras boy→girl, mod 9. Auspicious if remainder ∈ {0,2,4,6,8}
// Both auspicious: 3; one: 1.5; neither: 0
function taraScore(boyN,girlN){
  var b2g = ((girlN - boyN) % 27 + 27) % 27 + 1;
  var g2b = ((boyN - girlN) % 27 + 27) % 27 + 1;
  var r1 = b2g % 9; // 0 means inauspicious (3,5,7 are bad)
  var r2 = g2b % 9;
  // Inauspicious remainders: 3,5,7 (and 0 = 9 = inauspicious actually no — 9 is auspicious)
  // Standard: bad if remainder is 3, 5, or 7
  var bad = function(r){ return r===3 || r===5 || r===7; };
  var ok1 = !bad(r1), ok2 = !bad(r2);
  if(ok1 && ok2) return 3;
  if(ok1 || ok2) return 1.5;
  return 0;
}

// Graha Maitri: Moon-sign lords friendship.
// Rashi lords: Aries-Mars, Taurus-Venus, Gem-Mercury, Cancer-Moon, Leo-Sun, Virgo-Mercury,
//              Libra-Venus, Scorpio-Mars, Sag-Jupiter, Cap-Saturn, Aqua-Saturn, Pisces-Jupiter
var LORD = ['Ma','Ve','Me','Mo','Su','Me','Ve','Ma','Ju','Sa','Sa','Ju'];
// Natural friendship table (Parashara):
// Friend=F, Enemy=E, Neutral=N
var FRIENDSHIP = {
  'Su':{'Su':'F','Mo':'F','Ma':'F','Me':'N','Ju':'F','Ve':'E','Sa':'E'},
  'Mo':{'Su':'F','Mo':'F','Ma':'N','Me':'F','Ju':'N','Ve':'N','Sa':'N'},
  'Ma':{'Su':'F','Mo':'F','Ma':'F','Me':'E','Ju':'F','Ve':'N','Sa':'N'},
  'Me':{'Su':'F','Mo':'E','Ma':'N','Me':'F','Ju':'N','Ve':'F','Sa':'N'},
  'Ju':{'Su':'F','Mo':'F','Ma':'F','Me':'E','Ju':'F','Ve':'E','Sa':'N'},
  'Ve':{'Su':'E','Mo':'E','Ma':'N','Me':'F','Ju':'N','Ve':'F','Sa':'F'},
  'Sa':{'Su':'E','Mo':'E','Ma':'E','Me':'F','Ju':'N','Ve':'F','Sa':'F'}
};
function grahaScore(boyR,girlR){
  var lb=LORD[boyR], lg=LORD[girlR];
  if(lb===lg) return 5;
  var r1=FRIENDSHIP[lb][lg], r2=FRIENDSHIP[lg][lb];
  // Both friend: 5; one F one N: 4; both N: 3; one F one E: 1; one N one E: 0.5; both E: 0
  if(r1==='F'&&r2==='F') return 5;
  if((r1==='F'&&r2==='N')||(r1==='N'&&r2==='F')) return 4;
  if(r1==='N'&&r2==='N') return 3;
  if((r1==='F'&&r2==='E')||(r1==='E'&&r2==='F')) return 1;
  if((r1==='N'&&r2==='E')||(r1==='E'&&r2==='N')) return 0.5;
  return 0;
}

// Bhakoot: position of girl's rashi from boy's. Bad: 6/8, 9/5, 12/2. Else 7.
function bhakootScore(boyR,girlR){
  var d1 = ((girlR - boyR) % 12 + 12) % 12 + 1; // 1..12
  var d2 = ((boyR - girlR) % 12 + 12) % 12 + 1;
  var p = [d1,d2].sort().join('-');
  // Bad pairs: (2,12), (5,9), (6,8)
  if(p==='2-12'||p==='5-9'||p==='6-8') return 0;
  return 7;
}

// ───────── Lahiri Ayanamsa ─────────
// More precise formula (Swiss Ephemeris SE_SIDM_LAHIRI):
// Reference: ayanamsa(J2000.0) = 23°51'10.5" = 23.85292°
// Annual rate ~50.27"/yr = 0.01396°/yr  (with small acceleration ignored for our purposes)
function lahiriAyanamsa(date){
  // Decimal year
  var y = date.getUTCFullYear();
  var startOfYear = Date.UTC(y,0,1);
  var nextYear = Date.UTC(y+1,0,1);
  var dy = y + (date.getTime() - startOfYear) / (nextYear - startOfYear);
  return 23.85292 + (dy - 2000.0) * 0.013969;
}

// ───────── Compute nakshatra & rashi from birth ─────────
function computeChart(dateUTC){
  if(!global.Astronomy) throw new Error('astronomy-engine not loaded');
  var ecl = global.Astronomy.EclipticGeoMoon(dateUTC);
  var trop = ecl.lon; // 0..360 tropical
  var ayan = lahiriAyanamsa(dateUTC);
  var sid = trop - ayan;
  while(sid < 0) sid += 360;
  while(sid >= 360) sid -= 360;
  var nakIdx = Math.floor(sid / (360/27));   // 0..26
  var pada = Math.floor((sid - nakIdx*(360/27)) / ((360/27)/4)) + 1; // 1..4
  var rashiIdx = Math.floor(sid / 30);       // 0..11
  return {
    nakshatra: nakIdx + 1,
    nakshatraName: NAKSHATRAS[nakIdx],
    pada: pada,
    rashi: rashiIdx + 1,
    rashiName: RASHIS[rashiIdx],
    rashiSanskrit: RASHIS_SANSKRIT[rashiIdx],
    siderealLon: sid,
    tropicalLon: trop,
    ayanamsa: ayan
  };
}

// Convert local birth date/time + IANA tz → UTC Date
function localToUTC(dateStr, timeStr, tzName){
  // dateStr 'YYYY-MM-DD', timeStr 'HH:MM'
  var p = dateStr.split('-'), t = timeStr.split(':');
  var y = +p[0], mo = +p[1]-1, d = +p[2], hh = +t[0], mm = +t[1];
  // Get the UTC offset (in minutes) for that wall-clock instant in tzName.
  // Use Intl.DateTimeFormat: format a probe UTC date as if it were in tzName,
  // then compute offset by diffing.
  // Probe: assume local instant equals UTC; format it in tzName; the difference is the offset.
  var probe = new Date(Date.UTC(y,mo,d,hh,mm,0));
  var dtf = new Intl.DateTimeFormat('en-US', {
    timeZone: tzName, year:'numeric', month:'2-digit', day:'2-digit',
    hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false
  });
  var parts = dtf.formatToParts(probe).reduce(function(o,p){o[p.type]=p.value;return o;},{});
  // Local time in tz at the probe instant
  var ly = +parts.year, lmo = +parts.month-1, ld = +parts.day;
  var lh = +parts.hour, lm = +parts.minute;
  if(lh===24) lh=0; // edge case
  var asIfUTC = Date.UTC(ly,lmo,ld,lh,lm,0);
  var offsetMs = asIfUTC - probe.getTime(); // tz offset from UTC, ms
  // So actual UTC = local - offset
  return new Date(probe.getTime() - offsetMs);
}

// ───────── Full Ashtakoot ─────────
function ashtakoot(boy, girl){
  var bN = boy.nakshatra-1, bR = boy.rashi-1;
  var gN = girl.nakshatra-1, gR = girl.rashi-1;
  var rows = [];
  var sc;

  sc = varnaScore(bR,gR);
  rows.push({category:'Varna (Spiritual Compatibility)', score:sc, max:1,
    desc:'Spiritual & intellectual class. Boy\u2019s varna should be \u2265 girl\u2019s.'});

  sc = vashyaScore(bR,gR);
  rows.push({category:'Vashya (Mutual Attraction)', score:sc, max:2,
    desc:'Power balance & influence between partners (animal-class compatibility).'});

  sc = taraScore(bN,gN);
  rows.push({category:'Tara (Health & Destiny)', score:sc, max:3,
    desc:'Birth-star count divisibility \u2014 indicates wellbeing of the union.'});

  sc = yoniScore(YONI_BY_NAK[bN], YONI_BY_NAK[gN]);
  rows.push({category:'Yoni (Physical Compatibility)', score:sc, max:4,
    desc:'Animal symbol of nakshatra \u2014 physical & intimate compatibility.'});

  sc = grahaScore(bR,gR);
  rows.push({category:'Graha Maitri (Mental Match)', score:sc, max:5,
    desc:'Friendship of Moon-sign lords \u2014 emotional & intellectual rapport.'});

  sc = ganaScore(GANA_BY_NAK[bN], GANA_BY_NAK[gN]);
  rows.push({category:'Gana (Temperament)', score:sc, max:6,
    desc:'Deva / Manushya / Rakshasa temperament classification.'});

  sc = bhakootScore(bR,gR);
  rows.push({category:'Bhakoot (Love & Finance)', score:sc, max:7,
    desc:'Rashi distance \u2014 emotional bonding, prosperity, family growth.'});

  sc = nadiScore(NADI_BY_NAK[bN], NADI_BY_NAK[gN]);
  rows.push({category:'Nadi (Health & Genes)', score:sc, max:8,
    desc:'Pulse / constitution \u2014 genetic & progeny health (heaviest weight).'});

  var total = rows.reduce(function(s,r){return s+r.score;},0);
  var verdict;
  if(total >= 32) verdict = {title:'Excellent Match', desc:'Outstanding compatibility \u2014 highly auspicious union per Vedic standards.'};
  else if(total >= 28) verdict = {title:'Very Good Match', desc:'Strong compatibility across most dimensions \u2014 recommended.'};
  else if(total >= 24) verdict = {title:'Good Match', desc:'Healthy overall match \u2014 minor incompatibilities are manageable.'};
  else if(total >= 18) verdict = {title:'Average Match', desc:'Moderate compatibility \u2014 consider individual chart details.'};
  else verdict = {title:'Below Average', desc:'Compatibility is low per Ashtakoot \u2014 detailed astrological review recommended.'};
  return { score: Math.round(total*10)/10, total: 36, details: rows, verdictTitle: verdict.title, verdictDesc: verdict.desc };
}

// ───────── Hemanth (fixed) ─────────
var HEMANTH = {
  nakshatra: 8,   // Pushya
  pada: 4,
  rashi: 4,       // Cancer (Karkataka)
  nakshatraName: 'Pushya',
  rashiName: 'Cancer',
  rashiSanskrit: 'Karkataka'
};

// ───────── Public API ─────────
global.Kundali = {
  CITIES: CITIES_DATA,
  NAKSHATRAS: NAKSHATRAS,
  RASHIS: RASHIS,
  HEMANTH: HEMANTH,
  computeChart: computeChart,
  localToUTC: localToUTC,
  ashtakoot: ashtakoot,
  lahiriAyanamsa: lahiriAyanamsa,
  // Convenience: compute full match given girl's birth + city tz
  matchWithHemanth: function(dateStr, timeStr, tzName){
    var utc = localToUTC(dateStr, timeStr, tzName);
    var chart = computeChart(utc);
    var result = ashtakoot(HEMANTH, chart);
    result.gunas = {
      boy: { nakshatra: HEMANTH.nakshatraName, rashi: HEMANTH.rashiName },
      girl: { nakshatra: chart.nakshatraName, rashi: chart.rashiName, pada: chart.pada }
    };
    result.note = 'Computed from Moon\u2019s sidereal position at exact birth instant (Lahiri ayanamsa). Hemanth\u2019s chart: Pushya / Karkataka.';
    result.analyzeNew = 'Analyze Another';
    return result;
  }
};
})(typeof window!=='undefined'?window:globalThis);
