declare module 'rage-shared' {
	export type Array2d = [number, number];
	export type Array3d = [number, number, number];
	export type Array4d = [number, number, number, number];
	export type HashOrString = number | string;
	export type RGB = [number, number, number];
	export type RGBA = [number, number, number, number];
	export type KeyValueCollection = { [key: string]: any };

	export interface IVector3 {
		readonly x: number;
		readonly y: number;
		readonly z: number;
	}

	export type Vector3Mp = {
		readonly x: number;
		readonly y: number;
		readonly z: number;

		new (x: number, y: number, z: number): Vector3Mp;
		new (arr: Array3d): Vector3Mp;
		new (obj: IVector3): Vector3Mp;

		/**
		 * This function is used to add a Vector3 to another Vector3 or scalar.
		 *
		 * @param value Vector3 or number: The vector or scalar to be added to the callee.
		 */
		add(otherVec: number | Vector3Mp): Vector3Mp;

		/**
		 * This function returns the angle (in radians) between two vectors.
		 *
		 * @param vector3 Vector3: The other vector to calcuate the angle to.
		 */
		angleTo(otherVec: Vector3Mp): number;

		/**
		 * This function returns a copy of a Vector3.
		 */
		clone(): Vector3Mp;

		/**
		 * This function is used to calculate the cross product of two vectors. The cross product is a vector that is perpendicular to both input vectors.
		 *
		 * @param otherVec Vector3: The other vector.
		 */
		cross(otherVec: Vector3Mp): Vector3Mp;

		/**
		 * This function is used to divide a Vector3 by another Vector3 or scalar.
		 *
		 * @param otherVec Vector3: The vector or scalar to divide the callee by.
		 */
		divide(otherVec: number | Vector3Mp): Vector3Mp;

		/**
		 * This function is used to calculate the dot product of two vectors.
		 *
		 * @param otherVec Vector3: The other vector.
		 */
		dot(otherVec: Vector3Mp): number;

		/**
		 * This function is used to test where two Vector3s equal each other.
		 *
		 * @param vector3 Vector3: The vector to compare to the callee.
		 */
		equals(otherVec: Vector3Mp): boolean;

		/**
		 * This function returns the magnitude of a Vector3.
		 */
		length(): number;

		/**
		 * This function returns the maximum partial of a Vector3.
		 */
		max(): number;

		/**
		 * This function returns the minimum partial of a Vector3.
		 */
		min(): number;

		/**
		 * This function is used to multiply a Vector3 by another Vector3 or scalar.
		 *
		 * @param otherVec Vector3 or number: The vector or scalar to be added to the callee.
		 */
		multiply(otherVec: number | Vector3Mp): Vector3Mp;

		/**
		 * This function returns the opposite of a Vector3 by flipping the sign of each partial.
		 */
		negative(): Vector3Mp;

		/**
		 * This function is used to subtract a Vector3 or scalar from another Vector3.
		 *
		 * @param otherVec Vector3: The vector or scalar to be subtracted from the callee.
		 */
		subtract(value: number | Vector3Mp): Vector3Mp;

		// TODO: wiki
		toAngles(): Array2d;

		/**
		 * This function returns an array of the partials of a Vector3.
		 */
		toArray(): Array3d;

		/**
		 * This function returns a normalized copy of a Vector3- one that has the same direction but with a magnitude of 1.
		 */
		unit(): Vector3Mp;
	};

	export const enum EntityType {
		BLIP = 'blip',
		CHECKPOINT = 'checkpoint',
		COLSHAPE = 'colshape',
		DUMMY = 'dummy',
		MARKER = 'marker',
		OBJECT = 'object',
		PICKUP = 'pickup',
		PLAYER = 'player',
		VEHICLE = 'vehicle',
		PED = 'ped',
		TEXT_LABEL = 'textlabel'
	}

