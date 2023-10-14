import { lazy, Suspense } from 'react';
import camelCase from 'lodash.camelcase';

const AirTrafficControl = lazy(() => import('@phosphor-icons/react/dist/icons/AirTrafficControl'));
const AddressBook = lazy(() => import('@phosphor-icons/react/dist/icons/AddressBook'));
const Airplane = lazy(() => import('@phosphor-icons/react/dist/icons/Airplane'));
const AirplaneInFlight = lazy(() => import('@phosphor-icons/react/dist/icons/AirplaneInFlight'));
const AirplaneLanding = lazy(() => import('@phosphor-icons/react/dist/icons/AirplaneLanding'));
const AirplaneTakeoff = lazy(() => import('@phosphor-icons/react/dist/icons/AirplaneTakeoff'));
const AirplaneTilt = lazy(() => import('@phosphor-icons/react/dist/icons/AirplaneTilt'));
const Airplay = lazy(() => import('@phosphor-icons/react/dist/icons/Airplay'));
const Alarm = lazy(() => import('@phosphor-icons/react/dist/icons/Alarm'));
const Alien = lazy(() => import('@phosphor-icons/react/dist/icons/Alien'));
const AlignBottom = lazy(() => import('@phosphor-icons/react/dist/icons/AlignBottom'));
const AlignBottomSimple = lazy(() => import('@phosphor-icons/react/dist/icons/AlignBottomSimple'));
const AlignCenterHorizontal = lazy(
  () => import('@phosphor-icons/react/dist/icons/AlignCenterHorizontal')
);
const AlignCenterHorizontalSimple = lazy(
  () => import('@phosphor-icons/react/dist/icons/AlignCenterHorizontalSimple')
);
const AlignCenterVertical = lazy(
  () => import('@phosphor-icons/react/dist/icons/AlignCenterVertical')
);
const AlignCenterVerticalSimple = lazy(
  () => import('@phosphor-icons/react/dist/icons/AlignCenterVerticalSimple')
);
const AlignLeft = lazy(() => import('@phosphor-icons/react/dist/icons/AlignLeft'));
const AlignLeftSimple = lazy(() => import('@phosphor-icons/react/dist/icons/AlignLeftSimple'));
const AlignRight = lazy(() => import('@phosphor-icons/react/dist/icons/AlignRight'));
const AlignRightSimple = lazy(() => import('@phosphor-icons/react/dist/icons/AlignRightSimple'));
const AlignTop = lazy(() => import('@phosphor-icons/react/dist/icons/AlignTop'));
const AlignTopSimple = lazy(() => import('@phosphor-icons/react/dist/icons/AlignTopSimple'));
const AmazonLogo = lazy(() => import('@phosphor-icons/react/dist/icons/AmazonLogo'));
const Anchor = lazy(() => import('@phosphor-icons/react/dist/icons/Anchor'));
const AnchorSimple = lazy(() => import('@phosphor-icons/react/dist/icons/AnchorSimple'));
const AndroidLogo = lazy(() => import('@phosphor-icons/react/dist/icons/AndroidLogo'));
const AngularLogo = lazy(() => import('@phosphor-icons/react/dist/icons/AngularLogo'));
const Aperture = lazy(() => import('@phosphor-icons/react/dist/icons/Aperture'));
const AppStoreLogo = lazy(() => import('@phosphor-icons/react/dist/icons/AppStoreLogo'));
const AppWindow = lazy(() => import('@phosphor-icons/react/dist/icons/AppWindow'));
const AppleLogo = lazy(() => import('@phosphor-icons/react/dist/icons/AppleLogo'));
const ApplePodcastsLogo = lazy(() => import('@phosphor-icons/react/dist/icons/ApplePodcastsLogo'));
const Archive = lazy(() => import('@phosphor-icons/react/dist/icons/Archive'));
const ArchiveBox = lazy(() => import('@phosphor-icons/react/dist/icons/ArchiveBox'));
const ArchiveTray = lazy(() => import('@phosphor-icons/react/dist/icons/ArchiveTray'));
const Armchair = lazy(() => import('@phosphor-icons/react/dist/icons/Armchair'));
const ArrowArcLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowArcLeft'));
const ArrowArcRight = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowArcRight'));
const ArrowBendDoubleUpLeft = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowBendDoubleUpLeft')
);
const ArrowBendDoubleUpRight = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowBendDoubleUpRight')
);
const ArrowBendDownLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowBendDownLeft'));
const ArrowBendDownRight = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowBendDownRight')
);
const ArrowBendLeftDown = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowBendLeftDown'));
const ArrowBendLeftUp = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowBendLeftUp'));
const ArrowBendRightDown = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowBendRightDown')
);
const ArrowBendRightUp = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowBendRightUp'));
const ArrowBendUpLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowBendUpLeft'));
const ArrowBendUpRight = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowBendUpRight'));
const ArrowCircleDown = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowCircleDown'));
const ArrowCircleDownLeft = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowCircleDownLeft')
);
const ArrowCircleDownRight = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowCircleDownRight')
);
const ArrowCircleLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowCircleLeft'));
const ArrowCircleRight = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowCircleRight'));
const ArrowCircleUp = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowCircleUp'));
const ArrowCircleUpLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowCircleUpLeft'));
const ArrowCircleUpRight = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowCircleUpRight')
);
const ArrowClockwise = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowClockwise'));
const ArrowCounterClockwise = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowCounterClockwise')
);
const ArrowDown = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowDown'));
const ArrowDownLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowDownLeft'));
const ArrowDownRight = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowDownRight'));
const ArrowElbowDownLeft = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowElbowDownLeft')
);
const ArrowElbowDownRight = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowElbowDownRight')
);
const ArrowElbowLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowElbowLeft'));
const ArrowElbowLeftDown = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowElbowLeftDown')
);
const ArrowElbowLeftUp = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowElbowLeftUp'));
const ArrowElbowRight = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowElbowRight'));
const ArrowElbowRightDown = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowElbowRightDown')
);
const ArrowElbowRightUp = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowElbowRightUp'));
const ArrowElbowUpLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowElbowUpLeft'));
const ArrowElbowUpRight = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowElbowUpRight'));
const ArrowFatDown = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowFatDown'));
const ArrowFatLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowFatLeft'));
const ArrowFatLineDown = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowFatLineDown'));
const ArrowFatLineLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowFatLineLeft'));
const ArrowFatLineRight = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowFatLineRight'));
const ArrowFatLineUp = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowFatLineUp'));
const ArrowFatLinesDown = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowFatLinesDown'));
const ArrowFatLinesLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowFatLinesLeft'));
const ArrowFatLinesRight = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowFatLinesRight')
);
const ArrowFatLinesUp = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowFatLinesUp'));
const ArrowFatRight = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowFatRight'));
const ArrowFatUp = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowFatUp'));
const ArrowLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowLeft'));
const ArrowLineDown = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowLineDown'));
const ArrowLineDownLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowLineDownLeft'));
const ArrowLineDownRight = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowLineDownRight')
);
const ArrowLineLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowLineLeft'));
const ArrowLineRight = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowLineRight'));
const ArrowLineUp = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowLineUp'));
const ArrowLineUpLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowLineUpLeft'));
const ArrowLineUpRight = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowLineUpRight'));
const ArrowRight = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowRight'));
const ArrowSquareDown = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowSquareDown'));
const ArrowSquareDownLeft = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowSquareDownLeft')
);
const ArrowSquareDownRight = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowSquareDownRight')
);
const ArrowSquareIn = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowSquareIn'));
const ArrowSquareLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowSquareLeft'));
const ArrowSquareOut = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowSquareOut'));
const ArrowSquareRight = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowSquareRight'));
const ArrowSquareUp = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowSquareUp'));
const ArrowSquareUpLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowSquareUpLeft'));
const ArrowSquareUpRight = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowSquareUpRight')
);
const ArrowUDownLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowUDownLeft'));
const ArrowUDownRight = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowUDownRight'));
const ArrowULeftDown = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowULeftDown'));
const ArrowULeftUp = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowULeftUp'));
const ArrowURightDown = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowURightDown'));
const ArrowURightUp = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowURightUp'));
const ArrowUUpLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowUUpLeft'));
const ArrowUUpRight = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowUUpRight'));
const ArrowUp = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowUp'));
const ArrowUpLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowUpLeft'));
const ArrowUpRight = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowUpRight'));
const ArrowsClockwise = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowsClockwise'));
const ArrowsCounterClockwise = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowsCounterClockwise')
);
const ArrowsDownUp = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowsDownUp'));
const ArrowsHorizontal = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowsHorizontal'));
const ArrowsIn = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowsIn'));
const ArrowsInCardinal = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowsInCardinal'));
const ArrowsInLineHorizontal = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowsInLineHorizontal')
);
const ArrowsInLineVertical = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowsInLineVertical')
);
const ArrowsInSimple = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowsInSimple'));
const ArrowsLeftRight = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowsLeftRight'));
const ArrowsMerge = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowsMerge'));
const ArrowsOut = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowsOut'));
const ArrowsOutCardinal = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowsOutCardinal'));
const ArrowsOutLineHorizontal = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowsOutLineHorizontal')
);
const ArrowsOutLineVertical = lazy(
  () => import('@phosphor-icons/react/dist/icons/ArrowsOutLineVertical')
);
const ArrowsOutSimple = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowsOutSimple'));
const ArrowsSplit = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowsSplit'));
const ArrowsVertical = lazy(() => import('@phosphor-icons/react/dist/icons/ArrowsVertical'));
const Article = lazy(() => import('@phosphor-icons/react/dist/icons/Article'));
const ArticleMedium = lazy(() => import('@phosphor-icons/react/dist/icons/ArticleMedium'));
const ArticleNyTimes = lazy(() => import('@phosphor-icons/react/dist/icons/ArticleNyTimes'));
const Asterisk = lazy(() => import('@phosphor-icons/react/dist/icons/Asterisk'));
const AsteriskSimple = lazy(() => import('@phosphor-icons/react/dist/icons/AsteriskSimple'));
const At = lazy(() => import('@phosphor-icons/react/dist/icons/At'));
const Atom = lazy(() => import('@phosphor-icons/react/dist/icons/Atom'));
const Baby = lazy(() => import('@phosphor-icons/react/dist/icons/Baby'));
const Backpack = lazy(() => import('@phosphor-icons/react/dist/icons/Backpack'));
const Backspace = lazy(() => import('@phosphor-icons/react/dist/icons/Backspace'));
const Bag = lazy(() => import('@phosphor-icons/react/dist/icons/Bag'));
const BagSimple = lazy(() => import('@phosphor-icons/react/dist/icons/BagSimple'));
const Balloon = lazy(() => import('@phosphor-icons/react/dist/icons/Balloon'));
const Bandaids = lazy(() => import('@phosphor-icons/react/dist/icons/Bandaids'));
const Bank = lazy(() => import('@phosphor-icons/react/dist/icons/Bank'));
const Barbell = lazy(() => import('@phosphor-icons/react/dist/icons/Barbell'));
const Barcode = lazy(() => import('@phosphor-icons/react/dist/icons/Barcode'));
const Barricade = lazy(() => import('@phosphor-icons/react/dist/icons/Barricade'));
const Baseball = lazy(() => import('@phosphor-icons/react/dist/icons/Baseball'));
const BaseballCap = lazy(() => import('@phosphor-icons/react/dist/icons/BaseballCap'));
const Basket = lazy(() => import('@phosphor-icons/react/dist/icons/Basket'));
const Basketball = lazy(() => import('@phosphor-icons/react/dist/icons/Basketball'));
const Bathtub = lazy(() => import('@phosphor-icons/react/dist/icons/Bathtub'));
const BatteryCharging = lazy(() => import('@phosphor-icons/react/dist/icons/BatteryCharging'));
const BatteryChargingVertical = lazy(
  () => import('@phosphor-icons/react/dist/icons/BatteryChargingVertical')
);
const BatteryEmpty = lazy(() => import('@phosphor-icons/react/dist/icons/BatteryEmpty'));
const BatteryFull = lazy(() => import('@phosphor-icons/react/dist/icons/BatteryFull'));
const BatteryHigh = lazy(() => import('@phosphor-icons/react/dist/icons/BatteryHigh'));
const BatteryLow = lazy(() => import('@phosphor-icons/react/dist/icons/BatteryLow'));
const BatteryMedium = lazy(() => import('@phosphor-icons/react/dist/icons/BatteryMedium'));
const BatteryPlus = lazy(() => import('@phosphor-icons/react/dist/icons/BatteryPlus'));
const BatteryPlusVertical = lazy(
  () => import('@phosphor-icons/react/dist/icons/BatteryPlusVertical')
);
const BatteryVerticalEmpty = lazy(
  () => import('@phosphor-icons/react/dist/icons/BatteryVerticalEmpty')
);
const BatteryVerticalFull = lazy(
  () => import('@phosphor-icons/react/dist/icons/BatteryVerticalFull')
);
const BatteryVerticalHigh = lazy(
  () => import('@phosphor-icons/react/dist/icons/BatteryVerticalHigh')
);
const BatteryVerticalLow = lazy(
  () => import('@phosphor-icons/react/dist/icons/BatteryVerticalLow')
);
const BatteryVerticalMedium = lazy(
  () => import('@phosphor-icons/react/dist/icons/BatteryVerticalMedium')
);
const BatteryWarning = lazy(() => import('@phosphor-icons/react/dist/icons/BatteryWarning'));
const BatteryWarningVertical = lazy(
  () => import('@phosphor-icons/react/dist/icons/BatteryWarningVertical')
);
const Bed = lazy(() => import('@phosphor-icons/react/dist/icons/Bed'));
const BeerBottle = lazy(() => import('@phosphor-icons/react/dist/icons/BeerBottle'));
const BeerStein = lazy(() => import('@phosphor-icons/react/dist/icons/BeerStein'));
const BehanceLogo = lazy(() => import('@phosphor-icons/react/dist/icons/BehanceLogo'));
const Bell = lazy(() => import('@phosphor-icons/react/dist/icons/Bell'));
const BellRinging = lazy(() => import('@phosphor-icons/react/dist/icons/BellRinging'));
const BellSimple = lazy(() => import('@phosphor-icons/react/dist/icons/BellSimple'));
const BellSimpleRinging = lazy(() => import('@phosphor-icons/react/dist/icons/BellSimpleRinging'));
const BellSimpleSlash = lazy(() => import('@phosphor-icons/react/dist/icons/BellSimpleSlash'));
const BellSimpleZ = lazy(() => import('@phosphor-icons/react/dist/icons/BellSimpleZ'));
const BellSlash = lazy(() => import('@phosphor-icons/react/dist/icons/BellSlash'));
const BellZ = lazy(() => import('@phosphor-icons/react/dist/icons/BellZ'));
const BezierCurve = lazy(() => import('@phosphor-icons/react/dist/icons/BezierCurve'));
const Bicycle = lazy(() => import('@phosphor-icons/react/dist/icons/Bicycle'));
const Binoculars = lazy(() => import('@phosphor-icons/react/dist/icons/Binoculars'));
const Bird = lazy(() => import('@phosphor-icons/react/dist/icons/Bird'));
const Bluetooth = lazy(() => import('@phosphor-icons/react/dist/icons/Bluetooth'));
const BluetoothConnected = lazy(
  () => import('@phosphor-icons/react/dist/icons/BluetoothConnected')
);
const BluetoothSlash = lazy(() => import('@phosphor-icons/react/dist/icons/BluetoothSlash'));
const BluetoothX = lazy(() => import('@phosphor-icons/react/dist/icons/BluetoothX'));
const Boat = lazy(() => import('@phosphor-icons/react/dist/icons/Boat'));
const Bone = lazy(() => import('@phosphor-icons/react/dist/icons/Bone'));
const Book = lazy(() => import('@phosphor-icons/react/dist/icons/Book'));
const BookBookmark = lazy(() => import('@phosphor-icons/react/dist/icons/BookBookmark'));
const BookOpen = lazy(() => import('@phosphor-icons/react/dist/icons/BookOpen'));
const BookOpenText = lazy(() => import('@phosphor-icons/react/dist/icons/BookOpenText'));
const Bookmark = lazy(() => import('@phosphor-icons/react/dist/icons/Bookmark'));
const BookmarkSimple = lazy(() => import('@phosphor-icons/react/dist/icons/BookmarkSimple'));
const Bookmarks = lazy(() => import('@phosphor-icons/react/dist/icons/Bookmarks'));
const BookmarksSimple = lazy(() => import('@phosphor-icons/react/dist/icons/BookmarksSimple'));
const Books = lazy(() => import('@phosphor-icons/react/dist/icons/Books'));
const Boot = lazy(() => import('@phosphor-icons/react/dist/icons/Boot'));
const BoundingBox = lazy(() => import('@phosphor-icons/react/dist/icons/BoundingBox'));
const BowlFood = lazy(() => import('@phosphor-icons/react/dist/icons/BowlFood'));
const BracketsAngle = lazy(() => import('@phosphor-icons/react/dist/icons/BracketsAngle'));
const BracketsCurly = lazy(() => import('@phosphor-icons/react/dist/icons/BracketsCurly'));
const BracketsRound = lazy(() => import('@phosphor-icons/react/dist/icons/BracketsRound'));
const BracketsSquare = lazy(() => import('@phosphor-icons/react/dist/icons/BracketsSquare'));
const Brain = lazy(() => import('@phosphor-icons/react/dist/icons/Brain'));
const Brandy = lazy(() => import('@phosphor-icons/react/dist/icons/Brandy'));
const Bridge = lazy(() => import('@phosphor-icons/react/dist/icons/Bridge'));
const Briefcase = lazy(() => import('@phosphor-icons/react/dist/icons/Briefcase'));
const BriefcaseMetal = lazy(() => import('@phosphor-icons/react/dist/icons/BriefcaseMetal'));
const Broadcast = lazy(() => import('@phosphor-icons/react/dist/icons/Broadcast'));
const Broom = lazy(() => import('@phosphor-icons/react/dist/icons/Broom'));
const Browser = lazy(() => import('@phosphor-icons/react/dist/icons/Browser'));
const Browsers = lazy(() => import('@phosphor-icons/react/dist/icons/Browsers'));
const BugBeetle = lazy(() => import('@phosphor-icons/react/dist/icons/BugBeetle'));
const Bug = lazy(() => import('@phosphor-icons/react/dist/icons/Bug'));
const BugDroid = lazy(() => import('@phosphor-icons/react/dist/icons/BugDroid'));
const Buildings = lazy(() => import('@phosphor-icons/react/dist/icons/Buildings'));
const Bus = lazy(() => import('@phosphor-icons/react/dist/icons/Bus'));
const Butterfly = lazy(() => import('@phosphor-icons/react/dist/icons/Butterfly'));
const Cactus = lazy(() => import('@phosphor-icons/react/dist/icons/Cactus'));
const Cake = lazy(() => import('@phosphor-icons/react/dist/icons/Cake'));
const Calculator = lazy(() => import('@phosphor-icons/react/dist/icons/Calculator'));
const CalendarBlank = lazy(() => import('@phosphor-icons/react/dist/icons/CalendarBlank'));
const Calendar = lazy(() => import('@phosphor-icons/react/dist/icons/Calendar'));
const CalendarCheck = lazy(() => import('@phosphor-icons/react/dist/icons/CalendarCheck'));
const CalendarPlus = lazy(() => import('@phosphor-icons/react/dist/icons/CalendarPlus'));
const CalendarX = lazy(() => import('@phosphor-icons/react/dist/icons/CalendarX'));
const CallBell = lazy(() => import('@phosphor-icons/react/dist/icons/CallBell'));
const Camera = lazy(() => import('@phosphor-icons/react/dist/icons/Camera'));
const CameraPlus = lazy(() => import('@phosphor-icons/react/dist/icons/CameraPlus'));
const CameraRotate = lazy(() => import('@phosphor-icons/react/dist/icons/CameraRotate'));
const CameraSlash = lazy(() => import('@phosphor-icons/react/dist/icons/CameraSlash'));
const Campfire = lazy(() => import('@phosphor-icons/react/dist/icons/Campfire'));
const Car = lazy(() => import('@phosphor-icons/react/dist/icons/Car'));
const CarProfile = lazy(() => import('@phosphor-icons/react/dist/icons/CarProfile'));
const CarSimple = lazy(() => import('@phosphor-icons/react/dist/icons/CarSimple'));
const Cardholder = lazy(() => import('@phosphor-icons/react/dist/icons/Cardholder'));
const Cards = lazy(() => import('@phosphor-icons/react/dist/icons/Cards'));
const CaretCircleDoubleDown = lazy(
  () => import('@phosphor-icons/react/dist/icons/CaretCircleDoubleDown')
);
const CaretCircleDoubleLeft = lazy(
  () => import('@phosphor-icons/react/dist/icons/CaretCircleDoubleLeft')
);
const CaretCircleDoubleRight = lazy(
  () => import('@phosphor-icons/react/dist/icons/CaretCircleDoubleRight')
);
const CaretCircleDoubleUp = lazy(
  () => import('@phosphor-icons/react/dist/icons/CaretCircleDoubleUp')
);
const CaretCircleDown = lazy(() => import('@phosphor-icons/react/dist/icons/CaretCircleDown'));
const CaretCircleLeft = lazy(() => import('@phosphor-icons/react/dist/icons/CaretCircleLeft'));
const CaretCircleRight = lazy(() => import('@phosphor-icons/react/dist/icons/CaretCircleRight'));
const CaretCircleUp = lazy(() => import('@phosphor-icons/react/dist/icons/CaretCircleUp'));
const CaretCircleUpDown = lazy(() => import('@phosphor-icons/react/dist/icons/CaretCircleUpDown'));
const CaretDoubleDown = lazy(() => import('@phosphor-icons/react/dist/icons/CaretDoubleDown'));
const CaretDoubleLeft = lazy(() => import('@phosphor-icons/react/dist/icons/CaretDoubleLeft'));
const CaretDoubleRight = lazy(() => import('@phosphor-icons/react/dist/icons/CaretDoubleRight'));
const CaretDoubleUp = lazy(() => import('@phosphor-icons/react/dist/icons/CaretDoubleUp'));
const CaretDown = lazy(() => import('@phosphor-icons/react/dist/icons/CaretDown'));
const CaretLeft = lazy(() => import('@phosphor-icons/react/dist/icons/CaretLeft'));
const CaretRight = lazy(() => import('@phosphor-icons/react/dist/icons/CaretRight'));
const CaretUp = lazy(() => import('@phosphor-icons/react/dist/icons/CaretUp'));
const CaretUpDown = lazy(() => import('@phosphor-icons/react/dist/icons/CaretUpDown'));
const Carrot = lazy(() => import('@phosphor-icons/react/dist/icons/Carrot'));
const CassetteTape = lazy(() => import('@phosphor-icons/react/dist/icons/CassetteTape'));
const CastleTurret = lazy(() => import('@phosphor-icons/react/dist/icons/CastleTurret'));
const Cat = lazy(() => import('@phosphor-icons/react/dist/icons/Cat'));
const CellSignalFull = lazy(() => import('@phosphor-icons/react/dist/icons/CellSignalFull'));
const CellSignalHigh = lazy(() => import('@phosphor-icons/react/dist/icons/CellSignalHigh'));
const CellSignalLow = lazy(() => import('@phosphor-icons/react/dist/icons/CellSignalLow'));
const CellSignalMedium = lazy(() => import('@phosphor-icons/react/dist/icons/CellSignalMedium'));
const CellSignalNone = lazy(() => import('@phosphor-icons/react/dist/icons/CellSignalNone'));
const CellSignalSlash = lazy(() => import('@phosphor-icons/react/dist/icons/CellSignalSlash'));
const CellSignalX = lazy(() => import('@phosphor-icons/react/dist/icons/CellSignalX'));
const Certificate = lazy(() => import('@phosphor-icons/react/dist/icons/Certificate'));
const Chair = lazy(() => import('@phosphor-icons/react/dist/icons/Chair'));
const Chalkboard = lazy(() => import('@phosphor-icons/react/dist/icons/Chalkboard'));
const ChalkboardSimple = lazy(() => import('@phosphor-icons/react/dist/icons/ChalkboardSimple'));
const ChalkboardTeacher = lazy(() => import('@phosphor-icons/react/dist/icons/ChalkboardTeacher'));
const Champagne = lazy(() => import('@phosphor-icons/react/dist/icons/Champagne'));
const ChargingStation = lazy(() => import('@phosphor-icons/react/dist/icons/ChargingStation'));
const ChartBar = lazy(() => import('@phosphor-icons/react/dist/icons/ChartBar'));
const ChartBarHorizontal = lazy(
  () => import('@phosphor-icons/react/dist/icons/ChartBarHorizontal')
);
const ChartDonut = lazy(() => import('@phosphor-icons/react/dist/icons/ChartDonut'));
const ChartLine = lazy(() => import('@phosphor-icons/react/dist/icons/ChartLine'));
const ChartLineDown = lazy(() => import('@phosphor-icons/react/dist/icons/ChartLineDown'));
const ChartLineUp = lazy(() => import('@phosphor-icons/react/dist/icons/ChartLineUp'));
const ChartPie = lazy(() => import('@phosphor-icons/react/dist/icons/ChartPie'));
const ChartPieSlice = lazy(() => import('@phosphor-icons/react/dist/icons/ChartPieSlice'));
const ChartPolar = lazy(() => import('@phosphor-icons/react/dist/icons/ChartPolar'));
const ChartScatter = lazy(() => import('@phosphor-icons/react/dist/icons/ChartScatter'));
const Chat = lazy(() => import('@phosphor-icons/react/dist/icons/Chat'));
const ChatCentered = lazy(() => import('@phosphor-icons/react/dist/icons/ChatCentered'));
const ChatCenteredDots = lazy(() => import('@phosphor-icons/react/dist/icons/ChatCenteredDots'));
const ChatCenteredText = lazy(() => import('@phosphor-icons/react/dist/icons/ChatCenteredText'));
const ChatCircle = lazy(() => import('@phosphor-icons/react/dist/icons/ChatCircle'));
const ChatCircleDots = lazy(() => import('@phosphor-icons/react/dist/icons/ChatCircleDots'));
const ChatCircleText = lazy(() => import('@phosphor-icons/react/dist/icons/ChatCircleText'));
const ChatDots = lazy(() => import('@phosphor-icons/react/dist/icons/ChatDots'));
const ChatTeardrop = lazy(() => import('@phosphor-icons/react/dist/icons/ChatTeardrop'));
const ChatTeardropDots = lazy(() => import('@phosphor-icons/react/dist/icons/ChatTeardropDots'));
const ChatTeardropText = lazy(() => import('@phosphor-icons/react/dist/icons/ChatTeardropText'));
const ChatText = lazy(() => import('@phosphor-icons/react/dist/icons/ChatText'));
const Chats = lazy(() => import('@phosphor-icons/react/dist/icons/Chats'));
const ChatsCircle = lazy(() => import('@phosphor-icons/react/dist/icons/ChatsCircle'));
const ChatsTeardrop = lazy(() => import('@phosphor-icons/react/dist/icons/ChatsTeardrop'));
const Check = lazy(() => import('@phosphor-icons/react/dist/icons/Check'));
const CheckCircle = lazy(() => import('@phosphor-icons/react/dist/icons/CheckCircle'));
const CheckFat = lazy(() => import('@phosphor-icons/react/dist/icons/CheckFat'));
const CheckSquare = lazy(() => import('@phosphor-icons/react/dist/icons/CheckSquare'));
const CheckSquareOffset = lazy(() => import('@phosphor-icons/react/dist/icons/CheckSquareOffset'));
const Checks = lazy(() => import('@phosphor-icons/react/dist/icons/Checks'));
const Church = lazy(() => import('@phosphor-icons/react/dist/icons/Church'));
const Circle = lazy(() => import('@phosphor-icons/react/dist/icons/Circle'));
const CircleDashed = lazy(() => import('@phosphor-icons/react/dist/icons/CircleDashed'));
const CircleHalf = lazy(() => import('@phosphor-icons/react/dist/icons/CircleHalf'));
const CircleHalfTilt = lazy(() => import('@phosphor-icons/react/dist/icons/CircleHalfTilt'));
const CircleNotch = lazy(() => import('@phosphor-icons/react/dist/icons/CircleNotch'));
const CirclesFour = lazy(() => import('@phosphor-icons/react/dist/icons/CirclesFour'));
const CirclesThree = lazy(() => import('@phosphor-icons/react/dist/icons/CirclesThree'));
const CirclesThreePlus = lazy(() => import('@phosphor-icons/react/dist/icons/CirclesThreePlus'));
const Circuitry = lazy(() => import('@phosphor-icons/react/dist/icons/Circuitry'));
const Clipboard = lazy(() => import('@phosphor-icons/react/dist/icons/Clipboard'));
const ClipboardText = lazy(() => import('@phosphor-icons/react/dist/icons/ClipboardText'));
const ClockAfternoon = lazy(() => import('@phosphor-icons/react/dist/icons/ClockAfternoon'));
const Clock = lazy(() => import('@phosphor-icons/react/dist/icons/Clock'));
const ClockClockwise = lazy(() => import('@phosphor-icons/react/dist/icons/ClockClockwise'));
const ClockCountdown = lazy(() => import('@phosphor-icons/react/dist/icons/ClockCountdown'));
const ClockCounterClockwise = lazy(
  () => import('@phosphor-icons/react/dist/icons/ClockCounterClockwise')
);
const ClosedCaptioning = lazy(() => import('@phosphor-icons/react/dist/icons/ClosedCaptioning'));
const CloudArrowDown = lazy(() => import('@phosphor-icons/react/dist/icons/CloudArrowDown'));
const CloudArrowUp = lazy(() => import('@phosphor-icons/react/dist/icons/CloudArrowUp'));
const Cloud = lazy(() => import('@phosphor-icons/react/dist/icons/Cloud'));
const CloudCheck = lazy(() => import('@phosphor-icons/react/dist/icons/CloudCheck'));
const CloudFog = lazy(() => import('@phosphor-icons/react/dist/icons/CloudFog'));
const CloudLightning = lazy(() => import('@phosphor-icons/react/dist/icons/CloudLightning'));
const CloudMoon = lazy(() => import('@phosphor-icons/react/dist/icons/CloudMoon'));
const CloudRain = lazy(() => import('@phosphor-icons/react/dist/icons/CloudRain'));
const CloudSlash = lazy(() => import('@phosphor-icons/react/dist/icons/CloudSlash'));
const CloudSnow = lazy(() => import('@phosphor-icons/react/dist/icons/CloudSnow'));
const CloudSun = lazy(() => import('@phosphor-icons/react/dist/icons/CloudSun'));
const CloudWarning = lazy(() => import('@phosphor-icons/react/dist/icons/CloudWarning'));
const CloudX = lazy(() => import('@phosphor-icons/react/dist/icons/CloudX'));
const Club = lazy(() => import('@phosphor-icons/react/dist/icons/Club'));
const CoatHanger = lazy(() => import('@phosphor-icons/react/dist/icons/CoatHanger'));
const CodaLogo = lazy(() => import('@phosphor-icons/react/dist/icons/CodaLogo'));
const CodeBlock = lazy(() => import('@phosphor-icons/react/dist/icons/CodeBlock'));
const Code = lazy(() => import('@phosphor-icons/react/dist/icons/Code'));
const CodeSimple = lazy(() => import('@phosphor-icons/react/dist/icons/CodeSimple'));
const CodepenLogo = lazy(() => import('@phosphor-icons/react/dist/icons/CodepenLogo'));
const CodesandboxLogo = lazy(() => import('@phosphor-icons/react/dist/icons/CodesandboxLogo'));
const Coffee = lazy(() => import('@phosphor-icons/react/dist/icons/Coffee'));
const Coin = lazy(() => import('@phosphor-icons/react/dist/icons/Coin'));
const CoinVertical = lazy(() => import('@phosphor-icons/react/dist/icons/CoinVertical'));
const Coins = lazy(() => import('@phosphor-icons/react/dist/icons/Coins'));
const Columns = lazy(() => import('@phosphor-icons/react/dist/icons/Columns'));
const Command = lazy(() => import('@phosphor-icons/react/dist/icons/Command'));
const Compass = lazy(() => import('@phosphor-icons/react/dist/icons/Compass'));
const CompassTool = lazy(() => import('@phosphor-icons/react/dist/icons/CompassTool'));
const ComputerTower = lazy(() => import('@phosphor-icons/react/dist/icons/ComputerTower'));
const Confetti = lazy(() => import('@phosphor-icons/react/dist/icons/Confetti'));
const ContactlessPayment = lazy(
  () => import('@phosphor-icons/react/dist/icons/ContactlessPayment')
);
const Control = lazy(() => import('@phosphor-icons/react/dist/icons/Control'));
const Cookie = lazy(() => import('@phosphor-icons/react/dist/icons/Cookie'));
const CookingPot = lazy(() => import('@phosphor-icons/react/dist/icons/CookingPot'));
const Copy = lazy(() => import('@phosphor-icons/react/dist/icons/Copy'));
const CopySimple = lazy(() => import('@phosphor-icons/react/dist/icons/CopySimple'));
const Copyleft = lazy(() => import('@phosphor-icons/react/dist/icons/Copyleft'));
const Copyright = lazy(() => import('@phosphor-icons/react/dist/icons/Copyright'));
const CornersIn = lazy(() => import('@phosphor-icons/react/dist/icons/CornersIn'));
const CornersOut = lazy(() => import('@phosphor-icons/react/dist/icons/CornersOut'));
const Couch = lazy(() => import('@phosphor-icons/react/dist/icons/Couch'));
const Cpu = lazy(() => import('@phosphor-icons/react/dist/icons/Cpu'));
const CreditCard = lazy(() => import('@phosphor-icons/react/dist/icons/CreditCard'));
const Crop = lazy(() => import('@phosphor-icons/react/dist/icons/Crop'));
const Cross = lazy(() => import('@phosphor-icons/react/dist/icons/Cross'));
const Crosshair = lazy(() => import('@phosphor-icons/react/dist/icons/Crosshair'));
const CrosshairSimple = lazy(() => import('@phosphor-icons/react/dist/icons/CrosshairSimple'));
const Crown = lazy(() => import('@phosphor-icons/react/dist/icons/Crown'));
const CrownSimple = lazy(() => import('@phosphor-icons/react/dist/icons/CrownSimple'));
const Cube = lazy(() => import('@phosphor-icons/react/dist/icons/Cube'));
const CubeFocus = lazy(() => import('@phosphor-icons/react/dist/icons/CubeFocus'));
const CubeTransparent = lazy(() => import('@phosphor-icons/react/dist/icons/CubeTransparent'));
const CurrencyBtc = lazy(() => import('@phosphor-icons/react/dist/icons/CurrencyBtc'));
const CurrencyCircleDollar = lazy(
  () => import('@phosphor-icons/react/dist/icons/CurrencyCircleDollar')
);
const CurrencyCny = lazy(() => import('@phosphor-icons/react/dist/icons/CurrencyCny'));
const CurrencyDollar = lazy(() => import('@phosphor-icons/react/dist/icons/CurrencyDollar'));
const CurrencyDollarSimple = lazy(
  () => import('@phosphor-icons/react/dist/icons/CurrencyDollarSimple')
);
const CurrencyEth = lazy(() => import('@phosphor-icons/react/dist/icons/CurrencyEth'));
const CurrencyEur = lazy(() => import('@phosphor-icons/react/dist/icons/CurrencyEur'));
const CurrencyGbp = lazy(() => import('@phosphor-icons/react/dist/icons/CurrencyGbp'));
const CurrencyInr = lazy(() => import('@phosphor-icons/react/dist/icons/CurrencyInr'));
const CurrencyJpy = lazy(() => import('@phosphor-icons/react/dist/icons/CurrencyJpy'));
const CurrencyKrw = lazy(() => import('@phosphor-icons/react/dist/icons/CurrencyKrw'));
const CurrencyKzt = lazy(() => import('@phosphor-icons/react/dist/icons/CurrencyKzt'));
const CurrencyNgn = lazy(() => import('@phosphor-icons/react/dist/icons/CurrencyNgn'));
const CurrencyRub = lazy(() => import('@phosphor-icons/react/dist/icons/CurrencyRub'));
const Cursor = lazy(() => import('@phosphor-icons/react/dist/icons/Cursor'));
const CursorClick = lazy(() => import('@phosphor-icons/react/dist/icons/CursorClick'));
const CursorText = lazy(() => import('@phosphor-icons/react/dist/icons/CursorText'));
const Cylinder = lazy(() => import('@phosphor-icons/react/dist/icons/Cylinder'));
const Database = lazy(() => import('@phosphor-icons/react/dist/icons/Database'));
const Desktop = lazy(() => import('@phosphor-icons/react/dist/icons/Desktop'));
const DesktopTower = lazy(() => import('@phosphor-icons/react/dist/icons/DesktopTower'));
const Detective = lazy(() => import('@phosphor-icons/react/dist/icons/Detective'));
const DevToLogo = lazy(() => import('@phosphor-icons/react/dist/icons/DevToLogo'));
const DeviceMobile = lazy(() => import('@phosphor-icons/react/dist/icons/DeviceMobile'));
const DeviceMobileCamera = lazy(
  () => import('@phosphor-icons/react/dist/icons/DeviceMobileCamera')
);
const DeviceMobileSpeaker = lazy(
  () => import('@phosphor-icons/react/dist/icons/DeviceMobileSpeaker')
);
const DeviceTablet = lazy(() => import('@phosphor-icons/react/dist/icons/DeviceTablet'));
const DeviceTabletCamera = lazy(
  () => import('@phosphor-icons/react/dist/icons/DeviceTabletCamera')
);
const DeviceTabletSpeaker = lazy(
  () => import('@phosphor-icons/react/dist/icons/DeviceTabletSpeaker')
);
const Devices = lazy(() => import('@phosphor-icons/react/dist/icons/Devices'));
const Diamond = lazy(() => import('@phosphor-icons/react/dist/icons/Diamond'));
const DiamondsFour = lazy(() => import('@phosphor-icons/react/dist/icons/DiamondsFour'));
const DiceFive = lazy(() => import('@phosphor-icons/react/dist/icons/DiceFive'));
const DiceFour = lazy(() => import('@phosphor-icons/react/dist/icons/DiceFour'));
const DiceOne = lazy(() => import('@phosphor-icons/react/dist/icons/DiceOne'));
const DiceSix = lazy(() => import('@phosphor-icons/react/dist/icons/DiceSix'));
const DiceThree = lazy(() => import('@phosphor-icons/react/dist/icons/DiceThree'));
const DiceTwo = lazy(() => import('@phosphor-icons/react/dist/icons/DiceTwo'));
const Disc = lazy(() => import('@phosphor-icons/react/dist/icons/Disc'));
const DiscordLogo = lazy(() => import('@phosphor-icons/react/dist/icons/DiscordLogo'));
const Divide = lazy(() => import('@phosphor-icons/react/dist/icons/Divide'));
const Dna = lazy(() => import('@phosphor-icons/react/dist/icons/Dna'));
const Dog = lazy(() => import('@phosphor-icons/react/dist/icons/Dog'));
const Door = lazy(() => import('@phosphor-icons/react/dist/icons/Door'));
const DoorOpen = lazy(() => import('@phosphor-icons/react/dist/icons/DoorOpen'));
const Dot = lazy(() => import('@phosphor-icons/react/dist/icons/Dot'));
const DotOutline = lazy(() => import('@phosphor-icons/react/dist/icons/DotOutline'));
const DotsNine = lazy(() => import('@phosphor-icons/react/dist/icons/DotsNine'));
const DotsSix = lazy(() => import('@phosphor-icons/react/dist/icons/DotsSix'));
const DotsSixVertical = lazy(() => import('@phosphor-icons/react/dist/icons/DotsSixVertical'));
const DotsThree = lazy(() => import('@phosphor-icons/react/dist/icons/DotsThree'));
const DotsThreeCircle = lazy(() => import('@phosphor-icons/react/dist/icons/DotsThreeCircle'));
const DotsThreeCircleVertical = lazy(
  () => import('@phosphor-icons/react/dist/icons/DotsThreeCircleVertical')
);
const DotsThreeOutline = lazy(() => import('@phosphor-icons/react/dist/icons/DotsThreeOutline'));
const DotsThreeOutlineVertical = lazy(
  () => import('@phosphor-icons/react/dist/icons/DotsThreeOutlineVertical')
);
const DotsThreeVertical = lazy(() => import('@phosphor-icons/react/dist/icons/DotsThreeVertical'));
const Download = lazy(() => import('@phosphor-icons/react/dist/icons/Download'));
const DownloadSimple = lazy(() => import('@phosphor-icons/react/dist/icons/DownloadSimple'));
const Dress = lazy(() => import('@phosphor-icons/react/dist/icons/Dress'));
const DribbbleLogo = lazy(() => import('@phosphor-icons/react/dist/icons/DribbbleLogo'));
const Drop = lazy(() => import('@phosphor-icons/react/dist/icons/Drop'));
const DropHalf = lazy(() => import('@phosphor-icons/react/dist/icons/DropHalf'));
const DropHalfBottom = lazy(() => import('@phosphor-icons/react/dist/icons/DropHalfBottom'));
const DropboxLogo = lazy(() => import('@phosphor-icons/react/dist/icons/DropboxLogo'));
const Ear = lazy(() => import('@phosphor-icons/react/dist/icons/Ear'));
const EarSlash = lazy(() => import('@phosphor-icons/react/dist/icons/EarSlash'));
const Egg = lazy(() => import('@phosphor-icons/react/dist/icons/Egg'));
const EggCrack = lazy(() => import('@phosphor-icons/react/dist/icons/EggCrack'));
const Eject = lazy(() => import('@phosphor-icons/react/dist/icons/Eject'));
const EjectSimple = lazy(() => import('@phosphor-icons/react/dist/icons/EjectSimple'));
const Elevator = lazy(() => import('@phosphor-icons/react/dist/icons/Elevator'));
const Engine = lazy(() => import('@phosphor-icons/react/dist/icons/Engine'));
const Envelope = lazy(() => import('@phosphor-icons/react/dist/icons/Envelope'));
const EnvelopeOpen = lazy(() => import('@phosphor-icons/react/dist/icons/EnvelopeOpen'));
const EnvelopeSimple = lazy(() => import('@phosphor-icons/react/dist/icons/EnvelopeSimple'));
const EnvelopeSimpleOpen = lazy(
  () => import('@phosphor-icons/react/dist/icons/EnvelopeSimpleOpen')
);
const Equalizer = lazy(() => import('@phosphor-icons/react/dist/icons/Equalizer'));
const Equals = lazy(() => import('@phosphor-icons/react/dist/icons/Equals'));
const Eraser = lazy(() => import('@phosphor-icons/react/dist/icons/Eraser'));
const EscalatorDown = lazy(() => import('@phosphor-icons/react/dist/icons/EscalatorDown'));
const EscalatorUp = lazy(() => import('@phosphor-icons/react/dist/icons/EscalatorUp'));
const Exam = lazy(() => import('@phosphor-icons/react/dist/icons/Exam'));
const Exclude = lazy(() => import('@phosphor-icons/react/dist/icons/Exclude'));
const ExcludeSquare = lazy(() => import('@phosphor-icons/react/dist/icons/ExcludeSquare'));
const Export = lazy(() => import('@phosphor-icons/react/dist/icons/Export'));
const Eye = lazy(() => import('@phosphor-icons/react/dist/icons/Eye'));
const EyeClosed = lazy(() => import('@phosphor-icons/react/dist/icons/EyeClosed'));
const EyeSlash = lazy(() => import('@phosphor-icons/react/dist/icons/EyeSlash'));
const Eyedropper = lazy(() => import('@phosphor-icons/react/dist/icons/Eyedropper'));
const EyedropperSample = lazy(() => import('@phosphor-icons/react/dist/icons/EyedropperSample'));
const Eyeglasses = lazy(() => import('@phosphor-icons/react/dist/icons/Eyeglasses'));
const FaceMask = lazy(() => import('@phosphor-icons/react/dist/icons/FaceMask'));
const FacebookLogo = lazy(() => import('@phosphor-icons/react/dist/icons/FacebookLogo'));
const Factory = lazy(() => import('@phosphor-icons/react/dist/icons/Factory'));
const Faders = lazy(() => import('@phosphor-icons/react/dist/icons/Faders'));
const FadersHorizontal = lazy(() => import('@phosphor-icons/react/dist/icons/FadersHorizontal'));
const Fan = lazy(() => import('@phosphor-icons/react/dist/icons/Fan'));
const FastForward = lazy(() => import('@phosphor-icons/react/dist/icons/FastForward'));
const FastForwardCircle = lazy(() => import('@phosphor-icons/react/dist/icons/FastForwardCircle'));
const Feather = lazy(() => import('@phosphor-icons/react/dist/icons/Feather'));
const FigmaLogo = lazy(() => import('@phosphor-icons/react/dist/icons/FigmaLogo'));
const FileArchive = lazy(() => import('@phosphor-icons/react/dist/icons/FileArchive'));
const FileArrowDown = lazy(() => import('@phosphor-icons/react/dist/icons/FileArrowDown'));
const FileArrowUp = lazy(() => import('@phosphor-icons/react/dist/icons/FileArrowUp'));
const FileAudio = lazy(() => import('@phosphor-icons/react/dist/icons/FileAudio'));
const File = lazy(() => import('@phosphor-icons/react/dist/icons/File'));
const FileCloud = lazy(() => import('@phosphor-icons/react/dist/icons/FileCloud'));
const FileCode = lazy(() => import('@phosphor-icons/react/dist/icons/FileCode'));
const FileCss = lazy(() => import('@phosphor-icons/react/dist/icons/FileCss'));
const FileCsv = lazy(() => import('@phosphor-icons/react/dist/icons/FileCsv'));
const FileDashed = lazy(() => import('@phosphor-icons/react/dist/icons/FileDashed'));
const FileDotted = lazy(() => import('@phosphor-icons/react/dist/icons/FileDashed'));
const FileDoc = lazy(() => import('@phosphor-icons/react/dist/icons/FileDoc'));
const FileHtml = lazy(() => import('@phosphor-icons/react/dist/icons/FileHtml'));
const FileImage = lazy(() => import('@phosphor-icons/react/dist/icons/FileImage'));
const FileJpg = lazy(() => import('@phosphor-icons/react/dist/icons/FileJpg'));
const FileJs = lazy(() => import('@phosphor-icons/react/dist/icons/FileJs'));
const FileJsx = lazy(() => import('@phosphor-icons/react/dist/icons/FileJsx'));
const FileLock = lazy(() => import('@phosphor-icons/react/dist/icons/FileLock'));
const FileMagnifyingGlass = lazy(
  () => import('@phosphor-icons/react/dist/icons/FileMagnifyingGlass')
);
const FileSearch = lazy(() => import('@phosphor-icons/react/dist/icons/FileMagnifyingGlass'));
const FileMinus = lazy(() => import('@phosphor-icons/react/dist/icons/FileMinus'));
const FilePdf = lazy(() => import('@phosphor-icons/react/dist/icons/FilePdf'));
const FilePlus = lazy(() => import('@phosphor-icons/react/dist/icons/FilePlus'));
const FilePng = lazy(() => import('@phosphor-icons/react/dist/icons/FilePng'));
const FilePpt = lazy(() => import('@phosphor-icons/react/dist/icons/FilePpt'));
const FileRs = lazy(() => import('@phosphor-icons/react/dist/icons/FileRs'));
const FileSql = lazy(() => import('@phosphor-icons/react/dist/icons/FileSql'));
const FileSvg = lazy(() => import('@phosphor-icons/react/dist/icons/FileSvg'));
const FileText = lazy(() => import('@phosphor-icons/react/dist/icons/FileText'));
const FileTs = lazy(() => import('@phosphor-icons/react/dist/icons/FileTs'));
const FileTsx = lazy(() => import('@phosphor-icons/react/dist/icons/FileTsx'));
const FileVideo = lazy(() => import('@phosphor-icons/react/dist/icons/FileVideo'));
const FileVue = lazy(() => import('@phosphor-icons/react/dist/icons/FileVue'));
const FileX = lazy(() => import('@phosphor-icons/react/dist/icons/FileX'));
const FileXls = lazy(() => import('@phosphor-icons/react/dist/icons/FileXls'));
const FileZip = lazy(() => import('@phosphor-icons/react/dist/icons/FileZip'));
const Files = lazy(() => import('@phosphor-icons/react/dist/icons/Files'));
const FilmReel = lazy(() => import('@phosphor-icons/react/dist/icons/FilmReel'));
const FilmScript = lazy(() => import('@phosphor-icons/react/dist/icons/FilmScript'));
const FilmSlate = lazy(() => import('@phosphor-icons/react/dist/icons/FilmSlate'));
const FilmStrip = lazy(() => import('@phosphor-icons/react/dist/icons/FilmStrip'));
const Fingerprint = lazy(() => import('@phosphor-icons/react/dist/icons/Fingerprint'));
const FingerprintSimple = lazy(() => import('@phosphor-icons/react/dist/icons/FingerprintSimple'));
const FinnTheHuman = lazy(() => import('@phosphor-icons/react/dist/icons/FinnTheHuman'));
const Fire = lazy(() => import('@phosphor-icons/react/dist/icons/Fire'));
const FireExtinguisher = lazy(() => import('@phosphor-icons/react/dist/icons/FireExtinguisher'));
const FireSimple = lazy(() => import('@phosphor-icons/react/dist/icons/FireSimple'));
const FirstAid = lazy(() => import('@phosphor-icons/react/dist/icons/FirstAid'));
const FirstAidKit = lazy(() => import('@phosphor-icons/react/dist/icons/FirstAidKit'));
const Fish = lazy(() => import('@phosphor-icons/react/dist/icons/Fish'));
const FishSimple = lazy(() => import('@phosphor-icons/react/dist/icons/FishSimple'));
const FlagBanner = lazy(() => import('@phosphor-icons/react/dist/icons/FlagBanner'));
const Flag = lazy(() => import('@phosphor-icons/react/dist/icons/Flag'));
const FlagCheckered = lazy(() => import('@phosphor-icons/react/dist/icons/FlagCheckered'));
const FlagPennant = lazy(() => import('@phosphor-icons/react/dist/icons/FlagPennant'));
const Flame = lazy(() => import('@phosphor-icons/react/dist/icons/Flame'));
const Flashlight = lazy(() => import('@phosphor-icons/react/dist/icons/Flashlight'));
const Flask = lazy(() => import('@phosphor-icons/react/dist/icons/Flask'));
const FloppyDiskBack = lazy(() => import('@phosphor-icons/react/dist/icons/FloppyDiskBack'));
const FloppyDisk = lazy(() => import('@phosphor-icons/react/dist/icons/FloppyDisk'));
const FlowArrow = lazy(() => import('@phosphor-icons/react/dist/icons/FlowArrow'));
const Flower = lazy(() => import('@phosphor-icons/react/dist/icons/Flower'));
const FlowerLotus = lazy(() => import('@phosphor-icons/react/dist/icons/FlowerLotus'));
const FlowerTulip = lazy(() => import('@phosphor-icons/react/dist/icons/FlowerTulip'));
const FlyingSaucer = lazy(() => import('@phosphor-icons/react/dist/icons/FlyingSaucer'));
const Folder = lazy(() => import('@phosphor-icons/react/dist/icons/Folder'));
const FolderDashed = lazy(() => import('@phosphor-icons/react/dist/icons/FolderDashed'));
const FolderDotted = lazy(() => import('@phosphor-icons/react/dist/icons/FolderDashed'));
const FolderLock = lazy(() => import('@phosphor-icons/react/dist/icons/FolderLock'));
const FolderMinus = lazy(() => import('@phosphor-icons/react/dist/icons/FolderMinus'));
const FolderNotch = lazy(() => import('@phosphor-icons/react/dist/icons/FolderNotch'));
const FolderNotchMinus = lazy(() => import('@phosphor-icons/react/dist/icons/FolderNotchMinus'));
const FolderNotchOpen = lazy(() => import('@phosphor-icons/react/dist/icons/FolderNotchOpen'));
const FolderNotchPlus = lazy(() => import('@phosphor-icons/react/dist/icons/FolderNotchPlus'));
const FolderOpen = lazy(() => import('@phosphor-icons/react/dist/icons/FolderOpen'));
const FolderPlus = lazy(() => import('@phosphor-icons/react/dist/icons/FolderPlus'));
const FolderSimple = lazy(() => import('@phosphor-icons/react/dist/icons/FolderSimple'));
const FolderSimpleDashed = lazy(
  () => import('@phosphor-icons/react/dist/icons/FolderSimpleDashed')
);
const FolderSimpleDotted = lazy(
  () => import('@phosphor-icons/react/dist/icons/FolderSimpleDashed')
);
const FolderSimpleLock = lazy(() => import('@phosphor-icons/react/dist/icons/FolderSimpleLock'));
const FolderSimpleMinus = lazy(() => import('@phosphor-icons/react/dist/icons/FolderSimpleMinus'));
const FolderSimplePlus = lazy(() => import('@phosphor-icons/react/dist/icons/FolderSimplePlus'));
const FolderSimpleStar = lazy(() => import('@phosphor-icons/react/dist/icons/FolderSimpleStar'));
const FolderSimpleUser = lazy(() => import('@phosphor-icons/react/dist/icons/FolderSimpleUser'));
const FolderStar = lazy(() => import('@phosphor-icons/react/dist/icons/FolderStar'));
const FolderUser = lazy(() => import('@phosphor-icons/react/dist/icons/FolderUser'));
const Folders = lazy(() => import('@phosphor-icons/react/dist/icons/Folders'));
const Football = lazy(() => import('@phosphor-icons/react/dist/icons/Football'));
const Footprints = lazy(() => import('@phosphor-icons/react/dist/icons/Footprints'));
const ForkKnife = lazy(() => import('@phosphor-icons/react/dist/icons/ForkKnife'));
const FrameCorners = lazy(() => import('@phosphor-icons/react/dist/icons/FrameCorners'));
const FramerLogo = lazy(() => import('@phosphor-icons/react/dist/icons/FramerLogo'));
const Function = lazy(() => import('@phosphor-icons/react/dist/icons/Function'));
const Funnel = lazy(() => import('@phosphor-icons/react/dist/icons/Funnel'));
const FunnelSimple = lazy(() => import('@phosphor-icons/react/dist/icons/FunnelSimple'));
const GameController = lazy(() => import('@phosphor-icons/react/dist/icons/GameController'));
const Garage = lazy(() => import('@phosphor-icons/react/dist/icons/Garage'));
const GasCan = lazy(() => import('@phosphor-icons/react/dist/icons/GasCan'));
const GasPump = lazy(() => import('@phosphor-icons/react/dist/icons/GasPump'));
const Gauge = lazy(() => import('@phosphor-icons/react/dist/icons/Gauge'));
const Gavel = lazy(() => import('@phosphor-icons/react/dist/icons/Gavel'));
const Gear = lazy(() => import('@phosphor-icons/react/dist/icons/Gear'));
const GearFine = lazy(() => import('@phosphor-icons/react/dist/icons/GearFine'));
const GearSix = lazy(() => import('@phosphor-icons/react/dist/icons/GearSix'));
const GenderFemale = lazy(() => import('@phosphor-icons/react/dist/icons/GenderFemale'));
const GenderIntersex = lazy(() => import('@phosphor-icons/react/dist/icons/GenderIntersex'));
const GenderMale = lazy(() => import('@phosphor-icons/react/dist/icons/GenderMale'));
const GenderNeuter = lazy(() => import('@phosphor-icons/react/dist/icons/GenderNeuter'));
const GenderNonbinary = lazy(() => import('@phosphor-icons/react/dist/icons/GenderNonbinary'));
const GenderTransgender = lazy(() => import('@phosphor-icons/react/dist/icons/GenderTransgender'));
const Ghost = lazy(() => import('@phosphor-icons/react/dist/icons/Ghost'));
const Gif = lazy(() => import('@phosphor-icons/react/dist/icons/Gif'));
const Gift = lazy(() => import('@phosphor-icons/react/dist/icons/Gift'));
const GitBranch = lazy(() => import('@phosphor-icons/react/dist/icons/GitBranch'));
const GitCommit = lazy(() => import('@phosphor-icons/react/dist/icons/GitCommit'));
const GitDiff = lazy(() => import('@phosphor-icons/react/dist/icons/GitDiff'));
const GitFork = lazy(() => import('@phosphor-icons/react/dist/icons/GitFork'));
const GitMerge = lazy(() => import('@phosphor-icons/react/dist/icons/GitMerge'));
const GitPullRequest = lazy(() => import('@phosphor-icons/react/dist/icons/GitPullRequest'));
const GithubLogo = lazy(() => import('@phosphor-icons/react/dist/icons/GithubLogo'));
const GitlabLogo = lazy(() => import('@phosphor-icons/react/dist/icons/GitlabLogo'));
const GitlabLogoSimple = lazy(() => import('@phosphor-icons/react/dist/icons/GitlabLogoSimple'));
const Globe = lazy(() => import('@phosphor-icons/react/dist/icons/Globe'));
const GlobeHemisphereEast = lazy(
  () => import('@phosphor-icons/react/dist/icons/GlobeHemisphereEast')
);
const GlobeHemisphereWest = lazy(
  () => import('@phosphor-icons/react/dist/icons/GlobeHemisphereWest')
);
const GlobeSimple = lazy(() => import('@phosphor-icons/react/dist/icons/GlobeSimple'));
const GlobeStand = lazy(() => import('@phosphor-icons/react/dist/icons/GlobeStand'));
const Goggles = lazy(() => import('@phosphor-icons/react/dist/icons/Goggles'));
const GoodreadsLogo = lazy(() => import('@phosphor-icons/react/dist/icons/GoodreadsLogo'));
const GoogleCardboardLogo = lazy(
  () => import('@phosphor-icons/react/dist/icons/GoogleCardboardLogo')
);
const GoogleChromeLogo = lazy(() => import('@phosphor-icons/react/dist/icons/GoogleChromeLogo'));
const GoogleDriveLogo = lazy(() => import('@phosphor-icons/react/dist/icons/GoogleDriveLogo'));
const GoogleLogo = lazy(() => import('@phosphor-icons/react/dist/icons/GoogleLogo'));
const GooglePhotosLogo = lazy(() => import('@phosphor-icons/react/dist/icons/GooglePhotosLogo'));
const GooglePlayLogo = lazy(() => import('@phosphor-icons/react/dist/icons/GooglePlayLogo'));
const GooglePodcastsLogo = lazy(
  () => import('@phosphor-icons/react/dist/icons/GooglePodcastsLogo')
);
const Gradient = lazy(() => import('@phosphor-icons/react/dist/icons/Gradient'));
const GraduationCap = lazy(() => import('@phosphor-icons/react/dist/icons/GraduationCap'));
const Grains = lazy(() => import('@phosphor-icons/react/dist/icons/Grains'));
const GrainsSlash = lazy(() => import('@phosphor-icons/react/dist/icons/GrainsSlash'));
const Graph = lazy(() => import('@phosphor-icons/react/dist/icons/Graph'));
const GridFour = lazy(() => import('@phosphor-icons/react/dist/icons/GridFour'));
const GridNine = lazy(() => import('@phosphor-icons/react/dist/icons/GridNine'));
const Guitar = lazy(() => import('@phosphor-icons/react/dist/icons/Guitar'));
const Hamburger = lazy(() => import('@phosphor-icons/react/dist/icons/Hamburger'));
const Hammer = lazy(() => import('@phosphor-icons/react/dist/icons/Hammer'));
const Hand = lazy(() => import('@phosphor-icons/react/dist/icons/Hand'));
const HandCoins = lazy(() => import('@phosphor-icons/react/dist/icons/HandCoins'));
const HandEye = lazy(() => import('@phosphor-icons/react/dist/icons/HandEye'));
const HandFist = lazy(() => import('@phosphor-icons/react/dist/icons/HandFist'));
const HandGrabbing = lazy(() => import('@phosphor-icons/react/dist/icons/HandGrabbing'));
const HandHeart = lazy(() => import('@phosphor-icons/react/dist/icons/HandHeart'));
const HandPalm = lazy(() => import('@phosphor-icons/react/dist/icons/HandPalm'));
const HandPointing = lazy(() => import('@phosphor-icons/react/dist/icons/HandPointing'));
const HandSoap = lazy(() => import('@phosphor-icons/react/dist/icons/HandSoap'));
const HandSwipeLeft = lazy(() => import('@phosphor-icons/react/dist/icons/HandSwipeLeft'));
const HandSwipeRight = lazy(() => import('@phosphor-icons/react/dist/icons/HandSwipeRight'));
const HandTap = lazy(() => import('@phosphor-icons/react/dist/icons/HandTap'));
const HandWaving = lazy(() => import('@phosphor-icons/react/dist/icons/HandWaving'));
const Handbag = lazy(() => import('@phosphor-icons/react/dist/icons/Handbag'));
const HandbagSimple = lazy(() => import('@phosphor-icons/react/dist/icons/HandbagSimple'));
const HandsClapping = lazy(() => import('@phosphor-icons/react/dist/icons/HandsClapping'));
const HandsPraying = lazy(() => import('@phosphor-icons/react/dist/icons/HandsPraying'));
const Handshake = lazy(() => import('@phosphor-icons/react/dist/icons/Handshake'));
const HardDrive = lazy(() => import('@phosphor-icons/react/dist/icons/HardDrive'));
const HardDrives = lazy(() => import('@phosphor-icons/react/dist/icons/HardDrives'));
const Hash = lazy(() => import('@phosphor-icons/react/dist/icons/Hash'));
const HashStraight = lazy(() => import('@phosphor-icons/react/dist/icons/HashStraight'));
const Headlights = lazy(() => import('@phosphor-icons/react/dist/icons/Headlights'));
const Headphones = lazy(() => import('@phosphor-icons/react/dist/icons/Headphones'));
const Headset = lazy(() => import('@phosphor-icons/react/dist/icons/Headset'));
const Heart = lazy(() => import('@phosphor-icons/react/dist/icons/Heart'));
const HeartBreak = lazy(() => import('@phosphor-icons/react/dist/icons/HeartBreak'));
const HeartHalf = lazy(() => import('@phosphor-icons/react/dist/icons/HeartHalf'));
const HeartStraight = lazy(() => import('@phosphor-icons/react/dist/icons/HeartStraight'));
const HeartStraightBreak = lazy(
  () => import('@phosphor-icons/react/dist/icons/HeartStraightBreak')
);
const Heartbeat = lazy(() => import('@phosphor-icons/react/dist/icons/Heartbeat'));
const Hexagon = lazy(() => import('@phosphor-icons/react/dist/icons/Hexagon'));
const HighHeel = lazy(() => import('@phosphor-icons/react/dist/icons/HighHeel'));
const HighlighterCircle = lazy(() => import('@phosphor-icons/react/dist/icons/HighlighterCircle'));
const Hoodie = lazy(() => import('@phosphor-icons/react/dist/icons/Hoodie'));
const Horse = lazy(() => import('@phosphor-icons/react/dist/icons/Horse'));
const Hourglass = lazy(() => import('@phosphor-icons/react/dist/icons/Hourglass'));
const HourglassHigh = lazy(() => import('@phosphor-icons/react/dist/icons/HourglassHigh'));
const HourglassLow = lazy(() => import('@phosphor-icons/react/dist/icons/HourglassLow'));
const HourglassMedium = lazy(() => import('@phosphor-icons/react/dist/icons/HourglassMedium'));
const HourglassSimple = lazy(() => import('@phosphor-icons/react/dist/icons/HourglassSimple'));
const HourglassSimpleHigh = lazy(
  () => import('@phosphor-icons/react/dist/icons/HourglassSimpleHigh')
);
const HourglassSimpleLow = lazy(
  () => import('@phosphor-icons/react/dist/icons/HourglassSimpleLow')
);
const HourglassSimpleMedium = lazy(
  () => import('@phosphor-icons/react/dist/icons/HourglassSimpleMedium')
);
const House = lazy(() => import('@phosphor-icons/react/dist/icons/House'));
const HouseLine = lazy(() => import('@phosphor-icons/react/dist/icons/HouseLine'));
const HouseSimple = lazy(() => import('@phosphor-icons/react/dist/icons/HouseSimple'));
const IceCream = lazy(() => import('@phosphor-icons/react/dist/icons/IceCream'));
const IdentificationBadge = lazy(
  () => import('@phosphor-icons/react/dist/icons/IdentificationBadge')
);
const IdentificationCard = lazy(
  () => import('@phosphor-icons/react/dist/icons/IdentificationCard')
);
const Image = lazy(() => import('@phosphor-icons/react/dist/icons/Image'));
const ImageSquare = lazy(() => import('@phosphor-icons/react/dist/icons/ImageSquare'));
const Images = lazy(() => import('@phosphor-icons/react/dist/icons/Images'));
const ImagesSquare = lazy(() => import('@phosphor-icons/react/dist/icons/ImagesSquare'));
const InfinityIcon = lazy(() => import('@phosphor-icons/react/dist/icons/Infinity'));
const Info = lazy(() => import('@phosphor-icons/react/dist/icons/Info'));
const InstagramLogo = lazy(() => import('@phosphor-icons/react/dist/icons/InstagramLogo'));
const Intersect = lazy(() => import('@phosphor-icons/react/dist/icons/Intersect'));
const IntersectSquare = lazy(() => import('@phosphor-icons/react/dist/icons/IntersectSquare'));
const IntersectThree = lazy(() => import('@phosphor-icons/react/dist/icons/IntersectThree'));
const Jeep = lazy(() => import('@phosphor-icons/react/dist/icons/Jeep'));
const Kanban = lazy(() => import('@phosphor-icons/react/dist/icons/Kanban'));
const Key = lazy(() => import('@phosphor-icons/react/dist/icons/Key'));
const KeyReturn = lazy(() => import('@phosphor-icons/react/dist/icons/KeyReturn'));
const Keyboard = lazy(() => import('@phosphor-icons/react/dist/icons/Keyboard'));
const Keyhole = lazy(() => import('@phosphor-icons/react/dist/icons/Keyhole'));
const Knife = lazy(() => import('@phosphor-icons/react/dist/icons/Knife'));
const Ladder = lazy(() => import('@phosphor-icons/react/dist/icons/Ladder'));
const LadderSimple = lazy(() => import('@phosphor-icons/react/dist/icons/LadderSimple'));
const Lamp = lazy(() => import('@phosphor-icons/react/dist/icons/Lamp'));
const Laptop = lazy(() => import('@phosphor-icons/react/dist/icons/Laptop'));
const Layout = lazy(() => import('@phosphor-icons/react/dist/icons/Layout'));
const Leaf = lazy(() => import('@phosphor-icons/react/dist/icons/Leaf'));
const Lifebuoy = lazy(() => import('@phosphor-icons/react/dist/icons/Lifebuoy'));
const Lightbulb = lazy(() => import('@phosphor-icons/react/dist/icons/Lightbulb'));
const LightbulbFilament = lazy(() => import('@phosphor-icons/react/dist/icons/LightbulbFilament'));
const Lighthouse = lazy(() => import('@phosphor-icons/react/dist/icons/Lighthouse'));
const LightningA = lazy(() => import('@phosphor-icons/react/dist/icons/LightningA'));
const Lightning = lazy(() => import('@phosphor-icons/react/dist/icons/Lightning'));
const LightningSlash = lazy(() => import('@phosphor-icons/react/dist/icons/LightningSlash'));
const LineSegment = lazy(() => import('@phosphor-icons/react/dist/icons/LineSegment'));
const LineSegments = lazy(() => import('@phosphor-icons/react/dist/icons/LineSegments'));
const Link = lazy(() => import('@phosphor-icons/react/dist/icons/Link'));
const LinkBreak = lazy(() => import('@phosphor-icons/react/dist/icons/LinkBreak'));
const LinkSimple = lazy(() => import('@phosphor-icons/react/dist/icons/LinkSimple'));
const LinkSimpleBreak = lazy(() => import('@phosphor-icons/react/dist/icons/LinkSimpleBreak'));
const LinkSimpleHorizontal = lazy(
  () => import('@phosphor-icons/react/dist/icons/LinkSimpleHorizontal')
);
const LinkSimpleHorizontalBreak = lazy(
  () => import('@phosphor-icons/react/dist/icons/LinkSimpleHorizontalBreak')
);
const LinkedinLogo = lazy(() => import('@phosphor-icons/react/dist/icons/LinkedinLogo'));
const LinuxLogo = lazy(() => import('@phosphor-icons/react/dist/icons/LinuxLogo'));
const List = lazy(() => import('@phosphor-icons/react/dist/icons/List'));
const ListBullets = lazy(() => import('@phosphor-icons/react/dist/icons/ListBullets'));
const ListChecks = lazy(() => import('@phosphor-icons/react/dist/icons/ListChecks'));
const ListDashes = lazy(() => import('@phosphor-icons/react/dist/icons/ListDashes'));
const ListMagnifyingGlass = lazy(
  () => import('@phosphor-icons/react/dist/icons/ListMagnifyingGlass')
);
const ListNumbers = lazy(() => import('@phosphor-icons/react/dist/icons/ListNumbers'));
const ListPlus = lazy(() => import('@phosphor-icons/react/dist/icons/ListPlus'));
const Lock = lazy(() => import('@phosphor-icons/react/dist/icons/Lock'));
const LockKey = lazy(() => import('@phosphor-icons/react/dist/icons/LockKey'));
const LockKeyOpen = lazy(() => import('@phosphor-icons/react/dist/icons/LockKeyOpen'));
const LockLaminated = lazy(() => import('@phosphor-icons/react/dist/icons/LockLaminated'));
const LockLaminatedOpen = lazy(() => import('@phosphor-icons/react/dist/icons/LockLaminatedOpen'));
const LockOpen = lazy(() => import('@phosphor-icons/react/dist/icons/LockOpen'));
const LockSimple = lazy(() => import('@phosphor-icons/react/dist/icons/LockSimple'));
const LockSimpleOpen = lazy(() => import('@phosphor-icons/react/dist/icons/LockSimpleOpen'));
const Lockers = lazy(() => import('@phosphor-icons/react/dist/icons/Lockers'));
const MagicWand = lazy(() => import('@phosphor-icons/react/dist/icons/MagicWand'));
const Magnet = lazy(() => import('@phosphor-icons/react/dist/icons/Magnet'));
const MagnetStraight = lazy(() => import('@phosphor-icons/react/dist/icons/MagnetStraight'));
const MagnifyingGlass = lazy(() => import('@phosphor-icons/react/dist/icons/MagnifyingGlass'));
const MagnifyingGlassMinus = lazy(
  () => import('@phosphor-icons/react/dist/icons/MagnifyingGlassMinus')
);
const MagnifyingGlassPlus = lazy(
  () => import('@phosphor-icons/react/dist/icons/MagnifyingGlassPlus')
);
const MapPin = lazy(() => import('@phosphor-icons/react/dist/icons/MapPin'));
const MapPinLine = lazy(() => import('@phosphor-icons/react/dist/icons/MapPinLine'));
const MapTrifold = lazy(() => import('@phosphor-icons/react/dist/icons/MapTrifold'));
const MarkerCircle = lazy(() => import('@phosphor-icons/react/dist/icons/MarkerCircle'));
const Martini = lazy(() => import('@phosphor-icons/react/dist/icons/Martini'));
const MaskHappy = lazy(() => import('@phosphor-icons/react/dist/icons/MaskHappy'));
const MaskSad = lazy(() => import('@phosphor-icons/react/dist/icons/MaskSad'));
const MathOperations = lazy(() => import('@phosphor-icons/react/dist/icons/MathOperations'));
const Medal = lazy(() => import('@phosphor-icons/react/dist/icons/Medal'));
const MedalMilitary = lazy(() => import('@phosphor-icons/react/dist/icons/MedalMilitary'));
const MediumLogo = lazy(() => import('@phosphor-icons/react/dist/icons/MediumLogo'));
const Megaphone = lazy(() => import('@phosphor-icons/react/dist/icons/Megaphone'));
const MegaphoneSimple = lazy(() => import('@phosphor-icons/react/dist/icons/MegaphoneSimple'));
const MessengerLogo = lazy(() => import('@phosphor-icons/react/dist/icons/MessengerLogo'));
const MetaLogo = lazy(() => import('@phosphor-icons/react/dist/icons/MetaLogo'));
const Metronome = lazy(() => import('@phosphor-icons/react/dist/icons/Metronome'));
const Microphone = lazy(() => import('@phosphor-icons/react/dist/icons/Microphone'));
const MicrophoneSlash = lazy(() => import('@phosphor-icons/react/dist/icons/MicrophoneSlash'));
const MicrophoneStage = lazy(() => import('@phosphor-icons/react/dist/icons/MicrophoneStage'));
const MicrosoftExcelLogo = lazy(
  () => import('@phosphor-icons/react/dist/icons/MicrosoftExcelLogo')
);
const MicrosoftOutlookLogo = lazy(
  () => import('@phosphor-icons/react/dist/icons/MicrosoftOutlookLogo')
);
const MicrosoftPowerpointLogo = lazy(
  () => import('@phosphor-icons/react/dist/icons/MicrosoftPowerpointLogo')
);
const MicrosoftTeamsLogo = lazy(
  () => import('@phosphor-icons/react/dist/icons/MicrosoftTeamsLogo')
);
const MicrosoftWordLogo = lazy(() => import('@phosphor-icons/react/dist/icons/MicrosoftWordLogo'));
const Minus = lazy(() => import('@phosphor-icons/react/dist/icons/Minus'));
const MinusCircle = lazy(() => import('@phosphor-icons/react/dist/icons/MinusCircle'));
const MinusSquare = lazy(() => import('@phosphor-icons/react/dist/icons/MinusSquare'));
const Money = lazy(() => import('@phosphor-icons/react/dist/icons/Money'));
const Monitor = lazy(() => import('@phosphor-icons/react/dist/icons/Monitor'));
const MonitorPlay = lazy(() => import('@phosphor-icons/react/dist/icons/MonitorPlay'));
const Moon = lazy(() => import('@phosphor-icons/react/dist/icons/Moon'));
const MoonStars = lazy(() => import('@phosphor-icons/react/dist/icons/MoonStars'));
const Moped = lazy(() => import('@phosphor-icons/react/dist/icons/Moped'));
const MopedFront = lazy(() => import('@phosphor-icons/react/dist/icons/MopedFront'));
const Mosque = lazy(() => import('@phosphor-icons/react/dist/icons/Mosque'));
const Motorcycle = lazy(() => import('@phosphor-icons/react/dist/icons/Motorcycle'));
const Mountains = lazy(() => import('@phosphor-icons/react/dist/icons/Mountains'));
const Mouse = lazy(() => import('@phosphor-icons/react/dist/icons/Mouse'));
const MouseSimple = lazy(() => import('@phosphor-icons/react/dist/icons/MouseSimple'));
const MusicNote = lazy(() => import('@phosphor-icons/react/dist/icons/MusicNote'));
const MusicNoteSimple = lazy(() => import('@phosphor-icons/react/dist/icons/MusicNoteSimple'));
const MusicNotes = lazy(() => import('@phosphor-icons/react/dist/icons/MusicNotes'));
const MusicNotesPlus = lazy(() => import('@phosphor-icons/react/dist/icons/MusicNotesPlus'));
const MusicNotesSimple = lazy(() => import('@phosphor-icons/react/dist/icons/MusicNotesSimple'));
const NavigationArrow = lazy(() => import('@phosphor-icons/react/dist/icons/NavigationArrow'));
const Needle = lazy(() => import('@phosphor-icons/react/dist/icons/Needle'));
const Newspaper = lazy(() => import('@phosphor-icons/react/dist/icons/Newspaper'));
const NewspaperClipping = lazy(() => import('@phosphor-icons/react/dist/icons/NewspaperClipping'));
const Notches = lazy(() => import('@phosphor-icons/react/dist/icons/Notches'));
const NoteBlank = lazy(() => import('@phosphor-icons/react/dist/icons/NoteBlank'));
const Note = lazy(() => import('@phosphor-icons/react/dist/icons/Note'));
const NotePencil = lazy(() => import('@phosphor-icons/react/dist/icons/NotePencil'));
const Notebook = lazy(() => import('@phosphor-icons/react/dist/icons/Notebook'));
const Notepad = lazy(() => import('@phosphor-icons/react/dist/icons/Notepad'));
const Notification = lazy(() => import('@phosphor-icons/react/dist/icons/Notification'));
const NotionLogo = lazy(() => import('@phosphor-icons/react/dist/icons/NotionLogo'));
const NumberCircleEight = lazy(() => import('@phosphor-icons/react/dist/icons/NumberCircleEight'));
const NumberCircleFive = lazy(() => import('@phosphor-icons/react/dist/icons/NumberCircleFive'));
const NumberCircleFour = lazy(() => import('@phosphor-icons/react/dist/icons/NumberCircleFour'));
const NumberCircleNine = lazy(() => import('@phosphor-icons/react/dist/icons/NumberCircleNine'));
const NumberCircleOne = lazy(() => import('@phosphor-icons/react/dist/icons/NumberCircleOne'));
const NumberCircleSeven = lazy(() => import('@phosphor-icons/react/dist/icons/NumberCircleSeven'));
const NumberCircleSix = lazy(() => import('@phosphor-icons/react/dist/icons/NumberCircleSix'));
const NumberCircleThree = lazy(() => import('@phosphor-icons/react/dist/icons/NumberCircleThree'));
const NumberCircleTwo = lazy(() => import('@phosphor-icons/react/dist/icons/NumberCircleTwo'));
const NumberCircleZero = lazy(() => import('@phosphor-icons/react/dist/icons/NumberCircleZero'));
const NumberEight = lazy(() => import('@phosphor-icons/react/dist/icons/NumberEight'));
const NumberFive = lazy(() => import('@phosphor-icons/react/dist/icons/NumberFive'));
const NumberFour = lazy(() => import('@phosphor-icons/react/dist/icons/NumberFour'));
const NumberNine = lazy(() => import('@phosphor-icons/react/dist/icons/NumberNine'));
const NumberOne = lazy(() => import('@phosphor-icons/react/dist/icons/NumberOne'));
const NumberSeven = lazy(() => import('@phosphor-icons/react/dist/icons/NumberSeven'));
const NumberSix = lazy(() => import('@phosphor-icons/react/dist/icons/NumberSix'));
const NumberSquareEight = lazy(() => import('@phosphor-icons/react/dist/icons/NumberSquareEight'));
const NumberSquareFive = lazy(() => import('@phosphor-icons/react/dist/icons/NumberSquareFive'));
const NumberSquareFour = lazy(() => import('@phosphor-icons/react/dist/icons/NumberSquareFour'));
const NumberSquareNine = lazy(() => import('@phosphor-icons/react/dist/icons/NumberSquareNine'));
const NumberSquareOne = lazy(() => import('@phosphor-icons/react/dist/icons/NumberSquareOne'));
const NumberSquareSeven = lazy(() => import('@phosphor-icons/react/dist/icons/NumberSquareSeven'));
const NumberSquareSix = lazy(() => import('@phosphor-icons/react/dist/icons/NumberSquareSix'));
const NumberSquareThree = lazy(() => import('@phosphor-icons/react/dist/icons/NumberSquareThree'));
const NumberSquareTwo = lazy(() => import('@phosphor-icons/react/dist/icons/NumberSquareTwo'));
const NumberSquareZero = lazy(() => import('@phosphor-icons/react/dist/icons/NumberSquareZero'));
const NumberThree = lazy(() => import('@phosphor-icons/react/dist/icons/NumberThree'));
const NumberTwo = lazy(() => import('@phosphor-icons/react/dist/icons/NumberTwo'));
const NumberZero = lazy(() => import('@phosphor-icons/react/dist/icons/NumberZero'));
const Nut = lazy(() => import('@phosphor-icons/react/dist/icons/Nut'));
const NyTimesLogo = lazy(() => import('@phosphor-icons/react/dist/icons/NyTimesLogo'));
const Octagon = lazy(() => import('@phosphor-icons/react/dist/icons/Octagon'));
const OfficeChair = lazy(() => import('@phosphor-icons/react/dist/icons/OfficeChair'));
const Option = lazy(() => import('@phosphor-icons/react/dist/icons/Option'));
const OrangeSlice = lazy(() => import('@phosphor-icons/react/dist/icons/OrangeSlice'));
const Package = lazy(() => import('@phosphor-icons/react/dist/icons/Package'));
const PaintBrush = lazy(() => import('@phosphor-icons/react/dist/icons/PaintBrush'));
const PaintBrushBroad = lazy(() => import('@phosphor-icons/react/dist/icons/PaintBrushBroad'));
const PaintBrushHousehold = lazy(
  () => import('@phosphor-icons/react/dist/icons/PaintBrushHousehold')
);
const PaintBucket = lazy(() => import('@phosphor-icons/react/dist/icons/PaintBucket'));
const PaintRoller = lazy(() => import('@phosphor-icons/react/dist/icons/PaintRoller'));
const Palette = lazy(() => import('@phosphor-icons/react/dist/icons/Palette'));
const Pants = lazy(() => import('@phosphor-icons/react/dist/icons/Pants'));
const PaperPlane = lazy(() => import('@phosphor-icons/react/dist/icons/PaperPlane'));
const PaperPlaneRight = lazy(() => import('@phosphor-icons/react/dist/icons/PaperPlaneRight'));
const PaperPlaneTilt = lazy(() => import('@phosphor-icons/react/dist/icons/PaperPlaneTilt'));
const Paperclip = lazy(() => import('@phosphor-icons/react/dist/icons/Paperclip'));
const PaperclipHorizontal = lazy(
  () => import('@phosphor-icons/react/dist/icons/PaperclipHorizontal')
);
const Parachute = lazy(() => import('@phosphor-icons/react/dist/icons/Parachute'));
const Paragraph = lazy(() => import('@phosphor-icons/react/dist/icons/Paragraph'));
const Parallelogram = lazy(() => import('@phosphor-icons/react/dist/icons/Parallelogram'));
const Park = lazy(() => import('@phosphor-icons/react/dist/icons/Park'));
const Password = lazy(() => import('@phosphor-icons/react/dist/icons/Password'));
const Path = lazy(() => import('@phosphor-icons/react/dist/icons/Path'));
const PatreonLogo = lazy(() => import('@phosphor-icons/react/dist/icons/PatreonLogo'));
const Pause = lazy(() => import('@phosphor-icons/react/dist/icons/Pause'));
const PauseCircle = lazy(() => import('@phosphor-icons/react/dist/icons/PauseCircle'));
const PawPrint = lazy(() => import('@phosphor-icons/react/dist/icons/PawPrint'));
const PaypalLogo = lazy(() => import('@phosphor-icons/react/dist/icons/PaypalLogo'));
const Peace = lazy(() => import('@phosphor-icons/react/dist/icons/Peace'));
const Pen = lazy(() => import('@phosphor-icons/react/dist/icons/Pen'));
const PenNib = lazy(() => import('@phosphor-icons/react/dist/icons/PenNib'));
const PenNibStraight = lazy(() => import('@phosphor-icons/react/dist/icons/PenNibStraight'));
const Pencil = lazy(() => import('@phosphor-icons/react/dist/icons/Pencil'));
const PencilCircle = lazy(() => import('@phosphor-icons/react/dist/icons/PencilCircle'));
const PencilLine = lazy(() => import('@phosphor-icons/react/dist/icons/PencilLine'));
const PencilSimple = lazy(() => import('@phosphor-icons/react/dist/icons/PencilSimple'));
const PencilSimpleLine = lazy(() => import('@phosphor-icons/react/dist/icons/PencilSimpleLine'));
const PencilSimpleSlash = lazy(() => import('@phosphor-icons/react/dist/icons/PencilSimpleSlash'));
const PencilSlash = lazy(() => import('@phosphor-icons/react/dist/icons/PencilSlash'));
const Pentagram = lazy(() => import('@phosphor-icons/react/dist/icons/Pentagram'));
const Pepper = lazy(() => import('@phosphor-icons/react/dist/icons/Pepper'));
const Percent = lazy(() => import('@phosphor-icons/react/dist/icons/Percent'));
const PersonArmsSpread = lazy(() => import('@phosphor-icons/react/dist/icons/PersonArmsSpread'));
const Person = lazy(() => import('@phosphor-icons/react/dist/icons/Person'));
const PersonSimpleBike = lazy(() => import('@phosphor-icons/react/dist/icons/PersonSimpleBike'));
const PersonSimple = lazy(() => import('@phosphor-icons/react/dist/icons/PersonSimple'));
const PersonSimpleRun = lazy(() => import('@phosphor-icons/react/dist/icons/PersonSimpleRun'));
const PersonSimpleThrow = lazy(() => import('@phosphor-icons/react/dist/icons/PersonSimpleThrow'));
const PersonSimpleWalk = lazy(() => import('@phosphor-icons/react/dist/icons/PersonSimpleWalk'));
const Perspective = lazy(() => import('@phosphor-icons/react/dist/icons/Perspective'));
const Phone = lazy(() => import('@phosphor-icons/react/dist/icons/Phone'));
const PhoneCall = lazy(() => import('@phosphor-icons/react/dist/icons/PhoneCall'));
const PhoneDisconnect = lazy(() => import('@phosphor-icons/react/dist/icons/PhoneDisconnect'));
const PhoneIncoming = lazy(() => import('@phosphor-icons/react/dist/icons/PhoneIncoming'));
const PhoneOutgoing = lazy(() => import('@phosphor-icons/react/dist/icons/PhoneOutgoing'));
const PhonePlus = lazy(() => import('@phosphor-icons/react/dist/icons/PhonePlus'));
const PhoneSlash = lazy(() => import('@phosphor-icons/react/dist/icons/PhoneSlash'));
const PhoneX = lazy(() => import('@phosphor-icons/react/dist/icons/PhoneX'));
const PhosphorLogo = lazy(() => import('@phosphor-icons/react/dist/icons/PhosphorLogo'));
const Pi = lazy(() => import('@phosphor-icons/react/dist/icons/Pi'));
const PianoKeys = lazy(() => import('@phosphor-icons/react/dist/icons/PianoKeys'));
const PictureInPicture = lazy(() => import('@phosphor-icons/react/dist/icons/PictureInPicture'));
const PiggyBank = lazy(() => import('@phosphor-icons/react/dist/icons/PiggyBank'));
const Pill = lazy(() => import('@phosphor-icons/react/dist/icons/Pill'));
const PinterestLogo = lazy(() => import('@phosphor-icons/react/dist/icons/PinterestLogo'));
const Pinwheel = lazy(() => import('@phosphor-icons/react/dist/icons/Pinwheel'));
const Pizza = lazy(() => import('@phosphor-icons/react/dist/icons/Pizza'));
const Placeholder = lazy(() => import('@phosphor-icons/react/dist/icons/Placeholder'));
const Planet = lazy(() => import('@phosphor-icons/react/dist/icons/Planet'));
const Plant = lazy(() => import('@phosphor-icons/react/dist/icons/Plant'));
const Play = lazy(() => import('@phosphor-icons/react/dist/icons/Play'));
const PlayCircle = lazy(() => import('@phosphor-icons/react/dist/icons/PlayCircle'));
const PlayPause = lazy(() => import('@phosphor-icons/react/dist/icons/PlayPause'));
const Playlist = lazy(() => import('@phosphor-icons/react/dist/icons/Playlist'));
const Plug = lazy(() => import('@phosphor-icons/react/dist/icons/Plug'));
const PlugCharging = lazy(() => import('@phosphor-icons/react/dist/icons/PlugCharging'));
const Plugs = lazy(() => import('@phosphor-icons/react/dist/icons/Plugs'));
const PlugsConnected = lazy(() => import('@phosphor-icons/react/dist/icons/PlugsConnected'));
const Plus = lazy(() => import('@phosphor-icons/react/dist/icons/Plus'));
const PlusCircle = lazy(() => import('@phosphor-icons/react/dist/icons/PlusCircle'));
const PlusMinus = lazy(() => import('@phosphor-icons/react/dist/icons/PlusMinus'));
const PlusSquare = lazy(() => import('@phosphor-icons/react/dist/icons/PlusSquare'));
const PokerChip = lazy(() => import('@phosphor-icons/react/dist/icons/PokerChip'));
const PoliceCar = lazy(() => import('@phosphor-icons/react/dist/icons/PoliceCar'));
const Polygon = lazy(() => import('@phosphor-icons/react/dist/icons/Polygon'));
const Popcorn = lazy(() => import('@phosphor-icons/react/dist/icons/Popcorn'));
const PottedPlant = lazy(() => import('@phosphor-icons/react/dist/icons/PottedPlant'));
const Power = lazy(() => import('@phosphor-icons/react/dist/icons/Power'));
const Prescription = lazy(() => import('@phosphor-icons/react/dist/icons/Prescription'));
const Presentation = lazy(() => import('@phosphor-icons/react/dist/icons/Presentation'));
const PresentationChart = lazy(() => import('@phosphor-icons/react/dist/icons/PresentationChart'));
const Printer = lazy(() => import('@phosphor-icons/react/dist/icons/Printer'));
const Prohibit = lazy(() => import('@phosphor-icons/react/dist/icons/Prohibit'));
const ProhibitInset = lazy(() => import('@phosphor-icons/react/dist/icons/ProhibitInset'));
const ProjectorScreen = lazy(() => import('@phosphor-icons/react/dist/icons/ProjectorScreen'));
const ProjectorScreenChart = lazy(
  () => import('@phosphor-icons/react/dist/icons/ProjectorScreenChart')
);
const Pulse = lazy(() => import('@phosphor-icons/react/dist/icons/Pulse'));
const Activity = lazy(() => import('@phosphor-icons/react/dist/icons/Pulse'));
const PushPin = lazy(() => import('@phosphor-icons/react/dist/icons/PushPin'));
const PushPinSimple = lazy(() => import('@phosphor-icons/react/dist/icons/PushPinSimple'));
const PushPinSimpleSlash = lazy(
  () => import('@phosphor-icons/react/dist/icons/PushPinSimpleSlash')
);
const PushPinSlash = lazy(() => import('@phosphor-icons/react/dist/icons/PushPinSlash'));
const PuzzlePiece = lazy(() => import('@phosphor-icons/react/dist/icons/PuzzlePiece'));
const QrCode = lazy(() => import('@phosphor-icons/react/dist/icons/QrCode'));
const Question = lazy(() => import('@phosphor-icons/react/dist/icons/Question'));
const Queue = lazy(() => import('@phosphor-icons/react/dist/icons/Queue'));
const Quotes = lazy(() => import('@phosphor-icons/react/dist/icons/Quotes'));
const Radical = lazy(() => import('@phosphor-icons/react/dist/icons/Radical'));
const Radio = lazy(() => import('@phosphor-icons/react/dist/icons/Radio'));
const RadioButton = lazy(() => import('@phosphor-icons/react/dist/icons/RadioButton'));
const Radioactive = lazy(() => import('@phosphor-icons/react/dist/icons/Radioactive'));
const Rainbow = lazy(() => import('@phosphor-icons/react/dist/icons/Rainbow'));
const RainbowCloud = lazy(() => import('@phosphor-icons/react/dist/icons/RainbowCloud'));
const ReadCvLogo = lazy(() => import('@phosphor-icons/react/dist/icons/ReadCvLogo'));
const Receipt = lazy(() => import('@phosphor-icons/react/dist/icons/Receipt'));
const ReceiptX = lazy(() => import('@phosphor-icons/react/dist/icons/ReceiptX'));
const Record = lazy(() => import('@phosphor-icons/react/dist/icons/Record'));
const Rectangle = lazy(() => import('@phosphor-icons/react/dist/icons/Rectangle'));
const Recycle = lazy(() => import('@phosphor-icons/react/dist/icons/Recycle'));
const RedditLogo = lazy(() => import('@phosphor-icons/react/dist/icons/RedditLogo'));
const Repeat = lazy(() => import('@phosphor-icons/react/dist/icons/Repeat'));
const RepeatOnce = lazy(() => import('@phosphor-icons/react/dist/icons/RepeatOnce'));
const Rewind = lazy(() => import('@phosphor-icons/react/dist/icons/Rewind'));
const RewindCircle = lazy(() => import('@phosphor-icons/react/dist/icons/RewindCircle'));
const RoadHorizon = lazy(() => import('@phosphor-icons/react/dist/icons/RoadHorizon'));
const Robot = lazy(() => import('@phosphor-icons/react/dist/icons/Robot'));
const Rocket = lazy(() => import('@phosphor-icons/react/dist/icons/Rocket'));
const RocketLaunch = lazy(() => import('@phosphor-icons/react/dist/icons/RocketLaunch'));
const Rows = lazy(() => import('@phosphor-icons/react/dist/icons/Rows'));
const Rss = lazy(() => import('@phosphor-icons/react/dist/icons/Rss'));
const RssSimple = lazy(() => import('@phosphor-icons/react/dist/icons/RssSimple'));
const Rug = lazy(() => import('@phosphor-icons/react/dist/icons/Rug'));
const Ruler = lazy(() => import('@phosphor-icons/react/dist/icons/Ruler'));
const Scales = lazy(() => import('@phosphor-icons/react/dist/icons/Scales'));
const Scan = lazy(() => import('@phosphor-icons/react/dist/icons/Scan'));
const Scissors = lazy(() => import('@phosphor-icons/react/dist/icons/Scissors'));
const Scooter = lazy(() => import('@phosphor-icons/react/dist/icons/Scooter'));
const Screencast = lazy(() => import('@phosphor-icons/react/dist/icons/Screencast'));
const ScribbleLoop = lazy(() => import('@phosphor-icons/react/dist/icons/ScribbleLoop'));
const Scroll = lazy(() => import('@phosphor-icons/react/dist/icons/Scroll'));
const Seal = lazy(() => import('@phosphor-icons/react/dist/icons/Seal'));
const CircleWavy = lazy(() => import('@phosphor-icons/react/dist/icons/Seal'));
const SealCheck = lazy(() => import('@phosphor-icons/react/dist/icons/SealCheck'));
const CircleWavyCheck = lazy(() => import('@phosphor-icons/react/dist/icons/SealCheck'));
const SealQuestion = lazy(() => import('@phosphor-icons/react/dist/icons/SealQuestion'));
const CircleWavyQuestion = lazy(() => import('@phosphor-icons/react/dist/icons/SealQuestion'));
const SealWarning = lazy(() => import('@phosphor-icons/react/dist/icons/SealWarning'));
const CircleWavyWarning = lazy(() => import('@phosphor-icons/react/dist/icons/SealWarning'));
const SelectionAll = lazy(() => import('@phosphor-icons/react/dist/icons/SelectionAll'));
const SelectionBackground = lazy(
  () => import('@phosphor-icons/react/dist/icons/SelectionBackground')
);
const Selection = lazy(() => import('@phosphor-icons/react/dist/icons/Selection'));
const SelectionForeground = lazy(
  () => import('@phosphor-icons/react/dist/icons/SelectionForeground')
);
const SelectionInverse = lazy(() => import('@phosphor-icons/react/dist/icons/SelectionInverse'));
const SelectionPlus = lazy(() => import('@phosphor-icons/react/dist/icons/SelectionPlus'));
const SelectionSlash = lazy(() => import('@phosphor-icons/react/dist/icons/SelectionSlash'));
const Shapes = lazy(() => import('@phosphor-icons/react/dist/icons/Shapes'));
const Share = lazy(() => import('@phosphor-icons/react/dist/icons/Share'));
const ShareFat = lazy(() => import('@phosphor-icons/react/dist/icons/ShareFat'));
const ShareNetwork = lazy(() => import('@phosphor-icons/react/dist/icons/ShareNetwork'));
const Shield = lazy(() => import('@phosphor-icons/react/dist/icons/Shield'));
const ShieldCheck = lazy(() => import('@phosphor-icons/react/dist/icons/ShieldCheck'));
const ShieldCheckered = lazy(() => import('@phosphor-icons/react/dist/icons/ShieldCheckered'));
const ShieldChevron = lazy(() => import('@phosphor-icons/react/dist/icons/ShieldChevron'));
const ShieldPlus = lazy(() => import('@phosphor-icons/react/dist/icons/ShieldPlus'));
const ShieldSlash = lazy(() => import('@phosphor-icons/react/dist/icons/ShieldSlash'));
const ShieldStar = lazy(() => import('@phosphor-icons/react/dist/icons/ShieldStar'));
const ShieldWarning = lazy(() => import('@phosphor-icons/react/dist/icons/ShieldWarning'));
const ShirtFolded = lazy(() => import('@phosphor-icons/react/dist/icons/ShirtFolded'));
const ShootingStar = lazy(() => import('@phosphor-icons/react/dist/icons/ShootingStar'));
const ShoppingBag = lazy(() => import('@phosphor-icons/react/dist/icons/ShoppingBag'));
const ShoppingBagOpen = lazy(() => import('@phosphor-icons/react/dist/icons/ShoppingBagOpen'));
const ShoppingCart = lazy(() => import('@phosphor-icons/react/dist/icons/ShoppingCart'));
const ShoppingCartSimple = lazy(
  () => import('@phosphor-icons/react/dist/icons/ShoppingCartSimple')
);
const Shower = lazy(() => import('@phosphor-icons/react/dist/icons/Shower'));
const Shrimp = lazy(() => import('@phosphor-icons/react/dist/icons/Shrimp'));
const ShuffleAngular = lazy(() => import('@phosphor-icons/react/dist/icons/ShuffleAngular'));
const Shuffle = lazy(() => import('@phosphor-icons/react/dist/icons/Shuffle'));
const ShuffleSimple = lazy(() => import('@phosphor-icons/react/dist/icons/ShuffleSimple'));
const Sidebar = lazy(() => import('@phosphor-icons/react/dist/icons/Sidebar'));
const SidebarSimple = lazy(() => import('@phosphor-icons/react/dist/icons/SidebarSimple'));
const Sigma = lazy(() => import('@phosphor-icons/react/dist/icons/Sigma'));
const SignIn = lazy(() => import('@phosphor-icons/react/dist/icons/SignIn'));
const SignOut = lazy(() => import('@phosphor-icons/react/dist/icons/SignOut'));
const Signature = lazy(() => import('@phosphor-icons/react/dist/icons/Signature'));
const Signpost = lazy(() => import('@phosphor-icons/react/dist/icons/Signpost'));
const SimCard = lazy(() => import('@phosphor-icons/react/dist/icons/SimCard'));
const Siren = lazy(() => import('@phosphor-icons/react/dist/icons/Siren'));
const SketchLogo = lazy(() => import('@phosphor-icons/react/dist/icons/SketchLogo'));
const SkipBack = lazy(() => import('@phosphor-icons/react/dist/icons/SkipBack'));
const SkipBackCircle = lazy(() => import('@phosphor-icons/react/dist/icons/SkipBackCircle'));
const SkipForward = lazy(() => import('@phosphor-icons/react/dist/icons/SkipForward'));
const SkipForwardCircle = lazy(() => import('@phosphor-icons/react/dist/icons/SkipForwardCircle'));
const Skull = lazy(() => import('@phosphor-icons/react/dist/icons/Skull'));
const SlackLogo = lazy(() => import('@phosphor-icons/react/dist/icons/SlackLogo'));
const Sliders = lazy(() => import('@phosphor-icons/react/dist/icons/Sliders'));
const SlidersHorizontal = lazy(() => import('@phosphor-icons/react/dist/icons/SlidersHorizontal'));
const Slideshow = lazy(() => import('@phosphor-icons/react/dist/icons/Slideshow'));
const SmileyAngry = lazy(() => import('@phosphor-icons/react/dist/icons/SmileyAngry'));
const SmileyBlank = lazy(() => import('@phosphor-icons/react/dist/icons/SmileyBlank'));
const Smiley = lazy(() => import('@phosphor-icons/react/dist/icons/Smiley'));
const SmileyMeh = lazy(() => import('@phosphor-icons/react/dist/icons/SmileyMeh'));
const SmileyNervous = lazy(() => import('@phosphor-icons/react/dist/icons/SmileyNervous'));
const SmileySad = lazy(() => import('@phosphor-icons/react/dist/icons/SmileySad'));
const SmileySticker = lazy(() => import('@phosphor-icons/react/dist/icons/SmileySticker'));
const SmileyWink = lazy(() => import('@phosphor-icons/react/dist/icons/SmileyWink'));
const SmileyXEyes = lazy(() => import('@phosphor-icons/react/dist/icons/SmileyXEyes'));
const SnapchatLogo = lazy(() => import('@phosphor-icons/react/dist/icons/SnapchatLogo'));
const Sneaker = lazy(() => import('@phosphor-icons/react/dist/icons/Sneaker'));
const SneakerMove = lazy(() => import('@phosphor-icons/react/dist/icons/SneakerMove'));
const Snowflake = lazy(() => import('@phosphor-icons/react/dist/icons/Snowflake'));
const SoccerBall = lazy(() => import('@phosphor-icons/react/dist/icons/SoccerBall'));
const SortAscending = lazy(() => import('@phosphor-icons/react/dist/icons/SortAscending'));
const SortDescending = lazy(() => import('@phosphor-icons/react/dist/icons/SortDescending'));
const SoundcloudLogo = lazy(() => import('@phosphor-icons/react/dist/icons/SoundcloudLogo'));
const Spade = lazy(() => import('@phosphor-icons/react/dist/icons/Spade'));
const Sparkle = lazy(() => import('@phosphor-icons/react/dist/icons/Sparkle'));
const SpeakerHifi = lazy(() => import('@phosphor-icons/react/dist/icons/SpeakerHifi'));
const SpeakerHigh = lazy(() => import('@phosphor-icons/react/dist/icons/SpeakerHigh'));
const SpeakerLow = lazy(() => import('@phosphor-icons/react/dist/icons/SpeakerLow'));
const SpeakerNone = lazy(() => import('@phosphor-icons/react/dist/icons/SpeakerNone'));
const SpeakerSimpleHigh = lazy(() => import('@phosphor-icons/react/dist/icons/SpeakerSimpleHigh'));
const SpeakerSimpleLow = lazy(() => import('@phosphor-icons/react/dist/icons/SpeakerSimpleLow'));
const SpeakerSimpleNone = lazy(() => import('@phosphor-icons/react/dist/icons/SpeakerSimpleNone'));
const SpeakerSimpleSlash = lazy(
  () => import('@phosphor-icons/react/dist/icons/SpeakerSimpleSlash')
);
const SpeakerSimpleX = lazy(() => import('@phosphor-icons/react/dist/icons/SpeakerSimpleX'));
const SpeakerSlash = lazy(() => import('@phosphor-icons/react/dist/icons/SpeakerSlash'));
const SpeakerX = lazy(() => import('@phosphor-icons/react/dist/icons/SpeakerX'));
const Spinner = lazy(() => import('@phosphor-icons/react/dist/icons/Spinner'));
const SpinnerGap = lazy(() => import('@phosphor-icons/react/dist/icons/SpinnerGap'));
const Spiral = lazy(() => import('@phosphor-icons/react/dist/icons/Spiral'));
const SplitHorizontal = lazy(() => import('@phosphor-icons/react/dist/icons/SplitHorizontal'));
const SplitVertical = lazy(() => import('@phosphor-icons/react/dist/icons/SplitVertical'));
const SpotifyLogo = lazy(() => import('@phosphor-icons/react/dist/icons/SpotifyLogo'));
const Square = lazy(() => import('@phosphor-icons/react/dist/icons/Square'));
const SquareHalf = lazy(() => import('@phosphor-icons/react/dist/icons/SquareHalf'));
const SquareHalfBottom = lazy(() => import('@phosphor-icons/react/dist/icons/SquareHalfBottom'));
const SquareLogo = lazy(() => import('@phosphor-icons/react/dist/icons/SquareLogo'));
const SquareSplitHorizontal = lazy(
  () => import('@phosphor-icons/react/dist/icons/SquareSplitHorizontal')
);
const SquareSplitVertical = lazy(
  () => import('@phosphor-icons/react/dist/icons/SquareSplitVertical')
);
const SquaresFour = lazy(() => import('@phosphor-icons/react/dist/icons/SquaresFour'));
const Stack = lazy(() => import('@phosphor-icons/react/dist/icons/Stack'));
const StackOverflowLogo = lazy(() => import('@phosphor-icons/react/dist/icons/StackOverflowLogo'));
const StackSimple = lazy(() => import('@phosphor-icons/react/dist/icons/StackSimple'));
const Stairs = lazy(() => import('@phosphor-icons/react/dist/icons/Stairs'));
const Stamp = lazy(() => import('@phosphor-icons/react/dist/icons/Stamp'));
const StarAndCrescent = lazy(() => import('@phosphor-icons/react/dist/icons/StarAndCrescent'));
const Star = lazy(() => import('@phosphor-icons/react/dist/icons/Star'));
const StarFour = lazy(() => import('@phosphor-icons/react/dist/icons/StarFour'));
const StarHalf = lazy(() => import('@phosphor-icons/react/dist/icons/StarHalf'));
const StarOfDavid = lazy(() => import('@phosphor-icons/react/dist/icons/StarOfDavid'));
const SteeringWheel = lazy(() => import('@phosphor-icons/react/dist/icons/SteeringWheel'));
const Steps = lazy(() => import('@phosphor-icons/react/dist/icons/Steps'));
const Stethoscope = lazy(() => import('@phosphor-icons/react/dist/icons/Stethoscope'));
const Sticker = lazy(() => import('@phosphor-icons/react/dist/icons/Sticker'));
const Stool = lazy(() => import('@phosphor-icons/react/dist/icons/Stool'));
const Stop = lazy(() => import('@phosphor-icons/react/dist/icons/Stop'));
const StopCircle = lazy(() => import('@phosphor-icons/react/dist/icons/StopCircle'));
const Storefront = lazy(() => import('@phosphor-icons/react/dist/icons/Storefront'));
const Strategy = lazy(() => import('@phosphor-icons/react/dist/icons/Strategy'));
const StripeLogo = lazy(() => import('@phosphor-icons/react/dist/icons/StripeLogo'));
const Student = lazy(() => import('@phosphor-icons/react/dist/icons/Student'));
const Subtitles = lazy(() => import('@phosphor-icons/react/dist/icons/Subtitles'));
const Subtract = lazy(() => import('@phosphor-icons/react/dist/icons/Subtract'));
const SubtractSquare = lazy(() => import('@phosphor-icons/react/dist/icons/SubtractSquare'));
const Suitcase = lazy(() => import('@phosphor-icons/react/dist/icons/Suitcase'));
const SuitcaseRolling = lazy(() => import('@phosphor-icons/react/dist/icons/SuitcaseRolling'));
const SuitcaseSimple = lazy(() => import('@phosphor-icons/react/dist/icons/SuitcaseSimple'));
const Sun = lazy(() => import('@phosphor-icons/react/dist/icons/Sun'));
const SunDim = lazy(() => import('@phosphor-icons/react/dist/icons/SunDim'));
const SunHorizon = lazy(() => import('@phosphor-icons/react/dist/icons/SunHorizon'));
const Sunglasses = lazy(() => import('@phosphor-icons/react/dist/icons/Sunglasses'));
const Swap = lazy(() => import('@phosphor-icons/react/dist/icons/Swap'));
const Swatches = lazy(() => import('@phosphor-icons/react/dist/icons/Swatches'));
const SwimmingPool = lazy(() => import('@phosphor-icons/react/dist/icons/SwimmingPool'));
const Sword = lazy(() => import('@phosphor-icons/react/dist/icons/Sword'));
const Synagogue = lazy(() => import('@phosphor-icons/react/dist/icons/Synagogue'));
const Syringe = lazy(() => import('@phosphor-icons/react/dist/icons/Syringe'));
const TShirt = lazy(() => import('@phosphor-icons/react/dist/icons/TShirt'));
const Table = lazy(() => import('@phosphor-icons/react/dist/icons/Table'));
const Tabs = lazy(() => import('@phosphor-icons/react/dist/icons/Tabs'));
const Tag = lazy(() => import('@phosphor-icons/react/dist/icons/Tag'));
const TagChevron = lazy(() => import('@phosphor-icons/react/dist/icons/TagChevron'));
const TagSimple = lazy(() => import('@phosphor-icons/react/dist/icons/TagSimple'));
const Target = lazy(() => import('@phosphor-icons/react/dist/icons/Target'));
const Taxi = lazy(() => import('@phosphor-icons/react/dist/icons/Taxi'));
const TelegramLogo = lazy(() => import('@phosphor-icons/react/dist/icons/TelegramLogo'));
const Television = lazy(() => import('@phosphor-icons/react/dist/icons/Television'));
const TelevisionSimple = lazy(() => import('@phosphor-icons/react/dist/icons/TelevisionSimple'));
const TennisBall = lazy(() => import('@phosphor-icons/react/dist/icons/TennisBall'));
const Tent = lazy(() => import('@phosphor-icons/react/dist/icons/Tent'));
const Terminal = lazy(() => import('@phosphor-icons/react/dist/icons/Terminal'));
const TerminalWindow = lazy(() => import('@phosphor-icons/react/dist/icons/TerminalWindow'));
const TestTube = lazy(() => import('@phosphor-icons/react/dist/icons/TestTube'));
const TextAUnderline = lazy(() => import('@phosphor-icons/react/dist/icons/TextAUnderline'));
const TextAa = lazy(() => import('@phosphor-icons/react/dist/icons/TextAa'));
const TextAlignCenter = lazy(() => import('@phosphor-icons/react/dist/icons/TextAlignCenter'));
const TextAlignJustify = lazy(() => import('@phosphor-icons/react/dist/icons/TextAlignJustify'));
const TextAlignLeft = lazy(() => import('@phosphor-icons/react/dist/icons/TextAlignLeft'));
const TextAlignRight = lazy(() => import('@phosphor-icons/react/dist/icons/TextAlignRight'));
const TextB = lazy(() => import('@phosphor-icons/react/dist/icons/TextB'));
const TextBolder = lazy(() => import('@phosphor-icons/react/dist/icons/TextB'));
const TextColumns = lazy(() => import('@phosphor-icons/react/dist/icons/TextColumns'));
const TextH = lazy(() => import('@phosphor-icons/react/dist/icons/TextH'));
const TextHFive = lazy(() => import('@phosphor-icons/react/dist/icons/TextHFive'));
const TextHFour = lazy(() => import('@phosphor-icons/react/dist/icons/TextHFour'));
const TextHOne = lazy(() => import('@phosphor-icons/react/dist/icons/TextHOne'));
const TextHSix = lazy(() => import('@phosphor-icons/react/dist/icons/TextHSix'));
const TextHThree = lazy(() => import('@phosphor-icons/react/dist/icons/TextHThree'));
const TextHTwo = lazy(() => import('@phosphor-icons/react/dist/icons/TextHTwo'));
const TextIndent = lazy(() => import('@phosphor-icons/react/dist/icons/TextIndent'));
const TextItalic = lazy(() => import('@phosphor-icons/react/dist/icons/TextItalic'));
const TextOutdent = lazy(() => import('@phosphor-icons/react/dist/icons/TextOutdent'));
const TextStrikethrough = lazy(() => import('@phosphor-icons/react/dist/icons/TextStrikethrough'));
const TextT = lazy(() => import('@phosphor-icons/react/dist/icons/TextT'));
const TextUnderline = lazy(() => import('@phosphor-icons/react/dist/icons/TextUnderline'));
const Textbox = lazy(() => import('@phosphor-icons/react/dist/icons/Textbox'));
const Thermometer = lazy(() => import('@phosphor-icons/react/dist/icons/Thermometer'));
const ThermometerCold = lazy(() => import('@phosphor-icons/react/dist/icons/ThermometerCold'));
const ThermometerHot = lazy(() => import('@phosphor-icons/react/dist/icons/ThermometerHot'));
const ThermometerSimple = lazy(() => import('@phosphor-icons/react/dist/icons/ThermometerSimple'));
const ThumbsDown = lazy(() => import('@phosphor-icons/react/dist/icons/ThumbsDown'));
const ThumbsUp = lazy(() => import('@phosphor-icons/react/dist/icons/ThumbsUp'));
const Ticket = lazy(() => import('@phosphor-icons/react/dist/icons/Ticket'));
const TidalLogo = lazy(() => import('@phosphor-icons/react/dist/icons/TidalLogo'));
const TiktokLogo = lazy(() => import('@phosphor-icons/react/dist/icons/TiktokLogo'));
const Timer = lazy(() => import('@phosphor-icons/react/dist/icons/Timer'));
const Tipi = lazy(() => import('@phosphor-icons/react/dist/icons/Tipi'));
const ToggleLeft = lazy(() => import('@phosphor-icons/react/dist/icons/ToggleLeft'));
const ToggleRight = lazy(() => import('@phosphor-icons/react/dist/icons/ToggleRight'));
const Toilet = lazy(() => import('@phosphor-icons/react/dist/icons/Toilet'));
const ToiletPaper = lazy(() => import('@phosphor-icons/react/dist/icons/ToiletPaper'));
const Toolbox = lazy(() => import('@phosphor-icons/react/dist/icons/Toolbox'));
const Tooth = lazy(() => import('@phosphor-icons/react/dist/icons/Tooth'));
const Tote = lazy(() => import('@phosphor-icons/react/dist/icons/Tote'));
const ToteSimple = lazy(() => import('@phosphor-icons/react/dist/icons/ToteSimple'));
const Trademark = lazy(() => import('@phosphor-icons/react/dist/icons/Trademark'));
const TrademarkRegistered = lazy(
  () => import('@phosphor-icons/react/dist/icons/TrademarkRegistered')
);
const TrafficCone = lazy(() => import('@phosphor-icons/react/dist/icons/TrafficCone'));
const TrafficSign = lazy(() => import('@phosphor-icons/react/dist/icons/TrafficSign'));
const TrafficSignal = lazy(() => import('@phosphor-icons/react/dist/icons/TrafficSignal'));
const Train = lazy(() => import('@phosphor-icons/react/dist/icons/Train'));
const TrainRegional = lazy(() => import('@phosphor-icons/react/dist/icons/TrainRegional'));
const TrainSimple = lazy(() => import('@phosphor-icons/react/dist/icons/TrainSimple'));
const Tram = lazy(() => import('@phosphor-icons/react/dist/icons/Tram'));
const Translate = lazy(() => import('@phosphor-icons/react/dist/icons/Translate'));
const Trash = lazy(() => import('@phosphor-icons/react/dist/icons/Trash'));
const TrashSimple = lazy(() => import('@phosphor-icons/react/dist/icons/TrashSimple'));
const Tray = lazy(() => import('@phosphor-icons/react/dist/icons/Tray'));
const Tree = lazy(() => import('@phosphor-icons/react/dist/icons/Tree'));
const TreeEvergreen = lazy(() => import('@phosphor-icons/react/dist/icons/TreeEvergreen'));
const TreePalm = lazy(() => import('@phosphor-icons/react/dist/icons/TreePalm'));
const TreeStructure = lazy(() => import('@phosphor-icons/react/dist/icons/TreeStructure'));
const TrendDown = lazy(() => import('@phosphor-icons/react/dist/icons/TrendDown'));
const TrendUp = lazy(() => import('@phosphor-icons/react/dist/icons/TrendUp'));
const Triangle = lazy(() => import('@phosphor-icons/react/dist/icons/Triangle'));
const Trophy = lazy(() => import('@phosphor-icons/react/dist/icons/Trophy'));
const Truck = lazy(() => import('@phosphor-icons/react/dist/icons/Truck'));
const TwitchLogo = lazy(() => import('@phosphor-icons/react/dist/icons/TwitchLogo'));
const TwitterLogo = lazy(() => import('@phosphor-icons/react/dist/icons/TwitterLogo'));
const Umbrella = lazy(() => import('@phosphor-icons/react/dist/icons/Umbrella'));
const UmbrellaSimple = lazy(() => import('@phosphor-icons/react/dist/icons/UmbrellaSimple'));
const Unite = lazy(() => import('@phosphor-icons/react/dist/icons/Unite'));
const UniteSquare = lazy(() => import('@phosphor-icons/react/dist/icons/UniteSquare'));
const Upload = lazy(() => import('@phosphor-icons/react/dist/icons/Upload'));
const UploadSimple = lazy(() => import('@phosphor-icons/react/dist/icons/UploadSimple'));
const Usb = lazy(() => import('@phosphor-icons/react/dist/icons/Usb'));
const User = lazy(() => import('@phosphor-icons/react/dist/icons/User'));
const UserCircle = lazy(() => import('@phosphor-icons/react/dist/icons/UserCircle'));
const UserCircleGear = lazy(() => import('@phosphor-icons/react/dist/icons/UserCircleGear'));
const UserCircleMinus = lazy(() => import('@phosphor-icons/react/dist/icons/UserCircleMinus'));
const UserCirclePlus = lazy(() => import('@phosphor-icons/react/dist/icons/UserCirclePlus'));
const UserFocus = lazy(() => import('@phosphor-icons/react/dist/icons/UserFocus'));
const UserGear = lazy(() => import('@phosphor-icons/react/dist/icons/UserGear'));
const UserList = lazy(() => import('@phosphor-icons/react/dist/icons/UserList'));
const UserMinus = lazy(() => import('@phosphor-icons/react/dist/icons/UserMinus'));
const UserPlus = lazy(() => import('@phosphor-icons/react/dist/icons/UserPlus'));
const UserRectangle = lazy(() => import('@phosphor-icons/react/dist/icons/UserRectangle'));
const UserSquare = lazy(() => import('@phosphor-icons/react/dist/icons/UserSquare'));
const UserSwitch = lazy(() => import('@phosphor-icons/react/dist/icons/UserSwitch'));
const Users = lazy(() => import('@phosphor-icons/react/dist/icons/Users'));
const UsersFour = lazy(() => import('@phosphor-icons/react/dist/icons/UsersFour'));
const UsersThree = lazy(() => import('@phosphor-icons/react/dist/icons/UsersThree'));
const Van = lazy(() => import('@phosphor-icons/react/dist/icons/Van'));
const Vault = lazy(() => import('@phosphor-icons/react/dist/icons/Vault'));
const Vibrate = lazy(() => import('@phosphor-icons/react/dist/icons/Vibrate'));
const Video = lazy(() => import('@phosphor-icons/react/dist/icons/Video'));
const VideoCamera = lazy(() => import('@phosphor-icons/react/dist/icons/VideoCamera'));
const VideoCameraSlash = lazy(() => import('@phosphor-icons/react/dist/icons/VideoCameraSlash'));
const Vignette = lazy(() => import('@phosphor-icons/react/dist/icons/Vignette'));
const VinylRecord = lazy(() => import('@phosphor-icons/react/dist/icons/VinylRecord'));
const VirtualReality = lazy(() => import('@phosphor-icons/react/dist/icons/VirtualReality'));
const Virus = lazy(() => import('@phosphor-icons/react/dist/icons/Virus'));
const Voicemail = lazy(() => import('@phosphor-icons/react/dist/icons/Voicemail'));
const Volleyball = lazy(() => import('@phosphor-icons/react/dist/icons/Volleyball'));
const Wall = lazy(() => import('@phosphor-icons/react/dist/icons/Wall'));
const Wallet = lazy(() => import('@phosphor-icons/react/dist/icons/Wallet'));
const Warehouse = lazy(() => import('@phosphor-icons/react/dist/icons/Warehouse'));
const Warning = lazy(() => import('@phosphor-icons/react/dist/icons/Warning'));
const WarningCircle = lazy(() => import('@phosphor-icons/react/dist/icons/WarningCircle'));
const WarningDiamond = lazy(() => import('@phosphor-icons/react/dist/icons/WarningDiamond'));
const WarningOctagon = lazy(() => import('@phosphor-icons/react/dist/icons/WarningOctagon'));
const Watch = lazy(() => import('@phosphor-icons/react/dist/icons/Watch'));
const WaveSawtooth = lazy(() => import('@phosphor-icons/react/dist/icons/WaveSawtooth'));
const WaveSine = lazy(() => import('@phosphor-icons/react/dist/icons/WaveSine'));
const WaveSquare = lazy(() => import('@phosphor-icons/react/dist/icons/WaveSquare'));
const WaveTriangle = lazy(() => import('@phosphor-icons/react/dist/icons/WaveTriangle'));
const Waveform = lazy(() => import('@phosphor-icons/react/dist/icons/Waveform'));
const Waves = lazy(() => import('@phosphor-icons/react/dist/icons/Waves'));
const Webcam = lazy(() => import('@phosphor-icons/react/dist/icons/Webcam'));
const WebcamSlash = lazy(() => import('@phosphor-icons/react/dist/icons/WebcamSlash'));
const WebhooksLogo = lazy(() => import('@phosphor-icons/react/dist/icons/WebhooksLogo'));
const WechatLogo = lazy(() => import('@phosphor-icons/react/dist/icons/WechatLogo'));
const WhatsappLogo = lazy(() => import('@phosphor-icons/react/dist/icons/WhatsappLogo'));
const Wheelchair = lazy(() => import('@phosphor-icons/react/dist/icons/Wheelchair'));
const WheelchairMotion = lazy(() => import('@phosphor-icons/react/dist/icons/WheelchairMotion'));
const WifiHigh = lazy(() => import('@phosphor-icons/react/dist/icons/WifiHigh'));
const WifiLow = lazy(() => import('@phosphor-icons/react/dist/icons/WifiLow'));
const WifiMedium = lazy(() => import('@phosphor-icons/react/dist/icons/WifiMedium'));
const WifiNone = lazy(() => import('@phosphor-icons/react/dist/icons/WifiNone'));
const WifiSlash = lazy(() => import('@phosphor-icons/react/dist/icons/WifiSlash'));
const WifiX = lazy(() => import('@phosphor-icons/react/dist/icons/WifiX'));
const Wind = lazy(() => import('@phosphor-icons/react/dist/icons/Wind'));
const WindowsLogo = lazy(() => import('@phosphor-icons/react/dist/icons/WindowsLogo'));
const Wine = lazy(() => import('@phosphor-icons/react/dist/icons/Wine'));
const Wrench = lazy(() => import('@phosphor-icons/react/dist/icons/Wrench'));
const X = lazy(() => import('@phosphor-icons/react/dist/icons/X'));
const XCircle = lazy(() => import('@phosphor-icons/react/dist/icons/XCircle'));
const XSquare = lazy(() => import('@phosphor-icons/react/dist/icons/XSquare'));
const YinYang = lazy(() => import('@phosphor-icons/react/dist/icons/YinYang'));
const YoutubeLogo = lazy(() => import('@phosphor-icons/react/dist/icons/YoutubeLogo'));

