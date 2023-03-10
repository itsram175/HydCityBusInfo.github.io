
// Global Arrays
var arrayHUP = [], arrayHDN = [], arraySHDN = [], arraySHUP = [];
var SHD = ["ABIDS", "ABIDS GPO", "ADARSH NAGAR", "ADIBATLA", "ADIKMET", "AFZALGUNJ", "AIR FORCE ACADEMY", "ALIABAD", "ALKAPURI", "ALLWYN COLONY", "ALLWYN X ROADS", "ALMASGUDA", "ALUGADDA BHAVI", "ALWAL", "ALWAL POLICE STATION", "ALWAL TEMPLE", "AMBEDKAR DEGREE COLLEGE", "AMBEDKAR NAGAR", "AMBERPET", "AMBERPET ALI CAFE", "AMBERPET GANDHI STATUE", "AMBERPET 6 NUMBER", "AMEERPET", "ANANDH BAGH X ROADS", "ANDHRA MAHILA SABHA", "ANGADIPETA", "ANKIREDDY PALLY", "ANUTEXT", "AOC", "APARNA COMPANY", "APUROOPA COLONY", "ARAMGHAR", "ARTS COLLEGE", "ARTS COLLEGE", "AS RAO NAGAR", "ASHOK NAGAR - BHEL", "ASHOK NAGAR - NFC", "ASHOK NAGAR", "ASHOK NAGAR X ROADS", "ASIF NAGAR", "ASISH GARDENS", "ASSEMBLY", "ATTAPUR", "ATTAPUR X ROADS", "AUSHAPUR", "AUTO NAGAR", "AYYAPPA COLONY", "BABA NAGAR", "BACHUPALLY", "BACHUPALLY X ROADS", "BAGH LINGAMPALLY", "BAHUDURPALLY X ROADS", "BAHUDURPURA", "BALAJI NAGAR", "BALAMRAI", "BALANAGAR", "BALAPUR", "BALAPUR X ROADS", "BALAYA NAGAR", "BANDLAGUDA", "BANDLAGUDA", "BANJAARA HILLS", "BANK COLONY", "BANK STREET", "BARKAS", "BARKATPURA", "BATA", "BEERAPPA GADDA", "BEGUM BAZAR", "BEGUMPET", "BHAGATH SINGH NAGAR COLONY", "BHAGYALATHA", "BHARATH NAGAR", "BHAVANI NAGAR", "BHEL", "BHEL QUARTERS", "BHOLAKPUR", "BHUDEVI NAGAR", "BIBI BAZAR", "BIBI NAGAR", "BIBLE HOUSE", "BIRLA MANDIR", "BITS PILANI", "BK ENCLAVE", "BN REDDY", "BOATS CLUB", "BODUPPAL", "BOGARAM", "BOIGUDA", "BOLLARUM", "BOLLARUM IDA", "BONGLOOR X ROADS", "BORABANDA", "BOWRAMPET", "BOWRAMPET X ROADS", "BOWENPALLY", "BOWENPALLY CHECK POST", "BOWENPALLY X ROADS", "BRAHMANPALLY", "BUDHA NAGAR", "BUS BHAVAN", "BVRIT", "CANARA BANK", "CARBIDE", "CARBON", "CARE HOSPITALS", "CCMB COLONY", "CITY BUS STATION", "CHADOWKI MASJID", "CHADERGHAT", "CHAITANYAPURI", "CHAKRIPURAM", "CHAMPAPET", "CHAMPAPET X ROADS", "CHANCHALGUDA", "CHANDA NAGAR", "CHANDRAYANAGUTTA", "CHANDRAYANAGUTTA X ROADS", "CHARMINAR", "CHENGICHERLA", "CHENGICHERLA DEPOT", "CHENGICHERLA X ROADS", "CHERIYAL", "CHERIYAL X ROADS", "CHERLAPALLY", "CHIKKADPALLY", "CHILKALGUDA", "CHILKALGUDA X ROADS", "CHILKANAGAR", "CHILKOOR", "CHILKOOR BALAJI TEMPLE", "CHINTAL", "CHINTALAKUNTA", "CHINTALAKUNTA CHECKPOST", "CHINTAL X ROADS", "CISF MAIN GATE", "CITY COLLEGE", "CLOCK TOWER", "CMR COLLEGE", "CRPF", "CYBER TOWERS", "DABIRPURA", "DAIRY FARM", "DAMMAIGUDA", "DANAMA JHOPDI", "DARUL SHIFA", "DBR MILLS", "DELHI TUBES", "DEVARAYAMJAL", "DUNDIGAL", "DHOOLPET", "DHULAPALLY X ROADS", "DILSHUKNAGAR", "DRDO", "DRDL", "DRK COLLEGE", "DURGA NAGAR", "EAST ANANDH BAGH", "EAST MARREDPALLY", "EC NAGAR", "ECIL X ROADS", "EDULABAD", "ENGINE BOWLI", "ERRAGADDA", "ERRAGADDA METRO", "ESI HOSPITAL", "ESI METRO STATION", "FALAKNUMA", "FAROOQ NAGAR", "FATHEH NAGAR", "FEROZGUDA", "FEVER HOSPITAL", "GACHIBOWLI", "GANDIMAISAMMA", "GAJULARAMARAM", "GAJULARAMARAM X ROADS", "GANDIPET", "GANDHI BHAVAN", "GANDHI HOSPITAL", "GANDHI NAGAR", "GANESH NAGAR", "GANESH TEMPLE", "GANGAPUTRA COLONY", "GANGARAM", "GAYATHRI NAGAR", "GHATKESAR", "GK COLONY", "GOLCONDA", "GOLCONA X ROADS", "GOLNAKA", "GOUTHAM NAGAR", "GOWLI DHODDI", "GOWLIGUDA", "GOWRELLI", "GREENLANDS", "GREENPARK COLONY", "GUDDI MALKAPUR", "GUNDLA POCHAMPALLY", "GURRAMGUDA", "HABSIGUDA", "HAKIMPET", "HANUMAN TEMPLE", "HASAN NAGAR", "HASTHINAPURAM", "HASTHINAPURAM NORTH", "HASTHINAPURAM SOUTH", "HAYATH NAGAR", "HAYATH NAGAR DEPOT", "HB COLONY", "HCL X ROADS", "HCL COLONY", "HEMA NAGAR", "HERITAGE", "HILL COUNTRY", "HIMAYATH NAGAR", "HIMAYATH SAGAR", "HITECH - CITY ", "HITECH THEATER", "HITEX KAMAN", "HMT NAGAR ", "HUDA", "HYDERGUDA X ROADS", "HYDER NAGAR", "HYD PUBLIC SCHOOL", "IBRAHIMPATNAM", "ICRISAT", "IDPL", "IG COLONY", "IG STATUE", "IMAGE HOSPITALS", "INDIRA NAGAR", "INDIRA NAGAR COLONY", "INJAPUR", "INJAPUR CHERUVU", "IRRUM MANZIL", "ISNAPUR", "JAGATHGIRI GUTTA", "JAIPURI COLONY", "JAMAI OSMANIA", "JAMES STREET", "JANA PRIYA", "JAYABHERI", "JAYPURI COLONY", "JUBLIEE BUS STATION", "JUBLIEE HILLS", "JUBLIEE HILLS CHECK POST", "JUMERATH BAZAR", "JEEDIMETLA", "JEEDIMETLA SUB STATION", "JEEDIMETLA VILLAGE", "JIYAGUDA", "JN POLYTECHNIC COLLEGE", "JNTU COLLEGE", "JODIMETLA", "JP DARGAH", "JYOTHI NAGAR", "KACHEGUDA", "KACHEGUDA STATION", "KACHEGUDA TOURIST", "KACHEGUDA X ROADS", "KALI MANDIR", "KAMINENI", "KAMLA NAGAR", "KANDLAKOYA", "KARMANGHAT", "KAVADIGUDA", "KEESARA", "KENNEDY", "KESHAVAGIRI", "KHAIRATHABAD", "KHARKHANA", "KOHEDA", "KOHEDA X ROADS", "KOKAPETA", "KOMPALLY", "KONDAPUR", "KOTHAPETA", "KOTI BUS STATION", "KOTI MEDICAL COLLEGE", "KOTI WOMENS COLLEGE", "KOUSALYA COLONY", "KPHB COLONY", "KRISHHNA KANTH PARK", "KRISHNA NAGAR", "KRISHNA NAGAR", "KRUPA COMPLEX", "KUKATPALLY", "KUKATPALLY GOVT DEGREE COLLEGE", "KUNDANPALLY", "KUSHAIGUDA", "KUSHAIGUDA DEPOT", "LADIES HOSTEL", "LAKDI KA PUL", "LALAGUDA", "RAM THEATER - LALAPET", "LALAPET", "LAL BAZAR", "LAL BUNGLOW", "LAL DARWAJA", "LAL DARWAJA X ROADS", "LAL DHABA", "LAD BAZAR", "LANGER HOUSE", "LAXMI NAGAR", "LB NAGAR", "LB STADIUM", "LINGAMPALLY", "LOTHKUNTA", "LOYALA ACADEMY", "LV PRASAD", "MADINA", "MADINA GUDA", "MAHAVEER", "MAHESHWARAM", "MAILARDEV PALLY", "MALAKPET", "MALAKPET NEW BAZAR", "MALAKPET CHERMAS", "MALKAJGIRI", "MALLAPUR", "MALLAREDDY COLLEGE", "MALLEPALLY", "MANDA MALLAMMA", "MANDAL OFFICE", "MANNEGUDA X ROADS", "MANGALPALLY", "MANIKONDA", "MANIKESHWARI NAGAR", "MASAB TANK", "MASAB TANK NMDC", "MAZHER ROAD", "MB DARGAH", "MEDCHAL", "MEDCHAL CHECK POST", "MEDCHAL IDA", "MEDI CITY", "MEDIPALLY", "MEERPET", "MEHDIPATNAM", "METTUGUDA", "MG BUS STATION", "MIDHANI", "MIR ALAM TANK", "MIRZALGUDA", "MIYAPUR", "MIYAPUR DEPOT", "MIYAPUR METRO STATION", "MIYAPUR X ROADS", "MJ MARKET", "MMR GARDENS", "MOHAN NAGAR", "MOINABAD", "MOOSAPET", "MOOSARAMBAGH", "MOTHER TERESA STATUE", "MOULA ALI", "MUSHEERABAD", "MYTHRIVANAM", "NACHARAM ESI", "NACHARAM VILLAGE", "NACHARAM X ROADS", "NADERGUL", "NAGARAM", "NAGARJUNA COLONY", "NAGOLE", "NAGOLE METRO STATION", "NAGOLE X ROADS", "NALGONDA X ROADS", "NALLAKUNTA", "NAMALAGUNDU", "NAMPALLY", "NANAKRAM GUDA", "NANAL NAGAR", "NARAPALLY", "NARAYANAGUDA", "NARSINGI", "NAYAPUL", "NCL BALAJI", "NCL NORTH", "NEREDMET", "NEREDMET X ROADS", "NEW BOWENPALLY", "NEW BRIDGE", "NEW GANGA NAGAR", "NEW NAGOLE", "NFC X ROADS", "NGO'S COLONY", "NGRI", "NIMS HOSPITAL", "NIMS NEW GATE", "NIZAM COLLEGE", "NIZAMPET", "NIZAMPET X ROADS", "NOMA", "NOORIE PAN SHOP", "NORTH KAMALA NAGAR", "NTR STADIUM", "NUTHANAKAL", "OLD ALWAL ZPHS", "OLD BOWENPALLY", "OLD SAFILGUDA", "OMKAR NAGAR", "ORR JUNCTION", "OSMANGUNJ", "OSMANIA HOSPITAL", "OWAISI HOSPITAL", "PADMA RAO NAGAR", "PADMASHALI COLONY", "PADMAVATHI COLONY", "PAISALA BANDA", "PALLECHERUVU", "PANAMA", "PANJAGUTTA", "PANJAGUTTA CIRCLE", "PARADE GROUNDS METRO STATION", "PARADISE", "PATANCHERUVU", "PATNY", "PEDHA AMBERPET", "PEDHAMMA GUDI", "PENSION OFFICE", "PEERJADIGUDA", "PEERJADIGUDA KAMAN", "PETLA BURJ", "POLICE ACADEMY", "POLICE LINES", "POOL BAGH", "PRAGATHI NAGAR", "PRAGA TOOLS", "PRAKASH NAGAR", "PRASHANTH NAGAR", "PRISTAGE PARK", "P & T COLONY", "PUBLIC GARDEN", "PURANAPUL", "PURANAPUL OUTPOST", "PURANI HAVELI", "PV JUNCTION", "QUTHBULLAHPUR", "QUTHBULLAHPUR ZPHS", "RADHIKA THEATER", "RAGANNAGUDA", "RAGHAVENDRA NAGAR", "RAIDURGAM", "RAILWAY DEGREE COLLEGE", "RAJA DELUXE", "RAJENDRA NAGAR", "RAJIV GANDHI NAGAR", "RAJIV GRUHAKALPA", "RAM NAGAR", "RAM NAGAR - ALWAL", "RAM NAGAR E-SEVA", "RAM NAGAR GUNDU", "RAMOJI FILM CITY", "RAM THEATER(LALAPET)", "RAMACHADRAPURAM", "RAMAKRISHNA MATT", "RAMANTHAPUR", "RAMANTHAPUR PUBLIC SCHOOL", "RAMANTHAPUR TV STUDIO", "RAMANTHAPUR CHURCH", "RAMDEV GUDA", "RAM KOTI X ROADS", "RAMPALLY", "RAMPALLY X ROADS", "RANIGUNJ", "RASOOLPURA", "RAVIRYAL", "RC PURAM", "RETHIBOWLI", "RETHIFILE BUS STATION", "RGI STADIUM ROAD", "RG COLONY", "RING ROAD", "RISALA BAZAR", "RK NAGAR", "RK PURAM", "RN REDDY", "RTC COLONY", "RTC X ROADS", "RUKMINIPURAM", "SAFILGUDA", "SAGAR COMPLEX", "SAGAR RING ROAD", "SAIBAD X ROADS", "SAIDABAD", "SAI NAGAR COLONY", "SAINATHPURAM", "SAINIKPURI", "SALARJUNG MUSEUM", "SANATH NAGAR", "SANGEETH", "SANGHI NAGAR", "SANGHI TEMPLE", "SANJAY NAGAR", "SANTHOSHIMA COLONY", "SANTHOSH NAGAR", "SAROORNAGAR", "SAROJINI DEVI EYE HOSPITAL", "SATYAM THEATER X ROADS", "SBI COLONY", "SD ROAD", "SECRETARIAT", "SECUNDERABAD", "SECUNDERABAD", "SECUNDERABAD", "SECUNDERABAD", "SECUNDERABAD", "SERI LINGAMPALLY", "SHADAN COLLEGE", "SHAH ALI BANDA", "SHAHPUR NAGAR", "SHAHPUR NAGAR RYTHU BAZAR", "SHAIKPET", "SHAKTHI SAI NAGAR", "SHAMIRPET", "SHAMSHABAD", "SHANKARMUTT", "SHANTHI NAGAR", "SHARADHA", "SHARADHA NAGAR", "SHARAN NAGAR", "SHERIGUDA", "SHESHMALAL", "SHIVAM", "SHIVA NAGAR", "SHIVARAMPALLY", "SHIVARAMPALLY RAILWAY STATION", "SHOBANA", "SHUSHMA TALKIES", "SHYAMLAL", "SIDHARTHA NAGAR", "SIRIPURAM COLONY", "SITAFALMANDI", "SLI POWER ENGINES", "SNEHAPURI COLONY", "SOMAJIGUDA", "SOMAJIGUDA RTA", "SRI INDU ENGINEERING COLLEGE", "SRI RAM NAGAR COLONY", "SP NAGAR", "SR NAGAR", "STATE HOME", "SUBASH NAGAR", "SUBHADRA NAGAR", "SUCHITRA", "SULTHAN BAZAR", "SUMITRA NAGAR", "SURVEY OF INDIA", "SWAPNALOK COMPLEX", "SYNDICATE BANK", "TADBAN", "TARBUND", "TARNAKA", "TARNAKA METRO STATION", "TEJASWI NAGAR", "TELEPHONE BHAVAN", "TIRUMALAGIRI", "TIRUMALAGIRI X ROADS", "THIMMAIPALLY", "THREE TEMPLES", "THUMKUNTA", "TILAK NAGAR", "TRR COLLEGE", "TKR COLLEGE", "TKR KAMAN", "TOLI CHOWKI", "TUKARAM GATE", "TURAB NAGAR", "TURKAPALLY", "TURKA YAMJAL", "UPPAL", "UPPAL X ROADS", "UPPAL DEPOT", "UPPAL MODERN BAKERY", "UPPAL RING ROAD", "UPPARIGUDA X ROADS", "UPPERIPALLY", "UPPERIPALLY X ROADS", "UPPUGUDA", "UTTAM NAGAR", "VANASTHALIPURAM", "VANI NAGAR", "VASUNDARA COLLEGE", "VAYUPURI", "VENGAL RAO NAGAR", "VENKATAGIRI", "VIDYA NAGAR", "VIGNAN JYOTHI COLLEGE", "VIKAS NAGAR", "VIKRAMPURI", "VINAYAK NAGAR", "VINAYAK NAGAR GATE", "VISHNU THEATER", "VST", "WARISGUDA", "WESLEY COLLEGE", "WEST MARREDPALLY", "WEST GANDHI NAGAR", "WHITE HOUSE", "WS COLONY", "YAKUTHPURA", "YAPRAL", "Y JUNCTION", "YMCA", "YOUSUFGUDA", "YOUSUFGUDA CHECK POST", "YUMNAPURI COLONY", "ZOO PARK", "ZTS X ROADS"]
var SSD = []

