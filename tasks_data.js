// 任务数据表 - 使用表格数据导入任务信息（包含网格位置）
const TASKS_DATA = {
  "prapor": [
    {
      "id": 0,
      "name": "Prapor",
      "location": "外围区",
      "level": 999,
      "objective": [
        "获取苏联/俄罗斯制的武器",
        "包括装备、弹匣和弹药、手榴弹、武器配件、身体护甲"
      ],
      "rewards": [
        "身体护甲",
        "武器和配件",
        "手榴弹",
        "弹药",
        "医药品",
        "酒精饮品",
        "钥匙"
      ],
      "image": "img/tasks/Prapor.jpg",
      "detailImage": "img/tasks/Prapor.jpg",
      "next": [
        1,
        31,
        49
      ],
      "gridPosition": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": 1,
      "name": "打靶训练",
      "location": "中心区",
      "level": 1,
      "objective": [
        "在中心区找到Utyos机枪",
        "在中心区找到AGS榴弹发射器",
        "在中心区消灭任意敌对目标 5 个"
      ],
      "rewards": [
        "经验值:1600",
        "卢布:13000",
        "Prapor 声望+0.01",
        "1 x 莫辛-纳甘 7.62x54R 栓动式步枪（步兵型）",
        "3 x 7.62x54mm R FMJ弹药包（20发装）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/657315df034d76585f032e01.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/657315df034d76585f032e01.webp",
      "next": [
        2
      ],
      "gridPosition": {
        "x": 1,
        "y": 0
      }
    },
    {
      "id": 2,
      "name": "首秀",
      "location": "外围区",
      "level": 1,
      "objective": [
        "在塔科夫任意区域内击杀Scav 5 名",
        "取得并提交MP-133霰弹枪 2 把"
      ],
      "rewards": [
        "经验值:1700",
        "卢布:15000",
        "Prapor 声望+0.02",
        "1 x PP-91 “雪松” 9x18PM冲锋枪",
        "2 x 9x18mm PM BZhT 弹药包（50发装）",
        "解锁 Prapor LL1 购买 AKS-74UB 5.45x39 短突击步枪"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/5936d90786f7742b1420ba5b.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/5936d90786f7742b1420ba5b.webp",
      "next": [
        3,
        6
      ],
      "gridPosition": {
        "x": 2,
        "y": 0
      }
    },
    {
      "id": 3,
      "name": "奢靡人生",
      "location": "中心区",
      "level": 1,
      "objective": [
        "在中心区找到酒商店",
        "在商店中找到并获取酒瓶",
        "上交酒瓶"
      ],
      "rewards": [
        "经验值:17500",
        "卢布:14000",
        "Prapor 声望+0.01",
        "1 x Vepr KM / VPO-136 7.62x39 卡宾枪",
        "5 x 7.62x39mm FMJ弹药包（20发装）",
        "1 x Izhmash 7.62x39 30发AK兼容弹匣（1955后装配）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/657315e1dccd301f1301416a.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/657315e1dccd301f1301416a.webp",
      "next": [
        4
      ],
      "gridPosition": {
        "x": 3,
        "y": 0
      }
    },
    {
      "id": 4,
      "name": "背景调查",
      "location": "外围区",
      "level": 2,
      "objective": [
        "在海关取得青铜怀表",
        "上交青铜怀表"
      ],
      "rewards": [
        "经验值:1800",
        "卢布:15000",
        "Prapor 声望+0.03",
        "1 x 西蒙诺夫 SKS 7.62x39 卡宾枪",
        "3 x 7.62x39mm FMJ弹药包（20发装）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/5936da9e86f7742d65037edf.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/5936da9e86f7742d65037edf.webp",
      "next": [
        5,
        7
      ],
      "gridPosition": {
        "x": 4,
        "y": 0
      }
    },
    {
      "id": 5,
      "name": "硝烟野餐",
      "location": "森林区",
      "level": 3,
      "objective": [
        "在森林击杀Scav 15 名"
      ],
      "rewards": [
        "经验值:2000",
        "卢布:20000",
        "Prapor 声望+0.03",
        "1 x AKS-74UN 5.45x39 短突击步枪",
        "3 x 6L20 5.45x39 30发AK-74兼容弹匣",
        "3 x 30发5.45x39 PP gs弹药包",
        "解锁 Prapor LL1 购买 PL-15 9x19手枪",
        "解锁 Prapor LL2 购买 6B5-16 ZH-86“Uley”防弹胸挂"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/59674cd986f7744ab26e32f2.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/59674cd986f7744ab26e32f2.webp",
      "next": [],
      "gridPosition": {
        "x": 4,
        "y": -1
      }
    },
    {
      "id": 6,
      "name": "搜索任务",
      "location": "森林区",
      "level": 5,
      "objective": [
        "在森林找到Prapor的失踪车队",
        "找到USEC临时营地",
        "以幸存状态撤离该区域"
      ],
      "rewards": [
        "经验值:2800",
        "卢布:22000",
        "Prapor 声望+0.02",
        "1 x EYE MK.2 手持指南针专业版",
        "1 x 森林地图",
        "解锁 Prapor LL1 购买 NPP K1ASS Kora-Kulon防弹衣（数码迷彩）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/5fd9fad9c1ce6b1a3b486d00.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/5fd9fad9c1ce6b1a3b486d00.webp",
      "next": [],
      "gridPosition": {
        "x": 2,
        "y": -1
      }
    },
    {
      "id": 7,
      "name": "往事速递",
      "location": "工厂区",
      "level": 5,
      "objective": [
        "在位于海关关口的Tarcone公司主管办公室内找到一个保险盒",
        "将容器藏匿在工厂3号门旁边的二层休息室内"
      ],
      "rewards": [
        "经验值:4000",
        "卢布:20000",
        "Prapor 声望+0.03",
        "1 x Saiga-12K 12铅径/76 半自动霞弹枪",
        "4 x Sb.5 12/76 5发SOK-12兼容弹匣",
        "2 x 12/70 8.5 毫米 Magnum 鹿弹 弹药包（25发装）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/59674eb386f774539f14813a.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/59674eb386f774539f14813a.webp",
      "next": [
        8
      ],
      "gridPosition": {
        "x": 5,
        "y": 0
      }
    },
    {
      "id": 8,
      "name": "石油存储",
      "location": "外围区",
      "level": 5,
      "objective": [
        "在海关使用MS2000指示器标记第一辆油罐车",
        "在海关使用MS2000指示器标记第二辆油罐车",
        "在海关使用MS2000指示器标记第三辆油罐车",
        "在海关使用MS2000指示器标记第四辆油罐车"
      ],
      "rewards": [
        "经验值:2800",
        "卢布:30000",
        "Prapor 声望+0.03",
        "2 x 野营燃料桶",
        "解锁 Prapor LL1 购买 PP-9 “楔子” 9x18PMM 微型冲锋枪"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/59c124d686f774189b3c843f.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/59c124d686f774189b3c843f.webp",
      "next": [
        9,
        10,
        12
      ],
      "gridPosition": {
        "x": 6,
        "y": 0
      }
    },
    {
      "id": 9,
      "name": "引路先驱",
      "location": "外围区",
      "level": 5,
      "objective": [
        "在海关以幸存状态通过“铁路通道”撤离点撤离"
      ],
      "rewards": [
        "经验值:8200",
        "卢布:44000",
        "Prapor 声望+0.01",
        "3 x RGD-5手榴弹"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/675c3507a06634b5110e3c18.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/675c3507a06634b5110e3c18.webp",
      "next": [],
      "gridPosition": {
        "x": 6,
        "y": 1
      }
    },
    {
      "id": 10,
      "name": "罪证",
      "location": "外围区",
      "level": 6,
      "objective": [
        "在海关工棚中取得0031号机密文件夹",
        "上交机密文件夹0031",
        "以幸存状态撤离海关"
      ],
      "rewards": [
        "经验值:4100",
        "卢布:35000",
        "Prapor 声望+0.03",
        "1 x PP-91-01 Kedr-B 9x18PM冲锋枪",
        "3 x PP-91 9x18PM 30发标准弹匣",
        "3 x 9x18mm PM PS PPO 弹药包（50发装）",
        "解锁 Prapor LL2 购买 Zenit-Belomo PSO 1M2-1 4x 24瞄准镜",
        "解锁 Prapor LL1 购买 SSSh-94 SFERA-S 头盔"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/5967530a86f77462ba22226b.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/5967530a86f77462ba22226b.webp",
      "next": [
        11
      ],
      "gridPosition": {
        "x": 7,
        "y": 0
      }
    },
    {
      "id": 11,
      "name": "蛋卷冰淇淋",
      "location": "外围区",
      "level": 9,
      "objective": [
        "上交在战局中找到的：6L31 5.45x39 60发AK-74兼容弹匣 3 个"
      ],
      "rewards": [
        "经验值:5200",
        "卢布:17000",
        "Prapor 声望+0.02",
        "1 x RPK-16 5.45x39 轻机枪 Drum",
        "2 x 5.45x39mm PP弹药包（120发装）",
        "解锁 Prapor LL2 交换 6L31 5.45x39 60发AK-74兼容弹匣"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/59675d6c86f7740a842fc482.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/59675d6c86f7740a842fc482.webp",
      "next": [
        13,
        18
      ],
      "gridPosition": {
        "x": 8,
        "y": 0
      }
    },
    {
      "id": 12,
      "name": "地堡 - 1",
      "location": "外围区",
      "level": 10,
      "objective": [
        "找到地堡",
        "找到地堡控制室",
        "以幸存状态撤离该区域"
      ],
      "rewards": [
        "经验值:5700",
        "卢布:20000",
        "Prapor 声望+0.03",
        "1 x SR-2M 石楠 9x21 毫米冲锋枪",
        "3 x SR-2M 9x21 20发弹匣",
        "3 x 9x21mm SP13 弹药包（30发装）",
        "解锁 Prapor LL2 购买 9x21毫米 SP10"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/5ede55112c95834b583f052a.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/5ede55112c95834b583f052a.webp",
      "next": [
        19
      ],
      "gridPosition": {
        "x": 6,
        "y": -2
      }
    },
    {
      "id": 13,
      "name": "邮递员派特 - 1",
      "location": "工厂区",
      "level": 10,
      "objective": [
        "在工厂的信使尸体上取得一封信"
      ],
      "rewards": [
        "经验值:5900",
        "卢布:40000",
        "Prapor 声望+0.02",
        "1 x Ana tactical Beta 2战斗背包",
        "1 x 6B23-1护甲（数码丛林迷彩）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/59675ea386f77414b32bded2.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/59675ea386f77414b32bded2.webp",
      "next": [
        14,
        20
      ],
      "gridPosition": {
        "x": 8,
        "y": 1
      }
    },
    {
      "id": 14,
      "name": "占有者",
      "location": "工厂区",
      "level": 10,
      "objective": [
        "在工厂找到直升机飞行日志"
      ],
      "rewards": [
        "经验值:7300",
        "卢布:47000",
        "Prapor 声望+0.02",
        "1 x 金属燃料桶"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/669fa399033a3ce9870338a8.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/669fa399033a3ce9870338a8.webp",
      "next": [],
      "gridPosition": {
        "x": 7,
        "y": 1
      }
    },
    {
      "id": 15,
      "name": "Polikhim流浪汉",
      "location": "外围区",
      "level": 10,
      "objective": [
        "在海关击杀Scav 25 名"
      ],
      "rewards": [
        "经验值:5900",
        "卢布:50000",
        "Prapor 声望+0.02",
        "3 x F-1手榴弹",
        "3 x RDG-2B烟雾弹",
        "1 x Zarya震撼手榴弹"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/5979f8bb86f7743ec214c7a6.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/5979f8bb86f7743ec214c7a6.webp",
      "next": [],
      "gridPosition": {
        "x": 6,
        "y": 4
      }
    },
    {
      "id": 16,
      "name": "无意冒犯【非3*4】",
      "location": "外围区",
      "level": 11,
      "objective": [
        "上交M67手榴弹 10 个"
      ],
      "rewards": [
        "Prapor 声望+0.25"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/59ca1a6286f774509a270942.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/59ca1a6286f774509a270942.webp",
      "next": [],
      "gridPosition": {
        "x": 7,
        "y": 4
      }
    },
    {
      "id": 17,
      "name": "大客户【多选任务】",
      "location": "外围区",
      "level": 11,
      "objective": [
        "找到装有化学品的载具",
        "使用MS2000指示器标记化学品转运车"
      ],
      "rewards": [
        "经验值:8100",
        "卢布:200000",
        "Prapor 声望+0.03",
        "1 x 6B2 防弹衣（丛林迷彩）",
        "2 x 弹药箱"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/597a171586f77405ba6887d3.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/597a171586f77405ba6887d3.webp",
      "next": [],
      "gridPosition": {
        "x": 8,
        "y": 4
      }
    },
    {
      "id": 18,
      "name": "探囊取物",
      "location": "外围区",
      "level": 15,
      "objective": [
        "在海关宿舍203房间取得高价值物品",
        "上交高价值物品"
      ],
      "rewards": [
        "经验值:5900",
        "卢布:75000",
        "Prapor 声望+0.02",
        "1 x 盖革-穆勒计数器",
        "解锁 Prapor LL3 购买AKS-74U PBS-4 5.45x39消音器",
        "解锁 Skier LL2 购买Hexagon 12K声音抑制器"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/5967725e86f774601a446662.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/5967725e86f774601a446662.webp",
      "next": [
        21,
        39,
        62
      ],
      "gridPosition": {
        "x": 9,
        "y": 0
      }
    },
    {
      "id": 19,
      "name": "地堡 - 2",
      "location": "中心区",
      "level": 15,
      "objective": [
        "找到通往医院的密闭门（白主教）",
        "找到通往学院大楼的两扇密闭门中的一个（黑主教）",
        "找到通往1号军营的两扇密闭门中的一个（黑兵）",
        "找到通往2号军营的两扇密闭门中的一个（白兵）",
        "找到通往空中管制中心大楼的密闭门（白王）",
        "以幸存状态撤离该区域"
      ],
      "rewards": [
        "经验值:9200",
        "卢布:25000",
        "Prapor 声望+0.03",
        "1 x AKS-74UB 5.45x39 短突击步枪",
        "1 x 5.45x39mm BS弹药包（120发装）",
        "1 x CAA RS47 AK兼容系统护木",
        "1 x CAA AKTS AK74 AK兼容缓冲管"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/5ede567cfa6dc072ce15d6e3.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/5ede567cfa6dc072ce15d6e3.webp",
      "next": [
        22
      ],
      "gridPosition": {
        "x": 7,
        "y": -2
      }
    },
    {
      "id": 20,
      "name": "一信之缘【非3*4】",
      "location": "外围区",
      "level": 15,
      "objective": [
        "在塔科夫街区取得挂号信"
      ],
      "rewards": [
        "经验值:4800",
        "卢布:28000",
        "Prapor 声望+0.02",
        "1 x 6B47 Ratnik-BSh 头盔（橄榄绿）",
        "1 x 5.45x39mm BP弹药包（30发装）",
        "解锁 Prapor LL2 购买 9x18毫米PM SP7 gzh"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/6391359b9444fb141f4e6ee6.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/6391359b9444fb141f4e6ee6.webp",
      "next": [
        23
      ],
      "gridPosition": {
        "x": 8,
        "y": 2
      }
    },
    {
      "id": 21,
      "name": "惩罚者 - 1",
      "location": "外围区",
      "level": 17,
      "objective": [
        "在海岸线使用AKM系列武器击杀Scav 15 名"
      ],
      "rewards": [
        "经验值:10200",
        "卢布:40000",
        "Prapor 声望+0.02",
        "1 x 6B43 Zabralo-Sh 6A 防弹衣",
        "解锁 Prapor LL3 购买 SV-98 7.62x54 狙击步枪",
        "解锁 Prapor LL3 购买 7.62x39毫米 PS"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/59c50a9e86f7745fef66f4ff.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/59c50a9e86f7745fef66f4ff.webp",
      "next": [
        24
      ],
      "gridPosition": {
        "x": 10,
        "y": 0
      }
    },
    {
      "id": 22,
      "name": "叛无所依",
      "location": "外围区",
      "level": 17,
      "objective": [
        "消灭储备站地堡控制室中的掠夺者 5 名"
      ],
      "rewards": [
        "经验值:15300",
        "卢布:40000",
        "Prapor 声望+0.03",
        "1 x AK-103 7.62x39 突击步枪",
        "3 x 7.62x39 30发AK103兼容武器弹匣",
        "7 x 7.62x39mm PP 弹药包（20发装）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/60896bca6ee58f38c417d4f2.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/60896bca6ee58f38c417d4f2.webp",
      "next": [
        28
      ],
      "gridPosition": {
        "x": 8,
        "y": -2
      }
    },
    {
      "id": 23,
      "name": "苏共之辉 - 1【非3*4】",
      "location": "外围区",
      "level": 17,
      "objective": [
        "在塔科夫街区找到Prapor朋友的公寓",
        "以幸存状态撤离该区域"
      ],
      "rewards": [
        "经验值:10100",
        "卢布:50000",
        "Prapor 声望+0.01",
        "2 x Tarkovskaya瓶装伏特加"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/639135b04ed9512be67647d7.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/639135b04ed9512be67647d7.webp",
      "next": [
        44
      ],
      "gridPosition": {
        "x": 9,
        "y": 2
      }
    },
    {
      "id": 24,
      "name": "惩罚者 - 2",
      "location": "外围区",
      "level": 18,
      "objective": [
        "在储备站使用消音武器击杀Scav 12 名",
        "上交在战局中找到的：半面巾 7 个"
      ],
      "rewards": [
        "经验值:13100",
        "卢布:50000",
        "Prapor 声望+0.03",
        "1 x AK-104 7.62x39 突击步枪",
        "2 x 军用电缆"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/59c50c8886f7745fed3193bf.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/59c50c8886f7745fed3193bf.webp",
      "next": [
        26,
        30
      ],
      "gridPosition": {
        "x": 11,
        "y": 0
      }
    },
    {
      "id": 25,
      "name": "踩点行动",
      "location": "外围区",
      "level": 18,
      "objective": [
        "踩点灯塔第一个办公楼的楼顶",
        "踩点灯塔第二个办公楼的楼顶",
        "踩点灯塔第三个办公楼的楼顶",
        "以幸存状态撤离该区域"
      ],
      "rewards": [
        "经验值:18000",
        "卢布:155000",
        "Prapor 声望+0.03",
        "1 x NPP KIASS 刚玉-VM护甲（黑色）",
        "1 x NPP KIASS Condor 护目镜",
        "解锁 Prapor LL3 交换 Korund-VM防弹插板（前部）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/626bd75c71bd851e971b82a5.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/626bd75c71bd851e971b82a5.webp",
      "next": [],
      "gridPosition": {
        "x": 10,
        "y": 1
      }
    },
    {
      "id": 26,
      "name": "小菜一碟 - 1",
      "location": "工厂区",
      "level": 18,
      "objective": [
        "在灯塔的污水处理厂找到直升机",
        "使用MS2000指示器标记直升机"
      ],
      "rewards": [
        "经验值:15000",
        "卢布:120000",
        "Prapor 声望+0.02",
        "1 x 6SH118突击背包",
        "1 x AK-12 5.45x39突击步枪"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/6179ac7511973d018217d0b9.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/6179ac7511973d018217d0b9.webp",
      "next": [
        25,
        27
      ],
      "gridPosition": {
        "x": 11,
        "y": 1
      }
    },
    {
      "id": 27,
      "name": "小菜一碟 - 2",
      "location": "工厂区",
      "level": 18,
      "objective": [
        "消灭灯塔污水处理厂直升机周围的任意敌人 20 名"
      ],
      "rewards": [
        "经验值:18000",
        "卢布:155000",
        "Prapor 声望+0.02",
        "解锁 Prapor LL3 购买 Molot 75发AK兼容弹鼓"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/6179acbdc760af5ad2053585.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/6179acbdc760af5ad2053585.webp",
      "next": [],
      "gridPosition": {
        "x": 12,
        "y": 1
      }
    },
    {
      "id": 28,
      "name": "多鱼之漏",
      "location": "外围区",
      "level": 19,
      "objective": [
        "在储备站取得第一份加密文件"
      ],
      "rewards": [
        "经验值:7800",
        "卢布:45000",
        "Prapor 声望+0.04",
        "1 x NSPU-M 3.5 倍 燕尾槽夜视瞄准镜",
        "1 x Zenit 2P Klesch 手电激光指示器",
        "1 x AKM PBS-1 7.62x39消音器"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/60896b7bfa70fc097863b8f5.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/60896b7bfa70fc097863b8f5.webp",
      "next": [
        29
      ],
      "gridPosition": {
        "x": 9,
        "y": -2
      }
    },
    {
      "id": 29,
      "name": "特别联络【非3*4】",
      "location": "森林区",
      "level": 19,
      "objective": [
        "在森林 RUAF 大门旁的巨石处藏匿军用电缆",
        "在森林 RUAF 大门旁的巨石处藏匿 Bulbex 剪线器",
        "使用转移功能从森林转移到储备站",
        "在储备站 LAV 装甲车旁地下仓库顶的沙袋处藏匿军用电缆",
        "在储备站 LAV 装甲车旁地下仓库顶的沙袋处藏匿 Bulbex 剪线器"
      ],
      "rewards": [
        "经验值:12800",
        "卢布:32000",
        "Mechanic 声望+0.02",
        "1 x DVL-10 “破坏者” 7.62x51 狙击步枪 Urbana",
        "3 x .308 10发DVL-10弹匣",
        "3 x 7.62x51mm BPZ FMJ 弹药包（20发装）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/66ab970848ddbe9d4a0c49a8.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/66ab970848ddbe9d4a0c49a8.webp",
      "next": [],
      "gridPosition": {
        "x": 10,
        "y": -2
      }
    },
    {
      "id": 30,
      "name": "惩罚者 - 3",
      "location": "外围区",
      "level": 19,
      "objective": [
        "在海关使用AKS-74U击杀Scav 25 名"
      ],
      "rewards": [
        "经验值:11700",
        "Prapor 声望+0.04",
        "1 x DVL-10 “破坏者” 7.62x51 狙击步枪 Urbana",
        "解锁 工作台2级 制作 5.45x39毫米 PP"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/59c512ad86f7741f0d09de9b.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/59c512ad86f7741f0d09de9b.webp",
      "next": [
        33
      ],
      "gridPosition": {
        "x": 12,
        "y": 0
      }
    },
    {
      "id": 31,
      "name": "掷弹兵",
      "location": "外围区",
      "level": 20,
      "objective": [
        "使用使用手榴弹击杀PMC 8 名"
      ],
      "rewards": [
        "经验值:18000",
        "卢布:75000",
        "Prapor 声望+0.02"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/5c0d190cd09282029f5390d8.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/5c0d190cd09282029f5390d8.webp",
      "next": [
        55,
        59
      ],
      "gridPosition": {
        "x": 1,
        "y": 2
      }
    },
    {
      "id": 32,
      "name": "绿色通道【非3*4】",
      "location": "外围区",
      "level": 20,
      "objective": [
        "任务目标"
      ],
      "rewards": [
        "经验值:10400",
        "卢布:62000",
        "Prapor 声望+0.02",
        "1 x SR-2M Veresk 9x21微型冲锋枪",
        "3 x SR-2M 9x21 20发弹匣",
        "3 x 9x21mm SP11 弹药包（30发装）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/639136d68ba6894d155e77cf.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/639136d68ba6894d155e77cf.webp",
      "next": [],
      "gridPosition": {
        "x": 12,
        "y": 4
      }
    },
    {
      "id": 33,
      "name": "惩罚者 - 4",
      "location": "外围区",
      "level": 20,
      "objective": [
        "在灯塔使用12铅径霰弹枪击杀Scav 10 名",
        "在灯塔佩戴巴拉克拉瓦面罩，并装备Scav背心击杀PMC 10 名",
        "上交在战局中找到的：的A-2607-95x18匕首 5 把"
      ],
      "rewards": [
        "经验值:18000",
        "卢布:100000",
        "Prapor 声望+0.03",
        "1 x 柯尔特 M4A1 5.56x45 卡宾枪 SOPMOD II Flash"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/59ca264786f77445a80ed044.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/59ca264786f77445a80ed044.webp",
      "next": [
        34,
        45
      ],
      "gridPosition": {
        "x": 13,
        "y": 0
      }
    },
    {
      "id": 34,
      "name": "惩罚者 - 5",
      "location": "外围区",
      "level": 20,
      "objective": [
        "上交在战局中找到的：M4A1突击步枪 1 把",
        "上交在战局中找到的：AK-74N突击步枪 1 把",
        "上交在战局中找到的：PM 9x18手枪 2 把",
        "穿戴PACA防弹衣和6B47头盔在任意地图击杀PMC 10 名"
      ],
      "rewards": [
        "经验值:18200",
        "Prapor 声望+0.03",
        "1 x 手枪收纳箱",
        "1 x 文件包",
        "6 x 7.62x39mm BP 弹药包（20发装）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/59ca29fb86f77445ab465c87.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/59ca29fb86f77445ab465c87.webp",
      "next": [
        40,
        54
      ],
      "gridPosition": {
        "x": 14,
        "y": 0
      }
    },
    {
      "id": 35,
      "name": "货运延误 - 1【非3*4】",
      "location": "外围区",
      "level": 20,
      "objective": [
        "任务目标"
      ],
      "rewards": [
        "经验值:11000",
        "卢布:57000",
        "Prapor 声望+0.02",
        "3 x 7.62x54mm R 7N1 弹药包（20发装）",
        "3 x 5.45x39mm 7N40盒装弹药（30发装）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/673f348dd3346c21670217e7.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/673f348dd3346c21670217e7.webp",
      "next": [],
      "gridPosition": {
        "x": 5,
        "y": 4
      }
    },
    {
      "id": 36,
      "name": "缔结友谊【非3*4】",
      "location": "外围区",
      "level": 20,
      "objective": [
        "在海岸线找到并获取 Prapor 的货物"
      ],
      "rewards": [
        "经验值:18800",
        "卢布:95000",
        "Prapor 声望+0.02",
        "1 x AK-12 5.45x39突击步枪",
        "3 x 6L26 5.45x39 45发AK-74兼容弹匣",
        "2 x 5.45x39mm BP弹药包（120发装）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/6740a15566e6a521aa051b15.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/6740a15566e6a521aa051b15.webp",
      "next": [],
      "gridPosition": {
        "x": 10,
        "y": 4
      }
    },
    {
      "id": 37,
      "name": "半满半空【非3*4】",
      "location": "外围区",
      "level": 20,
      "objective": [
        "上交战局中找到的物品：军规电子元件 5 个"
      ],
      "rewards": [
        "经验值:14900",
        "卢布:123000",
        "Prapor 声望+0.02",
        "2 x Altyn 防弹头盔（橄榄褐色）",
        "2 x Altyn面罩"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/6740a2c17e3818d5bb0648b6.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/6740a2c17e3818d5bb0648b6.webp",
      "next": [],
      "gridPosition": {
        "x": 9,
        "y": 4
      }
    },
    {
      "id": 38,
      "name": "横插一杠【非3*4】",
      "location": "外围区",
      "level": 20,
      "objective": [
        "在任意地图击杀任意敌人 30 名"
      ],
      "rewards": [
        "经验值:21500",
        "卢布:128800",
        "Prapor 声望+0.03",
        "1 x AS “巨浪” 9x39 特种突击步枪",
        "3 x VSS/VAL 9x39 6L25 20发弹匣（黑红色）",
        "4 x 9x39mm PAB-9 弹药包（20发装）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/6740a3f4eca8acb2d2055159.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/6740a3f4eca8acb2d2055159.webp",
      "next": [],
      "gridPosition": {
        "x": 11,
        "y": 4
      }
    },
    {
      "id": 39,
      "name": "麻醉",
      "location": "外围区",
      "level": 21,
      "objective": [
        "用MS2000指示器标记海岸线的第一个交易站",
        "用MS2000指示器标记海岸线的第二个交易站",
        "用MS2000指示器标记海岸线的第三个交易站"
      ],
      "rewards": [
        "经验值:18100",
        "卢布:50000",
        "Prapor 声望+0.04",
        "1 x AS “巨浪” 9x39 特种突击步枪",
        "5 x 9x39mm SPP 弹药包（20发装）",
        "5 x 9x39mm SP-6 弹药包（20发装）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/5eda19f0edce541157209cee.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/5eda19f0edce541157209cee.webp",
      "next": [],
      "gridPosition": {
        "x": 9,
        "y": -1
      }
    },
    {
      "id": 40,
      "name": "惩罚者 - 6",
      "location": "工厂区",
      "level": 21,
      "objective": [
        "使用SVD狙击步枪击杀 15 名PMC（工厂除外）",
        "上交在战局中找到 7 个BEAR PMC狗牌",
        "上交在战局中找到 7 个USEC PMC狗牌"
      ],
      "rewards": [
        "经验值:19400",
        "卢布:250000",
        "Prapor 声望+0.04",
        "1 x Epsilon 安全箱",
        "解锁 Prapor LL3 购买 7.62x54R 7N1狙击弹"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/59ca2eb686f77445a80ed049.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/59ca2eb686f77445a80ed049.webp",
      "next": [
        41,
        63,
        64,
        65
      ],
      "gridPosition": {
        "x": 15,
        "y": 0
      }
    },
    {
      "id": 41,
      "name": "出警 - 商场【非3*4】",
      "location": "外围区",
      "level": 21,
      "objective": [
        "在塔科夫街区的Stylobate建筑附近使用手枪击杀任意敌对目标 15 名"
      ],
      "rewards": [
        "经验值:21500",
        "卢布:120000",
        "Prapor 声望+0.02",
        "1 x SR-2M Veresk 9x21微型冲锋枪",
        "4 x SR-2M 9x21 30发弹匣",
        "5 x 9x21mm SP10 弹药包（30发装）",
        "解锁 Prapor LL4 交换 谢尔久科夫 SR1MP 9x21 “斑蝰蛇” 半自动手枪"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/64e7b99017ab941a6f7bf9d7.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/64e7b99017ab941a6f7bf9d7.webp",
      "next": [
        42
      ],
      "gridPosition": {
        "x": 16,
        "y": 2
      }
    },
    {
      "id": 42,
      "name": "出警 - 检票【非3*4】",
      "location": "外围区",
      "level": 21,
      "objective": [
        "在塔科夫街区的Rodina影院建筑附近使用冲锋枪击杀任意敌对目标 25 名"
      ],
      "rewards": [
        "经验值:22600",
        "卢布:150000",
        "Prapor 声望+0.03",
        "2 x AK-103 7.62x39 突击步枪",
        "4 x 7.62x39 30发AK103兼容武器弹匣",
        "9 x 7.62x39mm PP 弹药包（20发装）",
        "解锁 Prapor LL4 交换 SR-2M 石楠 9x21 毫米冲锋枪 FSB"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/64e7b9a4aac4cd0a726562cb.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/64e7b9a4aac4cd0a726562cb.webp",
      "next": [
        43
      ],
      "gridPosition": {
        "x": 17,
        "y": 2
      }
    },
    {
      "id": 43,
      "name": "出警 - 巡逻【非3*4】",
      "location": "外围区",
      "level": 21,
      "objective": [
        "在塔科夫街区的Cardinal公寓区使用突击步枪或突击卡宾枪击杀任意敌对目标 30 名"
      ],
      "rewards": [
        "经验值:25000",
        "卢布:185000",
        "Prapor 声望+0.04",
        "16 x Tarkovskaya瓶装伏特加",
        "1 x BNTI Zhuk 防弹衣（数码丛林迷彩）",
        "解锁 Prapor LL4 交换 AK-12 5.45x39突击步枪",
        "解锁 工作台3级 制作 5.45x39毫米 BP"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/64e7b9bffd30422ed03dad38.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/64e7b9bffd30422ed03dad38.webp",
      "next": [],
      "gridPosition": {
        "x": 18,
        "y": 2
      }
    },
    {
      "id": 44,
      "name": "苏共之辉 - 2【非3*4】",
      "location": "外围区",
      "level": 22,
      "objective": [
        "在塔科夫街区找到Prapor朋友的工作地点"
      ],
      "rewards": [
        "经验值:10100",
        "卢布:50000",
        "Prapor 声望+0.01",
        "1 x Tokarev SVT-40 7.62x54R步枪 Sniper",
        "2 x AVT-40 7.62x54R 10发弹匣",
        "2 x 7.62x54mm R LPS 弹药包（20发装）",
        "解锁 Prapor LL3 购买 Tokarev AVT-40 7.62x54R自动步枪"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/64f5aac4b63b74469b6c14c2.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/64f5aac4b63b74469b6c14c2.webp",
      "next": [
        46
      ],
      "gridPosition": {
        "x": 10,
        "y": 2
      }
    },
    {
      "id": 45,
      "name": "屋顶战神【非3*4】",
      "location": "外围区",
      "level": 22,
      "objective": [
        "在塔科夫街区消灭屋顶狙击手 10 名"
      ],
      "rewards": [
        "经验值:14700",
        "卢布:77000",
        "Prapor 声望+0.02",
        "干得好，勇士，这才是正儿八经的狙击！"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/639136f086e646067c176a8b.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/639136f086e646067c176a8b.webp",
      "next": [
        48
      ],
      "gridPosition": {
        "x": 13,
        "y": 1
      }
    },
    {
      "id": 46,
      "name": "财不外露【非3*4】",
      "location": "外围区",
      "level": 1,
      "objective": [
        "找到并获取塔科夫地区的不动产交易记录",
        "上交找到的信息"
      ],
      "rewards": [
        "经验值:11600",
        "卢布:80000",
        "Prapor 声望+0.02",
        "1 x SR-2M 石楠 9x21 毫米冲锋枪",
        "4 x 9x21mm SP10 弹药包（30发装）",
        "3 x SR-2M 9x21 30发弹匣"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/6573397ef3f8344c4575cd87.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/6573397ef3f8344c4575cd87.webp",
      "next": [],
      "gridPosition": {
        "x": 11,
        "y": 2
      }
    },
    {
      "id": 47,
      "name": "管制材料",
      "location": "外围区",
      "level": 25,
      "objective": [
        "上交在战局中找到的：OFZ 30x165毫米炮弹 5 个",
        "上交在战局中找到的：6-Sten-140-M军用电池 1 个"
      ],
      "rewards": [
        "经验值:14800",
        "卢布:150000",
        "Prapor 声望+0.02",
        "10 x 12.7x55mm PS12B（10发装）",
        "解锁 Prapor LL4 购买ASh-12 12.7x55 突击步枪"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/5d4bec3486f7743cac246665.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/5d4bec3486f7743cac246665.webp",
      "next": [],
      "gridPosition": {
        "x": 13,
        "y": 4
      }
    },
    {
      "id": 48,
      "name": "最好的差事【非3*4】",
      "location": "外围区",
      "level": 25,
      "objective": [
        "使用AK-74系列突击步枪从100米开外击杀任意敌人 30  名"
      ],
      "rewards": [
        "经验值:15400",
        "Prapor 声望+0.03",
        "解锁 Prapor LL3 交换 GP-25篝火”40毫米下挂式榴弹发射器",
        "解锁 Prapor LL3 购买40毫米VOG-25榴弹"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/63a9ae24009ffc6a551631a5.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/63a9ae24009ffc6a551631a5.webp",
      "next": [
        40
      ],
      "gridPosition": {
        "x": 14,
        "y": 1
      }
    },
    {
      "id": 49,
      "name": "往昔时光 - 1【非3*4】",
      "location": "外围区",
      "level": 27,
      "objective": [
        "任务目标"
      ],
      "rewards": [
        "经验值:76000",
        "卢布:256000",
        "Prapor 声望+0.03",
        "1 x 春田 M1A 7.62x51 精确射手步枪 2k18 NY",
        "2 x M1A 7.62x51 20发弹匣",
        "3 x 7.62x51mm M62 曳光弹 弹药包（20发装）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/666314b4d7f171c4c20226c3.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/666314b4d7f171c4c20226c3.webp",
      "next": [
        50,
        52
      ],
      "gridPosition": {
        "x": 1,
        "y": 4
      }
    },
    {
      "id": 50,
      "name": "往昔时光 - 2【非3*4】",
      "location": "外围区",
      "level": 27,
      "objective": [
        "任务目标"
      ],
      "rewards": [
        "经验值:62400",
        "卢布:226000",
        "Prapor 声望+0.03",
        "2 x 弹药箱"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/666314bafd5ca9577902e03a.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/666314bafd5ca9577902e03a.webp",
      "next": [
        51
      ],
      "gridPosition": {
        "x": 2,
        "y": 4
      }
    },
    {
      "id": 51,
      "name": "忠实观众【非3*4】",
      "location": "外围区",
      "level": 27,
      "objective": [
        "任务目标"
      ],
      "rewards": [
        "经验值:74000",
        "卢布:172000",
        "Prapor 声望+0.02",
        "5 x 瓶装 Pevko 淡啤酒",
        "5 x Tarkovskaya瓶装伏特加"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/666314bd920800278d0f6748.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/666314bd920800278d0f6748.webp",
      "next": [],
      "gridPosition": {
        "x": 3,
        "y": 4
      }
    },
    {
      "id": 52,
      "name": "人间地狱 - 1【非3*4】",
      "location": "外围区",
      "level": 27,
      "objective": [],
      "rewards": [
        "经验值:15600",
        "卢布:35700",
        "Prapor 声望+0.01",
        "2 x NPP KlASS Kora-Kulon防弹衣（数码迷彩）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/666314b0acf8442f8b0531a1.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/666314b0acf8442f8b0531a1.webp",
      "next": [
        53
      ],
      "gridPosition": {
        "x": 1,
        "y": 3
      }
    },
    {
      "id": 53,
      "name": "人间地狱 - 2【非3*4】",
      "location": "外围区",
      "level": 27,
      "objective": [
        "任务目标"
      ],
      "rewards": [
        "经验值:98000",
        "卢布:324000",
        "Prapor 声望+0.03",
        "3 x RGN手榴弹",
        "3 x RGO手榴弹",
        "3 x VOG-25 Khattabka 简易手榴弹"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/666314b2a9290f9e0806cca3.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/666314b2a9290f9e0806cca3.webp",
      "next": [],
      "gridPosition": {
        "x": 2,
        "y": 3
      }
    },
    {
      "id": 54,
      "name": "占山为王【非3*4】",
      "location": "外围区",
      "level": 30,
      "objective": [
        "在灯塔地区消灭USEC PMC行动人员 20 名",
        "上交在战局中找到的：USEC狗牌 20 个"
      ],
      "rewards": [
        "经验值:22000",
        "卢布:300000",
        "Prapor 声望+0.02",
        "3 x TOZ KS-23M 23x75 毫米泵动式霰弹枪",
        "解锁 Prapor LL3 购买 23x75 毫米“红星”闪光弹"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/6179b5b06e9dd54ac275e409.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/6179b5b06e9dd54ac275e409.webp",
      "next": [],
      "gridPosition": {
        "x": 14,
        "y": -1
      }
    },
    {
      "id": 55,
      "name": "试驾 - 1",
      "location": "外围区",
      "level": 30,
      "objective": [
        "使用装有Hybrid 46消音器和Schmidt & Bender PM II 1-8x24瞄准镜的M1A步枪从60米开外击杀PMC干员 5 名"
      ],
      "rewards": [
        "经验值:18200",
        "Prapor 声望+0.02",
        "1 x VSS “绞丝机” 特种狙击步枪",
        "2 x VSS/VAL SR3M.130 9x39 30发弹匣",
        "6 x 9x39mm SP-6 弹药包（20发装）",
        "解锁 工作台2级制作9x39毫米 PAB-9"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/5c0bd94186f7747a727f09b2.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/5c0bd94186f7747a727f09b2.webp",
      "next": [
        56
      ],
      "gridPosition": {
        "x": 2,
        "y": 2
      }
    },
    {
      "id": 56,
      "name": "试驾 - 2",
      "location": "外围区",
      "level": 30,
      "objective": [
        "任务目标"
      ],
      "rewards": [
        "经验值:20000",
        "卢布:300000",
        "Prapor 声望+0.02",
        "1 x ASh-12 12.7x55 突击步枪 Silenced",
        "3 x ASh-12 20发ASh-12弹匣",
        "6 x 12.7x55mm PS12B（10发装）",
        "3 x 金颈链",
        "解锁 Prapor LL3 购买 9x21毫米 SP13"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/63a5cf262964a7488f5243ce.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/63a5cf262964a7488f5243ce.webp",
      "next": [
        57
      ],
      "gridPosition": {
        "x": 3,
        "y": 2
      }
    },
    {
      "id": 57,
      "name": "试驾 - 3",
      "location": "外围区",
      "level": 30,
      "objective": [
        "在灯塔使用装有Valday PS-320 1/6x瞄准镜与消音器的AK-12击杀PMC行动人员 20  名"
      ],
      "rewards": [
        "经验值:35300",
        "卢布:460000",
        "Prapor 声望+0.01",
        "1 x RPK-16 5.45x39 轻机枪",
        "4 x 6L31 5.45x39 60发AK-74兼容弹匣",
        "8 x 5.45x39mm 7N40盒装弹药（30发装）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/64f5deac39e45b527a7c4232.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/64f5deac39e45b527a7c4232.webp",
      "next": [
        58
      ],
      "gridPosition": {
        "x": 4,
        "y": 2
      }
    },
    {
      "id": 58,
      "name": "试驾 - 4",
      "location": "外围区",
      "level": 40,
      "objective": [
        "在海岸线使用带有 1P78-1 瞄准镜的 RPDN 机枪消灭任意目标 30 名"
      ],
      "rewards": [
        "经验值:40000",
        "卢布:460000",
        "Prapor 声望+0.02",
        "1 x Tokarev AVT-40 7.62x54R自动步枪",
        "3 x 7.62x54mm R SNB弹药包（20发装）",
        "2 x AVT-40 7.62x54R 15发弹匣"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/6574e0dedc0d635f633a5805.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/6574e0dedc0d635f633a5805.webp",
      "next": [
        60
      ],
      "gridPosition": {
        "x": 5,
        "y": 2
      }
    },
    {
      "id": 59,
      "name": "艺术就是爆炸【非3*4】",
      "location": "外围区",
      "level": 33,
      "objective": [
        "使用手榴弹或者榴弹发射器消灭任意目标 35 个"
      ],
      "rewards": [
        "经验值:19200",
        "卢布:95300"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/67b45467814ab0ffa000c7e7.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/67b45467814ab0ffa000c7e7.webp",
      "next": [],
      "gridPosition": {
        "x": 1,
        "y": 1
      }
    },
    {
      "id": 60,
      "name": "试驾 - 5",
      "location": "工厂区",
      "level": 40,
      "objective": [
        "使用装有 240 毫米枪管、SBR 枪托与 BOSS Xe 反射瞄具的 UZI PRO 在工厂击杀任意目标 50 名"
      ],
      "rewards": [
        "经验值:50000",
        "卢布:520000",
        "Prapor 声望+0.02",
        "1 x AS “巨浪” 9x39 特种突击步枪",
        "3 x VSS/VAL SR3M.130 9x39 30发弹匣",
        "15 x 9x39mm 7N12 弹药包（8发装）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/669fa3a40c828825de06d6a1.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/669fa3a40c828825de06d6a1.webp",
      "next": [
        61
      ],
      "gridPosition": {
        "x": 6,
        "y": 2
      }
    },
    {
      "id": 61,
      "name": "试驾 - 6",
      "location": "外围区",
      "level": 40,
      "objective": [
        "使用 Aklys Defense“迅猛龙”在海关消灭任何目标 50 名"
      ],
      "rewards": [
        "经验值:65000",
        "卢布:65000",
        "Prapor 声望+0.02",
        "2 x BNTI Zhuk 防弹衣（数码丛林迷彩）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/675c1ff1a757ddd00404f0aa.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/675c1ff1a757ddd00404f0aa.webp",
      "next": [],
      "gridPosition": {
        "x": 7,
        "y": 2
      }
    },
    {
      "id": 62,
      "name": "左右逢源",
      "location": "外围区",
      "level": 35,
      "objective": [
        "Prapor信任度至4级",
        "Therapist信任度至4级",
        "Skier信任度至4级",
        "Peacekeeper信任度至4级",
        "Mechanic信任度至4级",
        "Ragman信任度至4级",
        "Jaeger信任度至4级"
      ],
      "rewards": [
        "经验值:20900",
        "卢布:55000",
        "Prapor 声望+0.02",
        "1 x THICC 武器箱",
        "解锁 Prapor LL4 购买 SR-3M 9x39紧凑型突击步枪"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/5c12452c86f7744b83469073.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/5c12452c86f7744b83469073.webp",
      "next": [],
      "gridPosition": {
        "x": 9,
        "y": 1
      }
    },
    {
      "id": 63,
      "name": "掠地攻城【非3*4】",
      "location": "森林区",
      "level": 42,
      "objective": [
        "在海关的Scav营地击杀PMC 8 名",
        "在森林的Scav营地击杀PMC 8 名",
        "在海岸线的疗养院区域击杀PMC 8 名"
      ],
      "rewards": [
        "经验值:69999",
        "1 x Rys-T 防弹头盔（黑色）",
        "1 x Rys-T 面罩",
        "1 x 6B43 Zabralo-Sh 防弹衣（数码丛林迷彩）",
        "解锁 Prapor LL4 购买 9x39毫米 SP-6"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/60e71b9bbd90872cb85440f3.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/60e71b9bbd90872cb85440f3.webp",
      "next": [],
      "gridPosition": {
        "x": 16,
        "y": 1
      }
    },
    {
      "id": 64,
      "name": "恐吓者",
      "location": "外围区",
      "level": 45,
      "objective": [
        "任意地图命中头部击杀Scav 40 名"
      ],
      "rewards": [
        "经验值:84000",
        "解锁 工作台3级 制作 7.62x39毫米 BP"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/60e71bb4e456d449cd47ca75.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/60e71bb4e456d449cd47ca75.webp",
      "next": [],
      "gridPosition": {
        "x": 16,
        "y": 0
      }
    },
    {
      "id": 65,
      "name": "护送【非3*4】",
      "location": "中心区",
      "level": 60,
      "objective": [
        "于白天在工厂击杀PMC 4 名",
        "在海关击杀PMC 4 名",
        "在海岸线击杀PMC 4 名",
        "在储备站击杀PMC 4 名",
        "在森林击杀PMC 4 名",
        "在立交桥击杀PMC 4 名",
        "在实验室击杀PMC 4 名",
        "在中心区击杀PMC 4 名",
        "任务进行过程中，你不可以死亡或以其它状态离开战局（包括:阵亡，擅离，失踪，匆匆逃离）"
      ],
      "rewards": [
        "经验值:177000",
        "+5 力量技能等级",
        "1 x 6B43 Zabralo-Sh 防弹衣（数码丛林迷彩）",
        "解锁 卫生间 3级 制作 Rys-T 防弹头盔（黑色）"
      ],
      "image": "https://img.eftarkov.com/upFiles/task/60e71b62a0beca400d69efc4.webp",
      "detailImage": "https://img.eftarkov.com/upFiles/task/60e71b62a0beca400d69efc4.webp",
      "next": [],
      "gridPosition": {
        "x": 16,
        "y": -1
      }
    }
  ],
  "therapist": [
    {
      "id": 0,
      "name": "急救",
      "location": "海关",
      "level": 1,
      "objective": [
        "找到并交付3个急救包",
        "找到并交付2个夹板"
      ],
      "rewards": "4000卢布，2个AI-2急救包，商人好感度+0.01",
      "image": "img/tasks/therapist_1_thumb.jpg",
      "detailImage": "img/tasks/therapist_1_detail.jpg",
      "gridPosition": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": 1,
      "name": "补给",
      "location": "海岸线",
      "level": 5,
      "objective": [
        "在加油站找到医疗物资",
        "交付给医生"
      ],
      "rewards": "12000卢布，3个IFAK急救包，商人好感度+0.02",
      "image": "img/tasks/therapist_2_thumb.jpg",
      "detailImage": "img/tasks/therapist_2_detail.jpg",
      "gridPosition": {
        "x": 1,
        "y": 0
      }
    },
    {
      "id": 2,
      "name": "检查",
      "location": "海关",
      "level": 10,
      "objective": [
        "检查5具尸体",
        "记录死因"
      ],
      "rewards": "20000卢布，1个Grizzly急救包，商人好感度+0.03",
      "image": "img/tasks/therapist_3_thumb.jpg",
      "detailImage": "img/tasks/therapist_3_detail.jpg",
      "gridPosition": {
        "x": 2,
        "y": 0
      }
    },
    {
      "id": 3,
      "name": "健康关怀",
      "location": "森林",
      "level": 15,
      "objective": [
        "找到并交付抗生素",
        "找到并交付医疗用品"
      ],
      "rewards": "30000卢布，2个Morphine注射器，商人好感度+0.04",
      "image": "img/tasks/therapist_4_thumb.jpg",
      "detailImage": "img/tasks/therapist_4_detail.jpg",
      "gridPosition": {
        "x": 0,
        "y": 1
      }
    },
    {
      "id": 4,
      "name": "注射第1部分",
      "location": "海岸线",
      "level": 20,
      "objective": [
        "在疗养院找到医疗注射器",
        "交付给医生"
      ],
      "rewards": "40000卢布，1个CMS手术套件，商人好感度+0.05",
      "image": "img/tasks/therapist_5_thumb.jpg",
      "detailImage": "img/tasks/therapist_5_detail.jpg",
      "gridPosition": {
        "x": 1,
        "y": 1
      }
    },
    {
      "id": 5,
      "name": "健康关怀第2部分",
      "location": "立交桥",
      "level": 25,
      "objective": [
        "在商场找到医疗设备",
        "交付给医生"
      ],
      "rewards": "50000卢布，1个Defibrillator除颤器，商人好感度+0.06",
      "image": "img/tasks/therapist_6_thumb.jpg",
      "detailImage": "img/tasks/therapist_6_detail.jpg",
      "gridPosition": {
        "x": 2,
        "y": 1
      }
    }
  ],
  "skier": [
    {
      "id": 0,
      "name": "友好的火力",
      "location": "海关",
      "level": 5,
      "objective": [
        "消灭7名USEC玩家角色"
      ],
      "rewards": "8000卢布，1个PACA防弹衣，商人好感度+0.01",
      "image": "img/tasks/skier_1_thumb.jpg",
      "detailImage": "img/tasks/skier_1_detail.jpg",
      "gridPosition": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": 1,
      "name": "黄金瑞士手表",
      "location": "海关",
      "level": 10,
      "objective": [
        "找到并交付5只黄金手表"
      ],
      "rewards": "18000卢布，1个MP5冲锋枪，商人好感度+0.02",
      "image": "img/tasks/skier_2_thumb.jpg",
      "detailImage": "img/tasks/skier_2_detail.jpg",
      "gridPosition": {
        "x": 1,
        "y": 0
      }
    },
    {
      "id": 2,
      "name": "化学第1部分",
      "location": "海岸线",
      "level": 15,
      "objective": [
        "找到化学实验室",
        "带回样本"
      ],
      "rewards": "28000卢布，1个ZSh-1-2M头盔，商人好感度+0.03",
      "image": "img/tasks/skier_3_thumb.jpg",
      "detailImage": "img/tasks/skier_3_detail.jpg",
      "gridPosition": {
        "x": 2,
        "y": 0
      }
    },
    {
      "id": 3,
      "name": "供应商",
      "location": "立交桥",
      "level": 20,
      "objective": [
        "找到并交付电子设备"
      ],
      "rewards": "38000卢布，1个M4A1突击步枪，商人好感度+0.04",
      "image": "img/tasks/skier_4_thumb.jpg",
      "detailImage": "img/tasks/skier_4_detail.jpg",
      "gridPosition": {
        "x": 0,
        "y": 1
      }
    },
    {
      "id": 4,
      "name": "供应商第2部分",
      "location": "储备站",
      "level": 25,
      "objective": [
        "在地下找到军事设备",
        "交付给滑雪者"
      ],
      "rewards": "48000卢布，1个Tactec防弹背心，商人好感度+0.05",
      "image": "img/tasks/skier_5_thumb.jpg",
      "detailImage": "img/tasks/skier_5_detail.jpg",
      "gridPosition": {
        "x": 1,
        "y": 1
      }
    },
    {
      "id": 5,
      "name": "供应商第3部分",
      "location": "实验室",
      "level": 30,
      "objective": [
        "在实验室找到高科技设备",
        "安全撤离"
      ],
      "rewards": "58000卢布，1个HK 416突击步枪，商人好感度+0.06",
      "image": "img/tasks/skier_6_thumb.jpg",
      "detailImage": "img/tasks/skier_6_detail.jpg",
      "gridPosition": {
        "x": 2,
        "y": 1
      }
    }
  ],
  "peacekeeper": [
    {
      "id": 0,
      "name": "外交官",
      "location": "海关",
      "level": 10,
      "objective": [
        "找到外交官的公文包",
        "交付给维和人员"
      ],
      "rewards": "10000美元，1个M9手枪，商人好感度+0.01",
      "image": "img/tasks/peacekeeper_1_thumb.jpg",
      "detailImage": "img/tasks/peacekeeper_1_detail.jpg",
      "gridPosition": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": 1,
      "name": "和平维护",
      "location": "海岸线",
      "level": 15,
      "objective": [
        "消灭10名Scav敌人",
        "使用北约武器"
      ],
      "rewards": "20000美元，1个M4A1突击步枪，商人好感度+0.02",
      "image": "img/tasks/peacekeeper_2_thumb.jpg",
      "detailImage": "img/tasks/peacekeeper_2_detail.jpg",
      "gridPosition": {
        "x": 1,
        "y": 0
      }
    },
    {
      "id": 2,
      "name": "情报收集",
      "location": "森林",
      "level": 20,
      "objective": [
        "找到情报文件",
        "安全撤离"
      ],
      "rewards": "30000美元，1个FAST MT头盔，商人好感度+0.03",
      "image": "img/tasks/peacekeeper_3_thumb.jpg",
      "detailImage": "img/tasks/peacekeeper_3_detail.jpg",
      "gridPosition": {
        "x": 2,
        "y": 0
      }
    },
    {
      "id": 3,
      "name": "安全通道",
      "location": "立交桥",
      "level": 25,
      "objective": [
        "护送NPC到安全区域"
      ],
      "rewards": "40000美元，1个Gen4防弹衣，商人好感度+0.04",
      "image": "img/tasks/peacekeeper_4_thumb.jpg",
      "detailImage": "img/tasks/peacekeeper_4_detail.jpg",
      "gridPosition": {
        "x": 0,
        "y": 1
      }
    },
    {
      "id": 4,
      "name": "联合行动",
      "location": "储备站",
      "level": 30,
      "objective": [
        "与友军合作消灭BOSS"
      ],
      "rewards": "50000美元，1个M1A步枪，商人好感度+0.05",
      "image": "img/tasks/peacekeeper_5_thumb.jpg",
      "detailImage": "img/tasks/peacekeeper_5_detail.jpg",
      "gridPosition": {
        "x": 1,
        "y": 1
      }
    },
    {
      "id": 5,
      "name": "最终协议",
      "location": "实验室",
      "level": 35,
      "objective": [
        "完成最终任务目标"
      ],
      "rewards": "60000美元，1个AS VAL突击步枪，商人好感度+0.06",
      "image": "img/tasks/peacekeeper_6_thumb.jpg",
      "detailImage": "img/tasks/peacekeeper_6_detail.jpg",
      "gridPosition": {
        "x": 2,
        "y": 1
      }
    }
  ],
  "mechanic": [
    {
      "id": 0,
      "name": "信号干扰",
      "location": "海关",
      "level": 5,
      "objective": [
        "找到信号干扰器",
        "破坏信号干扰器"
      ],
      "rewards": "7000卢布，1个P226手枪，商人好感度+0.01",
      "image": "img/tasks/mechanic_1_thumb.jpg",
      "detailImage": "img/tasks/mechanic_1_detail.jpg",
      "gridPosition": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": 1,
      "name": "武器调试",
      "location": "工厂",
      "level": 10,
      "objective": [
        "使用改装武器消灭敌人"
      ],
      "rewards": "15000卢布，1个AK-74N改装套件，商人好感度+0.02",
      "image": "img/tasks/mechanic_2_thumb.jpg",
      "detailImage": "img/tasks/mechanic_2_detail.jpg",
      "gridPosition": {
        "x": 1,
        "y": 0
      }
    },
    {
      "id": 2,
      "name": "电子元件",
      "location": "立交桥",
      "level": 15,
      "objective": [
        "找到电子元件",
        "交付给机械师"
      ],
      "rewards": "25000卢布，1个热成像镜，商人好感度+0.03",
      "image": "img/tasks/mechanic_3_thumb.jpg",
      "detailImage": "img/tasks/mechanic_3_detail.jpg",
      "gridPosition": {
        "x": 2,
        "y": 0
      }
    },
    {
      "id": 3,
      "name": "技术支持",
      "location": "海岸线",
      "level": 20,
      "objective": [
        "修复通信设备"
      ],
      "rewards": "35000卢布，1个NVG夜视仪，商人好感度+0.04",
      "image": "img/tasks/mechanic_4_thumb.jpg",
      "detailImage": "img/tasks/mechanic_4_detail.jpg",
      "gridPosition": {
        "x": 0,
        "y": 1
      }
    },
    {
      "id": 4,
      "name": "系统入侵",
      "location": "实验室",
      "level": 25,
      "objective": [
        "入侵实验室安全系统"
      ],
      "rewards": "45000卢布，1个Thermal Scope热成像瞄准镜，商人好感度+0.05",
      "image": "img/tasks/mechanic_5_thumb.jpg",
      "detailImage": "img/tasks/mechanic_5_detail.jpg",
      "gridPosition": {
        "x": 1,
        "y": 1
      }
    },
    {
      "id": 5,
      "name": "最终调试",
      "location": "储备站",
      "level": 30,
      "objective": [
        "完成最终武器测试"
      ],
      "rewards": "55000卢布，1个M4A1 SOPMOD改装套件，商人好感度+0.06",
      "image": "img/tasks/mechanic_6_thumb.jpg",
      "detailImage": "img/tasks/mechanic_6_detail.jpg",
      "gridPosition": {
        "x": 2,
        "y": 1
      }
    }
  ],
  "ragman": [
    {
      "id": 0,
      "name": "物资供应",
      "location": "海关",
      "level": 5,
      "objective": [
        "找到军用物资",
        "交付给布商"
      ],
      "rewards": "6000卢布，1个6B23-1防弹衣，商人好感度+0.01",
      "image": "img/tasks/ragman_1_thumb.jpg",
      "detailImage": "img/tasks/ragman_1_detail.jpg",
      "gridPosition": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": 1,
      "name": "服装收集",
      "location": "海岸线",
      "level": 10,
      "objective": [
        "找到特定服装",
        "交付给布商"
      ],
      "rewards": "14000卢布，1个Gorka套装，商人好感度+0.02",
      "image": "img/tasks/ragman_2_thumb.jpg",
      "detailImage": "img/tasks/ragman_2_detail.jpg",
      "gridPosition": {
        "x": 1,
        "y": 0
      }
    },
    {
      "id": 2,
      "name": "护甲测试",
      "location": "工厂",
      "level": 15,
      "objective": [
        "测试护甲性能",
        "报告测试结果"
      ],
      "rewards": "24000卢布，1个Zabralo防弹衣，商人好感度+0.03",
      "image": "img/tasks/ragman_3_thumb.jpg",
      "detailImage": "img/tasks/ragman_3_detail.jpg",
      "gridPosition": {
        "x": 2,
        "y": 0
      }
    },
    {
      "id": 3,
      "name": "隐蔽行动",
      "location": "森林",
      "level": 20,
      "objective": [
        "使用隐蔽服装完成任务"
      ],
      "rewards": "34000卢布，1个Ghost Mask面具，商人好感度+0.04",
      "image": "img/tasks/ragman_4_thumb.jpg",
      "detailImage": "img/tasks/ragman_4_detail.jpg",
      "gridPosition": {
        "x": 0,
        "y": 1
      }
    },
    {
      "id": 4,
      "name": "高级装备",
      "location": "立交桥",
      "level": 25,
      "objective": [
        "找到高级战术装备",
        "交付给布商"
      ],
      "rewards": "44000卢布，1个Tactec防弹背心，商人好感度+0.05",
      "image": "img/tasks/ragman_5_thumb.jpg",
      "detailImage": "img/tasks/ragman_5_detail.jpg",
      "gridPosition": {
        "x": 1,
        "y": 1
      }
    },
    {
      "id": 5,
      "name": "终极防护",
      "location": "实验室",
      "level": 30,
      "objective": [
        "测试终极防护装备"
      ],
      "rewards": "54000卢布，1个Fort Redut-M防弹衣，商人好感度+0.06",
      "image": "img/tasks/ragman_6_thumb.jpg",
      "detailImage": "img/tasks/ragman_6_detail.jpg",
      "gridPosition": {
        "x": 2,
        "y": 1
      }
    }
  ],
  "jaeger": [
    {
      "id": 0,
      "name": "生存专家",
      "location": "森林",
      "level": 10,
      "objective": [
        "在森林生存",
        "收集资源"
      ],
      "rewards": "9000卢布，1个Hunting Rifle，商人好感度+0.01",
      "image": "img/tasks/jaeger_1_thumb.jpg",
      "detailImage": "img/tasks/jaeger_1_detail.jpg",
      "gridPosition": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": 1,
      "name": "狩猎大师",
      "location": "森林",
      "level": 15,
      "objective": [
        "使用猎枪消灭Scav敌人"
      ],
      "rewards": "19000卢布，1个MP-153霰弹枪，商人好感度+0.02",
      "image": "img/tasks/jaeger_2_thumb.jpg",
      "detailImage": "img/tasks/jaeger_2_detail.jpg",
      "gridPosition": {
        "x": 1,
        "y": 0
      }
    },
    {
      "id": 2,
      "name": "陷阱专家",
      "location": "海岸线",
      "level": 20,
      "objective": [
        "设置陷阱",
        "触发陷阱"
      ],
      "rewards": "29000卢布，1个SV-98狙击步枪，商人好感度+0.03",
      "image": "img/tasks/jaeger_3_thumb.jpg",
      "detailImage": "img/tasks/jaeger_3_detail.jpg",
      "gridPosition": {
        "x": 2,
        "y": 0
      }
    },
    {
      "id": 3,
      "name": "野外生存",
      "location": "森林",
      "level": 25,
      "objective": [
        "在野外生存",
        "找到资源"
      ],
      "rewards": "39000卢布，1个T-5000狙击步枪，商人好感度+0.04",
      "image": "img/tasks/jaeger_4_thumb.jpg",
      "detailImage": "img/tasks/jaeger_4_detail.jpg",
      "gridPosition": {
        "x": 0,
        "y": 1
      }
    },
    {
      "id": 4,
      "name": "追踪专家",
      "location": "海岸线",
      "level": 30,
      "objective": [
        "追踪目标",
        "报告位置"
      ],
      "rewards": "49000卢布，1个DVL-10狙击步枪，商人好感度+0.05",
      "image": "img/tasks/jaeger_5_thumb.jpg",
      "detailImage": "img/tasks/jaeger_5_detail.jpg",
      "gridPosition": {
        "x": 1,
        "y": 1
      }
    },
    {
      "id": 5,
      "name": "终极猎手",
      "location": "储备站",
      "level": 35,
      "objective": [
        "完成终极狩猎挑战"
      ],
      "rewards": "59000卢布，1个Orsis T-5000M狙击步枪，商人好感度+0.06",
      "image": "img/tasks/jaeger_6_thumb.jpg",
      "detailImage": "img/tasks/jaeger_6_detail.jpg",
      "gridPosition": {
        "x": 2,
        "y": 1
      }
    }
  ]
};