	export const enum WeaponHash {
		/** ![AntiqueCavalryDagger](https://wiki.rage.mp//images/thumb/f/f5/Antique-cavalry-dagger-icon.png/164px-Antique-cavalry-dagger-icon.png) */
		DAGGER = 0x92a27487,
		/** ![BaseballBat](https://wiki.rage.mp//images/thumb/8/8b/Baseball-bat-icon.png/164px-Baseball-bat-icon.png) */
		BAT = 0x958a4a8f,
		/** ![BrokenBottle](https://wiki.rage.mp//images/5/5b/Broken-bottle-icon.png) */
		BOTTLE = 0xf9e6aa4b,
		/** ![Crowbar](https://wiki.rage.mp//images/thumb/8/8a/Crowbar-icon.png/164px-Crowbar-icon.png) */
		CROWBAR = 0x84bd7bfd,
		/** ![Fist](https://wiki.rage.mp//images/b/b7/Fist-icon.png) */
		UNARMED = 0xa2719263,
		/** ![Flashlight](https://wiki.rage.mp//images/thumb/8/85/Flashlight-icon.png/164px-Flashlight-icon.png) */
		FLASHLIGHT = 0x8bb05fd7,
		/** ![GolfClub](https://wiki.rage.mp//images/thumb/c/cb/Golf-club-icon.png/164px-Golf-club-icon.png) */
		GOLFCLUB = 0x440e4788,
		/** ![Hammer](https://wiki.rage.mp//images/thumb/e/ec/Hammer-icon.png/164px-Hammer-icon.png) */
		HAMMER = 0x4e875f73,
		/** ![Hatchet](https://wiki.rage.mp//images/thumb/e/eb/Hatchet-icon.png/164px-Hatchet-icon.png) */
		HATCHET = 0xf9dcbf2d,
		/** ![BrassKnuckles](https://wiki.rage.mp//images/b/b7/Knuckles-icon.png) */
		KNUCKLE = 0xd8df3c3c,
		/** ![Knife](https://wiki.rage.mp//images/thumb/8/8c/Knife-icon.png/164px-Knife-icon.png) */
		KNIFE = 0x99b507ea,
		/** ![Machete](https://wiki.rage.mp//images/thumb/d/dc/Machete-icon.png/164px-Machete-icon.png) */
		MACHETE = 0xdd5df8d9,
		/** ![Switchblade](https://wiki.rage.mp//images/thumb/c/ce/Switch-blade-icon.png/164px-Switch-blade-icon.png) */
		SWITCHBLADE = 0xdfe37640,
		/** ![Nightstick](https://wiki.rage.mp//images/thumb/e/e6/Nightstick-icon.png/164px-Nightstick-icon.png) */
		NIGHTSTICK = 0x678b81b1,
		/** ![PipeWrench](https://wiki.rage.mp//images/thumb/2/22/Pipe-wrench-icon.png/164px-Pipe-wrench-icon.png) */
		WRENCH = 0x19044ee0,
		/** ![BattleAxe](https://wiki.rage.mp//images/thumb/3/3b/Battle-axe-icon.png/164px-Battle-axe-icon.png) */
		BATTLEAXE = 0xcd274149,
		/** ![PoolCue](https://wiki.rage.mp//images/thumb/3/3a/Pool-cue-icon.png/164px-Pool-cue-icon.png) */
		POOLCUE = 0x94117305,
		/** ![StoneHatchet](https://wiki.rage.mp//images/thumb/2/21/Stone-hatchet-icon.png/164px-Stone-hatchet-icon.png) */
		STONE_HATCHET = 0x3813fc08,
		/** ![Pistol](https://wiki.rage.mp//images/9/95/Pistol-icon.png) */
		PISTOL = 0x1b06d571,
		/** ![PistolMkII](https://wiki.rage.mp//images/4/43/Pistol-mk2-icon.png) */
		PISTOL_MK2 = 0xbfe256d4,
		/** ![CombatPistol](https://wiki.rage.mp//images/1/16/Combat-pistol-icon.png) */
		COMBATPISTOL = 0x5ef9fec4,
		/** ![APPistol](https://wiki.rage.mp//images/4/4d/Appistol-icon.png) */
		APPISTOL = 0x22d8fe39,
		/** ![StunGun](https://wiki.rage.mp//images/3/3c/Stungun-icon.png) */
		STUNGUN = 0x3656c8c1,
		/** ![Pistol.50](https://wiki.rage.mp//images/c/c5/Pistol.50-icon.png) */
		PISTOL50 = 0x99aeeb3b,
		/** ![SNSPistol](https://wiki.rage.mp//images/9/96/Sns-pistol-icon.png) */
		SNSPISTOL = 0xbfd21232,
		/** ![SNSPistolMkII](https://wiki.rage.mp//images/1/16/Sns-pistol-mk2-icon.png) */
		SNSPISTOL_MK2 = 0x88374054,
		/** ![HeavyPistol](https://wiki.rage.mp//images/7/78/Heavy-pistol-icon.png) */
		HEAVYPISTOL = 0xd205520e,
		/** ![VintagePistol](https://wiki.rage.mp//images/9/97/Vintage-pistol-icon.png) */
		VINTAGEPISTOL = 0x83839c4,
		/** ![FlareGun](https://wiki.rage.mp//images/0/0d/Flaregun-icon.png) */
		FLAREGUN = 0x47757124,
		/** ![MarksmanPistol](https://wiki.rage.mp//images/thumb/4/47/Marksman-pistol-icon.png/164px-Marksman-pistol-icon.png) */
		MARKSMANPISTOL = 0xdc4db296,
		/** ![HeavyRevolver](https://wiki.rage.mp//images/thumb/9/93/Heavy-revolver-icon.png/164px-Heavy-revolver-icon.png) */
		REVOLVER = 0xc1b3c3d1,
		/** ![HeavyRevolverMkII](https://wiki.rage.mp//images/thumb/c/c0/Heavy-revolver-mk2-icon.png/164px-Heavy-revolver-mk2-icon.png) */
		REVOLVER_MK2 = 0xcb96392f,
		/** ![DoubleActionRevolver](https://wiki.rage.mp//images/thumb/4/45/Double-action-revolver-icon.png/164px-Double-action-revolver-icon.png) */
		DOUBLEACTION = 0x97ea20b8,
		/** ![Up-n-Atomizer](https://wiki.rage.mp//images/thumb/8/89/Up-n-atomizer-icon.png/164px-Up-n-atomizer-icon.png) */
		RAYPISTOL = 0xaf3696a1,
		/** ![CeramicPistol](https://wiki.rage.mp//images/a/ad/Ceramic-pistol-icon.png) */
		CERAMICPISTOL = 0x2b5ef5ec,
		/** ![NavyRevolver](https://wiki.rage.mp//images/thumb/1/15/Navy-revolver-icon.png/164px-Navy-revolver-icon.png) */
		NAVYREVOLVER = 0x917f6c8c,
		/** ![PericoPistol](https://wiki.rage.mp//images/thumb/3/31/Perico-pistol-icon.png/164px-Perico-pistol-icon.png) */
		GADGETPISTOL = 0x57a4368c,
		/** ![MicroSMG](https://wiki.rage.mp//images/thumb/3/3a/Micro-smg-icon.png/164px-Micro-smg-icon.png) */
		MICROSMG = 0x13532244,
		/** ![SMG](https://wiki.rage.mp//images/thumb/3/30/Smg-icon.png/164px-Smg-icon.png) */
		SMG = 0x2be6766b,
		/** ![SMGMkII](https://wiki.rage.mp//images/thumb/d/d1/Smg-mk2-icon.png/164px-Smg-mk2-icon.png) */
		SMG_MK2 = 0x78a97cd0,
		/** ![AssaultSMG](https://wiki.rage.mp//images/thumb/3/30/Assault-smg-icon.png/164px-Assault-smg-icon.png) */
		ASSAULTSMG = 0xefe7e2df,
		/** ![CombatPDW](https://wiki.rage.mp//images/thumb/4/45/Combat-pdw-icon.png/164px-Combat-pdw-icon.png) */
		COMBATPDW = 0x0a3d4d34,
		/** ![MachinePistol](https://wiki.rage.mp//images/thumb/2/24/Machine-pistol-icon.png/164px-Machine-pistol-icon.png) */
		MACHINEPISTOL = 0xdb1aa450,
		/** ![MiniSMG](https://wiki.rage.mp//images/thumb/d/d3/Mini-smg-icon.png/164px-Mini-smg-icon.png) */
		MINISMG = 0xbd248b55,
		/** ![UnholyHellbringer](https://wiki.rage.mp//images/thumb/8/8f/Unholy-hellbringer-icon.png/164px-Unholy-hellbringer-icon.png) */
		RAYCARBINE = 0x476bf155,
		/** ![PumpShotgun](https://wiki.rage.mp//images/thumb/0/09/Pump-shotgun-icon.png/164px-Pump-shotgun-icon.png) */
		PUMPSHOTGUN = 0x1d073a89,
		/** ![PumpShotgunMkII](https://wiki.rage.mp//images/thumb/6/69/Pump-shotgun-mk2-icon.png/164px-Pump-shotgun-mk2-icon.png) */
		PUMPSHOTGUN_MK2 = 0x555af99a,
		/** ![Sawed-OffShotgun](https://wiki.rage.mp//images/thumb/b/ba/Sawed-off-shotgun-icon.png/164px-Sawed-off-shotgun-icon.png) */
		SAWNOFFSHOTGUN = 0x7846a318,
		/** ![AssaultShotgun](https://wiki.rage.mp//images/thumb/e/e3/Assault-shotgun-icon.png/164px-Assault-shotgun-icon.png) */
		ASSAULTSHOTGUN = 0xe284c527,
		/** ![BullpupShotgun](https://wiki.rage.mp//images/thumb/7/7f/Bullpup-shotgun-icon.png/164px-Bullpup-shotgun-icon.png) */
		BULLPUPSHOTGUN = 0x9d61e50f,
		/** ![Musket](https://wiki.rage.mp//images/thumb/8/8c/Musket-icon.png/164px-Musket-icon.png) */
		MUSKET = 0xa89cb99e,
		/** ![HeavyShotgun](https://wiki.rage.mp//images/thumb/5/5d/Heavy-shotgun-icon.png/164px-Heavy-shotgun-icon.png) */
		HEAVYSHOTGUN = 0x3aabbbaa,
		/** ![DoubleBarrelShotgun](https://wiki.rage.mp//images/thumb/8/8d/Double-barrel-shotgun-icon.png/164px-Double-barrel-shotgun-icon.png) */
		DBSHOTGUN = 0xef951fbb,
		/** ![SweeperShotgun](https://wiki.rage.mp//images/thumb/a/a8/Sweeper-shotgun-icon.png/164px-Sweeper-shotgun-icon.png) */
		AUTOSHOTGUN = 0x12e82d3d,
		/** ![CombatShotgun](https://wiki.rage.mp//images/thumb/5/50/Combat-shotgun-icon.png/164px-Combat-shotgun-icon.png) */
		COMBATSHOTGUN = 0x5a96ba4,
		/** ![AssaultRifle](https://wiki.rage.mp//images/thumb/6/61/Assault-rifle-icon.png/164px-Assault-rifle-icon.png) */
		ASSAULTRIFLE = 0xbfefff6d,
		/** ![AssaultRifleMkII](https://wiki.rage.mp//images/thumb/6/63/Assault-rifle-mk2-icon.png/164px-Assault-rifle-mk2-icon.png) */
		ASSAULTRIFLE_MK2 = 0x394f415c,
		/** ![CarbineRifle](https://wiki.rage.mp//images/thumb/7/73/Carbine-rifle-icon.png/164px-Carbine-rifle-icon.png) */
		CARBINERIFLE = 0x83bf0278,
		/** ![CarbineRifleMkII](https://wiki.rage.mp//images/thumb/3/3f/Carbine-rifle-mk2-icon.png/164px-Carbine-rifle-mk2-icon.png) */
		CARBINERIFLE_MK2 = 0xfad1f1c9,
		/** ![AdvancedRifle](https://wiki.rage.mp//images/thumb/a/ae/Advanced-rifle-icon.png/164px-Advanced-rifle-icon.png) */
		ADVANCEDRIFLE = 0xaf113f99,
		/** ![SpecialCarbine](https://wiki.rage.mp//images/thumb/b/b7/Special-carbine-icon.png/164px-Special-carbine-icon.png) */
		SPECIALCARBINE = 0xc0a3098d,
		/** ![SpecialCarbineMkII](https://wiki.rage.mp//images/thumb/3/34/Special-carbine-mk2-icon.png/164px-Special-carbine-mk2-icon.png) */
		SPECIALCARBINE_MK2 = 0x969c3d67,
		/** ![BullpupRifle](https://wiki.rage.mp//images/thumb/0/09/Bullpup-rifle-icon.png/164px-Bullpup-rifle-icon.png) */
		BULLPUPRIFLE = 0x7f229f94,
		/** ![BullpupRifleMkII](https://wiki.rage.mp//images/thumb/e/e1/Bullpup-rifle-mk2-icon.png/164px-Bullpup-rifle-mk2-icon.png) */
		BULLPUPRIFLE_MK2 = 0x84d6fafd,
		/** ![CompactRifle](https://wiki.rage.mp//images/thumb/c/c9/Compact-rifle-icon.png/164px-Compact-rifle-icon.png) */
		COMPACTRIFLE = 0x624fe830,
		/** ![MilitaryRifle](https://wiki.rage.mp//images/thumb/0/01/Military-rifle-icon.png/164px-Military-rifle-icon.png) */
		MILITARYRIFLE = 0x9d1f17e6,
		/** ![MG](https://wiki.rage.mp//images/thumb/9/98/Mg-icon.png/164px-Mg-icon.png) */
		MG = 0x9d07f764,
		/** ![CombatMG](https://wiki.rage.mp//images/thumb/9/94/Combat-mg-icon.png/164px-Combat-mg-icon.png) */
		COMBATMG = 0x7fd62962,
		/** ![CombatMGMkII](https://wiki.rage.mp//images/thumb/3/31/Combat-mg-mk2-icon.png/164px-Combat-mg-mk2-icon.png) */
		COMBATMG_MK2 = 0xdbbd7280,
		/** ![GusenbergSweeper](https://wiki.rage.mp//images/thumb/8/8f/Gusenberg-sweeper-icon.png/164px-Gusenberg-sweeper-icon.png) */
		GUSENBERG = 0x61012683,
		/** ![SniperRifle](https://wiki.rage.mp//images/thumb/e/ec/Sniper-rifle-icon.png/164px-Sniper-rifle-icon.png) */
		SNIPERRIFLE = 0x05fc3c11,
		/** ![HeavySniper](https://wiki.rage.mp//images/thumb/5/54/Heavy-sniper-icon.png/164px-Heavy-sniper-icon.png) */
		HEAVYSNIPER = 0x0c472fe2,
		/** ![HeavySniperMkII](https://wiki.rage.mp//images/thumb/c/cf/Heavy-sniper-mk2-icon.png/164px-Heavy-sniper-mk2-icon.png) */
		HEAVYSNIPER_MK2 = 0xa914799,
		/** ![MarksmanRifle](https://wiki.rage.mp//images/thumb/2/22/Marksman-rifle-icon.png/164px-Marksman-rifle-icon.png) */
		MARKSMANRIFLE = 0xc734385a,
		/** ![MarksmanRifleMkII](https://wiki.rage.mp//images/thumb/1/17/Marksman-rifle-mk2-icon.png/164px-Marksman-rifle-mk2-icon.png) */
		MARKSMANRIFLE_MK2 = 0x6a6c02e0,
		/** ![RPG](https://wiki.rage.mp//images/thumb/7/7d/Rocket-launcher-icon.png/164px-Rocket-launcher-icon.png) */
		RPG = 0xb1ca77b1,
		/** ![GrenadeLauncher](https://wiki.rage.mp//images/thumb/a/ae/Grenade-launcher-icon.png/164px-Grenade-launcher-icon.png) */
		GRENADELAUNCHER = 0xa284510b,
		/** ![GrenadeLauncherSmoke](https://wiki.rage.mp//images/thumb/a/ae/Grenade-launcher-icon.png/164px-Grenade-launcher-icon.png) */
		GRENADELAUNCHER_SMOKE = 0x4dd2dc56,
		/** ![Minigun](https://wiki.rage.mp//images/thumb/8/8b/Minigun-icon.png/164px-Minigun-icon.png) */
		MINIGUN = 0x42bf8a85,
		/** ![FireworkLauncher](https://wiki.rage.mp//images/thumb/5/54/Firework-launcher-icon.png/164px-Firework-launcher-icon.png) */
		FIREWORK = 0x7f7497e5,
		/** ![Railgun](https://wiki.rage.mp//images/thumb/a/ad/Railgun-icon.png/164px-Railgun-icon.png) */
		RAILGUN = 0x6d544c99,
		/** ![HomingLauncher](https://wiki.rage.mp//images/thumb/1/14/Homing-launcher-icon.png/164px-Homing-launcher-icon.png) */
		HOMINGLAUNCHER = 0x63ab0442,
		/** ![CompactGrenadeLauncher](https://wiki.rage.mp//images/thumb/0/0d/Grenade-compact-launcher-icon.png/164px-Grenade-compact-launcher-icon.png) */
		COMPACTLAUNCHER = 0x0781fe4a,
		/** ![Widowmaker](https://wiki.rage.mp//images/thumb/e/ec/Widowmaker-icon.png/164px-Widowmaker-icon.png) */
		RAYMINIGUN = 0xb62d1f67,
		/** ![Grenade](https://wiki.rage.mp//images/5/54/Grenade-icon.png) */
		GRENADE = 0x93e220bd,
		/** ![BZGas](https://wiki.rage.mp//images/thumb/d/d3/Bz-gas-icon.png/56px-Bz-gas-icon.png) */
		BZGAS = 0xa0973d5e,
		/** ![MolotovCocktail](https://wiki.rage.mp//images/thumb/4/46/Molotov-icon.png/120px-Molotov-icon.png) */
		MOLOTOV = 0x24b17070,
		/** ![StickyBomb](https://wiki.rage.mp//images/3/3a/Sticky-bomb-icon.png) */
		STICKYBOMB = 0x2c3731d9,
		/** ![ProximityMines](https://wiki.rage.mp//images/a/a8/Proximity-mines-icon.png) */
		PROXMINE = 0xab564b93,
		/** ![Snowballs](https://wiki.rage.mp//images/0/04/Snowball-icon.png) */
		SNOWBALL = 0x787f0bb,
		/** ![PipeBombs](https://wiki.rage.mp//images/thumb/d/dc/Pipe-bomb-icon.png/164px-Pipe-bomb-icon.png) */
		PIPEBOMB = 0xba45e8b8,
		/** ![Baseball](https://wiki.rage.mp//images/4/4b/Ball-icon.png) */
		BALL = 0x23c9f95c,
		/** ![TearGas](https://wiki.rage.mp//images/thumb/8/8a/Tear-gas-icon.png/56px-Tear-gas-icon.png) */
		SMOKEGRENADE = 0xfdbc8a50,
		/** ![Flare](https://wiki.rage.mp//images/0/09/Flare-icon.png) */
		FLARE = 0x497facc3,
		/** ![JerryCan](https://wiki.rage.mp//images/thumb/2/2b/Petrolcan-icon.png/94px-Petrolcan-icon.png) */
		PETROLCAN = 0x34a67b97,
		/** ![Parachute](https://wiki.rage.mp//images/thumb/2/24/Parachute-icon.png/93px-Parachute-icon.png) */
		GADGET_PARACHUTE = 0xfbab5776,
		/** ![FireExtinguisher](https://wiki.rage.mp//images/thumb/1/13/Fire2.png/51px-Fire2.png) */
		FIREEXTINGUISHER = 0x060ec506,
		/** ![HazardousJerryCan](https://wiki.rage.mp//images/thumb/2/2b/Petrolcan-icon.png/94px-Petrolcan-icon.png) */
		HAZARDCAN = 0xba536372
	}
}