// Common Route Arrays
var ECIL_TNK_LPT_UP = [SHD[160], "ECIL", SHD[540], SHD[355], SHD[303], SHD[230], SHD[583], SHD[208], SHD[103], SHD[609], "RPF", SHD[294], SHD[295], SHD[599], SHD[553]]
var ECIL_TNK_LPT_DN = [SHD[553], SHD[599], SHD[295], SHD[294], SHD[609], SHD[103], SHD[208], SHD[583], SHD[230], SHD[303], SHD[355], SHD[540], SHD[160]]

var ECIL_TNK_NCH_UP = [SHD[283], SHD[385], SHD[393], SHD[319], SHD[240], SHD[147], SHD[360], SHD[358], SHD[359], SHD[219], SHD[199], SHD[553]]
var ECIL_TNK_NCH_DN = [SHD[553], SHD[199], SHD[219], SHD[359], SHD[358], SHD[360], SHD[147], SHD[240], SHD[319], SHD[393], SHD[385], SHD[283]]

var ECIL_NOMA_UP = [SHD[160], "ECIL COMPANY", SHD[209], SHD[36], SHD[385], SHD[393]]
var ECIL_NOMA_DN = [SHD[393], SHD[385], SHD[36], SHD[209], "ECIL COMPANY", SHD[160]]

var LPT_MTG_UP = [SHD[295], SHD[518], SHD[394], SHD[293], SHD[382], SHD[339]]
var LPT_MTG_DN = [SHD[339], SHD[382], SHD[293], SHD[394], SHD[518], SHD[295]]

var SC_TNK_UP = [SHD[503], SHD[127], SHD[12], SHD[339], SHD[553]]
var SC_TNK_DN = [SHD[553], SHD[444], SHD[339], SHD[12], SHD[491], SHD[503]]


// Global Variables
var stack = 0;
var refInput;
var refInput2;
// For Opening the Menu
// alert(SHD.length)

function open_Menu() {
    var a = document.getElementById("mobile_menu");
    var b = document.querySelector(".bottom");
    var c = document.querySelector(".top");
    var d = document.querySelector(".middle");

    if (a.style.height === "0px") {
        a.style.transitionDuration = "0.5s";
        a.style.height = "200px";
        b.style.transform = "rotate(-45deg)";
        c.style.transform = "rotate(45deg)";
        d.style.opacity = "0";
    } else {
        a.style.height = "0px";
        b.style.transform = "rotate(0deg)";
        c.style.transform = "rotate(0deg)";
        d.style.opacity = "1";
    }
}

// For Accessing the Options

function accessFeature(featureName) {
    // alert(featureName);
    var homePage = document.getElementById("homePage");
    var subMenuPageHeading = document.getElementById("subMenuPageHeading");
    var subHeading = document.getElementById("subHeading");
    var input1 = document.getElementById("input1");
    var input1Label = document.getElementById("input1Label");
    var input2 = document.getElementById("input2");
    var input2Label = document.getElementById("input2Label");
    var arrayDataList = []

    homePage.style.display = "none";

    if (featureName === "Route Details") {
        subMenuPageHeading.innerHTML = "Route Details";
        subMenuPage.style.display = "flex";
        input1Label.innerHTML = "Route Number";
        input1.setAttribute("placeholder", "Enter Route Number");
        arrayDataList = ["1", "2", "3K", "9X", "10H", "17H", "29B", "49M", "218", "219"];
        input1.value = "";
        input2.style.display = "none";
        input2Label.style.display = "none";
    }
    else if (featureName === "Bus Stop") {
        subMenuPageHeading.innerHTML = "Bus Stop Details";
        subMenuPage.style.display = "flex";
        input1Label.innerHTML = "Bus Stop Name";
        input1.setAttribute("placeholder", "Enter Bus Stop Name");
        arrayDataList = SHD;
        input1.value = "";
        input2.style.display = "none";
        input2Label.style.display = "none";
    }
    else if (featureName === "From - To") {
        subMenuPageHeading.innerHTML = "From - To";
        subMenuPage.style.display = "flex";
        arrayDataList = SHD;
        input1Label.innerHTML = "From";
        input2Label.innerHTML = "To";
        input1.setAttribute("placeholder", "From Where?");
        input2.setAttribute("placeholder", "To Where?");
        input2.style.display = "block";
        input2Label.style.display = "block";
        input1.value = "";
        input2.value = "";
    }
    else if (featureName === "Alternate Route") {
        subMenuPageHeading.innerHTML = "Alternate Route";
        subMenuPage.style.display = "flex";
        arrayDataList = SHD;
        input1Label.innerHTML = "From";
        input2Label.innerHTML = "To";
        input1.setAttribute("placeholder", "From Where?");
        input2.setAttribute("placeholder", "To Where?");
        input2.style.display = "block";
        input2Label.style.display = "block";
        input1.value = "";
        input2.value = "";
    }
    else if (featureName === "Fare Details") {
        subMenuPageHeading.innerHTML = "Fare Details";
        subMenuPage.style.display = "flex";
        arrayDataList = SHD;
        input1Label.innerHTML = "From";
        input2Label.innerHTML = "To";
        input1.setAttribute("placeholder", "From Where?");
        input2.setAttribute("placeholder", "To Where?");
        input2.style.display = "block";
        input2Label.style.display = "block";
        input1.value = "";
        input2.value = "";
    }
    else if (featureName === "Tourism") {
        alert("This Option will Unlocks Soon! Kindly try after sometime");
        window.location.reload();
    }

    var string = "";
    for (i = 0; i < arrayDataList.length; i++) {
        string = string + "<option>" + arrayDataList[i] + "</option>";
    }
    string = string + "<datalist></datalist>";
    document.getElementById("inputsDataList").innerHTML = string;
}

// For Getting the Result

