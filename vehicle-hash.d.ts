declare module 'rage-shared' {
	export const enum VehicleHash {
		/** ![dinghy](https://wiki.rage.mp//images/thumb/3/39/Dinghy.png/164px-Dinghy.png) */
		DINGHY = 0x3d961290,
		/** ![dinghy2](https://wiki.rage.mp//images/thumb/0/09/Dinghy2.png/164px-Dinghy2.png) */
		DINGHY2 = 0x107f392c,
		/** ![dinghy3](https://wiki.rage.mp//images/thumb/5/56/Dinghy3.png/164px-Dinghy3.png) */
		DINGHY3 = 0x1e5e54ea,
		/** ![dinghy4](https://wiki.rage.mp//images/thumb/8/86/Dinghy4.png/164px-Dinghy4.png) */
		DINGHY4 = 0x33b47f96,
		/** ![jetmax](https://wiki.rage.mp//images/thumb/e/e6/Jetmax.png/164px-Jetmax.png) */
		JETMAX = 0x33581161,
		/** ![marquis](https://wiki.rage.mp//images/thumb/7/70/Marquis.png/164px-Marquis.png) */
		MARQUIS = 0xc1ce1183,
		/** ![seashark](https://wiki.rage.mp//images/thumb/e/e7/Seashark.png/164px-Seashark.png) */
		SEASHARK = 0xc2974024,
		/** ![seashark2](https://wiki.rage.mp//images/thumb/7/71/Seashark2.png/164px-Seashark2.png) */
		SEASHARK2 = 0xdb4388e4,
		/** ![seashark3](https://wiki.rage.mp//images/thumb/f/f3/Seashark3.png/164px-Seashark3.png) */
		SEASHARK3 = 0xed762d49,
		/** ![speeder](https://wiki.rage.mp//images/thumb/f/f4/Speeder.png/164px-Speeder.png) */
		SPEEDER = 0xdc60d2b,
		/** ![speeder2](https://wiki.rage.mp//images/thumb/8/89/Speeder2.png/164px-Speeder2.png) */
		SPEEDER2 = 0x1a144f2a,
		/** ![squalo](https://wiki.rage.mp//images/thumb/e/ec/Squalo.png/164px-Squalo.png) */
		SQUALO = 0x17df5ec2,
		/** ![submersible](https://wiki.rage.mp//images/thumb/3/3c/Submersible.png/164px-Submersible.png) */
		SUBMERSIBLE = 0x2dff622f,
		/** ![submersible2](https://wiki.rage.mp//images/thumb/6/62/Submersible2.png/164px-Submersible2.png) */
		SUBMERSIBLE2 = 0xc07107ee,
		/** ![suntrap](https://wiki.rage.mp//images/thumb/2/27/Suntrap.png/164px-Suntrap.png) */
		SUNTRAP = 0xef2295c9,
		/** ![toro](https://wiki.rage.mp//images/thumb/9/94/Toro.png/164px-Toro.png) */
		TORO = 0x3fd5aa2f,
		/** ![toro2](https://wiki.rage.mp//images/thumb/d/d7/Toro2.png/164px-Toro2.png) */
		TORO2 = 0x362cac6d,
		/** ![tropic](https://wiki.rage.mp//images/thumb/8/86/Tropic.png/164px-Tropic.png) */
		TROPIC = 0x1149422f,
		/** ![tropic2](https://wiki.rage.mp//images/thumb/a/a7/Tropic2.png/164px-Tropic2.png) */
		TROPIC2 = 0x56590fe9,
		/** ![tug](https://wiki.rage.mp//images/thumb/a/a3/Tug.png/164px-Tug.png) */
		TUG = 0x82cac433,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![avisa](https://wiki.rage.mp//images/thumb/1/19/0x9A474B5E.png/142px-0x9A474B5E.png)
		 */
		AVISA = 0x9a474b5e,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![dinghy5](https://wiki.rage.mp//images/thumb/c/c0/0xC58DA34A.png/157px-0xC58DA34A.png)
		 */
		DINGHY5 = 0xc58da34a,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![kosatka](https://wiki.rage.mp//images/thumb/8/86/0x4FAF0D70.png/164px-0x4FAF0D70.png)
		 */
		KOSATKA = 0x4faf0d70,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![longfin](https://wiki.rage.mp//images/thumb/3/34/0x6EF89CCC.png/164px-0x6EF89CCC.png)
		 */
		LONGFIN = 0x6ef89ccc,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![patrolboat](https://wiki.rage.mp//images/thumb/3/32/0xEF813606.png/164px-0xEF813606.png)
		 */
		PATROLBOAT = 0xef813606,
		/** ![benson](https://wiki.rage.mp//images/thumb/b/bd/Benson.png/164px-Benson.png) */
		BENSON = 0x7a61b330,
		/** ![biff](https://wiki.rage.mp//images/thumb/6/62/Biff.png/164px-Biff.png) */
		BIFF = 0x32b91ae8,
		/**
		 * DLC: ArenaWar

		 * ![cerberus](https://wiki.rage.mp//images/thumb/4/45/Cerberus.png/151px-Cerberus.png)
		 */
		CERBERUS = 0xd039510b,
		/**
		 * DLC: ArenaWar

		 * ![cerberus2](https://wiki.rage.mp//images/thumb/5/50/Cerberus2.png/164px-Cerberus2.png)
		 */
		CERBERUS2 = 0x287fa449,
		/**
		 * DLC: ArenaWar

		 * ![cerberus3](https://wiki.rage.mp//images/thumb/8/83/Cerberus3.png/164px-Cerberus3.png)
		 */
		CERBERUS3 = 0x71d3b6f0,
		/** ![hauler](https://wiki.rage.mp//images/thumb/8/83/Hauler.png/164px-Hauler.png) */
		HAULER = 0x5a82f9ae,
		/**
		 * DLC: Gunrunning

		 * ![hauler2](https://wiki.rage.mp//images/thumb/b/bf/Hauler2.png/164px-Hauler2.png)
		 */
		HAULER2 = 0x171c92c4,
		/** ![mule](https://wiki.rage.mp//images/thumb/e/e7/Mule.png/164px-Mule.png) */
		MULE = 0x35ed670b,
		/** ![mule2](https://wiki.rage.mp//images/thumb/8/82/Mule2.png/164px-Mule2.png) */
		MULE2 = 0xc1632beb,
		/** ![mule3](https://wiki.rage.mp//images/thumb/6/6a/Mule3.png/164px-Mule3.png) */
		MULE3 = 0x85a5b471,
		/** ![mule4](https://wiki.rage.mp//images/thumb/2/2e/Mule4.png/164px-Mule4.png) */
		MULE4 = 0x73f4110e,
		/** ![packer](https://wiki.rage.mp//images/thumb/0/03/Packer.png/164px-Packer.png) */
		PACKER = 0x21eee87d,
		/** ![phantom](https://wiki.rage.mp//images/thumb/e/ec/Phantom.png/164px-Phantom.png) */
		PHANTOM = 0x809aa4cb,
		/**
		 * DLC: Import/Export

		 * ![phantom2](https://wiki.rage.mp//images/thumb/2/2b/Phantom2.png/164px-Phantom2.png)
		 */
		PHANTOM2 = 0x9dae1398,
		/**
		 * DLC: Gunrunning

		 * ![phantom3](https://wiki.rage.mp//images/thumb/8/81/Phantom3.png/164px-Phantom3.png)
		 */
		PHANTOM3 = 0xa90ed5c,
		/** ![pounder](https://wiki.rage.mp//images/thumb/a/a6/Pounder.png/164px-Pounder.png) */
		POUNDER = 0x7de35e7d,
		/** ![pounder2](https://wiki.rage.mp//images/thumb/4/41/Pounder2.png/164px-Pounder2.png) */
		POUNDER2 = 0x6290f15b,
		/** ![stockade](https://wiki.rage.mp//images/thumb/6/6b/Stockade.png/164px-Stockade.png) */
		STOCKADE = 0x6827cf72,
		/** ![stockade3](https://wiki.rage.mp//images/thumb/8/8d/Stockade3.png/164px-Stockade3.png) */
		STOCKADE3 = 0xf337ab36,
		/**
		 * DLC: AfterHours

		 * ![terbyte](https://wiki.rage.mp//images/thumb/9/97/Terbyte.png/164px-Terbyte.png)
		 */
		TERBYTE = 0x897afc65,
		/**
		 * DLC: TheDiamondCasinoHeist

		 * ![asbo](https://wiki.rage.mp//images/thumb/c/cb/Asbo.png/160px-Asbo.png)
		 */
		ASBO = 0x42aca95f,
		/** ![blista](https://wiki.rage.mp//images/thumb/5/58/Blista.png/164px-Blista.png) */
		BLISTA = 0xeb70965f,
		/**
		 * DLC: CunningStunts

		 * ![brioso](https://wiki.rage.mp//images/thumb/6/6f/Brioso.png/164px-Brioso.png)
		 */
		BRIOSO = 0x5c55cb39,
		/**
		 * DLC: LosSantosSummerSpecial

		 * ![club](https://wiki.rage.mp//images/thumb/5/50/Club.png/159px-Club.png)
		 */
		CLUB = 0x82e47e85,
		/** ![dilettante](https://wiki.rage.mp//images/thumb/b/b9/Dilettante.png/164px-Dilettante.png) */
		DILETTANTE = 0xbc993509,
		/** ![dilettante2](https://wiki.rage.mp//images/thumb/4/4e/Dilettante2.png/164px-Dilettante2.png) */
		DILETTANTE2 = 0x64430650,
		/**
		 * DLC: TheDiamondCasinoHeist

		 * ![kanjo](https://wiki.rage.mp//images/thumb/2/25/Kanjo.png/164px-Kanjo.png)
		 */
		KANJO = 0x18619b7e,
		/** ![issi2](https://wiki.rage.mp//images/thumb/0/0b/Issi2.png/164px-Issi2.png) */
		ISSI2 = 0xb9cb3b69,
		/**
		 * DLC: SouthernSanAndreasSuperSportSeries

		 * ![issi3](https://wiki.rage.mp//images/thumb/7/73/Issi3.png/164px-Issi3.png)
		 */
		ISSI3 = 0x378236e1,
		/**
		 * DLC: ArenaWar

		 * ![issi4](https://wiki.rage.mp//images/thumb/d/d5/Issi4.png/164px-Issi4.png)
		 */
		ISSI4 = 0x256e92ba,
		/**
		 * DLC: ArenaWar

		 * ![issi5](https://wiki.rage.mp//images/thumb/b/bb/Issi5.png/164px-Issi5.png)
		 */
		ISSI5 = 0x5ba0ff1e,
		/**
		 * DLC: ArenaWar

		 * ![issi6](https://wiki.rage.mp//images/thumb/a/a7/Issi6.png/164px-Issi6.png)
		 */
		ISSI6 = 0x49e25ba1,
		/** ![panto](https://wiki.rage.mp//images/thumb/e/e5/Panto.png/164px-Panto.png) */
		PANTO = 0xe644e480,
		/** ![prairie](https://wiki.rage.mp//images/thumb/3/3d/Prairie.png/164px-Prairie.png) */
		PRAIRIE = 0xa988d3a2,
		/** ![rhapsody](https://wiki.rage.mp//images/thumb/e/e2/Rhapsody.png/164px-Rhapsody.png) */
		RHAPSODY = 0x322cf98f,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![brioso2](https://wiki.rage.mp//images/thumb/4/41/0x55365079.png/140px-0x55365079.png)
		 */
		BRIOSO2 = 0x55365079,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![weevil](https://wiki.rage.mp//images/thumb/c/c0/0x61FE4D6A.png/164px-0x61FE4D6A.png)
		 */
		WEEVIL = 0x61fe4d6a,
		/** ![cogcabrio](https://wiki.rage.mp//images/thumb/1/1b/CogCabrio.png/164px-CogCabrio.png) */
		COGCABRIO = 0x13b57d8a,
		/** ![exemplar](https://wiki.rage.mp//images/thumb/a/a4/Exemplar.png/164px-Exemplar.png) */
		EXEMPLAR = 0xffb15b5e,
		/** ![f620](https://wiki.rage.mp//images/thumb/2/21/F620.png/164px-F620.png) */
		F620 = 0xdcbcbe48,
		/** ![felon](https://wiki.rage.mp//images/thumb/0/04/Felon.png/164px-Felon.png) */
		FELON = 0xe8a8bda8,
		/** ![felon2](https://wiki.rage.mp//images/thumb/6/6e/Felon2.png/164px-Felon2.png) */
		FELON2 = 0xfaad85ee,
		/** ![jackal](https://wiki.rage.mp//images/thumb/7/70/Jackal.png/164px-Jackal.png) */
		JACKAL = 0xdac67112,
		/** ![oracle](https://wiki.rage.mp//images/thumb/4/4d/Oracle2.png/164px-Oracle2.png) */
		ORACLE = 0x506434f6,
		/** ![oracle2](https://wiki.rage.mp//images/thumb/1/17/Oracle.png/164px-Oracle.png) */
		ORACLE2 = 0xe18195b2,
		/** ![sentinel](https://wiki.rage.mp//images/thumb/9/91/Sentinel.png/164px-Sentinel.png) */
		SENTINEL = 0x50732c82,
		/** ![sentinel2](https://wiki.rage.mp//images/thumb/d/dd/Sentinel2.png/164px-Sentinel2.png) */
		SENTINEL2 = 0x3412ae2d,
		/** ![windsor](https://wiki.rage.mp//images/thumb/2/2d/Windsor.png/164px-Windsor.png) */
		WINDSOR = 0x5e4327c8,
		/** ![windsor2](https://wiki.rage.mp//images/thumb/5/57/Windsor2.png/164px-Windsor2.png) */
		WINDSOR2 = 0x8cf5cae1,
		/** ![zion](https://wiki.rage.mp//images/thumb/5/51/Zion.png/164px-Zion.png) */
		ZION = 0xbd1b39c3,
		/** ![zion2](https://wiki.rage.mp//images/thumb/f/f2/Zion2.png/164px-Zion2.png) */
		ZION2 = 0xb8e2ae18,
		/** ![bmx](https://wiki.rage.mp//images/thumb/4/40/Bmx.png/164px-Bmx.png) */
		BMX = 0x43779c54,
		/** ![cruiser](https://wiki.rage.mp//images/thumb/6/66/Cruiser.png/164px-Cruiser.png) */
		CRUISER = 0x1aba13b5,
		/** ![fixter](https://wiki.rage.mp//images/thumb/2/29/Fixter.png/164px-Fixter.png) */
		FIXTER = 0xce23d3bf,
		/** ![scorcher](https://wiki.rage.mp//images/thumb/3/34/Scorcher.png/164px-Scorcher.png) */
		SCORCHER = 0xf4e1aa15,
		/** ![tribike](https://wiki.rage.mp//images/thumb/f/fe/TriBike.png/164px-TriBike.png) */
		TRIBIKE = 0x4339cd69,
		/** ![tribike2](https://wiki.rage.mp//images/thumb/d/dc/TriBike2.png/164px-TriBike2.png) */
		TRIBIKE2 = 0xb67597ec,
		/** ![tribike3](https://wiki.rage.mp//images/thumb/5/5d/TriBike3.png/164px-TriBike3.png) */
		TRIBIKE3 = 0xe823fb48,
		/** ![ambulance](https://wiki.rage.mp//images/thumb/f/f5/Ambulance.png/164px-Ambulance.png) */
		AMBULANCE = 0x45d56ada,
		/** ![fbi](https://wiki.rage.mp//images/thumb/b/b6/FBI.png/164px-FBI.png) */
		FBI = 0x432ea949,
		/** ![fbi2](https://wiki.rage.mp//images/thumb/9/9b/FBI2.png/164px-FBI2.png) */
		FBI2 = 0x9dc66994,
		/** ![firetruk](https://wiki.rage.mp//images/thumb/5/5b/FireTruck.png/164px-FireTruck.png) */
		FIRETRUK = 0x73920f8e,
		/** ![lguard](https://wiki.rage.mp//images/thumb/8/83/LGuard.png/164px-LGuard.png) */
		LGUARD = 0x1bf8d381,
		/** ![pbus](https://wiki.rage.mp//images/thumb/8/89/PBus.png/164px-PBus.png) */
		PBUS = 0x885f3671,
		/** ![police](https://wiki.rage.mp//images/thumb/b/bf/Police.png/164px-Police.png) */
		POLICE = 0x79fbb0c5,
		/** ![police2](https://wiki.rage.mp//images/thumb/c/c9/Police2.png/164px-Police2.png) */
		POLICE2 = 0x9f05f101,
		/** ![police3](https://wiki.rage.mp//images/thumb/6/6c/Police3.png/164px-Police3.png) */
		POLICE3 = 0x71fa16ea,
		/** ![police4](https://wiki.rage.mp//images/thumb/a/a3/Police4.png/164px-Police4.png) */
		POLICE4 = 0x8a63c7b9,
		/** ![policeb](https://wiki.rage.mp//images/thumb/9/94/Policeb.png/164px-Policeb.png) */
		POLICEB = 0xfdefaec3,
		/** ![polmav](https://wiki.rage.mp//images/thumb/f/fc/Polmav.png/164px-Polmav.png) */
		POLMAV = 0x1517d4d9,
		/** ![policeold1](https://wiki.rage.mp//images/thumb/b/b8/PoliceOld1.png/164px-PoliceOld1.png) */
		POLICEOLD1 = 0xa46462f7,
		/** ![policeold2](https://wiki.rage.mp//images/thumb/3/31/PoliceOld2.png/164px-PoliceOld2.png) */
		POLICEOLD2 = 0x95f4c618,
		/** ![policet](https://wiki.rage.mp//images/thumb/4/47/PoliceT.png/164px-PoliceT.png) */
		POLICET = 0x1b38e955,
		/** ![pranger](https://wiki.rage.mp//images/thumb/d/dc/Pranger.png/164px-Pranger.png) */
		PRANGER = 0x2c33b46e,
		/** ![predator](https://wiki.rage.mp//images/thumb/e/e9/Predator.png/164px-Predator.png) */
		PREDATOR = 0xe2e7d4ab,
		/** ![riot](https://wiki.rage.mp//images/thumb/c/c0/Riot.png/164px-Riot.png) */
		RIOT = 0xb822a1aa,
		/** ![riot2](https://wiki.rage.mp//images/thumb/b/bd/Riot2.png/164px-Riot2.png) */
		RIOT2 = 0x9b16a3b4,
		/** ![sheriff](https://wiki.rage.mp//images/thumb/3/3e/Sheriff.png/164px-Sheriff.png) */
		SHERIFF = 0x9baa707c,
		/** ![sheriff2](https://wiki.rage.mp//images/thumb/6/6c/Sheriff2.png/164px-Sheriff2.png) */
		SHERIFF2 = 0x72935408,
		/** ![akula](https://wiki.rage.mp//images/thumb/d/df/Akula.png/164px-Akula.png) */
		AKULA = 0x46699f47,
		/** ![annihilator](https://wiki.rage.mp//images/thumb/7/7e/Annihilator.png/164px-Annihilator.png) */
		ANNIHILATOR = 0x31f0b376,
		/** ![buzzard](https://wiki.rage.mp//images/thumb/f/f8/Buzzard.png/164px-Buzzard.png) */
		BUZZARD = 0x2f03547b,
		/** ![buzzard2](https://wiki.rage.mp//images/thumb/6/6e/Buzzard2.png/164px-Buzzard2.png) */
		BUZZARD2 = 0x2c75f0dd,
		/** ![cargobob](https://wiki.rage.mp//images/thumb/d/dc/Cargobob.png/164px-Cargobob.png) */
		CARGOBOB = 0xfcfcb68b,
		/** ![cargobob2](https://wiki.rage.mp//images/thumb/a/a1/Cargobob2.png/164px-Cargobob2.png) */
		CARGOBOB2 = 0x60a7ea10,
		/** ![cargobob3](https://wiki.rage.mp//images/thumb/f/fa/Cargobob3.png/164px-Cargobob3.png) */
		CARGOBOB3 = 0x53174eef,
		/** ![cargobob4](https://wiki.rage.mp//images/thumb/f/f0/Cargobob4.png/164px-Cargobob4.png) */
		CARGOBOB4 = 0x78bc1a3c,
		/** ![frogger](https://wiki.rage.mp//images/thumb/2/2d/Frogger.png/164px-Frogger.png) */
		FROGGER = 0x2c634fbd,
		/** ![frogger2](https://wiki.rage.mp//images/thumb/b/be/Frogger2.png/164px-Frogger2.png) */
		FROGGER2 = 0x742e9ac0,
		/** ![havok](https://wiki.rage.mp//images/thumb/4/40/Havok.png/164px-Havok.png) */
		HAVOK = 0x89ba59f5,
		/** ![hunter](https://wiki.rage.mp//images/thumb/e/e1/Hunt.png/164px-Hunt.png) */
		HUNTER = 0xfd707ede,
		/** ![maverick](https://wiki.rage.mp//images/thumb/7/73/Maverick.png/164px-Maverick.png) */
		MAVERICK = 0x9d0450ca,
		/** ![savage](https://wiki.rage.mp//images/thumb/3/39/Savage.png/164px-Savage.png) */
		SAVAGE = 0xfb133a17,
		/** ![seasparrow](https://wiki.rage.mp//images/thumb/d/d5/Seasparrow.png/164px-Seasparrow.png) */
		SEASPARROW = 0xd4ae63d9,
		/** ![skylift](https://wiki.rage.mp//images/thumb/0/02/Skylift.png/164px-Skylift.png) */
		SKYLIFT = 0x3e48bf23,
		/** ![supervolito](https://wiki.rage.mp//images/thumb/9/9e/Supervolito.png/164px-Supervolito.png) */
		SUPERVOLITO = 0x2a54c47d,
		/** ![supervolito2](https://wiki.rage.mp//images/thumb/a/a8/Supervolito2.png/164px-Supervolito2.png) */
		SUPERVOLITO2 = 0x9c5e5644,
		/** ![swift](https://wiki.rage.mp//images/thumb/0/00/Swift.png/164px-Swift.png) */
		SWIFT = 0xebc24df2,
		/** ![swift2](https://wiki.rage.mp//images/thumb/5/5f/Swift2.png/164px-Swift2.png) */
		SWIFT2 = 0x4019cb4c,
		/** ![valkyrie](https://wiki.rage.mp//images/thumb/d/d5/Valkyrie.png/164px-Valkyrie.png) */
		VALKYRIE = 0xa09e15fd,
		/** ![valkyrie2](https://wiki.rage.mp//images/thumb/2/27/Valkyrie2.png/164px-Valkyrie2.png) */
		VALKYRIE2 = 0x5bfa5c4b,
		/** ![volatus](https://wiki.rage.mp//images/thumb/6/65/Volatus.png/164px-Volatus.png) */
		VOLATUS = 0x920016f1,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![annihilator2](https://wiki.rage.mp//images/thumb/f/fc/0x11962E49.png/164px-0x11962E49.png)
		 */
		ANNIHILATOR2 = 0x11962e49,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![seasparrow2](https://wiki.rage.mp//images/thumb/7/76/0x494752F7.png/162px-0x494752F7.png)
		 */
		SEASPARROW2 = 0x494752f7,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![seasparrow3](https://wiki.rage.mp//images/thumb/e/ef/0x5F017E6B.png/145px-0x5F017E6B.png)
		 */
		SEASPARROW3 = 0x5f017e6b,
		/** ![bulldozer](https://wiki.rage.mp//images/thumb/f/f5/Bulldozer.png/164px-Bulldozer.png) */
		BULLDOZER = 0x7074f39d,
		/** ![cutter](https://wiki.rage.mp//images/thumb/6/6d/Cutter.png/164px-Cutter.png) */
		CUTTER = 0xc3fba120,
		/** ![dump](https://wiki.rage.mp//images/thumb/0/0e/Dump.png/164px-Dump.png) */
		DUMP = 0x810369e2,
		/** ![flatbed](https://wiki.rage.mp//images/thumb/c/c2/Flatbed.png/164px-Flatbed.png) */
		FLATBED = 0x50b0215a,
		/** ![guardian](https://wiki.rage.mp//images/thumb/f/fd/Guardian.png/164px-Guardian.png) */
		GUARDIAN = 0x825a9f4c,
		/** ![handler](https://wiki.rage.mp//images/thumb/f/fe/Handler.png/164px-Handler.png) */
		HANDLER = 0x1a7fcefa,
		/** ![mixer](https://wiki.rage.mp//images/thumb/4/4d/Mixer.png/164px-Mixer.png) */
		MIXER = 0xd138a6bb,
		/** ![mixer2](https://wiki.rage.mp//images/thumb/e/e7/Mixer2.png/164px-Mixer2.png) */
		MIXER2 = 0x1c534995,
		/** ![rubble](https://wiki.rage.mp//images/thumb/1/14/Rubble.png/164px-Rubble.png) */
		RUBBLE = 0x9a5b1dcc,
		/** ![tiptruck](https://wiki.rage.mp//images/thumb/2/2e/TipTruck.png/164px-TipTruck.png) */
		TIPTRUCK = 0x2e19879,
		/** ![tiptruck2](https://wiki.rage.mp//images/thumb/c/c9/TipTruck2.png/164px-TipTruck2.png) */
		TIPTRUCK2 = 0xc7824e5e,
		/** ![apc](https://wiki.rage.mp//images/thumb/5/52/Apc.png/164px-Apc.png) */
		APC = 0x2189d250,
		/** ![barracks](https://wiki.rage.mp//images/thumb/d/d2/Barracks.png/164px-Barracks.png) */
		BARRACKS = 0xceea3f4b,
		/** ![barracks2](https://wiki.rage.mp//images/thumb/f/f0/Barracks2.png/164px-Barracks2.png) */
		BARRACKS2 = 0x4008eabb,
		/** ![barracks3](https://wiki.rage.mp//images/thumb/5/54/Barracks3.png/164px-Barracks3.png) */
		BARRACKS3 = 0x2592b5cf,
		/** ![barrage](https://wiki.rage.mp//images/thumb/2/2c/Barrage.png/164px-Barrage.png) */
		BARRAGE = 0xf34dfb25,
		/** ![chernobog](https://wiki.rage.mp//images/thumb/5/5c/Chernobog.png/164px-Chernobog.png) */
		CHERNOBOG = 0xd6bc7523,
		/** ![crusader](https://wiki.rage.mp//images/thumb/e/eb/Crusader.png/164px-Crusader.png) */
		CRUSADER = 0x132d5a1a,
		/** ![halftrack](https://wiki.rage.mp//images/thumb/b/be/Halftrack.png/164px-Halftrack.png) */
		HALFTRACK = 0xfe141da6,
		/** ![khanjali](https://wiki.rage.mp//images/thumb/6/64/Khanjali.png/164px-Khanjali.png) */
		KHANJALI = 0xaa6f980a,
		/**
		 * DLC: TheDiamondCasinoHeist

		 * ![minitank](https://wiki.rage.mp//images/thumb/a/a6/Minitank.png/164px-Minitank.png)
		 */
		MINITANK = 0xb53c6c52,
		/** ![rhino](https://wiki.rage.mp//images/thumb/c/c2/Rhino.png/164px-Rhino.png) */
		RHINO = 0x2ea68690,
		/**
		 * DLC: ArenaWar

		 * ![scarab](https://wiki.rage.mp//images/thumb/9/96/Scarab.png/164px-Scarab.png)
		 */
		SCARAB = 0xbba2a2f7,
		/**
		 * DLC: ArenaWar

		 * ![scarab2](https://wiki.rage.mp//images/thumb/b/b3/Scarab2.png/164px-Scarab2.png)
		 */
		SCARAB2 = 0x5beb3ce0,
		/**
		 * DLC: ArenaWar

		 * ![scarab3](https://wiki.rage.mp//images/thumb/3/3a/Scarab3.png/164px-Scarab3.png)
		 */
		SCARAB3 = 0xdd71bfeb,
		/** ![thruster](https://wiki.rage.mp//images/thumb/6/62/Thruster.png/164px-Thruster.png) */
		THRUSTER = 0x58cdaf30,
		/** ![trailersmall2](https://wiki.rage.mp//images/thumb/8/86/Trailersmall2.png/164px-Trailersmall2.png) */
		TRAILERSMALL2 = 0x8fd54ebb,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![vetir](https://wiki.rage.mp//images/thumb/1/11/0x780FFBD2.png/147px-0x780FFBD2.png)
		 */
		VETIR = 0x780ffbd2,
		/** ![akuma](https://wiki.rage.mp//images/thumb/1/16/Akuma.png/164px-Akuma.png) */
		AKUMA = 0x63abade7,
		/** ![avarus](https://wiki.rage.mp//images/thumb/1/13/Avarus.png/164px-Avarus.png) */
		AVARUS = 0x81e38f7f,
		/** ![bagger](https://wiki.rage.mp//images/thumb/6/64/Bagger.png/164px-Bagger.png) */
		BAGGER = 0x806b9cc3,
		/** ![bati](https://wiki.rage.mp//images/thumb/c/ce/Bati.png/164px-Bati.png) */
		BATI = 0xf9300cc5,
		/** ![bati2](https://wiki.rage.mp//images/thumb/6/60/Bati2.png/164px-Bati2.png) */
		BATI2 = 0xcadd5d2d,
		/** ![bf400](https://wiki.rage.mp//images/thumb/3/3a/BF400.png/164px-BF400.png) */
		BF400 = 0x5283265,
		/** ![carbonrs](https://wiki.rage.mp//images/thumb/d/d3/CarbonRS.png/164px-CarbonRS.png) */
		CARBONRS = 0xabb0c0,
		/** ![chimera](https://wiki.rage.mp//images/thumb/3/36/Chimera.png/164px-Chimera.png) */
		CHIMERA = 0x675ed7,
		/** ![cliffhanger](https://wiki.rage.mp//images/thumb/1/12/Cliffhanger.png/164px-Cliffhanger.png) */
		CLIFFHANGER = 0x17420102,
		/** ![daemon](https://wiki.rage.mp//images/thumb/2/27/Daemon.png/164px-Daemon.png) */
		DAEMON = 0x77934cee,
		/** ![daemon2](https://wiki.rage.mp//images/thumb/8/86/Daemon2.png/164px-Daemon2.png) */
		DAEMON2 = 0xac4e93c9,
		/** ![defiler](https://wiki.rage.mp//images/thumb/4/41/Defiler.png/164px-Defiler.png) */
		DEFILER = 0x30ff0190,
		/**
		 * DLC: ArenaWar

		 * ![deathbike](https://wiki.rage.mp//images/thumb/e/eb/Deathbike.png/164px-Deathbike.png)
		 */
		DEATHBIKE = 0xfe5f0722,
		/**
		 * DLC: ArenaWar

		 * ![deathbike2](https://wiki.rage.mp//images/thumb/7/71/Deathbike2.png/164px-Deathbike2.png)
		 */
		DEATHBIKE2 = 0x93f09558,
		/**
		 * DLC: ArenaWar

		 * ![deathbike3](https://wiki.rage.mp//images/thumb/9/90/Deathbike3.png/164px-Deathbike3.png)
		 */
		DEATHBIKE3 = 0xae12c99c,
		/** ![diablous](https://wiki.rage.mp//images/thumb/4/48/Diablous.png/164px-Diablous.png) */
		DIABLOUS = 0xf1b44f44,
		/** ![diablous2](https://wiki.rage.mp//images/thumb/3/3e/Diablous2.png/164px-Diablous2.png) */
		DIABLOUS2 = 0x6abdf65e,
		/** ![double](https://wiki.rage.mp//images/thumb/0/01/Double.png/164px-Double.png) */
		DOUBLE = 0x9c669788,
		/** ![enduro](https://wiki.rage.mp//images/thumb/f/f3/Enduro.png/164px-Enduro.png) */
		ENDURO = 0x6882fa73,
		/** ![esskey](https://wiki.rage.mp//images/thumb/2/24/Esskey.png/164px-Esskey.png) */
		ESSKEY = 0x794cb30c,
		/** ![faggio](https://wiki.rage.mp//images/thumb/4/4d/Faggio.png/164px-Faggio.png) */
		FAGGIO = 0x9229e4eb,
		/** ![faggio2](https://wiki.rage.mp//images/thumb/2/25/Faggio2.png/164px-Faggio2.png) */
		FAGGIO2 = 0x350d1ab,
		/** ![faggio3](https://wiki.rage.mp//images/thumb/a/a6/Faggio3.png/164px-Faggio3.png) */
		FAGGIO3 = 0xb328b188,
		/** ![fcr](https://wiki.rage.mp//images/thumb/4/46/Fcr.png/164px-Fcr.png) */
		FCR = 0x25676eaf,
		/** ![fcr2](https://wiki.rage.mp//images/thumb/d/d5/Fcr2.png/164px-Fcr2.png) */
		FCR2 = 0xd2d5e00e,
		/** ![gargoyle](https://wiki.rage.mp//images/thumb/4/44/Gargoyle.png/164px-Gargoyle.png) */
		GARGOYLE = 0x2c2c2324,
		/** ![hakuchou](https://wiki.rage.mp//images/thumb/2/23/Hakuchou.png/164px-Hakuchou.png) */
		HAKUCHOU = 0x4b6c568a,
		/** ![hakuchou2](https://wiki.rage.mp//images/thumb/8/87/Hakuchou2.png/164px-Hakuchou2.png) */
		HAKUCHOU2 = 0xf0c2a91f,
		/** ![hexer](https://wiki.rage.mp//images/thumb/5/56/Hexer.png/164px-Hexer.png) */
		HEXER = 0x11f76c14,
		/** ![innovation](https://wiki.rage.mp//images/thumb/4/42/Innovation.png/164px-Innovation.png) */
		INNOVATION = 0xf683eaca,
		/** ![lectro](https://wiki.rage.mp//images/thumb/0/00/Lectro.png/164px-Lectro.png) */
		LECTRO = 0x26321e67,
		/** ![manchez](https://wiki.rage.mp//images/thumb/3/3c/Manchez.png/164px-Manchez.png) */
		MANCHEZ = 0xa5325278,
		/** ![nemesis](https://wiki.rage.mp//images/thumb/e/e3/Nemesis.png/164px-Nemesis.png) */
		NEMESIS = 0xda288376,
		/** ![nightblade](https://wiki.rage.mp//images/thumb/c/c1/Nightblade.png/164px-Nightblade.png) */
		NIGHTBLADE = 0xa0438767,
		/** ![oppressor](https://wiki.rage.mp//images/thumb/3/32/Oppressor.png/164px-Oppressor.png) */
		OPPRESSOR = 0x34b82784,
		/** ![oppressor2](https://wiki.rage.mp//images/thumb/2/2f/Oppressor2.png/164px-Oppressor2.png) */
		OPPRESSOR2 = 0x7b54a9d3,
		/** ![pcj](https://wiki.rage.mp//images/thumb/9/99/Pcj.png/164px-Pcj.png) */
		PCJ = 0xc9ceaf06,
		/** ![ratbike](https://wiki.rage.mp//images/thumb/4/49/Ratbike.png/164px-Ratbike.png) */
		RATBIKE = 0x6facdf31,
		/** ![ruffian](https://wiki.rage.mp//images/thumb/f/f6/Ruffian.png/164px-Ruffian.png) */
		RUFFIAN = 0xcabd11e8,
		/** ![rrocket](https://wiki.rage.mp//images/thumb/9/91/Rrocket.png/121px-Rrocket.png) */
		RROCKET = 0x36a167e0,
		/** ![sanchez](https://wiki.rage.mp//images/thumb/5/52/Sanchez.png/148px-Sanchez.png) */
		SANCHEZ = 0x2ef89e46,
		/** ![sanchez2](https://wiki.rage.mp//images/thumb/6/6d/Sanchez2.png/164px-Sanchez2.png) */
		SANCHEZ2 = 0xa960b13e,
		/** ![sanctus](https://wiki.rage.mp//images/thumb/e/e2/Sanctus.png/164px-Sanctus.png) */
		SANCTUS = 0x58e316c7,
		/** ![shotaro](https://wiki.rage.mp//images/thumb/e/e3/Shotaro.png/164px-Shotaro.png) */
		SHOTARO = 0xe7d2a16e,
		/** ![sovereign](https://wiki.rage.mp//images/thumb/a/ae/Sovereign.png/164px-Sovereign.png) */
		SOVEREIGN = 0x2c509634,
		/** ![stryder](https://wiki.rage.mp//images/thumb/c/c3/Stryder.png/164px-Stryder.png) */
		STRYDER = 0x11f58a5a,
		/** ![thrust](https://wiki.rage.mp//images/thumb/9/90/Thrust.png/164px-Thrust.png) */
		THRUST = 0x6d6f8f43,
		/** ![vader](https://wiki.rage.mp//images/thumb/d/dc/Vader.png/164px-Vader.png) */
		VADER = 0xf79a00f7,
		/** ![vindicator](https://wiki.rage.mp//images/thumb/b/bb/Vindicator.png/164px-Vindicator.png) */
		VINDICATOR = 0xaf599f01,
		/** ![vortex](https://wiki.rage.mp//images/thumb/5/52/Vortex.png/164px-Vortex.png) */
		VORTEX = 0xdba9dbfc,
		/** ![wolfsbane](https://wiki.rage.mp//images/thumb/c/c6/Wolfsbane.png/164px-Wolfsbane.png) */
		WOLFSBANE = 0xdb20a373,
		/** ![zombiea](https://wiki.rage.mp//images/thumb/7/7f/Zombiea.png/164px-Zombiea.png) */
		ZOMBIEA = 0xc3d7c72b,
		/** ![zombieb](https://wiki.rage.mp//images/thumb/2/2c/Zombieb.png/164px-Zombieb.png) */
		ZOMBIEB = 0xde05fb87,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![manchez2](https://wiki.rage.mp//images/thumb/a/a3/0x40C332A3.png/137px-0x40C332A3.png)
		 */
		MANCHEZ2 = 0x40c332a3,
		/** ![blade](https://wiki.rage.mp//images/thumb/a/ad/Blade.png/164px-Blade.png) */
		BLADE = 0xb820ed5e,
		/** ![buccaneer](https://wiki.rage.mp//images/thumb/d/de/Buccaneer.png/164px-Buccaneer.png) */
		BUCCANEER = 0xd756460c,
		/** ![buccaneer2](https://wiki.rage.mp//images/thumb/1/16/Buccaneer2.png/164px-Buccaneer2.png) */
		BUCCANEER2 = 0xc397f748,
		/** ![chino](https://wiki.rage.mp//images/thumb/4/4d/Chino.png/164px-Chino.png) */
		CHINO = 0x14d69010,
		/** ![chino2](https://wiki.rage.mp//images/thumb/6/61/Chino2.png/164px-Chino2.png) */
		CHINO2 = 0xaed64a63,
		/**
		 * DLC: ArenaWar

		 * ![clique](https://wiki.rage.mp//images/thumb/3/3c/Clique.png/164px-Clique.png)
		 */
		CLIQUE = 0xa29f78b0,
		/** ![coquette3](https://wiki.rage.mp//images/thumb/6/67/Coquette3.png/164px-Coquette3.png) */
		COQUETTE3 = 0x2ec385fe,
		/**
		 * DLC: ArenaWar

		 * ![deviant](https://wiki.rage.mp//images/thumb/d/d5/Deviant.png/164px-Deviant.png)
		 */
		DEVIANT = 0x4c3fff49,
		/** ![dominator](https://wiki.rage.mp//images/thumb/6/6e/Dominator.png/164px-Dominator.png) */
		DOMINATOR = 0x4ce68ac,
		/** ![dominator2](https://wiki.rage.mp//images/thumb/5/57/Dominator2.png/164px-Dominator2.png) */
		DOMINATOR2 = 0xc96b73d9,
		/** ![dominator3](https://wiki.rage.mp//images/thumb/b/ba/Dominator3.png/164px-Dominator3.png) */
		DOMINATOR3 = 0xc52c6b93,
		/**
		 * DLC: ArenaWar

		 * ![dominator4](https://wiki.rage.mp//images/thumb/b/be/Dominator4.png/164px-Dominator4.png)
		 */
		DOMINATOR4 = 0xd6fb0f30,
		/**
		 * DLC: ArenaWar

		 * ![dominator5](https://wiki.rage.mp//images/thumb/5/51/Dominator5.png/164px-Dominator5.png)
		 */
		DOMINATOR5 = 0xae0a3d4f,
		/**
		 * DLC: ArenaWar

		 * ![dominator6](https://wiki.rage.mp//images/thumb/8/84/Dominator6.png/164px-Dominator6.png)
		 */
		DOMINATOR6 = 0xb2e046fb,
		/** ![dukes](https://wiki.rage.mp//images/thumb/6/6e/Dukes.png/164px-Dukes.png) */
		DUKES = 0x2b26f456,
		/** ![dukes2](https://wiki.rage.mp//images/thumb/4/45/Dukes2.png/164px-Dukes2.png) */
		DUKES2 = 0xec8f7094,
		/**
		 * DLC: LosSantosSummerSpecial

		 * ![dukes3](https://wiki.rage.mp//images/thumb/4/45/Dukes3.png/159px-Dukes3.png)
		 */
		DUKES3 = 0x7f3415e3,
		/** ![faction](https://wiki.rage.mp//images/thumb/5/55/Faction.png/164px-Faction.png) */
		FACTION = 0x81a9cddf,
		/** ![faction2](https://wiki.rage.mp//images/thumb/4/41/Faction2.png/164px-Faction2.png) */
		FACTION2 = 0x95466bdb,
		/** ![faction3](https://wiki.rage.mp//images/thumb/a/a8/Faction3.png/164px-Faction3.png) */
		FACTION3 = 0x866bce26,
		/** ![ellie](https://wiki.rage.mp//images/thumb/e/ef/Ellie.png/164px-Ellie.png) */
		ELLIE = 0xb472d2b5,
		/** ![gauntlet](https://wiki.rage.mp//images/thumb/7/71/Gauntlet.png/164px-Gauntlet.png) */
		GAUNTLET = 0x94b395c5,
		/** ![gauntlet2](https://wiki.rage.mp//images/thumb/b/b0/Gauntlet2.png/164px-Gauntlet2.png) */
		GAUNTLET2 = 0x14d22159,
		/** ![gauntlet3](https://wiki.rage.mp//images/thumb/8/88/Gauntlet3.png/152px-Gauntlet3.png) */
		GAUNTLET3 = 0x2b0c4dcd,
		/** ![gauntlet4](https://wiki.rage.mp//images/thumb/e/ec/Gauntlet4.png/141px-Gauntlet4.png) */
		GAUNTLET4 = 0x734c5e50,
		/**
		 * DLC: LosSantosSummerSpecial

		 * ![gauntlet5](https://wiki.rage.mp//images/thumb/d/de/Gauntlet5.png/159px-Gauntlet5.png)
		 */
		GAUNTLET5 = 0x817afaad,
		/** ![hermes](https://wiki.rage.mp//images/thumb/0/0d/Hermes.png/164px-Hermes.png) */
		HERMES = 0xe83c17,
		/** ![hotknife](https://wiki.rage.mp//images/thumb/1/16/Hotknife.png/164px-Hotknife.png) */
		HOTKNIFE = 0x239e390,
		/** ![hustler](https://wiki.rage.mp//images/thumb/3/3f/Hustler.png/141px-Hustler.png) */
		HUSTLER = 0x23ca25f2,
		/**
		 * DLC: ArenaWar

		 * ![impaler](https://wiki.rage.mp//images/thumb/3/31/Impaler.png/164px-Impaler.png)
		 */
		IMPALER = 0xb2e046fb,
		/**
		 * DLC: ArenaWar

		 * ![impaler2](https://wiki.rage.mp//images/thumb/4/40/Impaler2.png/164px-Impaler2.png)
		 */
		IMPALER2 = 0x3c26bd0c,
		/**
		 * DLC: ArenaWar

		 * ![impaler3](https://wiki.rage.mp//images/thumb/9/9b/Impaler3.png/164px-Impaler3.png)
		 */
		IMPALER3 = 0x8d45df49,
		/**
		 * DLC: ArenaWar

		 * ![impaler4](https://wiki.rage.mp//images/thumb/4/4b/Impaler4.png/164px-Impaler4.png)
		 */
		IMPALER4 = 0x9804f4c7,
		/**
		 * DLC: ArenaWar

		 * ![imperator](https://wiki.rage.mp//images/thumb/b/be/Imperator.png/164px-Imperator.png)
		 */
		IMPERATOR = 0x1a861243,
		/**
		 * DLC: ArenaWar

		 * ![imperator2](https://wiki.rage.mp//images/thumb/6/6b/Imperator2.png/164px-Imperator2.png)
		 */
		IMPERATOR2 = 0x619c1b82,
		/**
		 * DLC: ArenaWar

		 * ![imperator3](https://wiki.rage.mp//images/thumb/b/b8/Imperator3.png/164px-Imperator3.png)
		 */
		IMPERATOR3 = 0xd2f77e37,
		/** ![lurcher](https://wiki.rage.mp//images/thumb/0/03/Lurcher.png/164px-Lurcher.png) */
		LURCHER = 0x7b47a6a7,
		/** ![moonbeam](https://wiki.rage.mp//images/thumb/5/5d/Moonbeam.png/164px-Moonbeam.png) */
		MOONBEAM = 0x1f52a43f,
		/** ![moonbeam2](https://wiki.rage.mp//images/thumb/c/c1/Moonbeam2.png/164px-Moonbeam2.png) */
		MOONBEAM2 = 0x710a2b9b,
		/** ![nightshade](https://wiki.rage.mp//images/thumb/e/ec/Nightshade.png/164px-Nightshade.png) */
		NIGHTSHADE = 0x8c2bd0dc,
		/** ![peyote2](https://wiki.rage.mp//images/thumb/3/35/Peyote2.png/137px-Peyote2.png) */
		PEYOTE2 = 0x9472cd24,
		/** ![phoenix](https://wiki.rage.mp//images/thumb/5/53/Pheonix.png/164px-Pheonix.png) */
		PHOENIX = 0x831a21d5,
		/** ![picador](https://wiki.rage.mp//images/thumb/1/15/Picador.png/164px-Picador.png) */
		PICADOR = 0x59e0fbf3,
		/** ![ratloader](https://wiki.rage.mp//images/thumb/7/7a/Ratloader.png/164px-Ratloader.png) */
		RATLOADER = 0xd83c13ce,
		/** ![ratloader2](https://wiki.rage.mp//images/thumb/b/b7/Ratloader2.png/164px-Ratloader2.png) */
		RATLOADER2 = 0xdce1d9f7,
		/** ![ruiner](https://wiki.rage.mp//images/thumb/b/b4/Ruiner.png/164px-Ruiner.png) */
		RUINER = 0xf26ceff9,
		/** ![ruiner2](https://wiki.rage.mp//images/thumb/c/c3/Ruiner2.png/164px-Ruiner2.png) */
		RUINER2 = 0x381e10bd,
		/** ![ruiner3](https://wiki.rage.mp//images/thumb/b/b1/Ruiner3.png/164px-Ruiner3.png) */
		RUINER3 = 0x2e5afd37,
		/** ![sabregt](https://wiki.rage.mp//images/thumb/0/04/Sabregt.png/164px-Sabregt.png) */
		SABREGT = 0x9b909c94,
		/** ![sabregt2](https://wiki.rage.mp//images/thumb/b/ba/Sabregt2.png/164px-Sabregt2.png) */
		SABREGT2 = 0xd4ea603,
		/** ![slamvan](https://wiki.rage.mp//images/thumb/3/39/SlamVan.png/133px-SlamVan.png) */
		SLAMVAN = 0x2b7f9de3,
		/** ![slamvan2](https://wiki.rage.mp//images/thumb/3/3a/SlamVan2.png/133px-SlamVan2.png) */
		SLAMVAN2 = 0x31adbbfc,
		/** ![slamvan3](https://wiki.rage.mp//images/thumb/f/fe/Slamvan3.png/164px-Slamvan3.png) */
		SLAMVAN3 = 0x42bc5e19,
		/**
		 * DLC: ArenaWar

		 * ![slamvan4](https://wiki.rage.mp//images/thumb/8/88/SlamVan4.png/164px-SlamVan4.png)
		 */
		SLAMVAN4 = 0x8526e2f5,
		/**
		 * DLC: ArenaWar

		 * ![slamvan5](https://wiki.rage.mp//images/thumb/8/8e/SlamVan5.png/164px-SlamVan5.png)
		 */
		SLAMVAN5 = 0x163f8520,
		/**
		 * DLC: ArenaWar

		 * ![slamvan6](https://wiki.rage.mp//images/thumb/f/fa/SlamVan6.png/164px-SlamVan6.png)
		 */
		SLAMVAN6 = 0x67d52852,
		/** ![stalion](https://wiki.rage.mp//images/thumb/c/ce/Stalion.png/164px-Stalion.png) */
		STALION = 0x72a4c31e,
		/** ![stalion2](https://wiki.rage.mp//images/thumb/4/4a/Stalion2.png/164px-Stalion2.png) */
		STALION2 = 0xe80f67ee,
		/** ![tampa](https://wiki.rage.mp//images/thumb/3/30/Tampa.png/164px-Tampa.png) */
		TAMPA = 0x39f9c898,
		/** ![tampa3](https://wiki.rage.mp//images/thumb/0/02/Tampa3.png/164px-Tampa3.png) */
		TAMPA3 = 0xb7d9f7f1,
		/**
		 * DLC: ArenaWar

		 * ![tulip](https://wiki.rage.mp//images/thumb/c/cf/Tulip.png/164px-Tulip.png)
		 */
		TULIP = 0x56d42971,
		/**
		 * DLC: ArenaWar

		 * ![vamos](https://wiki.rage.mp//images/thumb/0/07/Vamos.png/164px-Vamos.png)
		 */
		VAMOS = 0xfd128dfd,
		/** ![vigero](https://wiki.rage.mp//images/thumb/2/22/Vigero.png/164px-Vigero.png) */
		VIGERO = 0xcec6b9b7,
		/** ![virgo](https://wiki.rage.mp//images/thumb/4/41/Virgo.png/164px-Virgo.png) */
		VIRGO = 0xe2504942,
		/** ![virgo2](https://wiki.rage.mp//images/thumb/8/81/Virgo2.png/164px-Virgo2.png) */
		VIRGO2 = 0xca62927a,
		/** ![virgo3](https://wiki.rage.mp//images/thumb/4/4d/Virgo3.png/164px-Virgo3.png) */
		VIRGO3 = 0xfdffb0,
		/** ![voodoo](https://wiki.rage.mp//images/thumb/1/1e/Voodoo.png/164px-Voodoo.png) */
		VOODOO = 0x779b4f2d,
		/** ![voodoo2](https://wiki.rage.mp//images/thumb/5/5e/Voodoo2.png/164px-Voodoo2.png) */
		VOODOO2 = 0x1f3766e3,
		/** ![yosemite](https://wiki.rage.mp//images/thumb/7/7a/Yosemite.png/164px-Yosemite.png) */
		YOSEMITE = 0x6f946279,
		/**
		 * DLC: TheDiamondCasinoHeist

		 * ![yosemite2](https://wiki.rage.mp//images/thumb/5/58/Yosemite2.png/164px-Yosemite2.png)
		 */
		YOSEMITE2 = 0x64f49967,
		/**
		 * DLC: LosSantosSummerSpecial

		 * ![yosemite3](https://wiki.rage.mp//images/thumb/8/87/Yosemite3.png/159px-Yosemite3.png)
		 */
		YOSEMITE3 = 0x0409d787,
		/** ![bfinjection](https://wiki.rage.mp//images/thumb/3/3d/Bfinject.png/164px-Bfinject.png) */
		BFINJECTION = 0x432aa566,
		/** ![bifta](https://wiki.rage.mp//images/thumb/b/b7/Bifta.png/164px-Bifta.png) */
		BIFTA = 0xeb298297,
		/** ![blazer](https://wiki.rage.mp//images/thumb/3/3e/Blazer.png/164px-Blazer.png) */
		BLAZER = 0x8125bcf9,
		/** ![blazer2](https://wiki.rage.mp//images/thumb/c/c9/Blazer2.png/164px-Blazer2.png) */
		BLAZER2 = 0xfd231729,
		/** ![blazer3](https://wiki.rage.mp//images/thumb/d/d5/Blazer3.png/164px-Blazer3.png) */
		BLAZER3 = 0xb44f0582,
		/** ![blazer4](https://wiki.rage.mp//images/thumb/5/5f/Blazer4.png/164px-Blazer4.png) */
		BLAZER4 = 0xe5ba6858,
		/** ![blazer5](https://wiki.rage.mp//images/thumb/d/d4/Blazer5.png/164px-Blazer5.png) */
		BLAZER5 = 0xa1355f67,
		/** ![bodhi2](https://wiki.rage.mp//images/thumb/c/ce/Bodhi2.png/164px-Bodhi2.png) */
		BODHI2 = 0xaa699bb6,
		/** ![brawler](https://wiki.rage.mp//images/thumb/f/fa/Brawler.png/164px-Brawler.png) */
		BRAWLER = 0xa7ce1bc5,
		/**
		 * DLC: ArenaWar

		 * ![bruiser](https://wiki.rage.mp//images/thumb/e/e4/Bruiser.png/164px-Bruiser.png)
		 */
		BRUISER = 0x27d79225,
		/**
		 * DLC: ArenaWar

		 * ![bruiser2](https://wiki.rage.mp//images/thumb/b/ba/Bruiser2.png/164px-Bruiser2.png)
		 */
		BRUISER2 = 0x9b065c9e,
		/**
		 * DLC: ArenaWar

		 * ![bruiser3](https://wiki.rage.mp//images/thumb/5/5b/Bruiser3.png/164px-Bruiser3.png)
		 */
		BRUISER3 = 0x8644331a,
		/**
		 * DLC: ArenaWar

		 * ![brutus](https://wiki.rage.mp//images/thumb/5/5a/Brutus.png/164px-Brutus.png)
		 */
		BRUTUS = 0x7f81a829,
		/**
		 * DLC: ArenaWar

		 * ![brutus2](https://wiki.rage.mp//images/thumb/f/fe/Brutus2.png/164px-Brutus2.png)
		 */
		BRUTUS2 = 0x8f49ae28,
		/**
		 * DLC: ArenaWar

		 * ![brutus3](https://wiki.rage.mp//images/thumb/f/fd/Brutus3.png/164px-Brutus3.png)
		 */
		BRUTUS3 = 0x798682a2,
		/** ![caracara](https://wiki.rage.mp//images/thumb/0/06/Caracara.png/157px-Caracara.png) */
		CARACARA = 0x4abebf23,
		/**
		 * DLC: TheDiamondCasinoHeist

		 * ![caracara2](https://wiki.rage.mp//images/thumb/3/3b/Caracara2.png/115px-Caracara2.png)
		 */
		CARACARA2 = 0xaf966f3c,
		/** ![dloader](https://wiki.rage.mp//images/thumb/1/1a/Dloader.png/164px-Dloader.png) */
		DLOADER = 0x698521e3,
		/** ![dubsta3](https://wiki.rage.mp//images/thumb/d/d6/Dubsta3.png/164px-Dubsta3.png) */
		DUBSTA3 = 0xb6410173,
		/** ![dune](https://wiki.rage.mp//images/thumb/c/c6/Dune.png/164px-Dune.png) */
		DUNE = 0x9cf21e0f,
		/** ![dune2](https://wiki.rage.mp//images/thumb/1/10/Dune2.png/164px-Dune2.png) */
		DUNE2 = 0x1fd824af,
		/** ![dune3](https://wiki.rage.mp//images/thumb/a/a6/Dune3.png/164px-Dune3.png) */
		DUNE3 = 0x711d4738,
		/** ![dune4](https://wiki.rage.mp//images/thumb/7/7f/Dune4.png/164px-Dune4.png) */
		DUNE4 = 0xceb28249,
		/** ![dune5](https://wiki.rage.mp//images/thumb/b/bf/Dune5.png/164px-Dune5.png) */
		DUNE5 = 0xed62bfa9,
		/**
		 * DLC: TheDiamondCasinoHeist

		 * ![everon](https://wiki.rage.mp//images/thumb/8/83/Everon.png/163px-Everon.png)
		 */
		EVERON = 0x97553c28,
		/** ![freecrawler](https://wiki.rage.mp//images/thumb/5/56/Freecrawler.png/164px-Freecrawler.png) */
		FREECRAWLER = 0xfcc2f483,
		/** ![hellion](https://wiki.rage.mp//images/thumb/c/cf/Hellion.png/116px-Hellion.png) */
		HELLION = 0xea6a047f,
		/** ![insurgent](https://wiki.rage.mp//images/thumb/b/bb/Insurgent.png/164px-Insurgent.png) */
		INSURGENT = 0x9114eada,
		/** ![insurgent2](https://wiki.rage.mp//images/thumb/2/2c/Insurgent2.png/164px-Insurgent2.png) */
		INSURGENT2 = 0x7b7e56f0,
		/** ![insurgent3](https://wiki.rage.mp//images/thumb/a/a0/Insurgent3.png/164px-Insurgent3.png) */
		INSURGENT3 = 0x8d4b7a8a,
		/** ![kalahari](https://wiki.rage.mp//images/thumb/5/55/Kalahari.png/164px-Kalahari.png) */
		KALAHARI = 0x5852838,
		/** ![kamacho](https://wiki.rage.mp//images/thumb/d/d0/Kamacho.png/150px-Kamacho.png) */
		KAMACHO = 0xf8c2e0e7,
		/** ![marshall](https://wiki.rage.mp//images/thumb/7/71/Marshall.png/164px-Marshall.png) */
		MARSHALL = 0x49863e9c,
		/** ![mesa3](https://wiki.rage.mp//images/thumb/c/c6/Mesa3.png/164px-Mesa3.png) */
		MESA3 = 0x84f42e51,
		/** ![monster](https://wiki.rage.mp//images/thumb/1/13/Monster.png/164px-Monster.png) */
		MONSTER = 0xcd93a7db,
		/**
		 * DLC: ArenaWar

		 * ![monster3](https://wiki.rage.mp//images/thumb/c/ce/Monster3.png/164px-Monster3.png)
		 */
		MONSTER3 = 0x669eb40a,
		/**
		 * DLC: ArenaWar

		 * ![monster4](https://wiki.rage.mp//images/thumb/3/37/Monster4.png/164px-Monster4.png)
		 */
		MONSTER4 = 0x32174afc,
		/**
		 * DLC: ArenaWar

		 * ![monster5](https://wiki.rage.mp//images/thumb/8/82/Monster5.png/164px-Monster5.png)
		 */
		MONSTER5 = 0xd556917c,
		/** ![menacer](https://wiki.rage.mp//images/thumb/e/ea/Menacer.png/164px-Menacer.png) */
		MENACER = 0x79dd18ae,
		/** ![outlaw](https://wiki.rage.mp//images/thumb/f/f0/Outlaw.png/164px-Outlaw.png) */
		OUTLAW = 0x185e2ff3,
		/**
		 * DLC: ArenaWar

		 * ![nightshark](https://wiki.rage.mp//images/thumb/8/85/Nightshark.png/164px-Nightshark.png)
		 */
		NIGHTSHARK = 0x19dd9ed1,
		/** ![rancherxl](https://wiki.rage.mp//images/thumb/e/ef/Rancherxl.png/164px-Rancherxl.png) */
		RANCHERXL = 0x6210cbb0,
		/** ![rancherxl2](https://wiki.rage.mp//images/thumb/6/6c/Rancherxl2.png/164px-Rancherxl2.png) */
		RANCHERXL2 = 0x7341576b,
		/** ![rebel](https://wiki.rage.mp//images/thumb/e/e3/Rebel.png/164px-Rebel.png) */
		REBEL = 0xb802dd46,
		/** ![rebel2](https://wiki.rage.mp//images/thumb/9/90/Rebel2.png/164px-Rebel2.png) */
		REBEL2 = 0x8612b64b,
		/**
		 * DLC: ArenaWar

		 * ![rcbandito](https://wiki.rage.mp//images/thumb/f/fc/RCBandito.png/164px-RCBandito.png)
		 */
		RCBANDITO = 0xeef345ec,
		/** ![riata](https://wiki.rage.mp//images/thumb/4/4d/Riata.png/164px-Riata.png) */
		RIATA = 0xa4a4e453,
		/** ![sandking](https://wiki.rage.mp//images/thumb/6/64/Sandking.png/164px-Sandking.png) */
		SANDKING = 0xb9210fd0,
		/** ![sandking2](https://wiki.rage.mp//images/thumb/d/d1/Sandking2.png/164px-Sandking2.png) */
		SANDKING2 = 0x3af8c345,
		/** ![technical](https://wiki.rage.mp//images/thumb/e/e8/Technical.png/164px-Technical.png) */
		TECHNICAL = 0x83051506,
		/** ![technical2](https://wiki.rage.mp//images/thumb/7/79/Technical2.png/164px-Technical2.png) */
		TECHNICAL2 = 0x4662bcbb,
		/** ![technical3](https://wiki.rage.mp//images/thumb/1/1d/Technical3.png/164px-Technical3.png) */
		TECHNICAL3 = 0x50d4d19f,
		/** ![trophytruck](https://wiki.rage.mp//images/thumb/1/18/Trophytruck.png/164px-Trophytruck.png) */
		TROPHYTRUCK = 0x612f4b6,
		/** ![trophytruck2](https://wiki.rage.mp//images/thumb/8/85/Trophytruck2.png/164px-Trophytruck2.png) */
		TROPHYTRUCK2 = 0xd876dbe2,
		/** ![vagrant](https://wiki.rage.mp//images/thumb/8/87/Vagrant.png/147px-Vagrant.png) */
		VAGRANT = 0x2c1fea99,
		/** ![zhaba](https://wiki.rage.mp//images/thumb/a/a2/Zhaba.png/123px-Zhaba.png) */
		ZHABA = 0x4c8dba51,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![verus](https://wiki.rage.mp//images/thumb/1/10/0x11CBC051.png/130px-0x11CBC051.png)
		 */
		VERUS = 0x11cbc051,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![winky](https://wiki.rage.mp//images/thumb/b/b2/0xF376F1E6.png/159px-0xF376F1E6.png)
		 */
		WINKY = 0xf376f1e6,
		/** ![formula](https://wiki.rage.mp//images/thumb/c/cf/Formula.png/142px-Formula.png) */
		FORMULA = 0x1446590a,
		/** ![formula2](https://wiki.rage.mp//images/thumb/0/03/Formula2.png/164px-Formula2.png) */
		FORMULA2 = 0x8b213907,
		/**
		 * DLC: LosSantosSummerSpecial

		 * ![openwheel1](https://wiki.rage.mp//images/thumb/a/ae/Openwheel1.png/159px-Openwheel1.png)
		 */
		OPENWHEEL1 = 0x58f77553,
		/**
		 * DLC: LosSantosSummerSpecial

		 * ![openwheel2](https://wiki.rage.mp//images/thumb/4/49/Openwheel2.png/159px-Openwheel2.png)
		 */
		OPENWHEEL2 = 0x4669d038,
		/** ![alphaz1](https://wiki.rage.mp//images/thumb/4/46/Alphaz1.png/164px-Alphaz1.png) */
		ALPHAZ1 = 0xa52f6866,
		/** ![avenger](https://wiki.rage.mp//images/thumb/5/5c/Avenger.png/164px-Avenger.png) */
		AVENGER = 0x81bd2ed0,
		/** ![avenger2](https://wiki.rage.mp//images/thumb/4/4b/Avenger2.png/164px-Avenger2.png) */
		AVENGER2 = 0x18606535,
		/** ![besra](https://wiki.rage.mp//images/thumb/3/35/Besra.png/164px-Besra.png) */
		BESRA = 0x6cbd1d6d,
		/** ![blimp](https://wiki.rage.mp//images/thumb/1/19/Blimp.png/164px-Blimp.png) */
		BLIMP = 0xf7004c86,
		/** ![blimp2](https://wiki.rage.mp//images/thumb/7/77/Blimp2.png/164px-Blimp2.png) */
		BLIMP2 = 0xdb6b4924,
		/** ![blimp3](https://wiki.rage.mp//images/thumb/4/4c/Blimp3.png/164px-Blimp3.png) */
		BLIMP3 = 0xeda4ed97,
		/** ![bombushka](https://wiki.rage.mp//images/thumb/d/d0/Bombushka.png/164px-Bombushka.png) */
		BOMBUSHKA = 0xfe0a508c,
		/** ![cargoplane](https://wiki.rage.mp//images/thumb/2/2a/Cargoplane.png/164px-Cargoplane.png) */
		CARGOPLANE = 0x15f27762,
		/** ![cuban800](https://wiki.rage.mp//images/thumb/6/63/Cuban800.png/164px-Cuban800.png) */
		CUBAN800 = 0xd9927fe3,
		/** ![dodo](https://wiki.rage.mp//images/thumb/f/fc/Dodo.png/164px-Dodo.png) */
		DODO = 0xca495705,
		/** ![duster](https://wiki.rage.mp//images/thumb/a/a0/Duster.png/164px-Duster.png) */
		DUSTER = 0x39d6779e,
		/** ![howard](https://wiki.rage.mp//images/thumb/0/09/Howard.png/164px-Howard.png) */
		HOWARD = 0xc3f25753,
		/** ![hydra](https://wiki.rage.mp//images/thumb/9/9d/Hydra.png/164px-Hydra.png) */
		HYDRA = 0x39d6e83f,
		/** ![jet](https://wiki.rage.mp//images/thumb/1/1e/Jet.png/164px-Jet.png) */
		JET = 0x3f119114,
		/** ![lazer](https://wiki.rage.mp//images/thumb/6/6c/Lazer.png/164px-Lazer.png) */
		LAZER = 0xb39b0ae6,
		/** ![luxor](https://wiki.rage.mp//images/thumb/f/f3/Luxor.png/133px-Luxor.png) */
		LUXOR = 0x250b0c5e,
		/** ![luxor2](https://wiki.rage.mp//images/thumb/a/a8/Luxor2.png/164px-Luxor2.png) */
		LUXOR2 = 0xb79f589e,
		/** ![mammatus](https://wiki.rage.mp//images/thumb/a/a7/Mammatus.png/164px-Mammatus.png) */
		MAMMATUS = 0x97e55d11,
		/** ![microlight](https://wiki.rage.mp//images/thumb/6/62/Microlight.png/164px-Microlight.png) */
		MICROLIGHT = 0x96e24857,
		/** ![miljet](https://wiki.rage.mp//images/thumb/b/b8/Miljet.png/164px-Miljet.png) */
		MILJET = 0x9d80f93,
		/** ![mogul](https://wiki.rage.mp//images/thumb/4/47/Mogul.png/164px-Mogul.png) */
		MOGUL = 0xd35698ef,
		/** ![molotok](https://wiki.rage.mp//images/thumb/a/ac/Molotok.png/164px-Molotok.png) */
		MOLOTOK = 0x5d56f01b,
		/** ![nimbus](https://wiki.rage.mp//images/thumb/c/c8/Nimbus.png/164px-Nimbus.png) */
		NIMBUS = 0xb2cf7250,
		/** ![nokota](https://wiki.rage.mp//images/thumb/d/d0/Nokota.png/164px-Nokota.png) */
		NOKOTA = 0x3dc92356,
		/** ![pyro](https://wiki.rage.mp//images/thumb/c/c8/Pyro.png/164px-Pyro.png) */
		PYRO = 0xad6065c0,
		/** ![rogue](https://wiki.rage.mp//images/thumb/5/59/Rogue.png/164px-Rogue.png) */
		ROGUE = 0xc5dd6967,
		/** ![seabreeze](https://wiki.rage.mp//images/thumb/a/ae/Seabreeze.png/164px-Seabreeze.png) */
		SEABREEZE = 0xe8983f9f,
		/** ![shamal](https://wiki.rage.mp//images/thumb/b/be/Shamal.png/164px-Shamal.png) */
		SHAMAL = 0xb79c1bf5,
		/** ![starling](https://wiki.rage.mp//images/thumb/9/98/Starling.png/164px-Starling.png) */
		STARLING = 0x9a9eb7de,
		/** ![strikeforce](https://wiki.rage.mp//images/thumb/8/8f/Strikeforce.png/164px-Strikeforce.png) */
		STRIKEFORCE = 0x64de07a1,
		/** ![stunt](https://wiki.rage.mp//images/thumb/a/aa/Stunt.png/164px-Stunt.png) */
		STUNT = 0x81794c70,
		/** ![titan](https://wiki.rage.mp//images/thumb/8/88/Titan.png/164px-Titan.png) */
		TITAN = 0x761e2ad3,
		/** ![tula](https://wiki.rage.mp//images/thumb/e/e8/Tula.png/164px-Tula.png) */
		TULA = 0x3e2e4f8a,
		/** ![velum](https://wiki.rage.mp//images/thumb/c/c3/Velum.png/133px-Velum.png) */
		VELUM = 0x9c429b6a,
		/** ![velum2](https://wiki.rage.mp//images/thumb/e/e7/Velum2.png/164px-Velum2.png) */
		VELUM2 = 0x403820e8,
		/** ![vestra](https://wiki.rage.mp//images/thumb/8/8f/Vestra.png/164px-Vestra.png) */
		VESTRA = 0x4ff77e37,
		/** ![volatol](https://wiki.rage.mp//images/thumb/c/c4/Volatol.png/164px-Volatol.png) */
		VOLATOL = 0x1aad0ded,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![alkonost](https://wiki.rage.mp//images/thumb/1/1d/0xEA313705.png/164px-0xEA313705.png)
		 */
		ALKONOST = 0xea313705,
		/** ![baller](https://wiki.rage.mp//images/thumb/7/79/Baller.png/164px-Baller.png) */
		BALLER = 0xcfca3668,
		/** ![baller2](https://wiki.rage.mp//images/thumb/9/98/Baller2.png/164px-Baller2.png) */
		BALLER2 = 0x8852855,
		/** ![baller3](https://wiki.rage.mp//images/thumb/9/9b/Baller3.png/164px-Baller3.png) */
		BALLER3 = 0x6ff0f727,
		/** ![baller4](https://wiki.rage.mp//images/thumb/e/e8/Baller4.png/164px-Baller4.png) */
		BALLER4 = 0x25cbe2e2,
		/** ![baller5](https://wiki.rage.mp//images/thumb/3/34/Baller5.png/164px-Baller5.png) */
		BALLER5 = 0x1c09cf5e,
		/** ![baller6](https://wiki.rage.mp//images/thumb/8/81/Baller6.png/164px-Baller6.png) */
		BALLER6 = 0x27b4e6b0,
		/** ![bjxl](https://wiki.rage.mp//images/thumb/d/da/Bjxl.png/164px-Bjxl.png) */
		BJXL = 0x32b29a4b,
		/** ![cavalcade](https://wiki.rage.mp//images/thumb/9/9e/Cavalcade.png/164px-Cavalcade.png) */
		CAVALCADE = 0x779f23aa,
		/** ![cavalcade2](https://wiki.rage.mp//images/thumb/b/bc/Cavalcade2.png/164px-Cavalcade2.png) */
		CAVALCADE2 = 0xd0eb2be5,
		/** ![contender](https://wiki.rage.mp//images/thumb/2/2e/Contender.png/164px-Contender.png) */
		CONTENDER = 0x28b67aca,
		/** ![dubsta](https://wiki.rage.mp//images/thumb/e/ec/Dubsta.png/164px-Dubsta.png) */
		DUBSTA = 0x462fe277,
		/** ![dubsta2](https://wiki.rage.mp//images/thumb/3/36/Dubsta2.png/164px-Dubsta2.png) */
		DUBSTA2 = 0xe882e5f6,
		/** ![fq2](https://wiki.rage.mp//images/thumb/a/a4/Fq2.png/164px-Fq2.png) */
		FQ2 = 0xbc32a33b,
		/** ![granger](https://wiki.rage.mp//images/thumb/4/4d/Granger.png/164px-Granger.png) */
		GRANGER = 0x9628879c,
		/** ![gresley](https://wiki.rage.mp//images/thumb/d/d6/Gresley.png/164px-Gresley.png) */
		GRESLEY = 0xa3fc0f4d,
		/** ![habanero](https://wiki.rage.mp//images/thumb/1/1e/Habanero.png/164px-Habanero.png) */
		HABANERO = 0x34b7390f,
		/** ![huntley](https://wiki.rage.mp//images/thumb/1/1c/Huntley.png/164px-Huntley.png) */
		HUNTLEY = 0x1d06d681,
		/** ![landstalker](https://wiki.rage.mp//images/thumb/7/70/Landstalker.png/164px-Landstalker.png) */
		LANDSTALKER = 0x4ba4e8dc,
		/**
		 * DLC: LosSantosSummerSpecial

		 * ![landstalker2](https://wiki.rage.mp//images/thumb/b/b1/Landstalker2.png/159px-Landstalker2.png)
		 */
		LANDSTALKER2 = 0xce0b9f22,
		/** ![mesa](https://wiki.rage.mp//images/thumb/c/cc/Mesa.png/164px-Mesa.png) */
		MESA = 0x36848602,
		/** ![mesa2](https://wiki.rage.mp//images/thumb/b/be/Mesa2.png/164px-Mesa2.png) */
		MESA2 = 0xd36a4b44,
		/** ![novak](https://wiki.rage.mp//images/thumb/7/76/Novak.png/111px-Novak.png) */
		NOVAK = 0x92f5024e,
		/** ![patriot](https://wiki.rage.mp//images/thumb/1/12/Patriot.png/164px-Patriot.png) */
		PATRIOT = 0xcfcfeb3b,
		/**
		 * DLC: AfterHours

		 * ![patriot2](https://wiki.rage.mp//images/thumb/8/83/Patriot2.png/164px-Patriot2.png)
		 */
		PATRIOT2 = 0xe6e967f8,
		/** ![radi](https://wiki.rage.mp//images/thumb/9/9c/Radi.png/164px-Radi.png) */
		RADI = 0x9d96b45b,
		/**
		 * DLC: TheDiamondCasinoHeist

		 * ![rebla](https://wiki.rage.mp//images/thumb/9/94/Rebla.png/136px-Rebla.png)
		 */
		REBLA = 0x4f48fc4,
		/** ![rocoto](https://wiki.rage.mp//images/thumb/2/23/Rocoto.png/164px-Rocoto.png) */
		ROCOTO = 0x7f5c91f1,
		/** ![seminole](https://wiki.rage.mp//images/thumb/c/cc/Seminole.png/164px-Seminole.png) */
		SEMINOLE = 0x48ceced3,
		/**
		 * DLC: LosSantosSummerSpecial

		 * ![seminole2](https://wiki.rage.mp//images/thumb/d/d9/Seminole2.png/159px-Seminole2.png)
		 */
		SEMINOLE2 = 0x94114926,
		/** ![serrano](https://wiki.rage.mp//images/thumb/a/ac/Serrano.png/164px-Serrano.png) */
		SERRANO = 0x4fb1a214,
		/**
		 * DLC: ArenaWar

		 * ![toros](https://wiki.rage.mp//images/thumb/f/f1/Toros.png/164px-Toros.png)
		 */
		TOROS = 0xba5334ac,
		/** ![xls](https://wiki.rage.mp//images/thumb/0/0f/Xls.png/164px-Xls.png) */
		XLS = 0x47bbcf2e,
		/** ![xls2](https://wiki.rage.mp//images/thumb/3/35/Xls2.png/164px-Xls2.png) */
		XLS2 = 0xe6401328,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![squaddie](https://wiki.rage.mp//images/thumb/d/d6/0xF9E67C05.png/147px-0xF9E67C05.png)
		 */
		SQUADDIE = 0xf9e67c05,
		/** ![asea](https://wiki.rage.mp//images/thumb/c/ce/Asea.png/164px-Asea.png) */
		ASEA = 0x94204d89,
		/** ![asea2](https://wiki.rage.mp//images/thumb/a/ae/Asea2.png/164px-Asea2.png) */
		ASEA2 = 0x9441d8d5,
		/** ![asterope](https://wiki.rage.mp//images/thumb/0/05/Asterope.png/164px-Asterope.png) */
		ASTEROPE = 0x8e9254fb,
		/** ![cog55](https://wiki.rage.mp//images/thumb/d/d5/Cog55.png/164px-Cog55.png) */
		COG55 = 0x360a438e,
		/** ![cog552](https://wiki.rage.mp//images/thumb/7/79/Cog552.png/164px-Cog552.png) */
		COG552 = 0x29fcd3e4,
		/** ![cognoscenti](https://wiki.rage.mp//images/thumb/5/51/Cognoscenti.png/164px-Cognoscenti.png) */
		COGNOSCENTI = 0x86fe0b60,
		/** ![cognoscenti2](https://wiki.rage.mp//images/thumb/2/2e/Cognoscenti2.png/164px-Cognoscenti2.png) */
		COGNOSCENTI2 = 0xdbf2d57a,
		/** ![emperor](https://wiki.rage.mp//images/thumb/c/c5/Emperor.png/164px-Emperor.png) */
		EMPEROR = 0xd7278283,
		/** ![emperor2](https://wiki.rage.mp//images/thumb/1/16/Emperor2.png/164px-Emperor2.png) */
		EMPEROR2 = 0x8fc3aadc,
		/** ![emperor3](https://wiki.rage.mp//images/thumb/0/0f/Emperor3.png/164px-Emperor3.png) */
		EMPEROR3 = 0xb5fcf74e,
		/** ![fugitive](https://wiki.rage.mp//images/thumb/7/73/Fugitive.png/164px-Fugitive.png) */
		FUGITIVE = 0x71cb2ffb,
		/** ![glendale](https://wiki.rage.mp//images/thumb/b/b2/Glendale.png/164px-Glendale.png) */
		GLENDALE = 0x47a6bc1,
		/**
		 * DLC: LosSantosSummerSpecial

		 * ![glendale2](https://wiki.rage.mp//images/thumb/b/bd/Glendale2.png/159px-Glendale2.png)
		 */
		GLENDALE2 = 0xc98bbad6,
		/** ![ingot](https://wiki.rage.mp//images/thumb/7/74/Ingot.png/164px-Ingot.png) */
		INGOT = 0xb3206692,
		/** ![intruder](https://wiki.rage.mp//images/thumb/9/92/Intruder.png/164px-Intruder.png) */
		INTRUDER = 0x34dd8aa1,
		/** ![limo2](https://wiki.rage.mp//images/thumb/d/d5/Limo2.png/164px-Limo2.png) */
		LIMO2 = 0xf92aec4d,
		/** ![premier](https://wiki.rage.mp//images/thumb/9/9d/Premier.png/164px-Premier.png) */
		PREMIER = 0x8fb66f9b,
		/** ![primo](https://wiki.rage.mp//images/thumb/4/45/Primo.png/164px-Primo.png) */
		PRIMO = 0xbb6b404f,
		/** ![primo2](https://wiki.rage.mp//images/thumb/3/30/Primo2.png/164px-Primo2.png) */
		PRIMO2 = 0x86618eda,
		/** ![regina](https://wiki.rage.mp//images/thumb/5/5f/Regina.png/164px-Regina.png) */
		REGINA = 0xff22d208,
		/** ![romero](https://wiki.rage.mp//images/thumb/7/73/Romero.png/164px-Romero.png) */
		ROMERO = 0x2560b2fc,
		/** ![stafford](https://wiki.rage.mp//images/thumb/e/e9/Stafford.png/164px-Stafford.png) */
		STAFFORD = 0x1324e960,
		/** ![stanier](https://wiki.rage.mp//images/thumb/5/57/Stanier.png/164px-Stanier.png) */
		STANIER = 0xa7ede74d,
		/** ![stratum](https://wiki.rage.mp//images/thumb/b/ba/Stratum.png/164px-Stratum.png) */
		STRATUM = 0x66b4fc45,
		/** ![stretch](https://wiki.rage.mp//images/thumb/8/8a/Stretch.png/164px-Stretch.png) */
		STRETCH = 0x8b13f083,
		/** ![superd](https://wiki.rage.mp//images/thumb/6/6e/Superd.png/164px-Superd.png) */
		SUPERD = 0x42f2ed16,
		/** ![surge](https://wiki.rage.mp//images/thumb/1/1a/Surge.png/164px-Surge.png) */
		SURGE = 0x8f0e3594,
		/** ![tailgater](https://wiki.rage.mp//images/thumb/a/af/Tailgater.png/164px-Tailgater.png) */
		TAILGATER = 0xc3ddfdce,
		/** ![warrener](https://wiki.rage.mp//images/thumb/2/22/Warrener.png/164px-Warrener.png) */
		WARRENER = 0x51d83328,
		/** ![washington](https://wiki.rage.mp//images/thumb/e/e2/Washington.png/164px-Washington.png) */
		WASHINGTON = 0x69f06b57,
		/** ![airbus](https://wiki.rage.mp//images/thumb/3/32/Airbus.png/164px-Airbus.png) */
		AIRBUS = 0x4c80eb0e,
		/** ![brickade](https://wiki.rage.mp//images/thumb/8/83/Brickade.png/164px-Brickade.png) */
		BRICKADE = 0xedc6f847,
		/** ![bus](https://wiki.rage.mp//images/thumb/4/43/Bus.png/164px-Bus.png) */
		BUS = 0xd577c962,
		/** ![coach](https://wiki.rage.mp//images/thumb/9/9d/Coach.png/164px-Coach.png) */
		COACH = 0x84718d34,
		/** ![pbus2](https://wiki.rage.mp//images/thumb/f/f4/Pbus2.png/164px-Pbus2.png) */
		PBUS2 = 0x149bd32a,
		/** ![rallytruck](https://wiki.rage.mp//images/thumb/a/a5/Rallytruck.png/164px-Rallytruck.png) */
		RALLYTRUCK = 0x829a3c44,
		/** ![rentalbus](https://wiki.rage.mp//images/thumb/4/48/Rentalbus.png/164px-Rentalbus.png) */
		RENTALBUS = 0xbe819c63,
		/** ![taxi](https://wiki.rage.mp//images/thumb/a/a6/Taxi.png/164px-Taxi.png) */
		TAXI = 0xc703db5f,
		/** ![tourbus](https://wiki.rage.mp//images/thumb/a/ac/Tourbus.png/164px-Tourbus.png) */
		TOURBUS = 0x73b1c3cb,
		/** ![trash](https://wiki.rage.mp//images/thumb/6/6e/Trash.png/164px-Trash.png) */
		TRASH = 0x72435a19,
		/** ![trash2](https://wiki.rage.mp//images/thumb/8/88/Trash2.png/164px-Trash2.png) */
		TRASH2 = 0xb527915c,
		/** ![wastelander](https://wiki.rage.mp//images/thumb/7/7c/Wastelander.png/164px-Wastelander.png) */
		WASTELANDER = 0x8e08ec82,
		/** ![alpha](https://wiki.rage.mp//images/thumb/a/a8/Alpha.png/164px-Alpha.png) */
		ALPHA = 0x2db8d1aa,
		/** ![banshee](https://wiki.rage.mp//images/thumb/d/d3/Banshee.png/164px-Banshee.png) */
		BANSHEE = 0xc1e908d2,
		/** ![bestiagts](https://wiki.rage.mp//images/thumb/5/5c/Bestiagts.png/164px-Bestiagts.png) */
		BESTIAGTS = 0x4bfcf28b,
		/** ![blista2](https://wiki.rage.mp//images/thumb/0/0c/Blista2.png/164px-Blista2.png) */
		BLISTA2 = 0x3dee5eda,
		/** ![blista3](https://wiki.rage.mp//images/thumb/8/8c/Blista3.png/164px-Blista3.png) */
		BLISTA3 = 0xdcbc1c3b,
		/** ![buffalo](https://wiki.rage.mp//images/thumb/0/0a/Buffalo.png/164px-Buffalo.png) */
		BUFFALO = 0xedd516c6,
		/** ![buffalo2](https://wiki.rage.mp//images/thumb/2/2c/Buffalo2.png/164px-Buffalo2.png) */
		BUFFALO2 = 0x2bec3cbe,
		/** ![buffalo3](https://wiki.rage.mp//images/thumb/6/68/Buffalo3.png/164px-Buffalo3.png) */
		BUFFALO3 = 0xe2c013e,
		/** ![carbonizzare](https://wiki.rage.mp//images/thumb/4/43/Carbonizzare.png/164px-Carbonizzare.png) */
		CARBONIZZARE = 0x7b8ab45f,
		/** ![comet2](https://wiki.rage.mp//images/thumb/c/cb/Comet2.png/164px-Comet2.png) */
		COMET2 = 0xc1ae4d16,
		/** ![comet3](https://wiki.rage.mp//images/thumb/b/b6/Comet3.png/164px-Comet3.png) */
		COMET3 = 0x877358ad,
		/** ![comet4](https://wiki.rage.mp//images/thumb/f/f1/Comet4.png/164px-Comet4.png) */
		COMET4 = 0x5d1903f9,
		/** ![comet5](https://wiki.rage.mp//images/thumb/c/ca/Comet5.png/153px-Comet5.png) */
		COMET5 = 0x276d98a3,
		/** ![coquette](https://wiki.rage.mp//images/thumb/d/d6/Coquette.png/164px-Coquette.png) */
		COQUETTE = 0x67bc037,
		/**
		 * DLC: LosSantosSummerSpecial

		 * ![coquette4](https://wiki.rage.mp//images/thumb/9/97/Coquette4.png/159px-Coquette4.png)
		 */
		COQUETTE4 = 0x98f65a5e,
		/** ![drafter](https://wiki.rage.mp//images/thumb/a/aa/Drafter.png/149px-Drafter.png) */
		DRAFTER = 0x28eab80f,
		/**
		 * DLC: ArenaWar

		 * ![deveste](https://wiki.rage.mp//images/thumb/3/3f/Deveste.png/164px-Deveste.png)
		 */
		DEVESTE = 0x5ee005da,
		/** ![elegy](https://wiki.rage.mp//images/thumb/e/ea/Elegy.png/164px-Elegy.png) */
		ELEGY = 0xbba2261,
		/** ![elegy2](https://wiki.rage.mp//images/thumb/3/33/Elegy2.png/164px-Elegy2.png) */
		ELEGY2 = 0xde3d9d22,
		/** ![feltzer2](https://wiki.rage.mp//images/thumb/7/7c/Feltzer2.png/164px-Feltzer2.png) */
		FELTZER2 = 0x8911b9f5,
		/** ![flashgt](https://wiki.rage.mp//images/thumb/8/80/Flashgt.png/150px-Flashgt.png) */
		FLASHGT = 0xb4f32118,
		/** ![furoregt](https://wiki.rage.mp//images/thumb/c/cb/Furoregt.png/164px-Furoregt.png) */
		FUROREGT = 0xbf1691e0,
		/** ![fusilade](https://wiki.rage.mp//images/thumb/5/56/Fusilade.png/164px-Fusilade.png) */
		FUSILADE = 0x1dc0ba53,
		/** ![futo](https://wiki.rage.mp//images/thumb/0/04/Futo.png/164px-Futo.png) */
		FUTO = 0x7836ce2f,
		/** ![gb200](https://wiki.rage.mp//images/thumb/3/35/Gb200.png/153px-Gb200.png) */
		GB200 = 0x71cbea98,
		/** ![hotring](https://wiki.rage.mp//images/thumb/2/26/Hotring.png/164px-Hotring.png) */
		HOTRING = 0x42836be5,
		/**
		 * DLC: TheDiamondCasinoHeist

		 * ![komoda](https://wiki.rage.mp//images/thumb/4/47/Komoda.png/164px-Komoda.png)
		 */
		KOMODA = 0xce44c4b9,
		/**
		 * DLC: TheDiamondCasinoHeist

		 * ![imorgon](https://wiki.rage.mp//images/thumb/1/1f/Imorgon.png/164px-Imorgon.png)
		 */
		IMORGON = 0xbc7c0a00,
		/** ![issi7](https://wiki.rage.mp//images/thumb/0/04/Issi7.png/121px-Issi7.png) */
		ISSI7 = 0x6e8da4f7,
		/**
		 * DLC: ArenaWar

		 * ![italigto](https://wiki.rage.mp//images/thumb/8/83/ItaliGTO.png/164px-ItaliGTO.png)
		 */
		ITALIGTO = 0xec3e3404,
		/** ![jugular](https://wiki.rage.mp//images/thumb/6/69/Jugular.png/146px-Jugular.png) */
		JUGULAR = 0xf38c4245,
		/** ![jester](https://wiki.rage.mp//images/thumb/e/e0/Jester.png/164px-Jester.png) */
		JESTER = 0xb2a716a3,
		/** ![jester2](https://wiki.rage.mp//images/thumb/3/34/Jester2.png/164px-Jester2.png) */
		JESTER2 = 0xbe0e6126,
		/** ![jester3](https://wiki.rage.mp//images/thumb/1/19/Jester3.png/160px-Jester3.png) */
		JESTER3 = 0xf330cb6a,
		/** ![khamelion](https://wiki.rage.mp//images/thumb/2/2e/Khamelion.png/164px-Khamelion.png) */
		KHAMELION = 0x206d1b68,
		/** ![kuruma](https://wiki.rage.mp//images/thumb/8/8f/Kuruma.png/164px-Kuruma.png) */
		KURUMA = 0xae2bfe94,
		/** ![kuruma2](https://wiki.rage.mp//images/thumb/0/09/Kuruma2.png/164px-Kuruma2.png) */
		KURUMA2 = 0x187d938d,
		/** ![locust](https://wiki.rage.mp//images/thumb/1/1e/Locust.png/130px-Locust.png) */
		LOCUST = 0xc7e55211,
		/** ![lynx](https://wiki.rage.mp//images/thumb/a/a7/Lynx2.png/164px-Lynx2.png) */
		LYNX = 0x1cbdc10b,
		/** ![massacro](https://wiki.rage.mp//images/thumb/7/78/Massacro.png/164px-Massacro.png) */
		MASSACRO = 0xf77ade32,
		/** ![massacro2](https://wiki.rage.mp//images/thumb/b/be/Massacro2.png/164px-Massacro2.png) */
		MASSACRO2 = 0xda5819a3,
		/** ![neo](https://wiki.rage.mp//images/thumb/7/74/Neo.png/138px-Neo.png) */
		NEO = 0x9f6ed5a2,
		/** ![neon](https://wiki.rage.mp//images/thumb/1/17/Neon.png/164px-Neon.png) */
		NEON = 0x91ca96ee,
		/** ![ninef](https://wiki.rage.mp//images/thumb/5/59/Ninef.png/164px-Ninef.png) */
		NINEF = 0x3d8fa25c,
		/** ![ninef2](https://wiki.rage.mp//images/thumb/f/f6/Ninef2.png/164px-Ninef2.png) */
		NINEF2 = 0xa8e38b01,
		/** ![omnis](https://wiki.rage.mp//images/thumb/1/12/Omnis.png/164px-Omnis.png) */
		OMNIS = 0xd1ad4937,
		/** ![paragon](https://wiki.rage.mp//images/thumb/1/1e/Paragon.png/141px-Paragon.png) */
		PARAGON = 0xe550775b,
		/** ![paragon2](https://wiki.rage.mp//images/thumb/5/52/Paragon2.png/148px-Paragon2.png) */
		PARAGON2 = 0x546d8eee,
		/** ![pariah](https://wiki.rage.mp//images/thumb/d/df/Pariah.png/164px-Pariah.png) */
		PARIAH = 0x33b98fe2,
		/** ![penumbra](https://wiki.rage.mp//images/thumb/9/93/Penumbra.png/164px-Penumbra.png) */
		PENUMBRA = 0xe9805550,
		/**
		 * DLC: LosSantosSummerSpecial

		 * ![penumbra2](https://wiki.rage.mp//images/thumb/d/dd/Penumbra2.png/159px-Penumbra2.png)
		 */
		PENUMBRA2 = 0xda5ec7da,
		/** ![raiden](https://wiki.rage.mp//images/thumb/5/5f/Raiden.png/164px-Raiden.png) */
		RAIDEN = 0xa4d99b7d,
		/** ![rapidgt](https://wiki.rage.mp//images/thumb/e/e9/Rapidgt.png/164px-Rapidgt.png) */
		RAPIDGT = 0x8cb29a14,
		/** ![rapidgt2](https://wiki.rage.mp//images/thumb/3/3e/Rapidgt2.png/164px-Rapidgt2.png) */
		RAPIDGT2 = 0x679450af,
		/** ![raptor](https://wiki.rage.mp//images/thumb/0/08/Raptor.png/164px-Raptor.png) */
		RAPTOR = 0xd7c56d39,
		/** ![revolter](https://wiki.rage.mp//images/thumb/2/24/Revolter.png/164px-Revolter.png) */
		REVOLTER = 0xe78cc3d9,
		/**
		 * DLC: CunningStunts:SpecialVehicleCircuit

		 * ![ruston](https://wiki.rage.mp//images/thumb/b/ba/Ruston.png/164px-Ruston.png)
		 */
		RUSTON = 0x2ae524a8,
		/** ![schafter2](https://wiki.rage.mp//images/thumb/c/cc/Schafter2.png/164px-Schafter2.png) */
		SCHAFTER2 = 0xb52b5113,
		/** ![schafter3](https://wiki.rage.mp//images/thumb/a/a9/Schafter3.png/164px-Schafter3.png) */
		SCHAFTER3 = 0xa774b5a6,
		/**
		 * DLC: ExecutivesandotherCriminals

		 * ![schafter4](https://wiki.rage.mp//images/thumb/2/29/Schafter4.png/164px-Schafter4.png)
		 */
		SCHAFTER4 = 0x58cf185c,
		/**
		 * DLC: ExecutivesandotherCriminals

		 * ![schafter5](https://wiki.rage.mp//images/thumb/2/28/Schafter5.png/164px-Schafter5.png)
		 */
		SCHAFTER5 = 0xcb0e7cd9,
		/**
		 * DLC: ExecutivesandotherCriminals

		 * ![schafter6](https://wiki.rage.mp//images/thumb/a/a6/Schafter6.png/164px-Schafter6.png)
		 */
		SCHAFTER6 = 0x72934be4,
		/**
		 * DLC: ArenaWar

		 * ![schlagen](https://wiki.rage.mp//images/thumb/9/97/Schlagen.png/164px-Schlagen.png)
		 */
		SCHLAGEN = 0xe1c03ab0,
		/** ![schwarzer](https://wiki.rage.mp//images/thumb/1/19/Schwarzer.png/164px-Schwarzer.png) */
		SCHWARZER = 0xd37b7976,
		/** ![sentinel3](https://wiki.rage.mp//images/thumb/0/0f/Sentinel3.png/164px-Sentinel3.png) */
		SENTINEL3 = 0x41d149aa,
		/** ![seven70](https://wiki.rage.mp//images/thumb/6/60/Seven70.png/164px-Seven70.png) */
		SEVEN70 = 0x97398a4b,
		/** ![specter](https://wiki.rage.mp//images/thumb/f/f1/Specter.png/164px-Specter.png) */
		SPECTER = 0x706e2b40,
		/** ![specter2](https://wiki.rage.mp//images/thumb/9/9f/Specter2.png/164px-Specter2.png) */
		SPECTER2 = 0x400f5147,
		/** ![streiter](https://wiki.rage.mp//images/thumb/8/81/Streiter.png/164px-Streiter.png) */
		STREITER = 0x67d2b389,
		/** ![sugoi](https://wiki.rage.mp//images/thumb/2/25/Sugoi.png/164px-Sugoi.png) */
		SUGOI = 0x3adb9758,
		/** ![sultan](https://wiki.rage.mp//images/thumb/f/f4/Sultan.png/164px-Sultan.png) */
		SULTAN = 0x39da2754,
		/** ![sultan2](https://wiki.rage.mp//images/thumb/5/57/Sultan2.png/163px-Sultan2.png) */
		SULTAN2 = 0x3404691c,
		/** ![surano](https://wiki.rage.mp//images/thumb/9/96/Surano.png/164px-Surano.png) */
		SURANO = 0x16e478c1,
		/** ![tampa2](https://wiki.rage.mp//images/thumb/a/af/Tampa2.png/164px-Tampa2.png) */
		TAMPA2 = 0xc0240885,
		/** ![tropos](https://wiki.rage.mp//images/thumb/7/71/Tropos.png/164px-Tropos.png) */
		TROPOS = 0x707e63a4,
		/** ![verlierer2](https://wiki.rage.mp//images/thumb/8/81/Verlierer2.png/164px-Verlierer2.png) */
		VERLIERER2 = 0x41b77fa4,
		/**
		 * DLC: TheDiamondCasinoHeist

		 * ![vstr](https://wiki.rage.mp//images/thumb/4/43/Vstr.png/164px-Vstr.png)
		 */
		VSTR = 0x56cdee7d,
		/**
		 * DLC: ArenaWar

		 * ![zr380](https://wiki.rage.mp//images/thumb/b/ba/ZR380.png/164px-ZR380.png)
		 */
		ZR380 = 0x20314b42,
		/**
		 * DLC: ArenaWar

		 * ![zr3802](https://wiki.rage.mp//images/thumb/2/21/ZR3802.png/164px-ZR3802.png)
		 */
		ZR3802 = 0xbe11efc6,
		/**
		 * DLC: ArenaWar

		 * ![zr3803](https://wiki.rage.mp//images/thumb/3/35/ZR3803.png/164px-ZR3803.png)
		 */
		ZR3803 = 0xa7dcc35c,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![italirsx](https://wiki.rage.mp//images/thumb/1/1a/0xBB78956A.png/164px-0xBB78956A.png)
		 */
		ITALIRSX = 0xbb78956a,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![veto](https://wiki.rage.mp//images/thumb/1/11/0xCCE5C8FA.png/157px-0xCCE5C8FA.png)
		 */
		VETO = 0xcce5c8fa,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![veto2](https://wiki.rage.mp//images/thumb/c/cc/0xA703E4A9.png/164px-0xA703E4A9.png)
		 */
		VETO2 = 0xa703e4a9,
		/** ![ardent](https://wiki.rage.mp//images/thumb/3/3d/Ardent.png/164px-Ardent.png) */
		ARDENT = 0x97e5533,
		/** ![btype](https://wiki.rage.mp//images/thumb/6/64/Btype.png/164px-Btype.png) */
		BTYPE = 0x6ff6914,
		/** ![btype2](https://wiki.rage.mp//images/thumb/9/98/Btype2.png/164px-Btype2.png) */
		BTYPE2 = 0xce6b35a4,
		/** ![btype3](https://wiki.rage.mp//images/thumb/3/34/Btype3.png/164px-Btype3.png) */
		BTYPE3 = 0xdc19d101,
		/** ![casco](https://wiki.rage.mp//images/thumb/d/d7/Casco.png/164px-Casco.png) */
		CASCO = 0x3822bdfe,
		/** ![cheetah2](https://wiki.rage.mp//images/thumb/d/dd/Cheetah2.png/164px-Cheetah2.png) */
		CHEETAH2 = 0xd4e5f4d,
		/** ![coquette2](https://wiki.rage.mp//images/thumb/8/8a/Coquette2.png/164px-Coquette2.png) */
		COQUETTE2 = 0x3c4e2113,
		/** ![deluxo](https://wiki.rage.mp//images/thumb/4/4e/Deluxo.png/164px-Deluxo.png) */
		DELUXO = 0x586765fb,
		/** ![dynasty](https://wiki.rage.mp//images/thumb/8/88/Dynasty.png/144px-Dynasty.png) */
		DYNASTY = 0x127e90d5,
		/** ![fagaloa](https://wiki.rage.mp//images/thumb/1/15/Fagaloa.png/164px-Fagaloa.png) */
		FAGALOA = 0x6068ad86,
		/** ![feltzer3](https://wiki.rage.mp//images/thumb/0/0b/Feltzer3.png/164px-Feltzer3.png) */
		FELTZER3 = 0xa29d6d10,
		/** ![gt500](https://wiki.rage.mp//images/thumb/8/84/Gt500.png/164px-Gt500.png) */
		GT500 = 0x8408f33a,
		/** ![infernus2](https://wiki.rage.mp//images/thumb/9/91/Infernus2.png/164px-Infernus2.png) */
		INFERNUS2 = 0xac33179c,
		/** ![jb700](https://wiki.rage.mp//images/thumb/9/97/Jb700.png/164px-Jb700.png) */
		JB700 = 0x3eab5555,
		/** ![jb7002](https://wiki.rage.mp//images/thumb/b/bc/Jb7002.png/162px-Jb7002.png) */
		JB7002 = 0x177da45c,
		/** ![mamba](https://wiki.rage.mp//images/thumb/c/c0/Mamba.png/164px-Mamba.png) */
		MAMBA = 0x9cfffc56,
		/** ![manana](https://wiki.rage.mp//images/thumb/5/50/Manana.png/164px-Manana.png) */
		MANANA = 0x81634188,
		/**
		 * DLC: LosSantosSummerSpecial

		 * ![manana2](https://wiki.rage.mp//images/thumb/9/9e/Manana2.png/159px-Manana2.png)
		 */
		MANANA2 = 0x665f785d,
		/** ![michelli](https://wiki.rage.mp//images/thumb/1/15/Michelli.png/136px-Michelli.png) */
		MICHELLI = 0x3e5bd8d9,
		/** ![monroe](https://wiki.rage.mp//images/thumb/6/64/Monroe.png/164px-Monroe.png) */
		MONROE = 0xe62b361b,
		/** ![nebula](https://wiki.rage.mp//images/thumb/e/ea/Nebula.png/143px-Nebula.png) */
		NEBULA = 0xcb642637,
		/** ![peyote](https://wiki.rage.mp//images/thumb/2/21/Peyote.png/164px-Peyote.png) */
		PEYOTE = 0x6d19ccbc,
		/**
		 * DLC: LosSantosSummerSpecial

		 * ![peyote3](https://wiki.rage.mp//images/thumb/d/d9/Peyote3.png/159px-Peyote3.png)
		 */
		PEYOTE3 = 0x4201a843,
		/** ![pigalle](https://wiki.rage.mp//images/thumb/7/76/Pigalle.png/164px-Pigalle.png) */
		PIGALLE = 0x404b6381,
		/** ![rapidgt3](https://wiki.rage.mp//images/thumb/0/09/Rapidgt3.png/164px-Rapidgt3.png) */
		RAPIDGT3 = 0x7a2ef5e4,
		/** ![retinue](https://wiki.rage.mp//images/thumb/5/53/Retinue.png/164px-Retinue.png) */
		RETINUE = 0x6dbd6c0a,
		/** ![retinue2](https://wiki.rage.mp//images/thumb/8/86/Retinue2.png/162px-Retinue2.png) */
		RETINUE2 = 0x79178f0a,
		/** ![savestra](https://wiki.rage.mp//images/thumb/2/26/Savestra.png/164px-Savestra.png) */
		SAVESTRA = 0x35ded0dd,
		/** ![stinger](https://wiki.rage.mp//images/thumb/b/b6/Stinger.png/164px-Stinger.png) */
		STINGER = 0x5c23af9b,
		/** ![stingergt](https://wiki.rage.mp//images/thumb/8/8d/Stingergt.png/164px-Stingergt.png) */
		STINGERGT = 0x82e499fa,
		/** ![stromberg](https://wiki.rage.mp//images/thumb/f/f1/Stromberg.png/164px-Stromberg.png) */
		STROMBERG = 0x34dba661,
		/** ![swinger](https://wiki.rage.mp//images/thumb/8/86/Swinger.png/164px-Swinger.png) */
		SWINGER = 0x1dd4c0ff,
		/** ![torero](https://wiki.rage.mp//images/thumb/5/5f/Torero.png/164px-Torero.png) */
		TORERO = 0x59a9e570,
		/** ![tornado](https://wiki.rage.mp//images/thumb/4/40/Tornado.png/164px-Tornado.png) */
		TORNADO = 0x1bb290bc,
		/** ![tornado2](https://wiki.rage.mp//images/thumb/0/05/Tornado2.png/164px-Tornado2.png) */
		TORNADO2 = 0x5b42a5c4,
		/** ![tornado3](https://wiki.rage.mp//images/thumb/7/7d/Tornado3.png/164px-Tornado3.png) */
		TORNADO3 = 0x690a4153,
		/** ![tornado4](https://wiki.rage.mp//images/thumb/f/fa/Tornado4.png/164px-Tornado4.png) */
		TORNADO4 = 0x86cf7cdd,
		/** ![tornado5](https://wiki.rage.mp//images/thumb/8/83/Tornado5.png/164px-Tornado5.png) */
		TORNADO5 = 0x94da98ef,
		/** ![tornado6](https://wiki.rage.mp//images/thumb/6/69/Tornado6.png/164px-Tornado6.png) */
		TORNADO6 = 0xa31cb573,
		/** ![turismo2](https://wiki.rage.mp//images/thumb/f/fa/Turismo2.png/164px-Turismo2.png) */
		TURISMO2 = 0xc575df11,
		/** ![viseris](https://wiki.rage.mp//images/thumb/2/24/Viseris.png/164px-Viseris.png) */
		VISERIS = 0xe8a8ba94,
		/** ![z190](https://wiki.rage.mp//images/thumb/e/e1/Z190.png/156px-Z190.png) */
		Z190 = 0x3201dd49,
		/** ![ztype](https://wiki.rage.mp//images/thumb/5/56/Ztype.png/164px-Ztype.png) */
		ZTYPE = 0x2d3bd401,
		/** ![zion3](https://wiki.rage.mp//images/thumb/5/5a/Zion3.png/140px-Zion3.png) */
		ZION3 = 0x6f039a67,
		/** ![cheburek](https://wiki.rage.mp//images/thumb/4/4f/Cheburek.png/164px-Cheburek.png) */
		CHEBUREK = 0xc514aae0,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![toreador](https://wiki.rage.mp//images/thumb/3/30/0x56C8A5EF.png/164px-0x56C8A5EF.png)
		 */
		TOREADOR = 0x56c8a5ef,
		/** ![adder](https://wiki.rage.mp//images/thumb/c/c2/Adder.png/164px-Adder.png) */
		ADDER = 0xb779a091,
		/** ![autarch](https://wiki.rage.mp//images/thumb/3/38/Autarch.png/164px-Autarch.png) */
		AUTARCH = 0xed552c74,
		/** ![banshee2](https://wiki.rage.mp//images/thumb/9/9b/Banshee2.png/164px-Banshee2.png) */
		BANSHEE2 = 0x25c5af13,
		/** ![bullet](https://wiki.rage.mp//images/thumb/7/7a/Bullet.png/164px-Bullet.png) */
		BULLET = 0x9ae6dda1,
		/** ![cheetah](https://wiki.rage.mp//images/thumb/9/9e/Cheetah.png/164px-Cheetah.png) */
		CHEETAH = 0xb1d95da0,
		/** ![cyclone](https://wiki.rage.mp//images/thumb/7/79/Cyclone.png/164px-Cyclone.png) */
		CYCLONE = 0x52ff9437,
		/** ![entity2](https://wiki.rage.mp//images/thumb/f/f3/Entity2.png/164px-Entity2.png) */
		ENTITY2 = 0x8198aedc,
		/** ![entityxf](https://wiki.rage.mp//images/thumb/6/61/Entityxf.png/164px-Entityxf.png) */
		ENTITYXF = 0xb2fe5cf9,
		/** ![emerus](https://wiki.rage.mp//images/thumb/0/0a/Emerus.png/132px-Emerus.png) */
		EMERUS = 0x4ee74355,
		/** ![fmj](https://wiki.rage.mp//images/thumb/d/d2/Fmj.png/164px-Fmj.png) */
		FMJ = 0x5502626c,
		/** ![furia](https://wiki.rage.mp//images/thumb/0/05/Furia.png/164px-Furia.png) */
		FURIA = 0x3944d5a0,
		/** ![gp1](https://wiki.rage.mp//images/thumb/a/a4/Gp1.png/164px-Gp1.png) */
		GP1 = 0x4992196c,
		/** ![infernus](https://wiki.rage.mp//images/thumb/d/d2/Infernus.png/164px-Infernus.png) */
		INFERNUS = 0x18f25ac7,
		/** ![italigtb](https://wiki.rage.mp//images/thumb/d/dd/Italigtb.png/164px-Italigtb.png) */
		ITALIGTB = 0x85e8e76b,
		/** ![italigtb2](https://wiki.rage.mp//images/thumb/5/57/Italigtb2.png/164px-Italigtb2.png) */
		ITALIGTB2 = 0xe33a477b,
		/** ![krieger](https://wiki.rage.mp//images/thumb/f/fc/Krieger.png/122px-Krieger.png) */
		KRIEGER = 0xd86a0247,
		/** ![le7b](https://wiki.rage.mp//images/thumb/e/ee/Le7b.png/164px-Le7b.png) */
		LE7B = 0xb6846a55,
		/** ![nero](https://wiki.rage.mp//images/thumb/e/ed/Nero.png/164px-Nero.png) */
		NERO = 0x3da47243,
		/** ![nero2](https://wiki.rage.mp//images/thumb/e/ec/Nero2.png/164px-Nero2.png) */
		NERO2 = 0x4131f378,
		/** ![osiris](https://wiki.rage.mp//images/thumb/e/e3/Osiris.png/164px-Osiris.png) */
		OSIRIS = 0x767164d6,
		/** ![penetrator](https://wiki.rage.mp//images/thumb/d/d9/Penetrator.png/164px-Penetrator.png) */
		PENETRATOR = 0x9734f3ea,
		/** ![pfister811](https://wiki.rage.mp//images/thumb/8/8e/Pfister811.png/164px-Pfister811.png) */
		PFISTER811 = 0x92ef6e04,
		/** ![prototipo](https://wiki.rage.mp//images/thumb/f/fb/Prototipo.png/164px-Prototipo.png) */
		PROTOTIPO = 0x7e8f677f,
		/** ![reaper](https://wiki.rage.mp//images/thumb/6/6a/Reaper.png/164px-Reaper.png) */
		REAPER = 0xdf381e5,
		/** ![s80](https://wiki.rage.mp//images/thumb/a/a2/S80.png/126px-S80.png) */
		S80 = 0xeca6b6a3,
		/** ![sc1](https://wiki.rage.mp//images/thumb/5/59/Sc1.png/164px-Sc1.png) */
		SC1 = 0x5097f589,
		/** ![scramjet](https://wiki.rage.mp//images/thumb/8/85/Scramjet.png/164px-Scramjet.png) */
		SCRAMJET = 0xd9f0503d,
		/** ![sheava](https://wiki.rage.mp//images/thumb/0/06/Sheava.png/164px-Sheava.png) */
		SHEAVA = 0x30d3f6d8,
		/** ![sultanrs](https://wiki.rage.mp//images/thumb/8/88/Sultanrs.png/164px-Sultanrs.png) */
		SULTANRS = 0xee6024bc,
		/** ![t20](https://wiki.rage.mp//images/thumb/7/7d/T20.png/164px-T20.png) */
		T20 = 0x6322b39a,
		/** ![taipan](https://wiki.rage.mp//images/thumb/8/8a/Taipan.png/164px-Taipan.png) */
		TAIPAN = 0xbc5dc07e,
		/** ![tempesta](https://wiki.rage.mp//images/thumb/8/8a/Tempesta.png/164px-Tempesta.png) */
		TEMPESTA = 0x1044926f,
		/** ![tezeract](https://wiki.rage.mp//images/thumb/a/ab/Tezeract.png/164px-Tezeract.png) */
		TEZERACT = 0x3d7c6410,
		/** ![thrax](https://wiki.rage.mp//images/thumb/4/4f/Thrax.png/112px-Thrax.png) */
		THRAX = 0x3e3d1f59,
		/**
		 * DLC: LosSantosSummerSpecial

		 * ![tigon](https://wiki.rage.mp//images/thumb/f/f4/Tigon.png/159px-Tigon.png)
		 */
		TIGON = 0xaf0b8d48,
		/** ![turismor](https://wiki.rage.mp//images/thumb/7/7f/Turismor.png/164px-Turismor.png) */
		TURISMOR = 0x185484e1,
		/** ![tyrant](https://wiki.rage.mp//images/thumb/0/0a/Tyrant.png/164px-Tyrant.png) */
		TYRANT = 0xe99011c2,
		/** ![tyrus](https://wiki.rage.mp//images/thumb/e/e4/Tyrus.png/164px-Tyrus.png) */
		TYRUS = 0x7b406efb,
		/** ![vacca](https://wiki.rage.mp//images/thumb/1/14/Vacca.png/164px-Vacca.png) */
		VACCA = 0x142e0dc3,
		/** ![vagner](https://wiki.rage.mp//images/thumb/9/92/Vagner.png/164px-Vagner.png) */
		VAGNER = 0x7397224c,
		/** ![vigilante](https://wiki.rage.mp//images/thumb/c/c7/Vigilante.png/164px-Vigilante.png) */
		VIGILANTE = 0xb5ef4c33,
		/** ![visione](https://wiki.rage.mp//images/thumb/0/01/Visione.png/164px-Visione.png) */
		VISIONE = 0xc4810400,
		/** ![voltic](https://wiki.rage.mp//images/thumb/e/ef/Voltic.png/164px-Voltic.png) */
		VOLTIC = 0x9f4b77be,
		/** ![voltic2](https://wiki.rage.mp//images/thumb/4/4f/Voltic2.png/164px-Voltic2.png) */
		VOLTIC2 = 0x3af76f4a,
		/** ![xa21](https://wiki.rage.mp//images/thumb/4/4d/Xa21.png/164px-Xa21.png) */
		XA21 = 0x36b4a8a9,
		/** ![zentorno](https://wiki.rage.mp//images/thumb/2/2b/Zentorno.png/164px-Zentorno.png) */
		ZENTORNO = 0xac5df515,
		/** ![zorrusso](https://wiki.rage.mp//images/thumb/7/79/Zorrusso.png/110px-Zorrusso.png) */
		ZORRUSSO = 0xd757d97d,
		/** ![armytanker](https://wiki.rage.mp//images/thumb/1/13/ArmyTanker.png/133px-ArmyTanker.png) */
		ARMYTANKER = 0xb8081009,
		/** ![armytrailer](https://wiki.rage.mp//images/thumb/c/c0/Armytrailer.png/164px-Armytrailer.png) */
		ARMYTRAILER = 0xa7ff33f5,
		/** ![armytrailer2](https://wiki.rage.mp//images/thumb/c/c2/ArmyTrailer2.png/133px-ArmyTrailer2.png) */
		ARMYTRAILER2 = 0x9e6b14d6,
		/** ![baletrailer](https://wiki.rage.mp//images/thumb/b/bd/BaleTrailer.png/133px-BaleTrailer.png) */
		BALETRAILER = 0xe82ae656,
		/** ![boattrailer](https://wiki.rage.mp//images/thumb/c/ce/BoatTrailer.png/133px-BoatTrailer.png) */
		BOATTRAILER = 0x1f3d44b5,
		/** ![cablecar](https://wiki.rage.mp//images/thumb/0/0d/CableCar.png/133px-CableCar.png) */
		CABLECAR = 0xc6c3242d,
		/** ![docktrailer](https://wiki.rage.mp//images/thumb/3/30/DockTrailer.png/133px-DockTrailer.png) */
		DOCKTRAILER = 0x806efbee,
		/** ![freighttrailer](https://wiki.rage.mp//images/thumb/1/1e/Freighttrailer.png/164px-Freighttrailer.png) */
		FREIGHTTRAILER = 0xd1abb666,
		/** ![graintrailer](https://wiki.rage.mp//images/thumb/4/40/GrainTrailer.png/133px-GrainTrailer.png) */
		GRAINTRAILER = 0x3cc7f596,
		/** ![proptrailer](https://wiki.rage.mp//images/thumb/d/da/PropTrailer.png/133px-PropTrailer.png) */
		PROPTRAILER = 0x153e1b0a,
		/** ![raketrailer](https://wiki.rage.mp//images/thumb/1/11/RakeTrailer.png/133px-RakeTrailer.png) */
		RAKETRAILER = 0x174cb172,
		/** ![tr2](https://wiki.rage.mp//images/thumb/a/a6/TR2.png/133px-TR2.png) */
		TR2 = 0x7be032c6,
		/** ![tr3](https://wiki.rage.mp//images/thumb/3/3c/TR3.png/133px-TR3.png) */
		TR3 = 0x6a59902d,
		/** ![tr4](https://wiki.rage.mp//images/thumb/1/11/TR4.png/133px-TR4.png) */
		TR4 = 0x7cab34d0,
		/** ![trflat](https://wiki.rage.mp//images/thumb/e/e6/TRFlat.png/133px-TRFlat.png) */
		TRFLAT = 0xaf62f6b2,
		/** ![tvtrailer](https://wiki.rage.mp//images/thumb/5/5b/TVTrailer.png/133px-TVTrailer.png) */
		TVTRAILER = 0x967620be,
		/** ![tanker](https://wiki.rage.mp//images/thumb/e/e3/Tanker.png/133px-Tanker.png) */
		TANKER = 0xd46f4737,
		/** ![tanker2](https://wiki.rage.mp//images/thumb/2/25/Tanker2.png/133px-Tanker2.png) */
		TANKER2 = 0x74998082,
		/** ![trailerlarge](https://wiki.rage.mp//images/thumb/e/e8/Trailerlarge.png/164px-Trailerlarge.png) */
		TRAILERLARGE = 0x5993f939,
		/** ![trailerlogs](https://wiki.rage.mp//images/thumb/3/3e/TrailerLogs.png/133px-TrailerLogs.png) */
		TRAILERLOGS = 0x782a236d,
		/** ![trailersmall](https://wiki.rage.mp//images/thumb/4/46/TrailerSmall.png/133px-TrailerSmall.png) */
		TRAILERSMALL = 0x2a72beab,
		/** ![trailers](https://wiki.rage.mp//images/thumb/1/14/Trailers.png/133px-Trailers.png) */
		TRAILERS = 0xcbb2be0e,
		/** ![trailers2](https://wiki.rage.mp//images/thumb/8/89/Trailers2.png/133px-Trailers2.png) */
		TRAILERS2 = 0xa1da3c91,
		/** ![trailers3](https://wiki.rage.mp//images/thumb/c/c6/Trailers3.png/133px-Trailers3.png) */
		TRAILERS3 = 0x8548036d,
		/** ![trailers4](https://wiki.rage.mp//images/thumb/3/38/Trailers4.png/164px-Trailers4.png) */
		TRAILERS4 = 0xbe66f5aa,
		/** ![freight](https://wiki.rage.mp//images/thumb/9/9e/Freight.png/133px-Freight.png) */
		FREIGHT = 0x3d6aaa9b,
		/** ![freightcar](https://wiki.rage.mp//images/thumb/0/07/FreightCar.png/133px-FreightCar.png) */
		FREIGHTCAR = 0x0afd22a6,
		/** ![freightcont1](https://wiki.rage.mp//images/thumb/1/1c/FreightCont1.png/133px-FreightCont1.png) */
		FREIGHTCONT1 = 0x36dcff98,
		/** ![freightcont2](https://wiki.rage.mp//images/thumb/2/2a/FreightCont2.png/133px-FreightCont2.png) */
		FREIGHTCONT2 = 0x0e512e79,
		/** ![freightgrain](https://wiki.rage.mp//images/thumb/1/10/FreightGrain.png/133px-FreightGrain.png) */
		FREIGHTGRAIN = 0x264d9262,
		/** ![metrotrain](https://wiki.rage.mp//images/thumb/2/20/Metrotrain.png/142px-Metrotrain.png) */
		METROTRAIN = 0x33c9e158,
		/** ![tankercar](https://wiki.rage.mp//images/thumb/8/85/TankerCar.png/133px-TankerCar.png) */
		TANKERCAR = 0x22eddc30,
		/** ![airtug](https://wiki.rage.mp//images/thumb/1/19/Airtug.png/164px-Airtug.png) */
		AIRTUG = 0x5d0aac8f,
		/** ![caddy](https://wiki.rage.mp//images/thumb/9/94/Caddy.png/164px-Caddy.png) */
		CADDY = 0x44623884,
		/** ![caddy2](https://wiki.rage.mp//images/thumb/2/25/Caddy2.png/164px-Caddy2.png) */
		CADDY2 = 0xdff0594c,
		/** ![caddy3](https://wiki.rage.mp//images/thumb/8/8c/Caddy3.png/164px-Caddy3.png) */
		CADDY3 = 0xd227bdbb,
		/** ![docktug](https://wiki.rage.mp//images/thumb/7/7c/Docktug.png/164px-Docktug.png) */
		DOCKTUG = 0xcb44b1ca,
		/** ![forklift](https://wiki.rage.mp//images/thumb/a/ab/Forklift.png/164px-Forklift.png) */
		FORKLIFT = 0x58e49664,
		/** ![mower](https://wiki.rage.mp//images/thumb/a/a5/Mower.png/164px-Mower.png) */
		MOWER = 0x6a4bd8f6,
		/** ![ripley](https://wiki.rage.mp//images/thumb/8/83/Ripley.png/164px-Ripley.png) */
		RIPLEY = 0xcd935ef9,
		/** ![sadler](https://wiki.rage.mp//images/thumb/3/37/Sadler.png/164px-Sadler.png) */
		SADLER = 0xdc434e51,
		/** ![sadler2](https://wiki.rage.mp//images/thumb/f/f7/Sadler2.png/164px-Sadler2.png) */
		SADLER2 = 0x2bc345d1,
		/** ![scrap](https://wiki.rage.mp//images/thumb/b/b8/Scrap.png/164px-Scrap.png) */
		SCRAP = 0x9a9fd3df,
		/** ![towtruck](https://wiki.rage.mp//images/thumb/5/52/Towtruck.png/164px-Towtruck.png) */
		TOWTRUCK = 0xb12314e0,
		/** ![towtruck2](https://wiki.rage.mp//images/thumb/3/34/Towtruck2.png/164px-Towtruck2.png) */
		TOWTRUCK2 = 0xe5a2d6c6,
		/** ![tractor](https://wiki.rage.mp//images/thumb/7/7a/Tractor.png/164px-Tractor.png) */
		TRACTOR = 0x61d6ba8c,
		/** ![tractor2](https://wiki.rage.mp//images/thumb/c/c8/Tractor2.png/164px-Tractor2.png) */
		TRACTOR2 = 0x843b73de,
		/** ![tractor3](https://wiki.rage.mp//images/thumb/c/cd/Tractor3.png/164px-Tractor3.png) */
		TRACTOR3 = 0x562a97bd,
		/** ![utillitruck](https://wiki.rage.mp//images/thumb/e/ec/Utillitruck.png/164px-Utillitruck.png) */
		UTILLITRUCK = 0x1ed0a534,
		/** ![utillitruck2](https://wiki.rage.mp//images/thumb/9/9e/Utillitruck2.png/164px-Utillitruck2.png) */
		UTILLITRUCK2 = 0x34e6bf6b,
		/** ![utillitruck3](https://wiki.rage.mp//images/thumb/a/aa/Utillitruck3.png/164px-Utillitruck3.png) */
		UTILLITRUCK3 = 0x7f2153df,
		/**
		 * DLC: TheCayoPericoHeist

		 * ![slamtruck](https://wiki.rage.mp//images/thumb/2/22/0xC1A8A914.png/164px-0xC1A8A914.png)
		 */
		SLAMTRUCK = 0xc1a8a914,
		/** ![bison](https://wiki.rage.mp//images/thumb/f/f6/Bison.png/133px-Bison.png) */
		BISON = 0xfefd644f,
		/** ![bison2](https://wiki.rage.mp//images/thumb/4/44/Bison2.png/133px-Bison2.png) */
		BISON2 = 0x7b8297c5,
		/** ![bison3](https://wiki.rage.mp//images/thumb/7/7f/Bison3.png/133px-Bison3.png) */
		BISON3 = 0x67b3f020,
		/** ![bobcatxl](https://wiki.rage.mp//images/thumb/d/d8/BobcatXL.png/133px-BobcatXL.png) */
		BOBCATXL = 0x3fc5d440,
		/** ![boxville](https://wiki.rage.mp//images/thumb/0/09/Boxville.png/133px-Boxville.png) */
		BOXVILLE = 0x898eccea,
		/** ![boxville2](https://wiki.rage.mp//images/thumb/f/fe/Boxville2.png/133px-Boxville2.png) */
		BOXVILLE2 = 0xf21b33be,
		/** ![boxville3](https://wiki.rage.mp//images/thumb/5/5c/Boxville3.png/133px-Boxville3.png) */
		BOXVILLE3 = 0x07405e08,
		/** ![boxville4](https://wiki.rage.mp//images/thumb/2/29/Boxville4.png/133px-Boxville4.png) */
		BOXVILLE4 = 0x1a79847a,
		/** ![boxville5](https://wiki.rage.mp//images/thumb/2/2d/Boxville5.png/133px-Boxville5.png) */
		BOXVILLE5 = 0x28ad20e1,
		/** ![burrito](https://wiki.rage.mp//images/thumb/e/e0/Burrito.png/133px-Burrito.png) */
		BURRITO = 0xafbb2ca4,
		/** ![burrito2](https://wiki.rage.mp//images/thumb/5/52/Burrito2.png/133px-Burrito2.png) */
		BURRITO2 = 0xc9e8ff76,
		/** ![burrito3](https://wiki.rage.mp//images/thumb/8/89/Burrito3.png/133px-Burrito3.png) */
		BURRITO3 = 0x98171bd3,
		/** ![burrito4](https://wiki.rage.mp//images/thumb/f/f6/Burrito4.png/133px-Burrito4.png) */
		BURRITO4 = 0x353b561d,
		/** ![burrito5](https://wiki.rage.mp//images/thumb/f/f6/Burrito5.png/133px-Burrito5.png) */
		BURRITO5 = 0x437cf2a0,
		/** ![camper](https://wiki.rage.mp//images/thumb/b/bd/Camper.png/133px-Camper.png) */
		CAMPER = 0x6fd95f68,
		/** ![gburrito](https://wiki.rage.mp//images/thumb/b/b0/GBurrito.png/133px-GBurrito.png) */
		GBURRITO = 0x97fa4f36,
		/** ![gburrito2](https://wiki.rage.mp//images/thumb/f/ff/GBurrito2.png/133px-GBurrito2.png) */
		GBURRITO2 = 0x11aa0e14,
		/** ![journey](https://wiki.rage.mp//images/thumb/0/0c/Journey.png/133px-Journey.png) */
		JOURNEY = 0xf8d48e7a,
		/** ![minivan](https://wiki.rage.mp//images/thumb/1/12/Minivan.png/133px-Minivan.png) */
		MINIVAN = 0xed7eada4,
		/** ![minivan2](https://wiki.rage.mp//images/thumb/2/21/Minivan2.png/133px-Minivan2.png) */
		MINIVAN2 = 0xbcde91f0,
		/** ![paradise](https://wiki.rage.mp//images/thumb/b/b3/Paradise.png/133px-Paradise.png) */
		PARADISE = 0x58b3979c,
		/** ![pony](https://wiki.rage.mp//images/thumb/b/b1/Pony.png/133px-Pony.png) */
		PONY = 0xf8de29a8,
		/** ![pony2](https://wiki.rage.mp//images/thumb/c/c6/Pony2.png/133px-Pony2.png) */
		PONY2 = 0x38408341,
		/** ![rumpo](https://wiki.rage.mp//images/thumb/9/9f/Rumpo.png/133px-Rumpo.png) */
		RUMPO = 0x4543b74d,
		/** ![rumpo2](https://wiki.rage.mp//images/thumb/2/20/Rumpo2.png/133px-Rumpo2.png) */
		RUMPO2 = 0x961afef7,
		/** ![rumpo3](https://wiki.rage.mp//images/thumb/7/7a/Rumpo3.png/133px-Rumpo3.png) */
		RUMPO3 = 0x57f682af,
		/** ![speedo](https://wiki.rage.mp//images/thumb/2/2b/Speedo.png/133px-Speedo.png) */
		SPEEDO = 0xcfb3870c,
		/** ![speedo2](https://wiki.rage.mp//images/thumb/5/53/Speedo2.png/133px-Speedo2.png) */
		SPEEDO2 = 0x2b6dc64a,
		/** ![speedo4](https://wiki.rage.mp//images/thumb/b/b4/Speedo4.png/164px-Speedo4.png) */
		SPEEDO4 = 0xd17099d,
		/** ![surfer](https://wiki.rage.mp//images/thumb/d/d7/Surfer.png/133px-Surfer.png) */
		SURFER = 0x29b0da97,
		/** ![surfer2](https://wiki.rage.mp//images/thumb/d/d5/Surfer2.png/133px-Surfer2.png) */
		SURFER2 = 0xb1d80e06,
		/** ![taco](https://wiki.rage.mp//images/thumb/4/4d/Taco.png/133px-Taco.png) */
		TACO = 0x744ca80d,
		/** ![youga](https://wiki.rage.mp//images/thumb/d/d5/Youga.png/133px-Youga.png) */
		YOUGA = 0x03e5f6b8,
		/** ![youga2](https://wiki.rage.mp//images/thumb/e/e6/Youga2.png/164px-Youga2.png) */
		YOUGA2 = 0x3d29cd2b,
		/**
		 * DLC: LosSantosSummerSpecial

		 * ![youga3](https://wiki.rage.mp//images/thumb/0/00/Youga3.png/159px-Youga3.png)
		 */
		YOUGA3 = 0x6b73a9be
	}
}
