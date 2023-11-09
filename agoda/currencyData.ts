
 

export enum CurrencyDisplay {
  Symbol,
  Code,
  AppSymbol
}

export enum CurrencyType {
  symbol,
  code 
}

export enum CurrencyLocation {
  pre,
  preSpace,
  post,
  postSpace
}

export enum NegativeSignLocation {
  withNumber,
  withCurrency,
  afterNumber
}

interface Currency {
  display: string;
  type: CurrencyType;
}

export const currencies: {
  [code: string]: Currency
} = {
    eur: {
        display: "€",
        type: CurrencyType.symbol
    },
    gbp: {
        display: "£",
        type: CurrencyType.symbol
    },
    hkd: {
        display: "HKD",
        type: CurrencyType.code
    },
    myr: {
        display: "RM",
        type: CurrencyType.symbol
    },
    sgd: {
        display: "SGD",
        type: CurrencyType.code
    },
    thb: {
        display: "฿",
        type: CurrencyType.symbol
    },
    usd: {
        display: "USD",
        type: CurrencyType.code
    },
    nzd: {
        display: "NZD",
        type: CurrencyType.code
    },
    aud: {
        display: "AUD",
        type: CurrencyType.code
    },
    jpy: {
        display: "¥",
        type: CurrencyType.symbol
    },
    zar: {
        display: "R",
        type: CurrencyType.symbol
    },
    cad: {
        display: "CAD",
        type: CurrencyType.code
    },
    aed: {
        display: "AED",
        type: CurrencyType.code
    },
    rmb: {
        display: "RMB",
        type: CurrencyType.code
    },
    php: {
        display: "₱",
        type: CurrencyType.symbol
    },
    chf: {
        display: "CHF",
        type: CurrencyType.code
    },
    dkk: {
        display: "DKK",
        type: CurrencyType.code
    },
    sek: {
        display: "SEK",
        type: CurrencyType.code
    },
    czk: {
        display: "Kč",
        type: CurrencyType.symbol
    },
    pln: {
        display: "zł",
        type: CurrencyType.symbol
    },
    brl: {
        display: "R$",
        type: CurrencyType.symbol
    },
    idr: {
        display: "Rp",
        type: CurrencyType.symbol
    },
    krw: {
        display: "₩",
        type: CurrencyType.symbol
    },
    inr: {
        display: "Rs.",
        type: CurrencyType.symbol
    },
    twd: {
        display: "NT$",
        type: CurrencyType.symbol
    },
    nok: {
        display: "NOK",
        type: CurrencyType.code
    },
    omr: {
        display: "OMR",
        type: CurrencyType.code
    },
    fjd: {
        display: "FJ$",
        type: CurrencyType.symbol
    },
    bhd: {
        display: "BHD",
        type: CurrencyType.code
    },
    ars: {
        display: "AR$",
        type: CurrencyType.symbol
    },
    bgn: {
        display: "лв",
        type: CurrencyType.symbol
    },
    xpf: {
        display: "XPF",
        type: CurrencyType.code
    },
    vnd: {
        display: "₫",
        type: CurrencyType.symbol
    },
    egp: {
        display: "EGP",
        type: CurrencyType.code
    },
    huf: {
        display: "Ft",
        type: CurrencyType.symbol
    },
    uah: {
        display: "грн",
        type: CurrencyType.symbol
    },
    jod: {
        display: "JOD",
        type: CurrencyType.code
    },
    lak: {
        display: "₭",
        type: CurrencyType.symbol
    },
    kwd: {
        display: "KWD",
        type: CurrencyType.code
    },
    mxn: {
        display: "MXN",
        type: CurrencyType.code
    },
    ngn: {
        display: "₦",
        type: CurrencyType.symbol
    },
    ils: {
        display: "₪",
        type: CurrencyType.symbol
    },
    ron: {
        display: "lei",
        type: CurrencyType.symbol
    },
    pkr: {
        display: "PKR",
        type: CurrencyType.code
    },
    qar: {
        display: "QAR",
        type: CurrencyType.code
    },
    khr: {
        display: "៛",
        type: CurrencyType.symbol
    },
    mvr: {
        display: "Rf",
        type: CurrencyType.symbol
    },
    rub: {
        display: "₽",
        type: CurrencyType.symbol
    },
    sar: {
        display: "SAR",
        type: CurrencyType.code
    },
    lkr: {
        display: "රු",
        type: CurrencyType.symbol
    },
    bdt: {
        display: "Tk",
        type: CurrencyType.symbol
    },
    kzt: {
        display: "₸",
        type: CurrencyType.symbol
    },
    try: {
        display: "TL",
        type: CurrencyType.symbol
    },
    afn: {
        display: "؋",
        type: CurrencyType.symbol
    },
    awg: {
        display: "ƒ",
        type: CurrencyType.symbol
    },
    azn: {
        display: "₼",
        type: CurrencyType.symbol
    },
    bsd: {
        display: "$",
        type: CurrencyType.symbol
    },
    bbd: {
        display: "$",
        type: CurrencyType.symbol
    },
    byr: {
        display: "p.",
        type: CurrencyType.symbol
    },
    bzd: {
        display: "BZ$",
        type: CurrencyType.symbol
    },
    bmd: {
        display: "$",
        type: CurrencyType.symbol
    },
    bob: {
        display: "Bs.",
        type: CurrencyType.symbol
    },
    bam: {
        display: "KM",
        type: CurrencyType.symbol
    },
    bwp: {
        display: "P",
        type: CurrencyType.symbol
    },
    bnd: {
        display: "$",
        type: CurrencyType.symbol
    },
    kyd: {
        display: "$",
        type: CurrencyType.symbol
    },
    clp: {
        display: "$",
        type: CurrencyType.symbol
    },
    cny: {
        display: "RMB",
        type: CurrencyType.symbol
    },
    cop: {
        display: "$",
        type: CurrencyType.symbol
    },
    crc: {
        display: "₡",
        type: CurrencyType.symbol
    },
    hrk: {
        display: "kn",
        type: CurrencyType.symbol
    },
    cup: {
        display: "₱",
        type: CurrencyType.symbol
    },
    dop: {
        display: "RD$",
        type: CurrencyType.symbol
    },
    xcd: {
        display: "$",
        type: CurrencyType.symbol
    },
    svc: {
        display: "$",
        type: CurrencyType.symbol
    },
    eek: {
        display: "kr",
        type: CurrencyType.symbol
    },
    fkp: {
        display: "£",
        type: CurrencyType.symbol
    },
    ghc: {
        display: "¢",
        type: CurrencyType.symbol
    },
    gip: {
        display: "£",
        type: CurrencyType.symbol
    },
    gtq: {
        display: "Q",
        type: CurrencyType.symbol
    },
    ggp: {
        display: "£",
        type: CurrencyType.symbol
    },
    gyd: {
        display: "$",
        type: CurrencyType.symbol
    },
    hnl: {
        display: "L",
        type: CurrencyType.symbol
    },
    isk: {
        display: "kr",
        type: CurrencyType.symbol
    },
    irr: {
        display: "﷼",
        type: CurrencyType.symbol
    },
    imp: {
        display: "£",
        type: CurrencyType.symbol
    },
    jmd: {
        display: "J$",
        type: CurrencyType.symbol
    },
    jep: {
        display: "£",
        type: CurrencyType.symbol
    },
    kes: {
        display: "KSh",
        type: CurrencyType.symbol
    },
    kpw: {
        display: "₩",
        type: CurrencyType.symbol
    },
    kgs: {
        display: "лв",
        type: CurrencyType.symbol
    },
    lvl: {
        display: "Ls",
        type: CurrencyType.symbol
    },
    lbp: {
        display: "£",
        type: CurrencyType.symbol
    },
    lrd: {
        display: "$",
        type: CurrencyType.symbol
    },
    ltl: {
        display: "Lt",
        type: CurrencyType.symbol
    },
    mkd: {
        display: "ден",
        type: CurrencyType.symbol
    },
    mur: {
        display: "₨",
        type: CurrencyType.symbol
    },
    mnt: {
        display: "₮",
        type: CurrencyType.symbol
    },
    mzn: {
        display: "MT",
        type: CurrencyType.symbol
    },
    nad: {
        display: "$",
        type: CurrencyType.symbol
    },
    npr: {
        display: "₨",
        type: CurrencyType.symbol
    },
    ang: {
        display: "ƒ",
        type: CurrencyType.symbol
    },
    nio: {
        display: "C$",
        type: CurrencyType.symbol
    },
    pab: {
        display: "B/.",
        type: CurrencyType.symbol
    },
    pyg: {
        display: "Gs",
        type: CurrencyType.symbol
    },
    pen: {
        display: "S/.",
        type: CurrencyType.symbol
    },
    shp: {
        display: "£",
        type: CurrencyType.symbol
    },
    rsd: {
        display: "Дин.",
        type: CurrencyType.symbol
    },
    scr: {
        display: "₨",
        type: CurrencyType.symbol
    },
    sbd: {
        display: "$",
        type: CurrencyType.symbol
    },
    sos: {
        display: "S",
        type: CurrencyType.symbol
    },
    srd: {
        display: "$",
        type: CurrencyType.symbol
    },
    syp: {
        display: "£",
        type: CurrencyType.symbol
    },
    tzs: {
        display: "TSh",
        type: CurrencyType.symbol
    },
    ttd: {
        display: "TT$",
        type: CurrencyType.symbol
    },
    trl: {
        display: "₤",
        type: CurrencyType.symbol
    },
    tvd: {
        display: "$",
        type: CurrencyType.symbol
    },
    ugx: {
        display: "USh",
        type: CurrencyType.symbol
    },
    uyu: {
        display: "$U",
        type: CurrencyType.symbol
    },
    uzs: {
        display: "лв",
        type: CurrencyType.symbol
    },
    vef: {
        display: "Bs",
        type: CurrencyType.symbol
    },
    yer: {
        display: "﷼",
        type: CurrencyType.symbol
    },
    zwd: {
        display: "Z$",
        type: CurrencyType.symbol
    }
};

export const currencyDisplays: {
  [code: string]: string  
} = {};

Object.keys(currencies).forEach(code => {
  currencyDisplays[code] = currencies[code].display;
});