function getResult() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var referance = document.getElementById("subMenuPageHeading");
    var subMenuPageUp_routeHeading = document.getElementById("subMenuPageUp_routeHeading");
    var subMenuPageDown_routeHeading = document.getElementById("subMenuPageDown_routeHeading");
    var subMenuPageUp = document.getElementById("subMenuPageUp");
    var subMenuPageDown = document.getElementById("subMenuPageDown");
    var subMenuPageUp_UL = document.getElementById("subMenuPageUp_UL");
    var subMenuPageDown_UL = document.getElementById("subMenuPageDown_UL");
    var routeDetailsNoteUpData = document.getElementById("routeDetailsNoteUpData");
    var routeDetailsNoteDownData = document.getElementById("routeDetailsNoteDownData");
    var routeDetailsNoteUp = document.getElementById("routeDetailsNoteUp");
    var routeDetailsNoteDown = document.getElementById("routeDetailsNoteDown");
    var btnExpandUp = document.getElementById("btnExpandUp");
    var btnExpandDown = document.getElementById("btnExpandDown");
    var subMenuPageBSD = document.getElementById("subMenuPageBSD");
    var subMenuPageBSD_routeHeading = document.getElementById("subMenuPageBSD_routeHeading");
    var subMenuPageALT = document.getElementById("subMenuPageALT");

    var subMenuPageALT_routeHeading = document.getElementById("subMenuPageALT_routeHeading");
    var structureALT1 = document.getElementById("structureALT1");
    var structureALT2 = document.getElementById("structureALT2");
    var art_row_1_1 = document.getElementById("art_row_1_1");
    var art_row_1_2 = document.getElementById("art_row_1_2");
    var art_row_1_3 = document.getElementById("art_row_1_3");
    var art_row_2_1 = document.getElementById("art_row_2_1");
    var art_row_2_2 = document.getElementById("art_row_2_2");
    var art_row_2_3 = document.getElementById("art_row_2_3");

    var subMenuPageFD = document.getElementById("subMenuPageFD");
    var subMenuPageFD_routeHeading = document.getElementById("subMenuPageFD_routeHeading");
    var note = document.getElementById("note");
    var noteText = document.getElementById("noteText");
    var FD_co = document.getElementById("FD_co");
    var FD_me = document.getElementById("FD_me");

    var arraysrc = ["SECUNDERABAD", "LALAPET", "AMEERPET", "NAGOLE", "TARNAKA", "MEHDIPATNAM", "IBRAHIMPATNAM", "MIYAPUR", "ECIL X ROADS", "MYTHRIVANAM"];
    var arraydst = ["SECUNDERABAD", "LALAPET", "AMEERPET", "NAGOLE", "TARNAKA", "MEHDIPATNAM", "IBRAHIMPATNAM", "MIYAPUR", "ECIL X ROADS", "MYTHRIVANAM"];



    var arrayfaresCO = [
        [0, 20, 20, 20, 15, 30, 35, 35, 30, 20],
        [20, 0, 40, 25, 10, 50, 45, 55, 20, 40],
        [20, 40, 0, 40, 35, 25, 45, 30, 50, 10],
        [20, 25, 40, 0, 15, 50, 30, 50, 30, 40],
        [15, 10, 35, 15, 0, 40, 35, 50, 20, 35],
        [30, 50, 25, 50, 40, 0, 45, 40, 50, 25],
        [35, 45, 45, 30, 35, 45, 0, 60, 55, 45],
        [35, 55, 30, 50, 50, 40, 60, 0, 50, 30],
        [30, 20, 50, 30, 20, 50, 55, 50, 0, 50],
        [20, 40, 10, 40, 35, 25, 45, 30, 50, 0]
    ];
    var arrayfaresME = [
        [0, 20, 20, 20, 15, 30, 35, 35, 30, 20],
        [20, 0, 40, 25, 10, 50, 45, 55, 20, 40],
        [20, 40, 0, 40, 35, 25, 45, 30, 50, 10],
        [20, 25, 40, 0, 15, 50, 30, 50, 30, 40],
        [15, 10, 35, 15, 0, 40, 35, 50, 20, 35],
        [30, 50, 25, 50, 40, 0, 45, 40, 50, 25],
        [35, 45, 45, 30, 35, 45, 0, 60, 55, 45],
        [35, 55, 30, 50, 50, 40, 60, 0, 50, 30],
        [30, 20, 50, 30, 20, 50, 55, 50, 0, 50],
        [20, 40, 10, 40, 35, 25, 45, 30, 50, 0]
    ];


    if (referance.innerHTML === "Route Details") {
        switch (input1.value) {
            case "1":
                subMenuPageUp_routeHeading.innerHTML = "1 - SECUNDERABAD - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "1 - AFZALGUNJ - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1/25S":
                subMenuPageUp_routeHeading.innerHTML = "1/25S - SUCHITRA - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "1/25S - AFZALGUNJ - SUCHITRA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1B":
                subMenuPageUp_routeHeading.innerHTML = "1B - SECUNDERABAD - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "1B - AFZALGUNJ - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1C":
                subMenuPageUp_routeHeading.innerHTML = "1C - SECUNDERABAD - CBS";
                subMenuPageDown_routeHeading.innerHTML = "1C - CBS - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1D":
                subMenuPageUp_routeHeading.innerHTML = "1D - SECUNDERABAD - DILSHUKNAGAR";
                subMenuPageDown_routeHeading.innerHTML = "1D - DILSHUKNAGAR - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1D/229":
                subMenuPageUp_routeHeading.innerHTML = "1D/229 - MEDCHAL - DILSHUKNAGAR";
                subMenuPageDown_routeHeading.innerHTML = "1D/229 - DILSHUKNAGAR - MEDCHAL";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1D/299":
                subMenuPageUp_routeHeading.innerHTML = "1D/299 - SECUNDERABAD - HAYATH NAGAR";
                subMenuPageDown_routeHeading.innerHTML = "1D/299 - HAYATH NAGAR - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1H/D":
                subMenuPageUp_routeHeading.innerHTML = "1H/D - SECUNDERABAD - UNDEF";
                subMenuPageDown_routeHeading.innerHTML = "1H/D - UNDEF - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1J":
                subMenuPageUp_routeHeading.innerHTML = "1J - SECUNDERABAD - JIYAGUDA";
                subMenuPageDown_routeHeading.innerHTML = "1J - JIYAGUDA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1K":
                subMenuPageUp_routeHeading.innerHTML = "1K - SECUNDERABAD - KACHEGUDA DEPOT";
                subMenuPageDown_routeHeading.innerHTML = "1K - KACHEGUDA DEPOT - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1L":
                subMenuPageUp_routeHeading.innerHTML = "1L - SECUNDERABAD - LB NAGAR";
                subMenuPageDown_routeHeading.innerHTML = "1L - LB NAGAR - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1M/D":
                subMenuPageUp_routeHeading.innerHTML = "1M/D - SECUNDERABAD - NEW MARUTHI NAGAR";
                subMenuPageDown_routeHeading.innerHTML = "1M/D - NEW MARUTHI NAGAR - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1P":
                subMenuPageUp_routeHeading.innerHTML = "1P - SECUNDERABAD - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "1P - AFZALGUNJ - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1P/25S":
                subMenuPageUp_routeHeading.innerHTML = "1P/25S - SECUNDERABAD - SUCHITRA";
                subMenuPageDown_routeHeading.innerHTML = "1P/25S - SUCHITRA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1V":
                subMenuPageUp_routeHeading.innerHTML = "1V - SECUNDERABAD - NGO'S COLONY";
                subMenuPageDown_routeHeading.innerHTML = "1V - NGO'S COLONY - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1X":
                subMenuPageUp_routeHeading.innerHTML = "1X - SECUNDERABAD - KACHEGUDA STN";
                subMenuPageDown_routeHeading.innerHTML = "1X - KACHEGUDA STN - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1Z":
                subMenuPageUp_routeHeading.innerHTML = "1Z - SECUNDERABAD - ARAMGHAR";
                subMenuPageDown_routeHeading.innerHTML = "1Z - ARAMGHAR - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "1Z/229":
                subMenuPageUp_routeHeading.innerHTML = "1Z/229 - MEDCHAL - ARAMGHAR";
                subMenuPageDown_routeHeading.innerHTML = "1Z/229 - ARAMGHAR - MEDCHAL";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "2":
                subMenuPageUp_routeHeading.innerHTML = "2 - SECUNDERABAD - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "2 - AFZALGUNJ - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "2/25S":
                subMenuPageUp_routeHeading.innerHTML = "2/25S - SUCHITRA - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "2/25S - AFZALGUNJ - SUCHITRA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "2C":
                subMenuPageUp_routeHeading.innerHTML = "2C - SECUNDERABAD - BARKAS";
                subMenuPageDown_routeHeading.innerHTML = "2C - BARKAS - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "2J":
                subMenuPageUp_routeHeading.innerHTML = "2J - SECUNDERABAD - JIYAGUDA";
                subMenuPageDown_routeHeading.innerHTML = "2J - JIYAGUDA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "2K":
                subMenuPageUp_routeHeading.innerHTML = "2K - SECUNDERABAD - KACHEGUDA DEPOT";
                subMenuPageDown_routeHeading.innerHTML = "2K - KACHEGUDA DEPOT - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "2U":
                subMenuPageUp_routeHeading.innerHTML = "2U - SECUNDERABAD - UPPUGUDA";
                subMenuPageDown_routeHeading.innerHTML = "2U - UPPUGUDA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "2Z":
                subMenuPageUp_routeHeading.innerHTML = "2Z - SECUNDERABAD - SRI SAI RAM NAGAR COLONY";
                subMenuPageDown_routeHeading.innerHTML = "2Z - SRI SAI RAM NAGAR COLONY - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "3C":
                subMenuPageUp_routeHeading.innerHTML = "3C - KUSHAIGUDA - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "3C - AFZALGUNJ - KUSHAIGUDA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;

            case "3D":
                subMenuPageUp_routeHeading.innerHTML = "3D - AMBEDKAR NAGAR - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "3D - AFZALGUNJ - AMBEDKAR NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;

            case "3DN":
                subMenuPageUp_routeHeading.innerHTML = "3DN - AMBEDKAR NAGAR - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "3DN - AFZALGUNJ - AMBEDKAR NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;

            case "3H":
                subMenuPageUp_routeHeading.innerHTML = "3H - KUSHAIGUDA - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "3H - AFZALGUNJ - KUSHAIGUDA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;

            case "3HN":
                subMenuPageUp_routeHeading.innerHTML = "3HN - KUSHAIGUDA - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "3HN - AFZALGUNJ - KUSHAIGUDA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;

            case "3K":
                subMenuPageUp_routeHeading.innerHTML = "3K - KUSHAIGUDA - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "3K - AFZALGUNJ - KUSHAIGUDA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;


            case "3K/92A":
                subMenuPageUp_routeHeading.innerHTML = "3K/92A - KUSHAIGUDA - ARAMGHAR";
                subMenuPageDown_routeHeading.innerHTML = "3K/92A - ARAMGHAR - KUSHAIGUDA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;


            case "3K/102B":
                subMenuPageUp_routeHeading.innerHTML = "3K/102B - ECIL X ROADS - BAGANDGPET";
                subMenuPageDown_routeHeading.innerHTML = "3K/102B - BAGANDGPET - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;


            case "3K/242":
                subMenuPageUp_routeHeading.innerHTML = "3K/242 - KEESARAGUTTA - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "3K/242 - AFZALGUNJ - KEESARAGUTTA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;


            case "3K/252":
                subMenuPageUp_routeHeading.innerHTML = "3K/252 - KUSHAIGUDA - RGI AIRPORT";
                subMenuPageDown_routeHeading.innerHTML = "3K/252 - RGI AIRPORT - KUSHAIGUDA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;


            case "3K/281":
                subMenuPageUp_routeHeading.innerHTML = "3K/281 - GHATKESAR - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "3K/281 - AFZALGUNJ - GHATKESAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;

            case "3KN":
                subMenuPageUp_routeHeading.innerHTML = "3KN - KUSHAIGUDA - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "3KN - AFZALGUNJ - KUSHAIGUDA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;


            case "3KN/102B":
                subMenuPageUp_routeHeading.innerHTML = "3KN/102B - KUSHAIGUDA - BADANGPET";
                subMenuPageDown_routeHeading.innerHTML = "3KN/102B - BADANGPET - KUSHAIGUDA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;

            case "3KJ":
                subMenuPageUp_routeHeading.innerHTML = "3KJ - KUSHAIGUDA - JIYAGUDA KHT";
                subMenuPageDown_routeHeading.innerHTML = "3KJ - JIYAGUDA KHT - KUSHAIGUDA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;

            case "3L":
                subMenuPageUp_routeHeading.innerHTML = "3L - PRASHANTH NAGAR - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "3L - AFZALGUNJ - PRASHANTH NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;

            case "3M":
                subMenuPageUp_routeHeading.innerHTML = "3M - AS RAO NAGAR - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "3M - AFZALGUNJ - AS RAO NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;

            case "3N":
                subMenuPageUp_routeHeading.innerHTML = "3N - HEMA NAGAR - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "3N - AFZALGUNJ - HEMA NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;

            case "3N/203A":
                subMenuPageUp_routeHeading.innerHTML = "3N - BDL - NADERGUL";
                subMenuPageDown_routeHeading.innerHTML = "3N - NADERGUL - BDL";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;

            case "3T":
                subMenuPageUp_routeHeading.innerHTML = "3T - TARNAKA - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "3T - AFZALGUNJ - TARNAKA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;

            case "3Y":
                subMenuPageUp_routeHeading.innerHTML = "3Y - BJR NAGAR - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "3Y - AFZALGUNJ - BJR NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "Some times his Route may Starts from ECIL X Roads and ends its trip at Koti or CBS. Kindly check the Destination of the bus on Route board while Boarding this Bus.";
                routeDetailsNoteDownData.innerHTML = "Some times his Route may Starts from Koti or CBS and ends its trip at ECIL X Roads. Kindly check the Destination of the bus on Route board while Boarding this Bus";
                break;


            case "5K":
                subMenuPageUp_routeHeading.innerHTML = "5K - SECUNDERABAD - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "5K - MEHDIPATNAM - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "5K/16A":
                subMenuPageUp_routeHeading.innerHTML = "5K/16A - ECIL X ROADS - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "5K/16A - MEHDIPATNAM - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "5K/16C":
                subMenuPageUp_routeHeading.innerHTML = "5K/16C - ECIL X ROADS - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "5K/16C - MEHDIPATNAM - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "5K/16CD":
                subMenuPageUp_routeHeading.innerHTML = "5K/16CD - AMBEDKAR NAGAR - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "5K/16CD - MEHDIPATNAM - AMBEDKAR NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "5K/16D":
                subMenuPageUp_routeHeading.innerHTML = "5K/16D - AMBEDKAR NAGAR - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "5K/16D - MEHDIPATNAM - AMBEDKAR NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;


            case "5K/92A":
                subMenuPageUp_routeHeading.innerHTML = "5K/92A - SECUNDERABAD - ARAMGHAR";
                subMenuPageDown_routeHeading.innerHTML = "5K/92A - ARAMGHAR - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "5K/188":
                subMenuPageUp_routeHeading.innerHTML = "5K/188 - SECUNDERABAD - KALI MANDIR";
                subMenuPageDown_routeHeading.innerHTML = "5K/188 - KALI MANDIR - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "5K/229":
                subMenuPageUp_routeHeading.innerHTML = "5K/229 - MEDCHAL - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "5K/229 - MEHDIPATNAM - MEDCHAL";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "5M":
                subMenuPageUp_routeHeading.innerHTML = "5M - SECUNDERABAD - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "5M - MEHDIPATNAM - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";


                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "6KR":
                subMenuPageUp_routeHeading.innerHTML = "6KR - RAM NAGAR - KALI MANDIR";
                subMenuPageDown_routeHeading.innerHTML = "6KR - KALI MANDIR - RAM NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "7Z":
                subMenuPageUp_routeHeading.innerHTML = "7Z - SECUNDERABAD - ARAMGHAR";
                subMenuPageDown_routeHeading.innerHTML = "7Z - ARAMGHAR - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "8A":
                subMenuPageUp_routeHeading.innerHTML = "8A - SECUNDERABAD - CHANDRAYANGUTTA";
                subMenuPageDown_routeHeading.innerHTML = "8A - CHANDRAYANGUTTA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;


            case "8U/A":
                subMenuPageUp_routeHeading.innerHTML = "8U/A - SECUNDERABAD - UPPUGUDA";
                subMenuPageDown_routeHeading.innerHTML = "8U/A - UPPUGUDA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "8C":
                subMenuPageUp_routeHeading.innerHTML = "8C - SECUNDERABAD - CHANDRAYANGUTTA";
                subMenuPageDown_routeHeading.innerHTML = "8C - CHANDRAYANGUTTA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "9F":
                subMenuPageUp_routeHeading.innerHTML = "9F - AFZALGUNJ - BORABANDA";
                subMenuPageDown_routeHeading.innerHTML = "9F - BORABANDA - AFZALGUNJ";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;


            case "9K":
                subMenuPageUp_routeHeading.innerHTML = "9K - AFZALGUNJ - JEEDIMETLA";
                subMenuPageDown_routeHeading.innerHTML = "9K - JEEDIMETLA - AFZALGUNJ";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "9K/272G":
                subMenuPageUp_routeHeading.innerHTML = "9K/272G - AFZALGUNJ - GANDIMAISAMMA";
                subMenuPageDown_routeHeading.innerHTML = "9K/272G - GANDIMAISAMMA - AFZALGUNJ";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "9K/230P":
                subMenuPageUp_routeHeading.innerHTML = "9K/230P - AFZALGUNJ - DUNDIGAL";
                subMenuPageDown_routeHeading.innerHTML = "9K/230P - DUNDIGAL - AFZALGUNJ";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "9X":
                subMenuPageUp_routeHeading.innerHTML = "9X - AFZALGUNJ - JEEDIMETLA";
                subMenuPageDown_routeHeading.innerHTML = "9X - JEEDIMETLA - AFZALGUNJ";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;



            case "9X/272G":
                subMenuPageUp_routeHeading.innerHTML = "9X/272G - AFZALGUNJ - GANDIMAISAMMA";
                subMenuPageDown_routeHeading.innerHTML = "9X/272G - GANDIMAISAMMA - AFZALGUNJ";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;



            case "9X/230P":
                subMenuPageUp_routeHeading.innerHTML = "9X/230P - AFZALGUNJ - DUNDIGAL";
                subMenuPageDown_routeHeading.innerHTML = "9X/230P - DUNDIGAL - AFZALGUNJ";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "9M/X":
                subMenuPageUp_routeHeading.innerHTML = "9M/X - CHARMINAR - GANDIMAISAMMA";
                subMenuPageDown_routeHeading.innerHTML = "9M/X - GANDIMAISAMMA - CHARMINAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";

                routeDetailsNoteUpData.innerHTML = "";
                routeDetailsNoteDownData.innerHTML = "";
                break;

            case "10F":
                subMenuPageUp_routeHeading.innerHTML = "10F - SECUNDERABAD - BORABANDA";
                subMenuPageDown_routeHeading.innerHTML = "10F - BORABANDA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "10H":
                subMenuPageUp_routeHeading.innerHTML = "10H - SECUNDERABAD - KONDAPUR";
                subMenuPageDown_routeHeading.innerHTML = "10H - KONDAPUR - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "10HA":
                subMenuPageUp_routeHeading.innerHTML = "10HA - SECUNDERABAD - PATANCHERUVU";
                subMenuPageDown_routeHeading.innerHTML = "10HA - PATANCHERUVU - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "10HL":
                subMenuPageUp_routeHeading.innerHTML = "10HL - SECUNDERABAD - LINGAMPALLY";
                subMenuPageDown_routeHeading.innerHTML = "10HL - LINGAMPALLY - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "10K":
                subMenuPageUp_routeHeading.innerHTML = "10K - SECUNDERABAD - KPHB COLONY";
                subMenuPageDown_routeHeading.innerHTML = "10K - KPHB COLONY - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "10KJ":
                subMenuPageUp_routeHeading.innerHTML = "10KJ - SECUNDERABAD - JAGATHGIRIGUTTA";
                subMenuPageDown_routeHeading.innerHTML = "10KJ - JAGATHGIRIGUTTA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "10KL":
                subMenuPageUp_routeHeading.innerHTML = "10KL - SECUNDERABAD - LINGAMPALLY";
                subMenuPageDown_routeHeading.innerHTML = "10KL - LINGAMPALLY - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "10KM":
                subMenuPageUp_routeHeading.innerHTML = "10KM - SECUNDERABAD - MIYAPUR";
                subMenuPageDown_routeHeading.innerHTML = "10KM - MIYAPUR - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "10KM/224G":
                subMenuPageUp_routeHeading.innerHTML = "10KM/224G - SECUNDERABAD - GANDIMAISAMMA";
                subMenuPageDown_routeHeading.innerHTML = "10KM/224G - GANDIMAISAMMA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "10W":
                subMenuPageUp_routeHeading.innerHTML = "10W - SECUNDERABAD - WAVEROCK";
                subMenuPageDown_routeHeading.innerHTML = "10W - WAVEROCK - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "10Y":
                subMenuPageUp_routeHeading.innerHTML = "10Y - SECUNDERABAD - YOUSUFGUDA";
                subMenuPageDown_routeHeading.innerHTML = "10Y - YOUSUFGUDA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "10YF":
                subMenuPageUp_routeHeading.innerHTML = "10YF - SECUNDERABAD - BORABANDA";
                subMenuPageDown_routeHeading.innerHTML = "10YF - BORABANDA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "14P":
                subMenuPageUp_routeHeading.innerHTML = "14P - SECUNDERABAD - PRASANTH NAGAR";
                subMenuPageDown_routeHeading.innerHTML = "14P - PRASANTH NAGAR - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "15D":
                subMenuPageUp_routeHeading.innerHTML = "15D - AMBEDKAR NAGAR - SECUNDERABAD";
                subMenuPageDown_routeHeading.innerHTML = "15D - SECUNDERABAD - AMBEDKAR NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "15H":
                subMenuPageUp_routeHeading.innerHTML = "15H - KUSHAIGUDA - SECUNDERABAD";
                subMenuPageDown_routeHeading.innerHTML = "15H - SECUNDERABAD - KUSHAIGUDA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "15H/242RG":
                subMenuPageUp_routeHeading.innerHTML = "15H/242RG - R.G. COLONY - SECUNDERABAD";
                subMenuPageDown_routeHeading.innerHTML = "15H/242RG - SECUNDERABAD - R.G. COLONY";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "16A":
                subMenuPageUp_routeHeading.innerHTML = "16A - ECIL X ROADS - SECUNDERABAD";
                subMenuPageDown_routeHeading.innerHTML = "16A - SECUNDERABAD - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "16A/5K":
                subMenuPageUp_routeHeading.innerHTML = "16A/5K - ECIL X ROADS - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "16A/5K - MEHDIPATNAM - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "16A/49M":
                subMenuPageUp_routeHeading.innerHTML = "16A/49M - ECIL X ROADS - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "16A/49M - MEHDIPATNAM - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "16C":
                subMenuPageUp_routeHeading.innerHTML = "16C - ECIL X ROADS - SECUNDERABAD";
                subMenuPageDown_routeHeading.innerHTML = "16C - SECUNDERABAD - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "16C/5K":
                subMenuPageUp_routeHeading.innerHTML = "16C/5K - ECIL X ROADS - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "16C/5K - MEHDIPATNAM - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "16C/49M":
                subMenuPageUp_routeHeading.innerHTML = "16C/49M - ECIL X ROADS - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "16C/49M - MEHDIPATNAM - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "16CD":
                subMenuPageUp_routeHeading.innerHTML = "16CD - AMBEDKAR NAGAR - SECUNDERABAD";
                subMenuPageDown_routeHeading.innerHTML = "16CD - SECUNDERABAD - AMBEDKAR NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "16CD/5K":
                subMenuPageUp_routeHeading.innerHTML = "16CD/5K - AMBEDKAR NAGAR - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "16CD/5K - MEHDIPATNAM - AMBEDKAR NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "16CD/49M":
                subMenuPageUp_routeHeading.innerHTML = "16CD/49M - AMBEDKAR NAGAR - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "16CD/49M - MEHDIPATNAM - AMBEDKAR NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "16D":
                subMenuPageUp_routeHeading.innerHTML = "16D - AMBEDKAR NAGAR - SECUNDERABAD";
                subMenuPageDown_routeHeading.innerHTML = "16D - SECUNDERABAD - AMBEDKAR NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "16D/5K":
                subMenuPageUp_routeHeading.innerHTML = "16D/5K - AMBEDKAR NAGAR - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "16D/5K - MEHDIPATNAM - AMBEDKAR NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "16D/49M":
                subMenuPageUp_routeHeading.innerHTML = "16D/49M - AMBEDKAR NAGAR - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "16D/49M - MEHDIPATNAM - AMBEDKAR NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "16H":
                subMenuPageUp_routeHeading.innerHTML = "16H - ECIL X ROADS - SECUNDERABAD";
                subMenuPageDown_routeHeading.innerHTML = "16H - SECUNDERABAD - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "16NY":
                subMenuPageUp_routeHeading.innerHTML = "16NY - YAPRAL - SECUNDERABAD";
                subMenuPageDown_routeHeading.innerHTML = "16NY - SECUNDERABAD - YAPRAL";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "17D":
                subMenuPageUp_routeHeading.innerHTML = "17D - AMBEDKAR NAGAR - SECUNDERABAD";
                subMenuPageDown_routeHeading.innerHTML = "17D - SECUNDERABAD - AMBEDKAR NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "17H":
                subMenuPageUp_routeHeading.innerHTML = "17H - KUSHAIGUDA - SECUNDERABAD";
                subMenuPageDown_routeHeading.innerHTML = "17H - SECUNDERABAD - KUSHAIGUDA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "17HC":
                subMenuPageUp_routeHeading.innerHTML = "17HC - CHERLAPALLY - SECUNDERABAD";
                subMenuPageDown_routeHeading.innerHTML = "17HC - SECUNDERABAD - CHERLAPALLY";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "17HN":
                subMenuPageUp_routeHeading.innerHTML = "17HN - KUSHAIGUDA - SECUNDERABAD";
                subMenuPageDown_routeHeading.innerHTML = "17HN - SECUNDERABAD - KUSHAIGUDA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "17H/29B":
                subMenuPageUp_routeHeading.innerHTML = "17H/29B - ECIL X ROADS - JEEDIMETLA";
                subMenuPageDown_routeHeading.innerHTML = "17H/29B - JEEDIMETLA - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "17H/219":
                subMenuPageUp_routeHeading.innerHTML = "17H/219 - ECIL X ROADS - PATANCHERUVU";
                subMenuPageDown_routeHeading.innerHTML = "17H/219 - PATANCHERUVU - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "17V":
                subMenuPageUp_routeHeading.innerHTML = "17V - VIKAS NAGAR - SECUNDERABAD";
                subMenuPageDown_routeHeading.innerHTML = "17V - SECUNDERABAD - VIKAS NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "18C":
                subMenuPageUp_routeHeading.innerHTML = "18C - CHENGI CHERLA - SECUNDERABAD";
                subMenuPageDown_routeHeading.innerHTML = "18C - SECUNDERABAD - CHENGI CHERLA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "18C/30":
                subMenuPageUp_routeHeading.innerHTML = "18C/30 - CHENGI CHERLA - JAGATHGIRI GUTTA";
                subMenuPageDown_routeHeading.innerHTML = "18C/30 - JAGATHGIRI GUTTA - CHENGI CHERLA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "18C/219":
                subMenuPageUp_routeHeading.innerHTML = "18C/219 - CHENGI CHERLA - PATANCHERUVU";
                subMenuPageDown_routeHeading.innerHTML = "18C/219 - PATANCHERUVU - CHENGI CHERLA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "18C/229":
                subMenuPageUp_routeHeading.innerHTML = "18C/229 - CHENGI CHERLA - MEDCHAL";
                subMenuPageDown_routeHeading.innerHTML = "18C/229 - MEDCHAL - CHENGI CHERLA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "19F":
                subMenuPageUp_routeHeading.innerHTML = "19F - MEHDIPATNAM - BORABANDA";
                subMenuPageDown_routeHeading.innerHTML = "19F - BORABANDA - MEHDIPATNAM";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "19KJ":
                subMenuPageUp_routeHeading.innerHTML = "19K - MEHDIPATNAM - JAGATHGIRI GUTTA";
                subMenuPageDown_routeHeading.innerHTML = "19K - JAGATHGIRI GUTTA - MEHDIPATNAM";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "19M":
                subMenuPageUp_routeHeading.innerHTML = "19M - MEHDIPATNAM - KPHB COLONY";
                subMenuPageDown_routeHeading.innerHTML = "19M - KPHB COLONY - MEHDIPATNAM";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "20P":
                subMenuPageUp_routeHeading.innerHTML = "20P - SECUNDERABAD - NAMPALLY";
                subMenuPageDown_routeHeading.innerHTML = "20P - NAMPALLY - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;


            case "24L/281":
                subMenuPageUp_routeHeading.innerHTML = "24L/281 - SECUNDERABAD - GHATKESAR";
                subMenuPageDown_routeHeading.innerHTML = "24L/281 - GHATKESAR - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "24S":
                subMenuPageUp_routeHeading.innerHTML = "24S - ECIL X ROADS - SUCHITRA";
                subMenuPageDown_routeHeading.innerHTML = "24S - SUCHITRA - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "24S/273":
                subMenuPageUp_routeHeading.innerHTML = "24S/273 - ECIL X ROADS - GANDIMAISAMMA";
                subMenuPageDown_routeHeading.innerHTML = "24S/273 - GANDIMAISAMMA - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "25S":
                subMenuPageUp_routeHeading.innerHTML = "25S - SECUNDERABAD - SUCHITRA";
                subMenuPageDown_routeHeading.innerHTML = "25S - SUCHITRA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "25S/229":
                subMenuPageUp_routeHeading.innerHTML = "25S/229 - SECUNDERABAD - MEDCHAL";
                subMenuPageDown_routeHeading.innerHTML = "25S/229 - MEDCHAL - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "26M":
                subMenuPageUp_routeHeading.innerHTML = "26M - SECUNDERABAD - OLD BOWENPALLY";
                subMenuPageDown_routeHeading.innerHTML = "26M - OLD BOWENPALLY - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "26N":
                subMenuPageUp_routeHeading.innerHTML = "26N - SECUNDERABAD - NEW BOWENPALLY";
                subMenuPageDown_routeHeading.innerHTML = "26N - NEW BOWENPALLY - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "29B":
                subMenuPageUp_routeHeading.innerHTML = "29B - SECUNDERABAD - JEEDIMETLA";
                subMenuPageDown_routeHeading.innerHTML = "29B - JEEDIMETLA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "29B/17H":
                subMenuPageUp_routeHeading.innerHTML = "29B/17H - JEEDIMETLA - ECIL X ROADS";
                subMenuPageDown_routeHeading.innerHTML = "29B/17H - ECIL X ROADS - JEEDIMETLA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "29B/272G":
                subMenuPageUp_routeHeading.innerHTML = "29B/272G - SECUNDERABAD - GANDIMAISAMMA";
                subMenuPageDown_routeHeading.innerHTML = "29B/272G - GANDIMAISAMMA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "29B/272I":
                subMenuPageUp_routeHeading.innerHTML = "29B/272I - SECUNDERABAD - INDIRAMMA COLONY";
                subMenuPageDown_routeHeading.innerHTML = "29B/272I - INDIRAMMA COLONY - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "30":
                subMenuPageUp_routeHeading.innerHTML = "30 - SECUNDERABAD - JAGATHGIRI GUTTA";
                subMenuPageDown_routeHeading.innerHTML = "30 - JAGATHGIRI GUTTA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "30/18C":
                subMenuPageUp_routeHeading.innerHTML = "30/18C - JAGATHGIRI GUTTA - CHENGI CHERLA";
                subMenuPageDown_routeHeading.innerHTML = "30/18C - CHENGI CHERLA - JAGATHGIRI GUTTA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "30/280":
                subMenuPageUp_routeHeading.innerHTML = "30/280 - JAGATHGIRI GUTTA - GHATKESAR";
                subMenuPageDown_routeHeading.innerHTML = "30/280 - GHATKESAR - JAGATHGIRI GUTTA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "38EX":
                subMenuPageUp_routeHeading.innerHTML = "38T - SECUNDERABAD - SECUNDERABAD";
                subMenuPageDown_routeHeading.innerHTML = "38T - SECUNDERABAD - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "38T":
                subMenuPageUp_routeHeading.innerHTML = "38T - SECUNDERABAD - TUKARAMGATE";
                subMenuPageDown_routeHeading.innerHTML = "38T - TUKARAMGATE - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "40":
                subMenuPageUp_routeHeading.innerHTML = "40 - SECUNDERABAD - KOTI";
                subMenuPageDown_routeHeading.innerHTML = "40 - KOTI - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "45F":
                subMenuPageUp_routeHeading.innerHTML = "45F - BORABANDA - KOTI";
                subMenuPageDown_routeHeading.innerHTML = "45F - KOTI - BORABANDA";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "47L":
                subMenuPageUp_routeHeading.innerHTML = "47L - SECUNDERABAD - MANIKONDA";
                subMenuPageDown_routeHeading.innerHTML = "47L - MANIKONDA - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "47L/16A":
                subMenuPageUp_routeHeading.innerHTML = "47L/16A - ECIL X ROADS - MANIKONDA";
                subMenuPageDown_routeHeading.innerHTML = "47L/16A - MANIKONDA - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;


            case "49":
                subMenuPageUp_routeHeading.innerHTML = "49 - SECUNDERABAD - NAMPALLY";
                subMenuPageDown_routeHeading.innerHTML = "49 - NAMPALLY - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "49A":
                subMenuPageUp_routeHeading.innerHTML = "49A - SECUNDERABAD - AFZALGUNJ";
                subMenuPageDown_routeHeading.innerHTML = "49A - AFZALGUNJ - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "49M":
                subMenuPageUp_routeHeading.innerHTML = "49M - SECUNDERABAD - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "49M - MEHDIPATNAM - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "49M/16A":
                subMenuPageUp_routeHeading.innerHTML = "49M/16A - ECIL X ROADS - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "49M/16A - MEHDIPATNAM - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "49M/16C":
                subMenuPageUp_routeHeading.innerHTML = "49M/16C - ECIL X ROADS - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "49M/16C - MEHDIPATNAM - ECIL X ROADS";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "49M/16CD":
                subMenuPageUp_routeHeading.innerHTML = "49M/16CD - AMBEDKAR NAGAR - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "49M/16CD - MEHDIPATNAM - AMBEDKAR NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "49M/250":
                subMenuPageUp_routeHeading.innerHTML = "49M/250 - AMBEDKAR NAGAR - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "49M/250 - MEHDIPATNAM - AMBEDKAR NAGAR";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "49M/250C":
                subMenuPageUp_routeHeading.innerHTML = "49M/250C - CHERLAPALLY - MEHDIPATNAM";
                subMenuPageDown_routeHeading.innerHTML = "49M/250C - MEHDIPATNAM - CHERLAPALLY";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "50B":
                subMenuPageUp_routeHeading.innerHTML = "50B - SECUNDERABAD - BODUPPAL";
                subMenuPageDown_routeHeading.innerHTML = "50B - BODUPPAL - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "218":
                subMenuPageUp_routeHeading.innerHTML = "218 - AFZALGUNJ - PATANCHERUVU";
                subMenuPageDown_routeHeading.innerHTML = "218 - PATANCHERUVU - AFZALGUNJ";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;

            case "219":
                subMenuPageUp_routeHeading.innerHTML = "219 - SECUNDERABAD - PATANCHERUVU";
                subMenuPageDown_routeHeading.innerHTML = "219 - PATANCHERUVU - SECUNDERABAD";

                subMenuPageUp.style.display = "flex";
                subMenuPageDown.style.display = "flex";
                break;


            default:
                alert("Sorry! We are currently Working on this Route. Kindly Try After Some Time");
                subMenuPageUp.style.display = "none";
                subMenuPageDown.style.display = "none";

        }

        subMenuPageUp.style.height = "250px";
        subMenuPageDown.style.height = "250px";
        subMenuPageUp_UL.style.filter = "blur(5px)";
        subMenuPageDown_UL.style.filter = "blur(5px)";
        routeDetailsNoteUp.style.display = "none";
        routeDetailsNoteDown.style.display = "none";
        btnExpandUp.innerHTML = "Tap to Expand";
        btnExpandDown.innerHTML = "Tap to Expand";
        btnExpandUp.style.marginTop = "-25px";
        btnExpandDown.style.marginTop = "-25px";
        populatingRouteListUp("Collapse");
        populatingRouteListDown("Collapse");
        subMenuPageBSD.style.display = "none";

    }

    else if (referance.innerHTML === "Bus Stop Details") {
        subMenuPageBSD.style.display = "flex";
        note.style.display = "flex";
        if (input1.value === "AFZALGUNJ") {
            arrayRG = []
            arrayOR = []
        }
        else if (input1.value === "LALAPET" || input1.value === "RAM THEATER(LALAPET)") {
            arrayRG = ["3K", "15H", "17D", "17H", "242"]
            arrayOR = ["3C", "3D", "3H", "3M", "3X", "3KJ", "3K/92A", "3K/102B", "3K/242", "3K/252", "3K/281", "14P", "14PX", "15D", "15IG", "15H/242RG", "17H/29B", "17H/90L", "17H/219", "242A", "242B", "242G", "242RG", "281"]
        }
        else if (input1.value === "WHITE HOUSE") {
            arrayRG = ["3K", "17D", "17H", "242"]
            arrayOR = ["3C", "3D", "3H", "3M", "3X", "3KJ", "3K/92A", "3K/102B", "3K/242", "3K/252", "3K/281", "17H/29B", "17H/90L", "17H/219", "242A", "242B", "242G", "242RG", "281"]
        }
        else if (input1.value === "SHANTHI NAGAR" || input1.value === "NOORIE PAN SHOP") {
            arrayRG = ["15H"]
            arrayOR = ["14P", "14PX", "15D", "15IG", "15H/242RG"]
        }
        else if (input1.value === "HB COLONY" || input1.value === "INDIRA NAGAR" || input1.value === "LAMXI NAGAR" || input1.value === "MOULA ALI" || input1.value === "SP NAGAR" || input1.value === "KUSHAIGUDA DEPOT") {
            arrayRG = arrayHBC_ECILRG;
            arrayOR = arrayHBC_ECILOR;
        }
        else if (input1.value === "ZTS X ROADS" || input1.value === "CARBON" || input1.value === "CARBIDE") {
            arrayRG = ["3K", "15H", "16H", "17D", "17H", "242"]
            arrayOR = ["3C", "3D", "3H", "3HN", "3M", "3X", "3KJ", "3K/92A", "3K/102B", "3K/242", "3K/252", "3K/281", "15D", "15IG", "15H/242RG", "17H/29B", "17H/90L", "17H/219", "242A", "242B", "242G", "242RG", "281"]
        }
        else if (input1.value === "ECIL X ROADS") {
            arrayRG = ["3K", "3KN", "15H", "16A", "16C", "16H", "17D", "17H", "24S", "242", "250", "250/49M", "250/219", "281"]
            arrayOR = ["3C", "3D", "3H", "3HN", "3X", "3KJ", "3K/92A", "3K/102B", "3K/242", "3K/252", "3K/281", "15D", "15IG", "15H/242RG", "17H/29B", "17H/90L", "17H/219", "242A", "242B", "242G", "242RG", "281"]
        }
        else if (input1.value === "AMEERPET" || input1.value === "MYTHRIVANAM") {
            arrayRG = ["9K", "9X", "9X/272G", "10", "10H", "10K", "10KJ", "10KM", "19K", "19KJ", "19M", "83J", "83JA", "83J/272G", "189M", "218", "218C"]
            arrayOR = ["9X/230P", "10W", "17H/10W", "189M/171M"]
        }
        else if (input1.value === "MEHDIPATNAM") {
            arrayRG = ["5K", "6KR", "19K", "19KJ", "19M", "49M", "92A", "123", "116N", "189M", "217", "250/49M", "250C/49M", "250/219", "288D", "300"]
            arrayOR = ["5M", "189M/171M"]
        }
        else if (input1.value === "MEDCHAL" || input1.value === "MEDCHAL CHECK POST") {
            arrayRG = ["229", "25S/229", "290/229", "90L/229"]
            arrayOR = ["229/279", "18C/229", "272G", "231"]
        }
        else if (input1.value === "CITY BUS STATION") {
            arrayRG = ["1", "1J", "1Z", "2", "2C", "3K", "3KN", "7Z", "9K", "9X", "9X/272G", "71A", "218"]
            arrayOR = ["1B", "1C", "2U", "2Z", "3C", "3D", "3H", "3HN", "3X", "3KJ", "3K/92A", "3K/102B", "3K/242", "3K/252", "3K/281"]
        }
        else if (input1.value === "KACHEGUDA") {
            arrayRG = ["2", "2C", "3K", "3KN", "83J", "83JA"]
            arrayOR = ["2U", "2Z", "3C", "3D", "3H", "3HN", "3X", "3KJ", "3K/92A", "3K/102B", "3K/242", "3K/252", "3K/281", "83J/272G", "217"]
        }
        else if (input1.value === "MIYAPUR") {
            arrayRG = ["158", "218", "219", "224G"]
            arrayOR = ["10KM", "19KM", "113KL", "225"]
        }
        else if (input1.value === "JEEDIMETLA") {
            arrayRG = ["9K", "9X", "9X/272G", "29B", "29B/272G", "83J", "83JA", "83J/272G", "189M", "272"]
            arrayOR = ["29B/272I", "224G/219", "230P"]
        }
        else if (input1.value === "BALANAGAR") {
            arrayRG = ["9K", "9X", "9X/272G", "29B", "29B/272G", "30", "83J", "83JA", "83J/272G", "171M", "189M/171M", "219", "272"]
            arrayOR = ["29B/272I", "224G/219", "230P"]
        }


        else {
            alert("We are Currently Working on this Bus Stop ! Kindly Try After Sometime");
            subMenuPageBSD.style.display = "none";
            note.style.display = "none";
            arrayRG = []
            arrayOR = []
        }

        subMenuPageBSD_routeHeading.innerHTML = input1.value;
        subMenuPageUp.style.display = "none";
        subMenuPageDown.style.display = "none";

        // POPULATING THE LIST
        // REGULAR ROUTES

        var stringRG = "";
        for (i = 0; i < arrayRG.length; i++) {
            stringRG = stringRG + "<li onclick='goToRouteDetails(this.innerHTML)'>" + arrayRG[i] + "</li>";
        }
        stringRG = stringRG + "<ul name='lol'> </ul>";
        document.getElementById("subMenuPageBSD_RO_UL").innerHTML = stringRG;

        // OTHER ROUTES

        var stringOR = "";
        for (j = 0; j < arrayOR.length; j++) {
            stringOR = stringOR + "<li onclick='goToRouteDetails(this.innerHTML)'>" + arrayOR[j] + "</li>";
        }
        stringOR = stringOR + "<ul> </ul>";
        document.getElementById("subMenuPageBSD_OR_UL").innerHTML = stringOR;
    }

    else if (referance.innerHTML === "From - To") {
        subMenuPageBSD.style.display = "flex";
        note.style.display = "flex";
        if (input1.value === "LALAPET" && input2.value === "SECUNDERABAD" || input1.value === "LALAPET" && input2.value === "ALUGADDA BHAVI" || input1.value === "LALAPET" && input2.value === "METTUGUDA") {
            arrayRG = ["15H", "17D", "17H", "242"]
            arrayOR = ["14P", "15D", "15IG", "15H/242RG", "17H/29B", "17H/219", "242A", "242B", "242G", "242RG", "281"]
        }
        else if (input1.value === "LALAPET" && input2.value === "AFZALGUNJ" || input1.value === "LALAPET" && input2.value === "CITY BUS STATION" || input1.value === "LALAPET" && input2.value === "KOTI MEDICAL COLLEGE") {
            arrayRG = ["3K"]
            arrayOR = ["3C", "3D", "3H", "3KJ", "3M", "3Y", "3K/92A", "3K/102B", "3K/242", "3K/252", "3K/281"]
        }
        else if (input1.value === "LALAPET" && input2.value === "KUSHAIGUDA" || input1.value === "LALAPET" && input2.value === "ECIL X ROADS" || input1.value === "LALAPET" && input2.value === "HB COLONY") {
            arrayRG = ["3K", "15H", "17H", "242"]
            arrayOR = ["3C", "3D", "3H", "3KJ", "3K/92A", "3K/102B", "3K/242", "3K/252", "3K/281", "15D", "15H/242RG", "15IG", "17H/29B", "17H/219", "241T", "242A", "242B", "242G", "281", "498", "498U"]
        }
        else if (input1.value === "LALAPET" && input2.value === "SHANTHI NAGAR" || input1.value === "LALAPET" && input2.value === "NOORIE PAN SHOP" || input1.value === "LALAPET" && input2.value === "NEW BRIDGE") {
            arrayRG = ["15H"]
            arrayOR = ["14P", "15D", "15IG", "15H/242RG"]
        }
        else if (input1.value === "AMEERPET" && input2.value === "AFZALGUNJ") {
            arrayRG = ["9F", "9x", "9X/272G", "218"]
            arrayOR = ["9K", "9K/272G", "9XM/272G"]
        }

        else if (input1.value === input2.value) {
            subMenuPageBSD.style.display = "none";
            arrayRG = []
            arrayOR = []
            alert("Source and Destinations cannot be the Same!");
        }
        else {
            subMenuPageBSD.style.display = "none";
            arrayRG = []
            arrayOR = []
            alert("We are Currently Working on this Route! Kindly Try After Sometime");
        }

        subMenuPageBSD_routeHeading.innerHTML = input1.value + " - " + input2.value;
        subMenuPageUp.style.display = "none";
        subMenuPageDown.style.display = "none";
        // POPULATING THE LIST
        // REGULAR ROUTES

        var stringRG = "";
        for (i = 0; i < arrayRG.length; i++) {
            stringRG = stringRG + "<li onclick='goToRouteDetails(this.innerHTML)'>" + arrayRG[i] + "</li>";
        }
        stringRG = stringRG + "<ul name='lol'> </ul>";
        document.getElementById("subMenuPageBSD_RO_UL").innerHTML = stringRG;

        // OTHER ROUTES

        var stringOR = "";
        for (j = 0; j < arrayOR.length; j++) {
            stringOR = stringOR + "<li onclick='goToRouteDetails(this.innerHTML)'>" + arrayOR[j] + "</li>";
        }
        stringOR = stringOR + "<ul> </ul>";
        document.getElementById("subMenuPageBSD_OR_UL").innerHTML = stringOR;
    }
    else if (referance.innerHTML === "Alternate Route") {


        if (input1.value === "LALAPET" && input2.value === "NAGOLE") {
            subMenuPageALT.style.display = "flex";
            fillDataALT("3K", "17H, 242, 17D, 3D", "LALAPET - TARNAKA", "First go to Tarnaka by boarding buses shown left side. Then Walk to the bus stop where you can find buses towards Habsiguda.", "279", "90L, 290U, 290", "TARNAKA - NAGOLE", "At Tarnaka Bus Stop Board any Bus shown Left Side and Get Down at Nagole Bus Stop.", "", "", "", "", "15H", "14P, 15D, 15H/242RG", "LALAPET - METTUGUDA", "First go to Mettuguda by boarding buses shown left side. Then Walk to the bus stop where you can find buses towards Habsiguda.", "90L", "279, 290U, 290", "METTUGUDA - NAGOLE", "At Mettuguda Bus Stop Board any Bus shown Left Side and Get Down at Nagole Bus Stop.", "", "", "", "");
        }
        else if (input1.value === "LALAPET" && input2.value === "MEDCHAL") {
            subMenuPageALT.style.display = "flex";
            fillDataALT("17H", "17D, 15H, 242, 241T ", "LALAPET - SECUNDERABAD", "First go to Secunderabad by boarding buses shown left side. Then Walk to the Gurudwara Bus stop. There you can find buses towards Medchal.", "229", "90L/229, 290U/229, 25S/229", "SECUNDERABAD - MEDCHAL", "At Gurudwara Bus Stop Board any Bus shown Left Side and Get Down at Medchal Bus Stop.", "", "", "", "", "3K", "17H, 17D, 15H, 15H/242RG, 242", "LALAPET - ECIL X ROADS", "First go to ECIL X Roads Bus Stop by boarding buses shown left side. Then Walk to the platform no. 3. There you can find buses towards Suchitra.", "24S", "24S/273", "ECIL X ROADS - SUCHITRA", "At ECIL X Roads Bus Stop Board any Bus shown Left Side and Get Down at Suchitra Bus Stop.", "229", "290/229, 90L/229, 18C/229 ", "Suchitra - Medchal", "At Suchitra Board any Bus Mentioned Right side and Get Down at Medchal");
        }
        else if (input1.value === "LALAPET" && input2.value === "MEHDIPATNAM") {
            subMenuPageALT.style.display = "flex";
            fillDataALT("17H", "17D, 15H, 242, 241T ", "LALAPET - SECUNDERABAD", "First go to Secunderabad by boarding buses shown left side. Then Walk to the Alpha Hotel Bus stop. There you can find buses towards Mehdipatnam.", "5K", "49M, 5K/92A, 49M/16A, 49M/250", "SECUNDERABAD - MEHDIPATNAM", "At Alpha Hotel Bus Stop Board any Bus shown Left Side and Get Down at Mehdipatnam Bus Stop.", "", "", "", "", "3K", "3D, 3H, 3K/242", "LALAPET - FEVER HOSPITAL", "First go to Fever Hospital Bus Stop by boarding buses shown left side.", "113M", "113IM", "FEVER HOSPITAL - MEHDIPATNAM", "At Fever Hospital Bus Stop Board any Bus shown Left Side and Get Down at Mehdipatnam Bus Stop.", "", "", "", "");
        }
        else if (input1.value === "LALAPET" && input2.value === "MIYAPUR") {
            subMenuPageALT.style.display = "flex";
            fillDataALT("17H", "17D, 15H, 242, 241T ", "LALAPET - SECUNDERABAD", "First go to Secunderabad by boarding buses shown left side. Then Walk to the Alpha Hotel Bus stop. There you can find buses towards Miyapur.", "219", "10KM, 10KL, 219/250, 219/18C", "SECUNDERABAD - MIYAPUR", "At Alpha Hotel Bus Stop Board any Bus shown Left Side and Get Down at Miyapur Bus Stop.", "", "", "", "", "17H/ 219", "", "LALAPET - MIYAPUR", "We have direct route from Lalapet, But they are very rare. Proceed with route 1 instead of waiting for this direct bus.", "", "", "", "", "", "", "", "");
        }
        else if (input1.value === "LALAPET" && input2.value === "LB NAGAR") {
            subMenuPageALT.style.display = "flex";
            fillDataALT("3K", "17H, 242, 17D, 3D", "LALAPET - TARNAKA", "First go to Tarnaka by boarding buses shown left side. Then Walk to the bus stop where you can find buses towards Habsiguda.", "279", "90L, 290U, 290", "TARNAKA - LB NAGAR", "At Tarnaka Bus Stop Board any Bus shown Left Side and Get Down at LB Nagar Bus Stop.", "", "", "", "", "15H", "14P, 15D, 15H/242RG", "LALAPET - METTUGUDA", "First go to Mettuguda by boarding buses shown left side. Then Walk to the bus stop where you can find buses towards Habsiguda.", "90L", "279, 290U, 290", "METTUGUDA - LB NAGAR", "At Mettuguda Bus Stop Board any Bus shown Left Side and Get Down at LB Nagar Bus Stop.", "", "", "", "");
        }
        else if (input1.value === "LALAPET" && input2.value === "IBRAHIMPATNAM") {
            subMenuPageALT.style.display = "flex";
            fillDataALT("3K", "17H, 242, 17D, 3D", "LALAPET - TARNAKA", "First go to Tarnaka by boarding buses shown left side. Then Walk to the bus stop where you can find buses towards Habsiguda.", "279", "229/279 ", "TARNAKA - IBRAHIMPATNAM", "At Tarnaka Bus Stop Board any Bus shown Left Side and Get Down at Ibrahimpatnam Bus Stop.", "", "", "", "", "3K", "17H, 242, 17D, 3D", "LALAPET - TARNAKA", "First go to Tarnaka by boarding buses shown left side. Then Walk to the bus stop where you can find buses towards Habsiguda.", "279", "90L, 290U, 290", "TARNAKA - LB NAGAR", "At Tarnaka Bus Stop Board any Bus shown Left Side and Get Down at LB Nagar Bus Stop.", "279", "277D, 1D/277D, 229/279", "LB NAGAR - IBRAHIMPATNAM", "Now go to that Bus Stop where you can find buses towards Ibrahimpatnam and Board any Bus mentioned left side and Get Down at Ibrahimpatnam");
        }



        else if (input1.value === "RAM THEATER - LALAPET" && input2.value === "NAGOLE") {
            subMenuPageALT.style.display = "flex";
            fillDataALT("3K", "17H, 242, 17D, 3D", "RAM THEATER - TARNAKA", "First go to Tarnaka by boarding buses shown left side. Then Walk to the bus stop where you can find buses towards Habsiguda.", "279", "90L, 290U, 290", "TARNAKA - NAGOLE", "At Tarnaka Bus Stop Board any Bus shown Left Side and Get Down at Nagole Bus Stop.", "", "", "", "", "15H", "14P, 15D, 15H/242RG", "RAM THEATER - METTUGUDA", "First go to Mettuguda by boarding buses shown left side. Then Walk to the bus stop where you can find buses towards Habsiguda.", "90L", "279, 290U, 290", "METTUGUDA - NAGOLE", "At Mettuguda Bus Stop Board any Bus shown Left Side and Get Down at Nagole Bus Stop.", "", "", "", "");
        }

        else if (input1.value === "RAM THEATER - LALAPET" && input2.value === "LB NAGAR") {
            subMenuPageALT.style.display = "flex";
            fillDataALT("3K", "17H, 242, 17D, 3D", "RAM THEATER - TARNAKA", "First go to Tarnaka by boarding buses shown left side. Then Walk to the bus stop where you can find buses towards Habsiguda.", "279", "90L, 290U, 290", "TARNAKA - LB NAGAR", "At Tarnaka Bus Stop Board any Bus shown Left Side and Get Down at LB Nagar Bus Stop.", "", "", "", "", "15H", "14P, 15D, 15H/242RG", "RAM THEATER - METTUGUDA", "First go to Mettuguda by boarding buses shown left side. Then Walk to the bus stop where you can find buses towards Habsiguda.", "90L", "279, 290U, 290", "METTUGUDA - LB NAGAR", "At Mettuguda Bus Stop Board any Bus shown Left Side and Get Down at LB Nagar Bus Stop.", "", "", "", "");
        }

        else if (input1.value === "RAM THEATER - LALAPET" && input2.value === "MEDCHAL") {
            subMenuPageALT.style.display = "flex";
            fillDataALT("17H", "17D, 15H, 242, 241T ", "RAM THEATER - SECUNDERABAD", "First go to Secunderabad by boarding buses shown left side. Then Walk to the Gurudwara Bus stop. There you can find buses towards Medchal.", "229", "90L/229, 290U/229, 25S/229", "SECUNDERABAD - MEDCHAL", "At Gurudwara Bus Stop Board any Bus shown Left Side and Get Down at Medchal Bus Stop.", "", "", "", "", "3K", "17H, 17D, 15H, 15H/242RG, 242", "RAM THEATER - ECIL X ROADS", "First go to ECIL X Roads Bus Stop by boarding buses shown left side. Then Walk to the platform no. 3. There you can find buses towards Suchitra.", "24S", "24S/273", "ECIL X ROADS - SUCHITRA", "At ECIL X Roads Bus Stop Board any Bus shown Left Side and Get Down at Suchitra Bus Stop.", "229", "290/229, 90L/229, 18C/229 ", "Suchitra - Medchal", "At Suchitra Board any Bus Mentioned Right side and Get Down at Medchal");
        }
        else if (input1.value === "ZTS X ROADS" && input2.value === "MEDCHAL") {
            subMenuPageALT.style.display = "flex";
            fillDataALT("17H", "17D, 15H, 242, 241T ", "ZTS X ROADS - SECUNDERABAD", "First go to Secunderabad by boarding buses shown left side. Then Walk to the Gurudwara Bus stop. There you can find buses towards Medchal.", "229", "90L/229, 290U/229, 25S/229", "SECUNDERABAD - MEDCHAL", "At Gurudwara Bus Stop Board any Bus shown Left Side and Get Down at Medchal Bus Stop.", "", "", "", "", "3K", "17H, 17D, 15H, 15H/242RG, 242", "ZTS X ROADS - ECIL X ROADS", "First go to ECIL X Roads Bus Stop by boarding buses shown left side. Then Walk to the platform no. 3. There you can find buses towards Suchitra.", "24S", "24S/273", "ECIL X ROADS - SUCHITRA", "At ECIL X Roads Bus Stop Board any Bus shown Left Side and Get Down at Suchitra Bus Stop.", "229", "290/229, 90L/229, 18C/229 ", "Suchitra - Medchal", "At Suchitra Board any Bus Mentioned Right side and Get Down at Medchal");
        }
        else {
            alert("We Are working on this route kindly try after sometime");
            note.style.display = "none";
        }



        subMenuPageALT_routeHeading.innerHTML = input1.value + " - " + input2.value;
        note.style.display = "flex";
        noteText.innerHTML = "There may be other routes too but we will display only easy and simple routes which will be more helpful."
    }



    else if (referance.innerHTML === "Fare Details") {
        if (input1.value === input2.value) {
            alert("Source and Destination Cannot Be the Same!")
            subMenuPageFD.style.display = "none";
        }
        else {
            subMenuPageFD.style.display = "flex";
            if (arraysrc.includes(input1.value) && arraydst.includes(input2.value)) {
                subMenuPageFD_routeHeading.innerHTML = input1.value + " - " + input2.value;
                var i = arraysrc.indexOf(input1.value);
                var j = arraydst.indexOf(input2.value);
                FD_co.innerHTML = arrayfaresCO[i][j] + "/-";
                FD_me.innerHTML = arrayfaresME[i][j] + "/-";

            }
            else {
                alert("Kindly enter the valid Bus Stop names from the given list at Source and Destinations");
                subMenuPageFD.style.display = "none";
            }
        }
    }


}