const Components = {
  AddressBook: AddressBook,
  AirTrafficControl: AirTrafficControl,
  Airplane: Airplane,
  AirplaneInFlight: AirplaneInFlight,
  AirplaneLanding: AirplaneLanding,
  AirplaneTakeoff: AirplaneTakeoff,
  AirplaneTilt: AirplaneTilt,
  Airplay: Airplay,
  Alarm: Alarm,
  Alien: Alien,
  AlignBottom: AlignBottom,
  AlignBottomSimple: AlignBottomSimple,
  AlignCenterHorizontal: AlignCenterHorizontal,
  AlignCenterHorizontalSimple: AlignCenterHorizontalSimple,
  AlignCenterVertical: AlignCenterVertical,
  AlignCenterVerticalSimple: AlignCenterVerticalSimple,
  AlignLeft: AlignLeft,
  AlignLeftSimple: AlignLeftSimple,
  AlignRight: AlignRight,
  AlignRightSimple: AlignRightSimple,
  AlignTop: AlignTop,
  AlignTopSimple: AlignTopSimple,
  AmazonLogo: AmazonLogo,
  Anchor: Anchor,
  AnchorSimple: AnchorSimple,
  AndroidLogo: AndroidLogo,
  AngularLogo: AngularLogo,
  Aperture: Aperture,
  AppStoreLogo: AppStoreLogo,
  AppWindow: AppWindow,
  AppleLogo: AppleLogo,
  ApplePodcastsLogo: ApplePodcastsLogo,
  Archive: Archive,
  ArchiveBox: ArchiveBox,
  ArchiveTray: ArchiveTray,
  Armchair: Armchair,
  ArrowArcLeft: ArrowArcLeft,
  ArrowArcRight: ArrowArcRight,
  ArrowBendDoubleUpLeft: ArrowBendDoubleUpLeft,
  ArrowBendDoubleUpRight: ArrowBendDoubleUpRight,
  ArrowBendDownLeft: ArrowBendDownLeft,
  ArrowBendDownRight: ArrowBendDownRight,
  ArrowBendLeftDown: ArrowBendLeftDown,
  ArrowBendLeftUp: ArrowBendLeftUp,
  ArrowBendRightDown: ArrowBendRightDown,
  ArrowBendRightUp: ArrowBendRightUp,
  ArrowBendUpLeft: ArrowBendUpLeft,
  ArrowBendUpRight: ArrowBendUpRight,
  ArrowCircleDown: ArrowCircleDown,
  ArrowCircleDownLeft: ArrowCircleDownLeft,
  ArrowCircleDownRight: ArrowCircleDownRight,
  ArrowCircleLeft: ArrowCircleLeft,
  ArrowCircleRight: ArrowCircleRight,
  ArrowCircleUp: ArrowCircleUp,
  ArrowCircleUpLeft: ArrowCircleUpLeft,
  ArrowCircleUpRight: ArrowCircleUpRight,
  ArrowClockwise: ArrowClockwise,
  ArrowCounterClockwise: ArrowCounterClockwise,
  ArrowDown: ArrowDown,
  ArrowDownLeft: ArrowDownLeft,
  ArrowDownRight: ArrowDownRight,
  ArrowElbowDownLeft: ArrowElbowDownLeft,
  ArrowElbowDownRight: ArrowElbowDownRight,
  ArrowElbowLeft: ArrowElbowLeft,
  ArrowElbowLeftDown: ArrowElbowLeftDown,
  ArrowElbowLeftUp: ArrowElbowLeftUp,
  ArrowElbowRight: ArrowElbowRight,
  ArrowElbowRightDown: ArrowElbowRightDown,
  ArrowElbowRightUp: ArrowElbowRightUp,
  ArrowElbowUpLeft: ArrowElbowUpLeft,
  ArrowElbowUpRight: ArrowElbowUpRight,
  ArrowFatDown: ArrowFatDown,
  ArrowFatLeft: ArrowFatLeft,
  ArrowFatLineDown: ArrowFatLineDown,
  ArrowFatLineLeft: ArrowFatLineLeft,
  ArrowFatLineRight: ArrowFatLineRight,
  ArrowFatLineUp: ArrowFatLineUp,
  ArrowFatLinesDown: ArrowFatLinesDown,
  ArrowFatLinesLeft: ArrowFatLinesLeft,
  ArrowFatLinesRight: ArrowFatLinesRight,
  ArrowFatLinesUp: ArrowFatLinesUp,
  ArrowFatRight: ArrowFatRight,
  ArrowFatUp: ArrowFatUp,
  ArrowLeft: ArrowLeft,
  ArrowLineDown: ArrowLineDown,
  ArrowLineDownLeft: ArrowLineDownLeft,
  ArrowLineDownRight: ArrowLineDownRight,
  ArrowLineLeft: ArrowLineLeft,
  ArrowLineRight: ArrowLineRight,
  ArrowLineUp: ArrowLineUp,
  ArrowLineUpLeft: ArrowLineUpLeft,
  ArrowLineUpRight: ArrowLineUpRight,
  ArrowRight: ArrowRight,
  ArrowSquareDown: ArrowSquareDown,
  ArrowSquareDownLeft: ArrowSquareDownLeft,
  ArrowSquareDownRight: ArrowSquareDownRight,
  ArrowSquareIn: ArrowSquareIn,
  ArrowSquareLeft: ArrowSquareLeft,
  ArrowSquareOut: ArrowSquareOut,
  ArrowSquareRight: ArrowSquareRight,
  ArrowSquareUp: ArrowSquareUp,
  ArrowSquareUpLeft: ArrowSquareUpLeft,
  ArrowSquareUpRight: ArrowSquareUpRight,
  ArrowUDownLeft: ArrowUDownLeft,
  ArrowUDownRight: ArrowUDownRight,
  ArrowULeftDown: ArrowULeftDown,
  ArrowULeftUp: ArrowULeftUp,
  ArrowURightDown: ArrowURightDown,
  ArrowURightUp: ArrowURightUp,
  ArrowUUpLeft: ArrowUUpLeft,
  ArrowUUpRight: ArrowUUpRight,
  ArrowUp: ArrowUp,
  ArrowUpLeft: ArrowUpLeft,
  ArrowUpRight: ArrowUpRight,
  ArrowsClockwise: ArrowsClockwise,
  ArrowsCounterClockwise: ArrowsCounterClockwise,
  ArrowsDownUp: ArrowsDownUp,
  ArrowsHorizontal: ArrowsHorizontal,
  ArrowsIn: ArrowsIn,
  ArrowsInCardinal: ArrowsInCardinal,
  ArrowsInLineHorizontal: ArrowsInLineHorizontal,
  ArrowsInLineVertical: ArrowsInLineVertical,
  ArrowsInSimple: ArrowsInSimple,
  ArrowsLeftRight: ArrowsLeftRight,
  ArrowsMerge: ArrowsMerge,
  ArrowsOut: ArrowsOut,
  ArrowsOutCardinal: ArrowsOutCardinal,
  ArrowsOutLineHorizontal: ArrowsOutLineHorizontal,
  ArrowsOutLineVertical: ArrowsOutLineVertical,
  ArrowsOutSimple: ArrowsOutSimple,
  ArrowsSplit: ArrowsSplit,
  ArrowsVertical: ArrowsVertical,
  Article: Article,
  ArticleMedium: ArticleMedium,
  ArticleNyTimes: ArticleNyTimes,
  Asterisk: Asterisk,
  AsteriskSimple: AsteriskSimple,
  At: At,
  Atom: Atom,
  Baby: Baby,
  Backpack: Backpack,
  Backspace: Backspace,
  Bag: Bag,
  BagSimple: BagSimple,
  Balloon: Balloon,
  Bandaids: Bandaids,
  Bank: Bank,
  Barbell: Barbell,
  Barcode: Barcode,
  Barricade: Barricade,
  Baseball: Baseball,
  BaseballCap: BaseballCap,
  Basket: Basket,
  Basketball: Basketball,
  Bathtub: Bathtub,
  BatteryCharging: BatteryCharging,
  BatteryChargingVertical: BatteryChargingVertical,
  BatteryEmpty: BatteryEmpty,
  BatteryFull: BatteryFull,
  BatteryHigh: BatteryHigh,
  BatteryLow: BatteryLow,
  BatteryMedium: BatteryMedium,
  BatteryPlus: BatteryPlus,
  BatteryPlusVertical: BatteryPlusVertical,
  BatteryVerticalEmpty: BatteryVerticalEmpty,
  BatteryVerticalFull: BatteryVerticalFull,
  BatteryVerticalHigh: BatteryVerticalHigh,
  BatteryVerticalLow: BatteryVerticalLow,
  BatteryVerticalMedium: BatteryVerticalMedium,
  BatteryWarning: BatteryWarning,
  BatteryWarningVertical: BatteryWarningVertical,
  Bed: Bed,
  BeerBottle: BeerBottle,
  BeerStein: BeerStein,
  BehanceLogo: BehanceLogo,
  Bell: Bell,
  BellRinging: BellRinging,
  BellSimple: BellSimple,
  BellSimpleRinging: BellSimpleRinging,
  BellSimpleSlash: BellSimpleSlash,
  BellSimpleZ: BellSimpleZ,
  BellSlash: BellSlash,
  BellZ: BellZ,
  BezierCurve: BezierCurve,
  Bicycle: Bicycle,
  Binoculars: Binoculars,
  Bird: Bird,
  Bluetooth: Bluetooth,
  BluetoothConnected: BluetoothConnected,
  BluetoothSlash: BluetoothSlash,
  BluetoothX: BluetoothX,
  Boat: Boat,
  Bone: Bone,
  Book: Book,
  BookBookmark: BookBookmark,
  BookOpen: BookOpen,
  BookOpenText: BookOpenText,
  Bookmark: Bookmark,
  BookmarkSimple: BookmarkSimple,
  Bookmarks: Bookmarks,
  BookmarksSimple: BookmarksSimple,
  Books: Books,
  Boot: Boot,
  BoundingBox: BoundingBox,
  BowlFood: BowlFood,
  BracketsAngle: BracketsAngle,
  BracketsCurly: BracketsCurly,
  BracketsRound: BracketsRound,
  BracketsSquare: BracketsSquare,
  Brain: Brain,
  Brandy: Brandy,
  Bridge: Bridge,
  Briefcase: Briefcase,
  BriefcaseMetal: BriefcaseMetal,
  Broadcast: Broadcast,
  Broom: Broom,
  Browser: Browser,
  Browsers: Browsers,
  BugBeetle: BugBeetle,
  Bug: Bug,
  BugDroid: BugDroid,
  Buildings: Buildings,
  Bus: Bus,
  Butterfly: Butterfly,
  Cactus: Cactus,
  Cake: Cake,
  Calculator: Calculator,
  CalendarBlank: CalendarBlank,
  Calendar: Calendar,
  CalendarCheck: CalendarCheck,
  CalendarPlus: CalendarPlus,
  CalendarX: CalendarX,
  CallBell: CallBell,
  Camera: Camera,
  CameraPlus: CameraPlus,
  CameraRotate: CameraRotate,
  CameraSlash: CameraSlash,
  Campfire: Campfire,
  Car: Car,
  CarProfile: CarProfile,
  CarSimple: CarSimple,
  Cardholder: Cardholder,
  Cards: Cards,
  CaretCircleDoubleDown: CaretCircleDoubleDown,
  CaretCircleDoubleLeft: CaretCircleDoubleLeft,
  CaretCircleDoubleRight: CaretCircleDoubleRight,
  CaretCircleDoubleUp: CaretCircleDoubleUp,
  CaretCircleDown: CaretCircleDown,
  CaretCircleLeft: CaretCircleLeft,
  CaretCircleRight: CaretCircleRight,
  CaretCircleUp: CaretCircleUp,
  CaretCircleUpDown: CaretCircleUpDown,
  CaretDoubleDown: CaretDoubleDown,
  CaretDoubleLeft: CaretDoubleLeft,
  CaretDoubleRight: CaretDoubleRight,
  CaretDoubleUp: CaretDoubleUp,
  CaretDown: CaretDown,
  CaretLeft: CaretLeft,
  CaretRight: CaretRight,
  CaretUp: CaretUp,
  CaretUpDown: CaretUpDown,
  Carrot: Carrot,
  CassetteTape: CassetteTape,
  CastleTurret: CastleTurret,
  Cat: Cat,
  CellSignalFull: CellSignalFull,
  CellSignalHigh: CellSignalHigh,
  CellSignalLow: CellSignalLow,
  CellSignalMedium: CellSignalMedium,
  CellSignalNone: CellSignalNone,
  CellSignalSlash: CellSignalSlash,
  CellSignalX: CellSignalX,
  Certificate: Certificate,
  Chair: Chair,
  Chalkboard: Chalkboard,
  ChalkboardSimple: ChalkboardSimple,
  ChalkboardTeacher: ChalkboardTeacher,
  Champagne: Champagne,
  ChargingStation: ChargingStation,
  ChartBar: ChartBar,
  ChartBarHorizontal: ChartBarHorizontal,
  ChartDonut: ChartDonut,
  ChartLine: ChartLine,
  ChartLineDown: ChartLineDown,
  ChartLineUp: ChartLineUp,
  ChartPie: ChartPie,
  ChartPieSlice: ChartPieSlice,
  ChartPolar: ChartPolar,
  ChartScatter: ChartScatter,
  Chat: Chat,
  ChatCentered: ChatCentered,
  ChatCenteredDots: ChatCenteredDots,
  ChatCenteredText: ChatCenteredText,
  ChatCircle: ChatCircle,
  ChatCircleDots: ChatCircleDots,
  ChatCircleText: ChatCircleText,
  ChatDots: ChatDots,
  ChatTeardrop: ChatTeardrop,
  ChatTeardropDots: ChatTeardropDots,
  ChatTeardropText: ChatTeardropText,
  ChatText: ChatText,
  Chats: Chats,
  ChatsCircle: ChatsCircle,
  ChatsTeardrop: ChatsTeardrop,
  Check: Check,
  CheckCircle: CheckCircle,
  CheckFat: CheckFat,
  CheckSquare: CheckSquare,
  CheckSquareOffset: CheckSquareOffset,
  Checks: Checks,
  Church: Church,
  Circle: Circle,
  CircleDashed: CircleDashed,
  CircleHalf: CircleHalf,
  CircleHalfTilt: CircleHalfTilt,
  CircleNotch: CircleNotch,
  CirclesFour: CirclesFour,
  CirclesThree: CirclesThree,
  CirclesThreePlus: CirclesThreePlus,
  Circuitry: Circuitry,
  Clipboard: Clipboard,
  ClipboardText: ClipboardText,
  ClockAfternoon: ClockAfternoon,
  Clock: Clock,
  ClockClockwise: ClockClockwise,
  ClockCountdown: ClockCountdown,
  ClockCounterClockwise: ClockCounterClockwise,
  ClosedCaptioning: ClosedCaptioning,
  CloudArrowDown: CloudArrowDown,
  CloudArrowUp: CloudArrowUp,
  Cloud: Cloud,
  CloudCheck: CloudCheck,
  CloudFog: CloudFog,
  CloudLightning: CloudLightning,
  CloudMoon: CloudMoon,
  CloudRain: CloudRain,
  CloudSlash: CloudSlash,
  CloudSnow: CloudSnow,
  CloudSun: CloudSun,
  CloudWarning: CloudWarning,
  CloudX: CloudX,
  Club: Club,
  CoatHanger: CoatHanger,
  CodaLogo: CodaLogo,
  CodeBlock: CodeBlock,
  Code: Code,
  CodeSimple: CodeSimple,
  CodepenLogo: CodepenLogo,
  CodesandboxLogo: CodesandboxLogo,
  Coffee: Coffee,
  Coin: Coin,
  CoinVertical: CoinVertical,
  Coins: Coins,
  Columns: Columns,
  Command: Command,
  Compass: Compass,
  CompassTool: CompassTool,
  ComputerTower: ComputerTower,
  Confetti: Confetti,
  ContactlessPayment: ContactlessPayment,
  Control: Control,
  Cookie: Cookie,
  CookingPot: CookingPot,
  Copy: Copy,
  CopySimple: CopySimple,
  Copyleft: Copyleft,
  Copyright: Copyright,
  CornersIn: CornersIn,
  CornersOut: CornersOut,
  Couch: Couch,
  Cpu: Cpu,
  CreditCard: CreditCard,
  Crop: Crop,
  Cross: Cross,
  Crosshair: Crosshair,
  CrosshairSimple: CrosshairSimple,
  Crown: Crown,
  CrownSimple: CrownSimple,
  Cube: Cube,
  CubeFocus: CubeFocus,
  CubeTransparent: CubeTransparent,
  CurrencyBtc: CurrencyBtc,
  CurrencyCircleDollar: CurrencyCircleDollar,
  CurrencyCny: CurrencyCny,
  CurrencyDollar: CurrencyDollar,
  CurrencyDollarSimple: CurrencyDollarSimple,
  CurrencyEth: CurrencyEth,
  CurrencyEur: CurrencyEur,
  CurrencyGbp: CurrencyGbp,
  CurrencyInr: CurrencyInr,
  CurrencyJpy: CurrencyJpy,
  CurrencyKrw: CurrencyKrw,
  CurrencyKzt: CurrencyKzt,
  CurrencyNgn: CurrencyNgn,
  CurrencyRub: CurrencyRub,
  Cursor: Cursor,
  CursorClick: CursorClick,
  CursorText: CursorText,
  Cylinder: Cylinder,
  Database: Database,
  Desktop: Desktop,
  DesktopTower: DesktopTower,
  Detective: Detective,
  DevToLogo: DevToLogo,
  DeviceMobile: DeviceMobile,
  DeviceMobileCamera: DeviceMobileCamera,
  DeviceMobileSpeaker: DeviceMobileSpeaker,
  DeviceTablet: DeviceTablet,
  DeviceTabletCamera: DeviceTabletCamera,
  DeviceTabletSpeaker: DeviceTabletSpeaker,
  Devices: Devices,
  Diamond: Diamond,
  DiamondsFour: DiamondsFour,
  DiceFive: DiceFive,
  DiceFour: DiceFour,
  DiceOne: DiceOne,
  DiceSix: DiceSix,
  DiceThree: DiceThree,
  DiceTwo: DiceTwo,
  Disc: Disc,
  DiscordLogo: DiscordLogo,
  Divide: Divide,
  Dna: Dna,
  Dog: Dog,
  Door: Door,
  DoorOpen: DoorOpen,
  Dot: Dot,
  DotOutline: DotOutline,
  DotsNine: DotsNine,
  DotsSix: DotsSix,
  DotsSixVertical: DotsSixVertical,
  DotsThree: DotsThree,
  DotsThreeCircle: DotsThreeCircle,
  DotsThreeCircleVertical: DotsThreeCircleVertical,
  DotsThreeOutline: DotsThreeOutline,
  DotsThreeOutlineVertical: DotsThreeOutlineVertical,
  DotsThreeVertical: DotsThreeVertical,
  Download: Download,
  DownloadSimple: DownloadSimple,
  Dress: Dress,
  DribbbleLogo: DribbbleLogo,
  Drop: Drop,
  DropHalf: DropHalf,
  DropHalfBottom: DropHalfBottom,
  DropboxLogo: DropboxLogo,
  Ear: Ear,
  EarSlash: EarSlash,
  Egg: Egg,
  EggCrack: EggCrack,
  Eject: Eject,
  EjectSimple: EjectSimple,
  Elevator: Elevator,
  Engine: Engine,
  Envelope: Envelope,
  EnvelopeOpen: EnvelopeOpen,
  EnvelopeSimple: EnvelopeSimple,
  EnvelopeSimpleOpen: EnvelopeSimpleOpen,
  Equalizer: Equalizer,
  Equals: Equals,
  Eraser: Eraser,
  EscalatorDown: EscalatorDown,
  EscalatorUp: EscalatorUp,
  Exam: Exam,
  Exclude: Exclude,
  ExcludeSquare: ExcludeSquare,
  Export: Export,
  Eye: Eye,
  EyeClosed: EyeClosed,
  EyeSlash: EyeSlash,
  Eyedropper: Eyedropper,
  EyedropperSample: EyedropperSample,
  Eyeglasses: Eyeglasses,
  FaceMask: FaceMask,
  FacebookLogo: FacebookLogo,
  Factory: Factory,
  Faders: Faders,
  FadersHorizontal: FadersHorizontal,
  Fan: Fan,
  FastForward: FastForward,
  FastForwardCircle: FastForwardCircle,
  Feather: Feather,
  FigmaLogo: FigmaLogo,
  FileArchive: FileArchive,
  FileArrowDown: FileArrowDown,
  FileArrowUp: FileArrowUp,
  FileAudio: FileAudio,
  File: File,
  FileCloud: FileCloud,
  FileCode: FileCode,
  FileCss: FileCss,
  FileCsv: FileCsv,
  FileDashed: FileDashed,
  FileDotted: FileDotted,
  FileDoc: FileDoc,
  FileHtml: FileHtml,
  FileImage: FileImage,
  FileJpg: FileJpg,
  FileJs: FileJs,
  FileJsx: FileJsx,
  FileLock: FileLock,
  FileMagnifyingGlass: FileMagnifyingGlass,
  FileSearch: FileSearch,
  FileMinus: FileMinus,
  FilePdf: FilePdf,
  FilePlus: FilePlus,
  FilePng: FilePng,
  FilePpt: FilePpt,
  FileRs: FileRs,
  FileSql: FileSql,
  FileSvg: FileSvg,
  FileText: FileText,
  FileTs: FileTs,
  FileTsx: FileTsx,
  FileVideo: FileVideo,
  FileVue: FileVue,
  FileX: FileX,
  FileXls: FileXls,
  FileZip: FileZip,
  Files: Files,
  FilmReel: FilmReel,
  FilmScript: FilmScript,
  FilmSlate: FilmSlate,
  FilmStrip: FilmStrip,
  Fingerprint: Fingerprint,
  FingerprintSimple: FingerprintSimple,
  FinnTheHuman: FinnTheHuman,
  Fire: Fire,
  FireExtinguisher: FireExtinguisher,
  FireSimple: FireSimple,
  FirstAid: FirstAid,
  FirstAidKit: FirstAidKit,
  Fish: Fish,
  FishSimple: FishSimple,
  FlagBanner: FlagBanner,
  Flag: Flag,
  FlagCheckered: FlagCheckered,
  FlagPennant: FlagPennant,
  Flame: Flame,
  Flashlight: Flashlight,
  Flask: Flask,
  FloppyDiskBack: FloppyDiskBack,
  FloppyDisk: FloppyDisk,
  FlowArrow: FlowArrow,
  Flower: Flower,
  FlowerLotus: FlowerLotus,
  FlowerTulip: FlowerTulip,
  FlyingSaucer: FlyingSaucer,
  Folder: Folder,
  FolderDashed: FolderDashed,
  FolderDotted: FolderDotted,
  FolderLock: FolderLock,
  FolderMinus: FolderMinus,
  FolderNotch: FolderNotch,
  FolderNotchMinus: FolderNotchMinus,
  FolderNotchOpen: FolderNotchOpen,
  FolderNotchPlus: FolderNotchPlus,
  FolderOpen: FolderOpen,
  FolderPlus: FolderPlus,
  FolderSimple: FolderSimple,
  FolderSimpleDashed: FolderSimpleDashed,
  FolderSimpleDotted: FolderSimpleDotted,
  FolderSimpleLock: FolderSimpleLock,
  FolderSimpleMinus: FolderSimpleMinus,
  FolderSimplePlus: FolderSimplePlus,
  FolderSimpleStar: FolderSimpleStar,
  FolderSimpleUser: FolderSimpleUser,
  FolderStar: FolderStar,
  FolderUser: FolderUser,
  Folders: Folders,
  Football: Football,
  Footprints: Footprints,
  ForkKnife: ForkKnife,
  FrameCorners: FrameCorners,
  FramerLogo: FramerLogo,
  Function: Function,
  Funnel: Funnel,
  FunnelSimple: FunnelSimple,
  GameController: GameController,
  Garage: Garage,
  GasCan: GasCan,
  GasPump: GasPump,
  Gauge: Gauge,
  Gavel: Gavel,
  Gear: Gear,
  GearFine: GearFine,
  GearSix: GearSix,
  GenderFemale: GenderFemale,
  GenderIntersex: GenderIntersex,
  GenderMale: GenderMale,
  GenderNeuter: GenderNeuter,
  GenderNonbinary: GenderNonbinary,
  GenderTransgender: GenderTransgender,
  Ghost: Ghost,
  Gif: Gif,
  Gift: Gift,
  GitBranch: GitBranch,
  GitCommit: GitCommit,
  GitDiff: GitDiff,
  GitFork: GitFork,
  GitMerge: GitMerge,
  GitPullRequest: GitPullRequest,
  GithubLogo: GithubLogo,
  GitlabLogo: GitlabLogo,
  GitlabLogoSimple: GitlabLogoSimple,
  Globe: Globe,
  GlobeHemisphereEast: GlobeHemisphereEast,
  GlobeHemisphereWest: GlobeHemisphereWest,
  GlobeSimple: GlobeSimple,
  GlobeStand: GlobeStand,
  Goggles: Goggles,
  GoodreadsLogo: GoodreadsLogo,
  GoogleCardboardLogo: GoogleCardboardLogo,
  GoogleChromeLogo: GoogleChromeLogo,
  GoogleDriveLogo: GoogleDriveLogo,
  GoogleLogo: GoogleLogo,
  GooglePhotosLogo: GooglePhotosLogo,
  GooglePlayLogo: GooglePlayLogo,
  GooglePodcastsLogo: GooglePodcastsLogo,
  Gradient: Gradient,
  GraduationCap: GraduationCap,
  Grains: Grains,
  GrainsSlash: GrainsSlash,
  Graph: Graph,
  GridFour: GridFour,
  GridNine: GridNine,
  Guitar: Guitar,
  Hamburger: Hamburger,
  Hammer: Hammer,
  Hand: Hand,
  HandCoins: HandCoins,
  HandEye: HandEye,
  HandFist: HandFist,
  HandGrabbing: HandGrabbing,
  HandHeart: HandHeart,
  HandPalm: HandPalm,
  HandPointing: HandPointing,
  HandSoap: HandSoap,
  HandSwipeLeft: HandSwipeLeft,
  HandSwipeRight: HandSwipeRight,
  HandTap: HandTap,
  HandWaving: HandWaving,
  Handbag: Handbag,
  HandbagSimple: HandbagSimple,
  HandsClapping: HandsClapping,
  HandsPraying: HandsPraying,
  Handshake: Handshake,
  HardDrive: HardDrive,
  HardDrives: HardDrives,
  Hash: Hash,
  HashStraight: HashStraight,
  Headlights: Headlights,
  Headphones: Headphones,
  Headset: Headset,
  Heart: Heart,
  HeartBreak: HeartBreak,
  HeartHalf: HeartHalf,
  HeartStraight: HeartStraight,
  HeartStraightBreak: HeartStraightBreak,
  Heartbeat: Heartbeat,
  Hexagon: Hexagon,
  HighHeel: HighHeel,
  HighlighterCircle: HighlighterCircle,
  Hoodie: Hoodie,
  Horse: Horse,
  Hourglass: Hourglass,
  HourglassHigh: HourglassHigh,
  HourglassLow: HourglassLow,
  HourglassMedium: HourglassMedium,
  HourglassSimple: HourglassSimple,
  HourglassSimpleHigh: HourglassSimpleHigh,
  HourglassSimpleLow: HourglassSimpleLow,
  HourglassSimpleMedium: HourglassSimpleMedium,
  House: House,
  HouseLine: HouseLine,
  HouseSimple: HouseSimple,
  IceCream: IceCream,
  IdentificationBadge: IdentificationBadge,
  IdentificationCard: IdentificationCard,
  Image: Image,
  ImageSquare: ImageSquare,
  Images: Images,
  ImagesSquare: ImagesSquare,
  InfinityIcon: InfinityIcon,
  Info: Info,
  InstagramLogo: InstagramLogo,
  Intersect: Intersect,
  IntersectSquare: IntersectSquare,
  IntersectThree: IntersectThree,
  Jeep: Jeep,
  Kanban: Kanban,
  Key: Key,
  KeyReturn: KeyReturn,
  Keyboard: Keyboard,
  Keyhole: Keyhole,
  Knife: Knife,
  Ladder: Ladder,
  LadderSimple: LadderSimple,
  Lamp: Lamp,
  Laptop: Laptop,
  Layout: Layout,
  Leaf: Leaf,
  Lifebuoy: Lifebuoy,
  Lightbulb: Lightbulb,
  LightbulbFilament: LightbulbFilament,
  Lighthouse: Lighthouse,
  LightningA: LightningA,
  Lightning: Lightning,
  LightningSlash: LightningSlash,
  LineSegment: LineSegment,
  LineSegments: LineSegments,
  Link: Link,
  LinkBreak: LinkBreak,
  LinkSimple: LinkSimple,
  LinkSimpleBreak: LinkSimpleBreak,
  LinkSimpleHorizontal: LinkSimpleHorizontal,
  LinkSimpleHorizontalBreak: LinkSimpleHorizontalBreak,
  LinkedinLogo: LinkedinLogo,
  LinuxLogo: LinuxLogo,
  List: List,
  ListBullets: ListBullets,
  ListChecks: ListChecks,
  ListDashes: ListDashes,
  ListMagnifyingGlass: ListMagnifyingGlass,
  ListNumbers: ListNumbers,
  ListPlus: ListPlus,
  Lock: Lock,
  LockKey: LockKey,
  LockKeyOpen: LockKeyOpen,
  LockLaminated: LockLaminated,
  LockLaminatedOpen: LockLaminatedOpen,
  LockOpen: LockOpen,
  LockSimple: LockSimple,
  LockSimpleOpen: LockSimpleOpen,
  Lockers: Lockers,
  MagicWand: MagicWand,
  Magnet: Magnet,
  MagnetStraight: MagnetStraight,
  MagnifyingGlass: MagnifyingGlass,
  MagnifyingGlassMinus: MagnifyingGlassMinus,
  MagnifyingGlassPlus: MagnifyingGlassPlus,
  MapPin: MapPin,
  MapPinLine: MapPinLine,
  MapTrifold: MapTrifold,
  MarkerCircle: MarkerCircle,
  Martini: Martini,
  MaskHappy: MaskHappy,
  MaskSad: MaskSad,
  MathOperations: MathOperations,
  Medal: Medal,
  MedalMilitary: MedalMilitary,
  MediumLogo: MediumLogo,
  Megaphone: Megaphone,
  MegaphoneSimple: MegaphoneSimple,
  MessengerLogo: MessengerLogo,
  MetaLogo: MetaLogo,
  Metronome: Metronome,
  Microphone: Microphone,
  MicrophoneSlash: MicrophoneSlash,
  MicrophoneStage: MicrophoneStage,
  MicrosoftExcelLogo: MicrosoftExcelLogo,
  MicrosoftOutlookLogo: MicrosoftOutlookLogo,
  MicrosoftPowerpointLogo: MicrosoftPowerpointLogo,
  MicrosoftTeamsLogo: MicrosoftTeamsLogo,
  MicrosoftWordLogo: MicrosoftWordLogo,
  Minus: Minus,
  MinusCircle: MinusCircle,
  MinusSquare: MinusSquare,
  Money: Money,
  Monitor: Monitor,
  MonitorPlay: MonitorPlay,
  Moon: Moon,
  MoonStars: MoonStars,
  Moped: Moped,
  MopedFront: MopedFront,
  Mosque: Mosque,
  Motorcycle: Motorcycle,
  Mountains: Mountains,
  Mouse: Mouse,
  MouseSimple: MouseSimple,
  MusicNote: MusicNote,
  MusicNoteSimple: MusicNoteSimple,
  MusicNotes: MusicNotes,
  MusicNotesPlus: MusicNotesPlus,
  MusicNotesSimple: MusicNotesSimple,
  NavigationArrow: NavigationArrow,
  Needle: Needle,
  Newspaper: Newspaper,
  NewspaperClipping: NewspaperClipping,
  Notches: Notches,
  NoteBlank: NoteBlank,
  Note: Note,
  NotePencil: NotePencil,
  Notebook: Notebook,
  Notepad: Notepad,
  Notification: Notification,
  NotionLogo: NotionLogo,
  NumberCircleEight: NumberCircleEight,
  NumberCircleFive: NumberCircleFive,
  NumberCircleFour: NumberCircleFour,
  NumberCircleNine: NumberCircleNine,
  NumberCircleOne: NumberCircleOne,
  NumberCircleSeven: NumberCircleSeven,
  NumberCircleSix: NumberCircleSix,
  NumberCircleThree: NumberCircleThree,
  NumberCircleTwo: NumberCircleTwo,
  NumberCircleZero: NumberCircleZero,
  NumberEight: NumberEight,
  NumberFive: NumberFive,
  NumberFour: NumberFour,
  NumberNine: NumberNine,
  NumberOne: NumberOne,
  NumberSeven: NumberSeven,
  NumberSix: NumberSix,
  NumberSquareEight: NumberSquareEight,
  NumberSquareFive: NumberSquareFive,
  NumberSquareFour: NumberSquareFour,
  NumberSquareNine: NumberSquareNine,
  NumberSquareOne: NumberSquareOne,
  NumberSquareSeven: NumberSquareSeven,
  NumberSquareSix: NumberSquareSix,
  NumberSquareThree: NumberSquareThree,
  NumberSquareTwo: NumberSquareTwo,
  NumberSquareZero: NumberSquareZero,
  NumberThree: NumberThree,
  NumberTwo: NumberTwo,
  NumberZero: NumberZero,
  Nut: Nut,
  NyTimesLogo: NyTimesLogo,
  Octagon: Octagon,
  OfficeChair: OfficeChair,
  Option: Option,
  OrangeSlice: OrangeSlice,
  Package: Package,
  PaintBrush: PaintBrush,
  PaintBrushBroad: PaintBrushBroad,
  PaintBrushHousehold: PaintBrushHousehold,
  PaintBucket: PaintBucket,
  PaintRoller: PaintRoller,
  Palette: Palette,
  Pants: Pants,
  PaperPlane: PaperPlane,
  PaperPlaneRight: PaperPlaneRight,
  PaperPlaneTilt: PaperPlaneTilt,
  Paperclip: Paperclip,
  PaperclipHorizontal: PaperclipHorizontal,
  Parachute: Parachute,
  Paragraph: Paragraph,
  Parallelogram: Parallelogram,
  Park: Park,
  Password: Password,
  Path: Path,
  PatreonLogo: PatreonLogo,
  Pause: Pause,
  PauseCircle: PauseCircle,
  PawPrint: PawPrint,
  PaypalLogo: PaypalLogo,
  Peace: Peace,
  Pen: Pen,
  PenNib: PenNib,
  PenNibStraight: PenNibStraight,
  Pencil: Pencil,
  PencilCircle: PencilCircle,
  PencilLine: PencilLine,
  PencilSimple: PencilSimple,
  PencilSimpleLine: PencilSimpleLine,
  PencilSimpleSlash: PencilSimpleSlash,
  PencilSlash: PencilSlash,
  Pentagram: Pentagram,
  Pepper: Pepper,
  Percent: Percent,
  PersonArmsSpread: PersonArmsSpread,
  Person: Person,
  PersonSimpleBike: PersonSimpleBike,
  PersonSimple: PersonSimple,
  PersonSimpleRun: PersonSimpleRun,
  PersonSimpleThrow: PersonSimpleThrow,
  PersonSimpleWalk: PersonSimpleWalk,
  Perspective: Perspective,
  Phone: Phone,
  PhoneCall: PhoneCall,
  PhoneDisconnect: PhoneDisconnect,
  PhoneIncoming: PhoneIncoming,
  PhoneOutgoing: PhoneOutgoing,
  PhonePlus: PhonePlus,
  PhoneSlash: PhoneSlash,
  PhoneX: PhoneX,
  PhosphorLogo: PhosphorLogo,
  Pi: Pi,
  PianoKeys: PianoKeys,
  PictureInPicture: PictureInPicture,
  PiggyBank: PiggyBank,
  Pill: Pill,
  PinterestLogo: PinterestLogo,
  Pinwheel: Pinwheel,
  Pizza: Pizza,
  Placeholder: Placeholder,
  Planet: Planet,
  Plant: Plant,
  Play: Play,
  PlayCircle: PlayCircle,
  PlayPause: PlayPause,
  Playlist: Playlist,
  Plug: Plug,
  PlugCharging: PlugCharging,
  Plugs: Plugs,
  PlugsConnected: PlugsConnected,
  Plus: Plus,
  PlusCircle: PlusCircle,
  PlusMinus: PlusMinus,
  PlusSquare: PlusSquare,
  PokerChip: PokerChip,
  PoliceCar: PoliceCar,
  Polygon: Polygon,
  Popcorn: Popcorn,
  PottedPlant: PottedPlant,
  Power: Power,
  Prescription: Prescription,
  Presentation: Presentation,
  PresentationChart: PresentationChart,
  Printer: Printer,
  Prohibit: Prohibit,
  ProhibitInset: ProhibitInset,
  ProjectorScreen: ProjectorScreen,
  ProjectorScreenChart: ProjectorScreenChart,
  Pulse: Pulse,
  Activity: Activity,
  PushPin: PushPin,
  PushPinSimple: PushPinSimple,
  PushPinSimpleSlash: PushPinSimpleSlash,
  PushPinSlash: PushPinSlash,
  PuzzlePiece: PuzzlePiece,
  QrCode: QrCode,
  Question: Question,
  Queue: Queue,
  Quotes: Quotes,
  Radical: Radical,
  Radio: Radio,
  RadioButton: RadioButton,
  Radioactive: Radioactive,
  Rainbow: Rainbow,
  RainbowCloud: RainbowCloud,
  ReadCvLogo: ReadCvLogo,
  Receipt: Receipt,
  ReceiptX: ReceiptX,
  Record: Record,
  Rectangle: Rectangle,
  Recycle: Recycle,
  RedditLogo: RedditLogo,
  Repeat: Repeat,
  RepeatOnce: RepeatOnce,
  Rewind: Rewind,
  RewindCircle: RewindCircle,
  RoadHorizon: RoadHorizon,
  Robot: Robot,
  Rocket: Rocket,
  RocketLaunch: RocketLaunch,
  Rows: Rows,
  Rss: Rss,
  RssSimple: RssSimple,
  Rug: Rug,
  Ruler: Ruler,
  Scales: Scales,
  Scan: Scan,
  Scissors: Scissors,
  Scooter: Scooter,
  Screencast: Screencast,
  ScribbleLoop: ScribbleLoop,
  Scroll: Scroll,
  Seal: Seal,
  CircleWavy: CircleWavy,
  SealCheck: SealCheck,
  CircleWavyCheck: CircleWavyCheck,
  SealQuestion: SealQuestion,
  CircleWavyQuestion: CircleWavyQuestion,
  SealWarning: SealWarning,
  CircleWavyWarning: CircleWavyWarning,
  SelectionAll: SelectionAll,
  SelectionBackground: SelectionBackground,
  Selection: Selection,
  SelectionForeground: SelectionForeground,
  SelectionInverse: SelectionInverse,
  SelectionPlus: SelectionPlus,
  SelectionSlash: SelectionSlash,
  Shapes: Shapes,
  Share: Share,
  ShareFat: ShareFat,
  ShareNetwork: ShareNetwork,
  Shield: Shield,
  ShieldCheck: ShieldCheck,
  ShieldCheckered: ShieldCheckered,
  ShieldChevron: ShieldChevron,
  ShieldPlus: ShieldPlus,
  ShieldSlash: ShieldSlash,
  ShieldStar: ShieldStar,
  ShieldWarning: ShieldWarning,
  ShirtFolded: ShirtFolded,
  ShootingStar: ShootingStar,
  ShoppingBag: ShoppingBag,
  ShoppingBagOpen: ShoppingBagOpen,
  ShoppingCart: ShoppingCart,
  ShoppingCartSimple: ShoppingCartSimple,
  Shower: Shower,
  Shrimp: Shrimp,
  ShuffleAngular: ShuffleAngular,
  Shuffle: Shuffle,
  ShuffleSimple: ShuffleSimple,
  Sidebar: Sidebar,
  SidebarSimple: SidebarSimple,
  Sigma: Sigma,
  SignIn: SignIn,
  SignOut: SignOut,
  Signature: Signature,
  Signpost: Signpost,
  SimCard: SimCard,
  Siren: Siren,
  SketchLogo: SketchLogo,
  SkipBack: SkipBack,
  SkipBackCircle: SkipBackCircle,
  SkipForward: SkipForward,
  SkipForwardCircle: SkipForwardCircle,
  Skull: Skull,
  SlackLogo: SlackLogo,
  Sliders: Sliders,
  SlidersHorizontal: SlidersHorizontal,
  Slideshow: Slideshow,
  SmileyAngry: SmileyAngry,
  SmileyBlank: SmileyBlank,
  Smiley: Smiley,
  SmileyMeh: SmileyMeh,
  SmileyNervous: SmileyNervous,
  SmileySad: SmileySad,
  SmileySticker: SmileySticker,
  SmileyWink: SmileyWink,
  SmileyXEyes: SmileyXEyes,
  SnapchatLogo: SnapchatLogo,
  Sneaker: Sneaker,
  SneakerMove: SneakerMove,
  Snowflake: Snowflake,
  SoccerBall: SoccerBall,
  SortAscending: SortAscending,
  SortDescending: SortDescending,
  SoundcloudLogo: SoundcloudLogo,
  Spade: Spade,
  Sparkle: Sparkle,
  SpeakerHifi: SpeakerHifi,
  SpeakerHigh: SpeakerHigh,
  SpeakerLow: SpeakerLow,
  SpeakerNone: SpeakerNone,
  SpeakerSimpleHigh: SpeakerSimpleHigh,
  SpeakerSimpleLow: SpeakerSimpleLow,
  SpeakerSimpleNone: SpeakerSimpleNone,
  SpeakerSimpleSlash: SpeakerSimpleSlash,
  SpeakerSimpleX: SpeakerSimpleX,
  SpeakerSlash: SpeakerSlash,
  SpeakerX: SpeakerX,
  Spinner: Spinner,
  SpinnerGap: SpinnerGap,
  Spiral: Spiral,
  SplitHorizontal: SplitHorizontal,
  SplitVertical: SplitVertical,
  SpotifyLogo: SpotifyLogo,
  Square: Square,
  SquareHalf: SquareHalf,
  SquareHalfBottom: SquareHalfBottom,
  SquareLogo: SquareLogo,
  SquareSplitHorizontal: SquareSplitHorizontal,
  SquareSplitVertical: SquareSplitVertical,
  SquaresFour: SquaresFour,
  Stack: Stack,
  StackOverflowLogo: StackOverflowLogo,
  StackSimple: StackSimple,
  Stairs: Stairs,
  Stamp: Stamp,
  StarAndCrescent: StarAndCrescent,
  Star: Star,
  StarFour: StarFour,
  StarHalf: StarHalf,
  StarOfDavid: StarOfDavid,
  SteeringWheel: SteeringWheel,
  Steps: Steps,
  Stethoscope: Stethoscope,
  Sticker: Sticker,
  Stool: Stool,
  Stop: Stop,
  StopCircle: StopCircle,
  Storefront: Storefront,
  Strategy: Strategy,
  StripeLogo: StripeLogo,
  Student: Student,
  Subtitles: Subtitles,
  Subtract: Subtract,
  SubtractSquare: SubtractSquare,
  Suitcase: Suitcase,
  SuitcaseRolling: SuitcaseRolling,
  SuitcaseSimple: SuitcaseSimple,
  Sun: Sun,
  SunDim: SunDim,
  SunHorizon: SunHorizon,
  Sunglasses: Sunglasses,
  Swap: Swap,
  Swatches: Swatches,
  SwimmingPool: SwimmingPool,
  Sword: Sword,
  Synagogue: Synagogue,
  Syringe: Syringe,
  TShirt: TShirt,
  Table: Table,
  Tabs: Tabs,
  Tag: Tag,
  TagChevron: TagChevron,
  TagSimple: TagSimple,
  Target: Target,
  Taxi: Taxi,
  TelegramLogo: TelegramLogo,
  Television: Television,
  TelevisionSimple: TelevisionSimple,
  TennisBall: TennisBall,
  Tent: Tent,
  Terminal: Terminal,
  TerminalWindow: TerminalWindow,
  TestTube: TestTube,
  TextAUnderline: TextAUnderline,
  TextAa: TextAa,
  TextAlignCenter: TextAlignCenter,
  TextAlignJustify: TextAlignJustify,
  TextAlignLeft: TextAlignLeft,
  TextAlignRight: TextAlignRight,
  TextB: TextB,
  TextBolder: TextBolder,
  TextColumns: TextColumns,
  TextH: TextH,
  TextHFive: TextHFive,
  TextHFour: TextHFour,
  TextHOne: TextHOne,
  TextHSix: TextHSix,
  TextHThree: TextHThree,
  TextHTwo: TextHTwo,
  TextIndent: TextIndent,
  TextItalic: TextItalic,
  TextOutdent: TextOutdent,
  TextStrikethrough: TextStrikethrough,
  TextT: TextT,
  TextUnderline: TextUnderline,
  Textbox: Textbox,
  Thermometer: Thermometer,
  ThermometerCold: ThermometerCold,
  ThermometerHot: ThermometerHot,
  ThermometerSimple: ThermometerSimple,
  ThumbsDown: ThumbsDown,
  ThumbsUp: ThumbsUp,
  Ticket: Ticket,
  TidalLogo: TidalLogo,
  TiktokLogo: TiktokLogo,
  Timer: Timer,
  Tipi: Tipi,
  ToggleLeft: ToggleLeft,
  ToggleRight: ToggleRight,
  Toilet: Toilet,
  ToiletPaper: ToiletPaper,
  Toolbox: Toolbox,
  Tooth: Tooth,
  Tote: Tote,
  ToteSimple: ToteSimple,
  Trademark: Trademark,
  TrademarkRegistered: TrademarkRegistered,
  TrafficCone: TrafficCone,
  TrafficSign: TrafficSign,
  TrafficSignal: TrafficSignal,
  Train: Train,
  TrainRegional: TrainRegional,
  TrainSimple: TrainSimple,
  Tram: Tram,
  Translate: Translate,
  Trash: Trash,
  TrashSimple: TrashSimple,
  Tray: Tray,
  Tree: Tree,
  TreeEvergreen: TreeEvergreen,
  TreePalm: TreePalm,
  TreeStructure: TreeStructure,
  TrendDown: TrendDown,
  TrendUp: TrendUp,
  Triangle: Triangle,
  Trophy: Trophy,
  Truck: Truck,
  TwitchLogo: TwitchLogo,
  TwitterLogo: TwitterLogo,
  Umbrella: Umbrella,
  UmbrellaSimple: UmbrellaSimple,
  Unite: Unite,
  UniteSquare: UniteSquare,
  Upload: Upload,
  UploadSimple: UploadSimple,
  Usb: Usb,
  User: User,
  UserCircle: UserCircle,
  UserCircleGear: UserCircleGear,
  UserCircleMinus: UserCircleMinus,
  UserCirclePlus: UserCirclePlus,
  UserFocus: UserFocus,
  UserGear: UserGear,
  UserList: UserList,
  UserMinus: UserMinus,
  UserPlus: UserPlus,
  UserRectangle: UserRectangle,
  UserSquare: UserSquare,
  UserSwitch: UserSwitch,
  Users: Users,
  UsersFour: UsersFour,
  UsersThree: UsersThree,
  Van: Van,
  Vault: Vault,
  Vibrate: Vibrate,
  Video: Video,
  VideoCamera: VideoCamera,
  VideoCameraSlash: VideoCameraSlash,
  Vignette: Vignette,
  VinylRecord: VinylRecord,
  VirtualReality: VirtualReality,
  Virus: Virus,
  Voicemail: Voicemail,
  Volleyball: Volleyball,
  Wall: Wall,
  Wallet: Wallet,
  Warehouse: Warehouse,
  Warning: Warning,
  WarningCircle: WarningCircle,
  WarningDiamond: WarningDiamond,
  WarningOctagon: WarningOctagon,
  Watch: Watch,
  WaveSawtooth: WaveSawtooth,
  WaveSine: WaveSine,
  WaveSquare: WaveSquare,
  WaveTriangle: WaveTriangle,
  Waveform: Waveform,
  Waves: Waves,
  Webcam: Webcam,
  WebcamSlash: WebcamSlash,
  WebhooksLogo: WebhooksLogo,
  WechatLogo: WechatLogo,
  WhatsappLogo: WhatsappLogo,
  Wheelchair: Wheelchair,
  WheelchairMotion: WheelchairMotion,
  WifiHigh: WifiHigh,
  WifiLow: WifiLow,
  WifiMedium: WifiMedium,
  WifiNone: WifiNone,
  WifiSlash: WifiSlash,
  WifiX: WifiX,
  Wind: Wind,
  WindowsLogo: WindowsLogo,
  Wine: Wine,
  Wrench: Wrench,
  X: X,
  XCircle: XCircle,
  XSquare: XSquare,
  YinYang: YinYang,
  YoutubeLogo: YoutubeLogo
};

interface IconProps {
  /**
   * Name of icon.
   * Reference: https://phosphoricons.com
   */
  icon: string;

  /**
   * Icon height & width
   */
  size?: number;

  /**
   * Icon weight/style
   */
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

  /**
   * Flip the icon horizontally. Can be useful in RTL languages where normal icon orientation is not appropriate.
   */
  mirrored?: boolean;

  /**
   * Add accessible alt text to an icon
   */
  alt?: string;
  className?: string;
}

export const Icon = ({
  size = 24,
  weight = 'regular',
  mirrored = false,
  icon,
  alt,
  className,
  ...props
}: IconProps) => {
  const iconName = icon.trim()
    ? icon.trim()[0].toUpperCase() + camelCase('h' + icon.trim().substring(1)).substring(1)
    : '';

  const IconComponent = (Components as any)[iconName];

  return (
    <>
      {IconComponent ? (
        <Suspense>
          <IconComponent
            size={size}
            weight={weight}
            mirrored={mirrored}
            className={className}
            alt={alt}
            {...props}
          />
        </Suspense>
      ) : null}
    </>
  );
};