// For Navigating Back
function goBackS_H() {
    var referance = document.getElementById("subMenuPageHeading");
    var subMenuPage = document.getElementById("subMenuPage");
    var subMenuPageUp = document.getElementById("subMenuPageUp");
    var subMenuPageDown = document.getElementById("subMenuPageDown");
    var homePage = document.getElementById("homePage");
    var subMenuPageBSD = document.getElementById("subMenuPageBSD");
    var subMenuPageALT = document.getElementById("subMenuPageALT");
    var subMenuPageFD = document.getElementById("subMenuPageFD");
    var note = document.getElementById("note");
    var btnGet = document.getElementById("btnGet");
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");

    if (stack === 0) {
        if (referance.innerHTML === "Route Details") {
            subMenuPage.style.display = "none";
            subMenuPageUp.style.display = "none";
            subMenuPageDown.style.display = "none";
            subMenuPageBSD.style.display = "none";
            subMenuPageALT.style.display = "none";
            note.style.display = "none";
            homePage.style.display = "block";
        } else if (referance.innerHTML === "Bus Stop Details") {
            subMenuPage.style.display = "none";
            subMenuPageUp.style.display = "none";
            subMenuPageDown.style.display = "none";
            subMenuPageBSD.style.display = "none";
            subMenuPageALT.style.display = "none";
            note.style.display = "none";
            homePage.style.display = "block";
        }
        else if (referance.innerHTML === "From - To") {
            subMenuPage.style.display = "none";
            subMenuPageUp.style.display = "none";
            subMenuPageDown.style.display = "none";
            subMenuPageBSD.style.display = "none";
            subMenuPageALT.style.display = "none";
            note.style.display = "none";
            homePage.style.display = "block";
        }
        else if (referance.innerHTML === "Alternate Route") {
            subMenuPage.style.display = "none";
            subMenuPageUp.style.display = "none";
            subMenuPageDown.style.display = "none";
            subMenuPageBSD.style.display = "none";
            subMenuPageALT.style.display = "none";
            note.style.display = "none";
            homePage.style.display = "block";
        }
        else if (referance.innerHTML === "Fare Details") {
            subMenuPage.style.display = "none";
            subMenuPageUp.style.display = "none";
            subMenuPageDown.style.display = "none";
            subMenuPageBSD.style.display = "none";
            subMenuPageALT.style.display = "none";
            subMenuPageFD.style.display = "none";
            note.style.display = "none";
            homePage.style.display = "block";
        }
        else {
            alert(referance);

        }
    }
    else if (stack === 1) {

        if (referance.innerHTML === "Bus Stop Details") {
            accessFeature('Route Details');
            input1.value = refInput;
            btnGet.click();
            stack = 0;
            refInput = "";
        }
        else if (referance.innerHTML === "Route Details") {
            accessFeature('From - To');
            input1.value = refInput;
            input2.value = refInput2;
            btnGet.click();
            stack = 0;
            refInput = "";
        }
    }
    else if (stack === 1.2) {
        if (referance.innerHTML === "Route Details") {
            accessFeature('Bus Stop');
            input1.value = refInput;
            btnGet.click();
            stack = 0;
            refInput = "";
        }
    }

}

// For Expanding the Route Result Page
function expandResult(value) {
    var subMenuPageUp = document.getElementById("subMenuPageUp");
    var subMenuPageDown = document.getElementById("subMenuPageDown");
    var subMenuPageUp_UL = document.getElementById("subMenuPageUp_UL");
    var subMenuPageDown_UL = document.getElementById("subMenuPageDown_UL");
    var btnExpandUp = document.getElementById("btnExpandUp");
    var btnExpandDown = document.getElementById("btnExpandDown");
    var routeDetailsNoteUp = document.getElementById("routeDetailsNoteUp");
    var routeDetailsNoteDown = document.getElementById("routeDetailsNoteDown");

    if (value === "UP" && subMenuPageUp.style.height === "250px") {
        subMenuPageUp.style.height = "fit-content";
        subMenuPageUp_UL.style.filter = "blur(0px)";
        btnExpandUp.style.marginTop = "0px";
        btnExpandUp.innerHTML = "Tap to Collapse";
        populatingRouteListUp("Expand");
    }
    else if (value === "UP" && subMenuPageUp.style.height === "fit-content") {
        subMenuPageUp.style.height = "250px";
        subMenuPageUp_UL.style.filter = "blur(5px)";
        btnExpandUp.style.marginTop = "-25px";
        btnExpandUp.innerHTML = "Tap to Expand";
        routeDetailsNoteUp.style.display = "none";
        populatingRouteListUp("Collapse");
    }
    else if (value === "DOWN" && subMenuPageDown.style.height === "250px") {
        subMenuPageDown.style.height = "fit-content";
        subMenuPageDown_UL.style.filter = "blur(0px)";
        btnExpandDown.innerHTML = "Tap to Collapse";
        btnExpandDown.style.marginTop = "0px";
        populatingRouteListDown("Expand");
    }
    else if (value === "DOWN" && subMenuPageDown.style.height === "fit-content") {
        subMenuPageDown.style.height = "250px";
        subMenuPageDown_UL.style.filter = "blur(5px)";
        btnExpandDown.innerHTML = "Tap to Expand";
        btnExpandDown.style.marginTop = "-25px";
        routeDetailsNoteDown.style.display = "none";
        populatingRouteListDown("Collapse");
    } else {
        alert("Position Not Found");
    }

}

// For Populating the lists for Route Details Section

//UP List

function populatingRouteListUp(ECValue) {
    var input1 = document.getElementById("input1");
    var routeDetailsNoteUp = document.getElementById("routeDetailsNoteUp");
    var routeDetailsNoteDown = document.getElementById("routeDetailsNoteDown");

    if (ECValue === "Expand") {
        switch (input1.value) {
            case "1":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1/25S":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1B":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1C":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1D":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1D/229":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1D/299":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1H/D":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1J":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1K":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1L":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1M/D":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1P":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1P/25S":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1V":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1X":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1Z":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "1Z/229":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "2":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "2/25S":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "2C":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "2J":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "2K":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "2U":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "2Z":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "3C":
                arrayHUP = ECIL_TNK_LPT_UP;
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "3D":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "3DN":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "3H":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "3HN":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "3K":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;


            case "3K/92A":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;


            case "3K/102B":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;


            case "3K/242":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;


            case "3K/252":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;


            case "3K/281":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "3KN":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;


            case "3KN/102B":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "3KJ":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "3L":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "3M":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "3N":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "3N/203A":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "3T":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "3Y":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;


            case "5K":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "5K/16A":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "5K/16C":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "5K/16CD":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "5K/16D":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;


            case "5K/92A":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "5K/188":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "5K/229":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "5M":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";


                break;

            case "6KR":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "7Z":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "8A":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;


            case "8U/A":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "8C":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "9F":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;


            case "9K":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "9K/272G":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "9K/230P":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "9X":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;



            case "9X/272G":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;



            case "9X/230P":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "9M/X":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "10F":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "10H":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "10HA":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "10HL":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "10K":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "10KJ":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "10KL":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "10KM":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "10KM/224G":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "10W":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "10Y":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "10YF":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "14P":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "15D":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "15H":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "15H/242RG":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "16A":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "16A/5K":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "16A/49M":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "16C":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "16C/5K":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "16C/49M":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "16CD":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "16CD/5K":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "16CD/49M":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "16D":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "16D/5K":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "16D/49M":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "16H":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "16NY":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "17D":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "17H":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "17HC":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "17HN":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "17H/29B":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "17H/219":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "17V":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "18C":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "18C/30":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "18C/219":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "18C/229":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "19F":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "19KJ":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "19M":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "20P":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;


            case "24L/281":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "24S":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "24S/273":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "25S":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "25S/229":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "26M":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "26N":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "29B":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "29B/17H":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "29B/272G":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "29B/272I":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "30":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "30/18C":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "30/280":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "38EX":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "38T":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "40":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "45F":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "47L":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "47L/16A":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;


            case "49":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "49A":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "49M":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "49M/16A":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "49M/16C":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "49M/16CD":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "49M/250":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "49M/250C":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "50B":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "218":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;

            case "219":
                arrayHUP = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"]
                arraySHUP = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
                routeDetailsNoteUp.style.display = "none";
                routeDetailsNoteDown.style.display = "none";

                break;


            default:
                alert("Sorry! We are currently Working on this Route. Kindly Try After Some Time");
                subMenuPageUp.style.display = "none";
                subMenuPageDown.style.display = "none";

        }

    }
    else if (ECValue === "Collapse") {
        if (input1.value === "1" || input1.value === "1B" || input1.value === "1C" || input1.value === "1/25S") {
            arrayHUP = ["SECUNDERABAD", "AFZALGUNJ"]
            arraySHUP = ["RETHIFILE BUS STATION || RAILWAY STATION", "POLICE STATION || BUS STATION"]
        }
        else if (input1.value === "2") {
            arrayHUP = ["SECUNDERABAD", "AFZALGUNJ"]
            arraySHUP = ["RETHIFILE BUS STATION || RAILWAY STATION", "POLICE STATION || BUS STATION"]
        }
        else if (input1.value === "3K") {
            arrayHUP = ["KUSHAIGUDA", "AFZALGUNJ"]
            arraySHUP = ["RETHIFILE BUS STATION || RAILWAY STATION", "POLICE STATION || BUS STATION"]
        }
        else if (input1.value === "10H") {
            arrayHUP = ["SECUNDERABAD", "KONDAPUR"]
            arraySHUP = ["ALPHA HOTEL || RAILWAY STATION", "POLICE BATALION || PETROL BUNK"]
        }
        else if (input1.value === "49M") {
            arrayHUP = ["SECUNDERABAD", "MEHDIPATNAM"]
            arraySHUP = ["RETHIFILE BUS STATION || RAILWAY STATION", "POLICE STATION || BUS STATION"]
        }
        else if (input1.value === "17H") {
            arrayHUP = ["SECUNDERABAD", "KUSHAIGUDA"]
            arraySHUP = ["RETHIFILE BUS STATION || RAILWAY STATION", "POLICE STATION || BUS STATION"]
        }
        else if (input1.value === "9X") {
            arrayHUP = ["AFZALGUNJ", "JEEDIMETLA"]
            arraySHUP = ["RETHIFILE BUS STATION || RAILWAY STATION", "POLICE STATION || BUS DEPOT"]
        }
        else if (input1.value === "218") {
            arrayHUP = ["AFZALGUNJ", "PATANCHERUVU"]
            arraySHUP = ["RETHIFILE BUS STATION || RAILWAY STATION", "POLICE STATION || BUS STATION"]
        }
        else if (input1.value === "219") {
            arrayHUP = ["SECUNDERABAD", "PATANCHERUVU"]
            arraySHUP = ["RETHIFILE BUS STATION || RAILWAY STATION", "POLICE STATION || BUS STATION"]
        }
        else if (input1.value === "29B") {
            arrayHUP = ["SECUNDERABAD", "JEEDIMETLA"]
            arraySHUP = ["RETHIFILE BUS STATION || RAILWAY STATION", "POLICE STATION || BUS DEPOT"]
        }


    }


    // Populating The List
    var stringUp = "";
    for (i = 0; i < arrayHUP.length; i++) {
        stringUp = stringUp + "<li>" + "<p class='LI-heading' style='cursor:pointer;' onclick='goToBusStopDetails(this.innerHTML)'>" + arrayHUP[i] + "</p>" + "<p class='LI-subhead'>" + arraySHUP[i] + "</p>" + "</li>";
    }
    stringUp = stringUp + "<ul></ul>";
    document.getElementById("subMenuPageUp_UL").innerHTML = stringUp;

}

function populatingRouteListDown(ECValue) {
    var input1 = document.getElementById("input1");
    var routeDetailsNoteUp = document.getElementById("routeDetailsNoteUp");
    var routeDetailsNoteDown = document.getElementById("routeDetailsNoteDown");
    if (ECValue === "Expand") {
        if (input1.value === "1") {
            arrayHDN = KCGX_AFZ_DOWN.concat(RTCX_YMCA_DOWN, SEC_RTCX_DOWN);
            arraySHDN = ["RETHIFILE BUS STATION || RAILWAY STATION", "RAILWAY COACH STATION", "HOSPITAL || MEDICAL COLLEGE", "POLICE STATION", "SRI SAI RAJA THEATER", "X ROADS", "SAPTHAGIRI THEATER || SANDHYA THEATER", "POLICE STATION || METRO STATION"]
            routeDetailsNoteUp.style.display = "none";
            routeDetailsNoteDown.style.display = "none";
        }

        else if (input1.value === "2") {
            arrayHDN = ["AFZALGUNJ", "CITY BUS STATION", "CHADERGHAT", "NIMBOLI ADDA", "KACHEGUDA STATION", "KACHEGUDA TOURIST", "BARKATPURA", "FEVER HOSPITAL", "SHANKARMUTT", "VST", "BUS BHAVAN"].concat(SEC_RTCX_DOWN);
            arraySHDN = ["RETHIFILE BUS STATION || RAILWAY STATION", "RAILWAY COACH STATION", "HOSPITAL || MEDICAL COLLEGE", "POLICE STATION", "SRI SAI RAJA THEATER", "X ROADS", "SAPTHAGIRI THEATER || SANDHYA THEATER", "POLICE STATION || METRO STATION"]
            routeDetailsNoteUp.style.display = "none";
            routeDetailsNoteDown.style.display = "none";
        }
        else if (input1.value === "3K") {
            arrayHDN = ARTS_AFZAL_DN.concat(ECIL_TNK_LPT_DN);
            arraySHDN = ["RETHIFILE BUS STATION || RAILWAY STATION", "RAILWAY COACH STATION", "HOSPITAL || MEDICAL COLLEGE", "POLICE STATION", "SRI SAI RAJA THEATER", "X ROADS", "SAPTHAGIRI THEATER || SANDHYA THEATER", "POLICE STATION || METRO STATION"]

            routeDetailsNoteDown.style.display = "block";
        }
        else if (input1.value === "10H") {
            arrayHDN = ["SECUNDERABAD", "PATNY", "SWIMMING POOL", "PARADISE", "POLICE LINES", "RASOOLPURA", "PRAKASH NAGAR", "BEGUMPET", "SHYAMLAL", "HYD PUBLIC SCHOOL", "GREENLANDS", "LAL BUNGLOW", "SHESHMAHAL", "AMEERPET", "SATYAM X ROADS", "MYTHRIVANAM", "MADHURA NAGAR", "YOUSUFGUDA CHECKPOST", "YOUSUFGUDA", "KRISHNA NAGAR", "JUBLIEE CHECKPOST", "KOTHAGUDA", "KONDAPUR"].reverse();
            arraySHDN = ["RAILWAY STATION || ALPHA HOTEL", "SURYA TOWERS || METRO STATION", "UNDEFINDED", "HOTEL || METRO STATION"]
            routeDetailsNoteUp.style.display = "none";
            routeDetailsNoteDown.style.display = "none";
        }
        else if (input1.value === "49M") {
            arrayHDN = ["SECUNDERABAD", "PATNY", "SWIMMING POOL", "PARADISE", "POLICE LINES", "RASOOLPURA", "PRAKASH NAGAR", "BEGUMPET", "SHYAMLAL", "HYD PUBLIC SCHOOL", "GREENLANDS", "PANJAGUTTA", "NIMS HOSPITAL", "VENGAL RAO PARK", "MASAB TANK", "MEHDIPATNAM"].reverse();
            arraySHDN = ["RAILWAY STATION || ALPHA HOTEL", "SURYA TOWERS || METRO STATION", "UNDEFINDED", "HOTEL || METRO STATION"]
            routeDetailsNoteUp.style.display = "none";
            routeDetailsNoteDown.style.display = "none";
        }
        else if (input1.value === "17H") {
            arrayHDN = ECIL_TNK_LPT_UP.concat(["RAILWAY DEGREE COLLEGE", "METTUGUDA", "ALUGADDA BHAVI", "SANGEETH", "SECUNDERABAD"]);
            arraySHDN = ["TALLURI THEATERS", "KUSHAIGUDA PS || BUS STATION", "KUSHAIGUDA DEPOT", "HOSPITAL", "LAXMI NAGAR", "HB COLONY || 2ND PHASE", "DEGREE COLLEGE || MANGAPURAM", "PLAY GROUND || 1ST PHASE", "COCACOLA FACTORY", "POLICE RPF TARINEE", "INDOOR STADIUM", "MASID || KAMAN", "ST. ANNS SCHOOL || GLOBAL COLLEGE", "BUS PASS COUNTER || INNER RING ROAD"].reverse();
            routeDetailsNoteUp.style.display = "none";
            routeDetailsNoteDown.style.display = "none";
        }
        else if (input1.value === "9X") {
            arrayHDN = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"].reverse();
            arraySHDN = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
            routeDetailsNoteUp.style.display = "none";
            routeDetailsNoteDown.style.display = "none";
        }
        else if (input1.value === "218") {
            arrayHDN = ["CITY BUS STATION", "AFZALGUNJ", "OSMANGUNJ", "LAKDIKAPUL", "GANDHI BHAVAN", "ASSEMBLY", "NAMPALLY", 'PUBLIC GARDENS', "KHAIRATHABAD", "PANJAGUTTA", "AMEERPET", "MYTHRIVANAM", "SR NAGAR", "VR NAGAR", "ESI HOSPITAL", "ERRAGADDA", "BHARATH NAGAR", "MOOSAPET", "Y JUNCTION", "KUKATPALLY", "KPHB COLONY", "JNTUH COLLEGE", "NIZAMPET X ROADS", "MIYAPUR METRO", "MIYAPUR X ROADS", "HUDA COLONY", "CHANDANAGAR", "LINGAMPALLY", "ASHOK NAGAR", "PATANCHERUVU"].reverse();
            arraySHDN = ["MGBS || METRO STATION", "CENTRAL LIBRARY || BUS STATION", "MJ MARKET", "MMTS STATION", "TELANGANA ASSEMBLY"]
            routeDetailsNoteUp.style.display = "none";
            routeDetailsNoteDown.style.display = "none";
        }
        else if (input1.value === "219") {
            arrayHDN = ["SECUNDERABAD", "PATNY", "SWIMMING POOL", "PARADISE", "BALAMRAI", "TADBUN", "BOWENPALLY", "FEROZGUDA", "SHOBANA", "BALANAGAR", "Y JUNCTION", "KUKATPALLY", "KPHB COLONY", "JNTUH COLLEGE", "NIZAMPET X ROADS", "MIYAPUR METRO", "MIYAPUR X ROADS", "HUDA COLONY", "CHANDANAGAR", "LINGAMPALLY", "ASHOK NAGAR", "PATANCHERUVU"].reverse();
            arraySHDN = ["RAILWAY STATION || ALPHA HOTEL", "SURYA TOWERS || METRO STATION", "UNDEFINDED", "HOTEL || METRO STATION"]
            routeDetailsNoteUp.style.display = "none";
            routeDetailsNoteDown.style.display = "none";
        }
        else if (input1.value === "29B") {
            arrayHDN = ["SECUNDERABAD", "PATNY", "SWIMMING POOL", "PARADISE", "BALAMRAI", "TADBUN", "BOWENPALLY", "FEROZGUDA", "SHOBANA", "BALANAGAR", "WATER TANK", "IDPL COLONY", "GAJULARAMARAM X ROADS", "CHINTAL", "SHAHPUR NAGAR", "JEEDIMETLA SUB STATION", "JEEDIMETLA"].reverse();
            arraySHDN = ["RAILWAY STATION || ALPHA HOTEL", "SURYA TOWERS || METRO STATION", "UNDEFINDED", "HOTEL || METRO STATION"]
            routeDetailsNoteUp.style.display = "none";
            routeDetailsNoteDown.style.display = "none";
        }
    }
    else if (ECValue === "Collapse") {
        if (input1.value === "1") {
            arrayHDN = ["AFZALGUNJ", "SECUNDERABAD"]
            arraySHDN = ["POLICE STATION || BUS STATION", "RETHIFILE BUS STATION || RAILWAY STATION"]
        }
        else if (input1.value === "2") {
            arrayHDN = ["AFZALGUNJ", "SECUNDERABAD"]
            arraySHDN = ["POLICE STATION || BUS STATION", "RETHIFILE BUS STATION || RAILWAY STATION"]
        }
        else if (input1.value === "3K") {
            arrayHDN = ["AFZALGUNJ", "KUSHAIGUDA"]
            arraySHDN = ["RETHIFILE BUS STATION || RAILWAY STATION", "POLICE STATION || BUS STATION"]
        }
        else if (input1.value === "10H") {
            arrayHDN = ["KONDAPUR", "SECUNDERABAD"]
            arraySHDN = ["ALPHA HOTEL || RAILWAY STATION", "POLICE BATALION || PETROL BUNK"]
        }
        else if (input1.value === "49M") {
            arrayHDN = ["MEHDIPATNAM", "SECUNDERABAD"]
            arraySHDN = ["RETHIFILE BUS STATION || RAILWAY STATION", "POLICE STATION || BUS STATION"]
        }
        else if (input1.value === "17H") {
            arrayHDN = ["KUSHAIGUDA", "SECUNDERABAD"]
            arraySHDN = ["RETHIFILE BUS STATION || RAILWAY STATION", "POLICE STATION || BUS STATION"]
        }
        else if (input1.value === "9X") {
            arrayHDN = ["JEEDIMETLA", "AFZALGUNJ"]
            arraySHDN = ["RETHIFILE BUS STATION || RAILWAY STATION", "POLICE STATION || BUS DEPOT"]
        }
        else if (input1.value === "218") {
            arrayHDN = ["PATANCHERUVU", "AFZALGUNJ"]
            arraySHDN = ["RETHIFILE BUS STATION || RAILWAY STATION", "POLICE STATION || BUS STATION"]
        }
        else if (input1.value === "219") {
            arrayHDN = ["PATANCHERUVU", "SECUNDERABAD"]
            arraySHDN = ["RETHIFILE BUS STATION || RAILWAY STATION", "POLICE STATION || BUS STATION"]
        }
        else if (input1.value === "29B") {
            arrayHDN = ["JEEDIMETLA", "SECUNDERABAD"]
            arraySHDN = ["RETHIFILE BUS STATION || RAILWAY STATION", "POLICE STATION || BUS DEPOT"]
        }

    }

    // Populating The List
    var stringDN = "";
    for (j = 0; j < arrayHDN.length; j++) {
        stringDN = stringDN + "<li>" + "<p class='LI-heading' style='cursor:pointer;' onclick='goToBusStopDetails(this.innerHTML)'>" + arrayHDN[j] + "</p>" + "<p class='LI-subhead'>" + arraySHDN[j] + "</p>" + "</li>";
    }
    stringDN = stringDN + "<ul></ul>";
    document.getElementById("subMenuPageDown_UL").innerHTML = stringDN;
}

// For Alternate Route

function fillDataALT(h11, rpt11, det11, ul11, h12, rtp12, det12, ul12, h13, rtp13, det13, ul13, h21, rpt21, det21, ul21, h22, rtp22, det22, ul22, h23, rtp23, det23, ul23,) {

    // Alternate Route Elements

    // ROUTE 1

    var h4_1_1 = document.getElementById("h4_1_1");
    var rtp_1_1 = document.getElementById("rtp_1_1");
    var det_1_1 = document.getElementById("det_1_1");
    var detailedALT_1_1 = document.getElementById("detailedALT_1_1");


    var h4_1_2 = document.getElementById("h4_1_2");
    var rtp_1_2 = document.getElementById("rtp_1_2");
    var det_1_2 = document.getElementById("det_1_2");
    var detailedALT_1_2 = document.getElementById("detailedALT_1_2");

    var h4_1_3 = document.getElementById("h4_1_3");
    var rtp_1_3 = document.getElementById("rtp_1_3");
    var det_1_3 = document.getElementById("det_1_3");
    var detailedALT_1_3 = document.getElementById("detailedALT_1_3");

    // ROUTE 2

    var h4_2_1 = document.getElementById("h4_2_1");
    var rtp_2_1 = document.getElementById("rtp_2_1");
    var det_2_1 = document.getElementById("det_2_1");
    var detailedALT_2_1 = document.getElementById("detailedALT_2_1");


    var h4_2_2 = document.getElementById("h4_2_2");
    var rtp_2_2 = document.getElementById("rtp_2_2");
    var det_2_2 = document.getElementById("det_2_2");
    var detailedALT_2_2 = document.getElementById("detailedALT_2_2");

    var h4_2_3 = document.getElementById("h4_2_3");
    var rtp_2_3 = document.getElementById("rtp_2_3");
    var det_2_3 = document.getElementById("det_2_3");
    var detailedALT_2_3 = document.getElementById("detailedALT_2_3");

    // Display Controls
    var art_row_1_1 = document.getElementById("art_row_1_1");
    var art_row_1_2 = document.getElementById("art_row_1_2");
    var art_row_1_3 = document.getElementById("art_row_1_3");
    var art_row_2_1 = document.getElementById("art_row_2_1");
    var art_row_2_2 = document.getElementById("art_row_2_2");
    var art_row_2_3 = document.getElementById("art_row_2_3");

    // Filling Data

    h4_1_1.innerHTML = h11;
    rtp_1_1.innerHTML = rpt11;
    det_1_1.innerHTML = det11;
    detailedALT_1_1.innerHTML = ul11;

    h4_1_2.innerHTML = h12;
    rtp_1_2.innerHTML = rtp12;
    det_1_2.innerHTML = det12;
    detailedALT_1_2.innerHTML = ul12;

    h4_1_3.innerHTML = h13;
    rtp_1_3.innerHTML = rtp13;
    det_1_3.innerHTML = det13;
    detailedALT_1_3.innerHTML = ul13;

    h4_2_1.innerHTML = h21;
    rtp_2_1.innerHTML = rpt21;
    det_2_1.innerHTML = det21;
    detailedALT_2_1.innerHTML = ul21;

    h4_2_2.innerHTML = h22;
    rtp_2_2.innerHTML = rtp22;
    det_2_2.innerHTML = det22;
    detailedALT_2_2.innerHTML = ul22;

    h4_2_3.innerHTML = h23;
    rtp_2_3.innerHTML = rtp23;
    det_2_3.innerHTML = det23;
    detailedALT_2_3.innerHTML = ul23;

    // Controlling Display

    if (h12 === "") {
        art_row_1_2.style.display = "none";
    } else {
        art_row_1_2.style.display = "flex";
    }
    if (h13 === "") {
        art_row_1_3.style.display = "none";
    } else {
        art_row_1_3.style.display = "flex";
    }

    if (h22 === "") {
        art_row_2_2.style.display = "none";
    } else {
        art_row_2_2.style.display = "flex";
    }

    if (h23 === "") {
        art_row_2_3.style.display = "none";
    } else {
        art_row_2_3.style.display = "flex";
    }


}

function goToRouteDetails(routeNumber) {
    var referance = document.getElementById("subMenuPageHeading");
    var subMenuPage = document.getElementById("subMenuPage");
    var subMenuPageUp = document.getElementById("subMenuPageUp");
    var subMenuPageDown = document.getElementById("subMenuPageDown");
    var homePage = document.getElementById("homePage");
    var subMenuPageBSD = document.getElementById("subMenuPageBSD");
    var subMenuPageALT = document.getElementById("subMenuPageALT");
    var subMenuPageFD = document.getElementById("subMenuPageFD");
    var note = document.getElementById("note");
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var btnGet = document.getElementById("btnGet");
    subMenuPageUp.style.display = "none";
    subMenuPageDown.style.display = "none";
    subMenuPageBSD.style.display = "none";
    subMenuPageALT.style.display = "none";
    note.style.display = "none";


    if (referance.innerHTML === "From - To") {
        refInput = input1.value;
        refInput2 = input2.value;
        accessFeature('Route Details');
        input1.value = routeNumber;
        btnGet.click();
        stack = 1;
    } else if (referance.innerHTML === "Bus Stop Details") {
        refInput = input1.value;
        accessFeature('Route Details');
        input1.value = routeNumber;
        btnGet.click();
        stack = 1.2;
    }


}

function goToBusStopDetails(busStopName) {
    var referance = document.getElementById("subMenuPageHeading");
    var subMenuPage = document.getElementById("subMenuPage");
    var subMenuPageUp = document.getElementById("subMenuPageUp");
    var subMenuPageDown = document.getElementById("subMenuPageDown");
    var homePage = document.getElementById("homePage");
    var subMenuPageBSD = document.getElementById("subMenuPageBSD");
    var subMenuPageALT = document.getElementById("subMenuPageALT");
    var subMenuPageFD = document.getElementById("subMenuPageFD");
    var note = document.getElementById("note");
    var input1 = document.getElementById("input1");
    var btnGet = document.getElementById("btnGet");
    subMenuPageUp.style.display = "none";
    subMenuPageDown.style.display = "none";
    subMenuPageBSD.style.display = "none";
    subMenuPageALT.style.display = "none";
    note.style.display = "none";

    refInput = input1.value;
    accessFeature('Bus Stop');
    input1.value = busStopName;
    btnGet.click();
    stack = 1;
}