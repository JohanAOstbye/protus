export interface Root {
    version: string
    context: Context
    reportLevels: ReportLevel[]
    resources: Resource[]
    topics: Topic[]
    learners: Learner[]
    groups: Group2[]
    vis: Vis
    configprops: Configprops
    logs: any[]
    ownBadges: any[]
    rmcCount: RmcCount
}

export interface Context {
    learnerId: string
    group: Group
}

export interface Group {
    id: string
    name: string
}

export interface ReportLevel {
    id: string
    name: string
}

export interface Resource {
    id: string
    name: string
    dim: Dim
    updateStateOn: UpdateStateOn
}

export interface Dim {
    w: number
    h: number
}

export interface UpdateStateOn {
    done: boolean
    winClose: boolean
    winCloseIfAct: boolean
}

export interface Topic {
    id: string
    name: string
    difficulty: number
    importance: number
    order: number
    concepts: any[]
    isVisible: boolean
    timeline: Timeline
    activities: Activities
}

export interface Timeline {
    covered: boolean
    current: boolean
}

export interface Activities {
    Examples: Example[]
    Challenges: Challenge[]
    Coding: Coding[]
}

export interface Example {
    id: string
    name: string
    url: string
    kcs: any[]
}

export interface Challenge {
    id: string
    name: string
    url: string
    kcs: any[]
}

export interface Coding {
    id: string
    name: string
    url: string
    kcs: any[]
}

export interface Learner {
    id: string
    name: string
    isHidden: boolean
    state: State
    preferences: any[]
}

export interface State {
    topics: Topics
    activities: Activities2
}

export interface Topics {
    "Variables and Operations": VariablesAndOperations
    Strings: Strings
    "Boolean Expressions": BooleanExpressions
    "If-Else": IfElse
    "While Loops": WhileLoops
    "For Loops": ForLoops
    "Objects and Classes": ObjectsAndClasses
    "Nested Loops": NestedLoops
    Arrays: Arrays
    "Two-Dimensional Arrays": TwoDimensionalArrays
    "Exception handling": ExceptionHandling
    "File processing": FileProcessing
    ArrayLists: ArrayLists
    Inheritance: Inheritance
}

export interface VariablesAndOperations {
    values: Values
    overall: Overall
}

export interface Values {
    Examples: Examples
    Challenges: Challenges
    Coding: Coding2
}

export interface Examples {
    k: number
    p: number
}

export interface Challenges {
    k: number
    p: number
}

export interface Coding2 {
    k: number
    p: number
}

export interface Overall {
    k: number
    p: number
}

export interface Strings {
    values: Values2
    overall: Overall2
}

export interface Values2 {
    Examples: Examples2
    Challenges: Challenges2
    Coding: Coding3
}

export interface Examples2 {
    k: number
    p: number
}

export interface Challenges2 {
    k: number
    p: number
}

export interface Coding3 {
    k: number
    p: number
}

export interface Overall2 {
    k: number
    p: number
}

export interface BooleanExpressions {
    values: Values3
    overall: Overall3
}

export interface Values3 {
    Examples: Examples3
    Challenges: Challenges3
    Coding: Coding4
}

export interface Examples3 {
    k: number
    p: number
}

export interface Challenges3 {
    k: number
    p: number
}

export interface Coding4 {
    k: number
    p: number
}

export interface Overall3 {
    k: number
    p: number
}

export interface IfElse {
    values: Values4
    overall: Overall4
}

export interface Values4 {
    Examples: Examples4
    Challenges: Challenges4
    Coding: Coding5
}

export interface Examples4 {
    k: number
    p: number
}

export interface Challenges4 {
    k: number
    p: number
}

export interface Coding5 {
    k: number
    p: number
}

export interface Overall4 {
    k: number
    p: number
}

export interface WhileLoops {
    values: Values5
    overall: Overall5
}

export interface Values5 {
    Examples: Examples5
    Challenges: Challenges5
    Coding: Coding6
}

export interface Examples5 {
    k: number
    p: number
}

export interface Challenges5 {
    k: number
    p: number
}

export interface Coding6 {
    k: number
    p: number
}

export interface Overall5 {
    k: number
    p: number
}

export interface ForLoops {
    values: Values6
    overall: Overall6
}

export interface Values6 {
    Examples: Examples6
    Challenges: Challenges6
    Coding: Coding7
}

export interface Examples6 {
    k: number
    p: number
}

export interface Challenges6 {
    k: number
    p: number
}

export interface Coding7 {
    k: number
    p: number
}

export interface Overall6 {
    k: number
    p: number
}

export interface ObjectsAndClasses {
    values: Values7
    overall: Overall7
}

export interface Values7 {
    Examples: Examples7
    Challenges: Challenges7
    Coding: Coding8
}

export interface Examples7 {
    k: number
    p: number
}

export interface Challenges7 {
    k: number
    p: number
}

export interface Coding8 {
    k: number
    p: number
}

export interface Overall7 {
    k: number
    p: number
}

export interface NestedLoops {
    values: Values8
    overall: Overall8
}

export interface Values8 {
    Examples: Examples8
    Challenges: Challenges8
    Coding: Coding9
}

export interface Examples8 {
    k: number
    p: number
}

export interface Challenges8 {
    k: number
    p: number
}

export interface Coding9 {
    k: number
    p: number
}

export interface Overall8 {
    k: number
    p: number
}

export interface Arrays {
    values: Values9
    overall: Overall9
}

export interface Values9 {
    Examples: Examples9
    Challenges: Challenges9
    Coding: Coding10
}

export interface Examples9 {
    k: number
    p: number
}

export interface Challenges9 {
    k: number
    p: number
}

export interface Coding10 {
    k: number
    p: number
}

export interface Overall9 {
    k: number
    p: number
}

export interface TwoDimensionalArrays {
    values: Values10
    overall: Overall10
}

export interface Values10 {
    Examples: Examples10
    Challenges: Challenges10
    Coding: Coding11
}

export interface Examples10 {
    k: number
    p: number
}

export interface Challenges10 {
    k: number
    p: number
}

export interface Coding11 {
    k: number
    p: number
}

export interface Overall10 {
    k: number
    p: number
}

export interface ExceptionHandling {
    values: Values11
    overall: Overall11
}

export interface Values11 {
    Examples: Examples11
    Challenges: Challenges11
    Coding: Coding12
}

export interface Examples11 {
    k: number
    p: number
}

export interface Challenges11 {
    k: number
    p: number
}

export interface Coding12 {
    k: number
    p: number
}

export interface Overall11 {
    k: number
    p: number
}

export interface FileProcessing {
    values: Values12
    overall: Overall12
}

export interface Values12 {
    Examples: Examples12
    Challenges: Challenges12
    Coding: Coding13
}

export interface Examples12 {
    k: number
    p: number
}

export interface Challenges12 {
    k: number
    p: number
}

export interface Coding13 {
    k: number
    p: number
}

export interface Overall12 {
    k: number
    p: number
}

export interface ArrayLists {
    values: Values13
    overall: Overall13
}

export interface Values13 {
    Examples: Examples13
    Challenges: Challenges13
    Coding: Coding14
}

export interface Examples13 {
    k: number
    p: number
}

export interface Challenges13 {
    k: number
    p: number
}

export interface Coding14 {
    k: number
    p: number
}

export interface Overall13 {
    k: number
    p: number
}

export interface Inheritance {
    values: Values14
    overall: Overall14
}

export interface Values14 {
    Examples: Examples14
    Challenges: Challenges14
    Coding: Coding15
}

export interface Examples14 {
    k: number
    p: number
}

export interface Challenges14 {
    k: number
    p: number
}

export interface Coding15 {
    k: number
    p: number
}

export interface Overall14 {
    k: number
    p: number
}

export interface Activities2 {
    "Variables and Operations": VariablesAndOperations2
    Strings: Strings2
    "Boolean Expressions": BooleanExpressions2
    "If-Else": IfElse2
    "While Loops": WhileLoops2
    "For Loops": ForLoops2
    "Objects and Classes": ObjectsAndClasses2
    "Nested Loops": NestedLoops2
    Arrays: Arrays2
    "Two-Dimensional Arrays": TwoDimensionalArrays2
    "Exception handling": ExceptionHandling2
    "File processing": FileProcessing2
    ArrayLists: ArrayLists2
    Inheritance: Inheritance2
}

export interface VariablesAndOperations2 {
    Examples: Examples15
    Challenges: Challenges15
    Coding: Coding16
}

export interface Examples15 {
    "artithmetic.inc_dec_operators": ArtithmeticIncDecOperators
    "arithmetic.f_to_c_conversion": ArithmeticFToCConversion
    "arithmetic.time_conversion": ArithmeticTimeConversion
    "artihmetic.vending_machine": ArtihmeticVendingMachine
    "arithmetic.bmi_calculator": ArithmeticBmiCalculator
    "arithmetic.pythagorean_theorem": ArithmeticPythagoreanTheorem
}

export interface ArtithmeticIncDecOperators {
    values: Values15
}

export interface Values15 {
    k: number
    p: number
}

export interface ArithmeticFToCConversion {
    values: Values16
}

export interface Values16 {
    k: number
    p: number
}

export interface ArithmeticTimeConversion {
    values: Values17
}

export interface Values17 {
    k: number
    p: number
}

export interface ArtihmeticVendingMachine {
    values: Values18
}

export interface Values18 {
    k: number
    p: number
}

export interface ArithmeticBmiCalculator {
    values: Values19
}

export interface Values19 {
    k: number
    p: number
}

export interface ArithmeticPythagoreanTheorem {
    values: Values20
}

export interface Values20 {
    k: number
    p: number
}

export interface Challenges15 {
    JDecInc2: JdecInc2
    JDecInc3: JdecInc3
    FahrenheitToCelsius: FahrenheitToCelsius
    DisplayTime2: DisplayTime2
    VendingMachine2: VendingMachine2
    BmiCalculator2: BmiCalculator2
    PythagoreanTheorem2: PythagoreanTheorem2
}

export interface JdecInc2 {
    values: Values21
}

export interface Values21 {
    k: number
    p: number
}

export interface JdecInc3 {
    values: Values22
}

export interface Values22 {
    k: number
    p: number
}

export interface FahrenheitToCelsius {
    values: Values23
}

export interface Values23 {
    k: number
    p: number
}

export interface DisplayTime2 {
    values: Values24
}

export interface Values24 {
    k: number
    p: number
}

export interface VendingMachine2 {
    values: Values25
}

export interface Values25 {
    k: number
    p: number
}

export interface BmiCalculator2 {
    values: Values26
}

export interface Values26 {
    k: number
    p: number
}

export interface PythagoreanTheorem2 {
    values: Values27
}

export interface Values27 {
    k: number
    p: number
}

export interface Coding16 {
    second_in_days: SecondInDays
    rectangle_perimeter: RectanglePerimeter
    days_to_week_conversion: DaysToWeekConversion
    percentage_correctness: PercentageCorrectness
    compute_average: ComputeAverage
}

export interface SecondInDays {
    values: Values28
}

export interface Values28 {
    k: number
    p: number
}

export interface RectanglePerimeter {
    values: Values29
}

export interface Values29 {
    k: number
    p: number
}

export interface DaysToWeekConversion {
    values: Values30
}

export interface Values30 {
    k: number
    p: number
}

export interface PercentageCorrectness {
    values: Values31
}

export interface Values31 {
    k: number
    p: number
}

export interface ComputeAverage {
    values: Values32
}

export interface Values32 {
    k: number
    p: number
}

export interface Strings2 {
    Examples: Examples16
    Challenges: Challenges16
    Coding: Coding17
}

export interface Examples16 {
    "strings.substring": StringsSubstring
    "strings.addition": StringsAddition
    "strings.escape_chars": StringsEscapeChars
    "strings.equals": StringsEquals
    "strings.charAt": StringsCharAt
}

export interface StringsSubstring {
    values: Values33
}

export interface Values33 {
    k: number
    p: number
}

export interface StringsAddition {
    values: Values34
}

export interface Values34 {
    k: number
    p: number
}

export interface StringsEscapeChars {
    values: Values35
}

export interface Values35 {
    k: number
    p: number
}

export interface StringsEquals {
    values: Values36
}

export interface Values36 {
    k: number
    p: number
}

export interface StringsCharAt {
    values: Values37
}

export interface Values37 {
    k: number
    p: number
}

export interface Challenges16 {
    Initials2: Initials2
    Initials3: Initials3
    StringAddition2: StringAddition2
    JEscapeChar2: JescapeChar2
    JEscapeChar3: JescapeChar3
    JStringEqual2: JstringEqual2
    JCharAt2: JcharAt2
}

export interface Initials2 {
    values: Values38
}

export interface Values38 {
    k: number
    p: number
}

export interface Initials3 {
    values: Values39
}

export interface Values39 {
    k: number
    p: number
}

export interface StringAddition2 {
    values: Values40
}

export interface Values40 {
    k: number
    p: number
}

export interface JescapeChar2 {
    values: Values41
}

export interface Values41 {
    k: number
    p: number
}

export interface JescapeChar3 {
    values: Values42
}

export interface Values42 {
    k: number
    p: number
}

export interface JstringEqual2 {
    values: Values43
}

export interface Values43 {
    k: number
    p: number
}

export interface JcharAt2 {
    values: Values44
}

export interface Values44 {
    k: number
    p: number
}

export interface Coding17 {
    first_half: FirstHalf
    non_start: NonStart
    make_out_word: MakeOutWord
    repeat_last_char: RepeatLastChar
    first_last_swap: FirstLastSwap
    end_characters: EndCharacters
    "is_is_substring_or_ not_is_not_substring": IsIsSubstringOrNotIsNotSubstring
}

export interface FirstHalf {
    values: Values45
}

export interface Values45 {
    k: number
    p: number
}

export interface NonStart {
    values: Values46
}

export interface Values46 {
    k: number
    p: number
}

export interface MakeOutWord {
    values: Values47
}

export interface Values47 {
    k: number
    p: number
}

export interface RepeatLastChar {
    values: Values48
}

export interface Values48 {
    k: number
    p: number
}

export interface FirstLastSwap {
    values: Values49
}

export interface Values49 {
    k: number
    p: number
}

export interface EndCharacters {
    values: Values50
}

export interface Values50 {
    k: number
    p: number
}

export interface IsIsSubstringOrNotIsNotSubstring {
    values: Values51
}

export interface Values51 {
    k: number
    p: number
}

export interface BooleanExpressions2 {
    Examples: Examples17
    Challenges: Challenges17
    Coding: Coding18
}

export interface Examples17 {
    "booleans.phone_age": BooleansPhoneAge
    "booleans.fail_course": BooleansFailCourse
    "booleans.rent_car": BooleansRentCar
    "booleans.hot_dry": BooleansHotDry
    "booleans.three_booleans": BooleansThreeBooleans
}

export interface BooleansPhoneAge {
    values: Values52
}

export interface Values52 {
    k: number
    p: number
}

export interface BooleansFailCourse {
    values: Values53
}

export interface Values53 {
    k: number
    p: number
}

export interface BooleansRentCar {
    values: Values54
}

export interface Values54 {
    k: number
    p: number
}

export interface BooleansHotDry {
    values: Values55
}

export interface Values55 {
    k: number
    p: number
}

export interface BooleansThreeBooleans {
    values: Values56
}

export interface Values56 {
    k: number
    p: number
}

export interface Challenges17 {
    JPhoneAge2: JphoneAge2
    JFailCourse2: JfailCourse2
    JFailCourse3: JfailCourse3
    JRentCar2: JrentCar2
    JRentCar3: JrentCar3
    JBooleanDryHot2: JbooleanDryHot2
    JBooleanDryHot3: JbooleanDryHot3
    JBooleanDryHot4: JbooleanDryHot4
    JThreeBoolean2: JthreeBoolean2
    JThreeBoolean3: JthreeBoolean3
}

export interface JphoneAge2 {
    values: Values57
}

export interface Values57 {
    k: number
    p: number
}

export interface JfailCourse2 {
    values: Values58
}

export interface Values58 {
    k: number
    p: number
}

export interface JfailCourse3 {
    values: Values59
}

export interface Values59 {
    k: number
    p: number
}

export interface JrentCar2 {
    values: Values60
}

export interface Values60 {
    k: number
    p: number
}

export interface JrentCar3 {
    values: Values61
}

export interface Values61 {
    k: number
    p: number
}

export interface JbooleanDryHot2 {
    values: Values62
}

export interface Values62 {
    k: number
    p: number
}

export interface JbooleanDryHot3 {
    values: Values63
}

export interface Values63 {
    k: number
    p: number
}

export interface JbooleanDryHot4 {
    values: Values64
}

export interface Values64 {
    k: number
    p: number
}

export interface JthreeBoolean2 {
    values: Values65
}

export interface Values65 {
    k: number
    p: number
}

export interface JthreeBoolean3 {
    values: Values66
}

export interface Values66 {
    k: number
    p: number
}

export interface Coding18 {
    love6: Love6
    is_special: IsSpecial
    check_start_end_character: CheckStartEndCharacter
    squirrel_play: SquirrelPlay
    in_order: InOrder
}

export interface Love6 {
    values: Values67
}

export interface Values67 {
    k: number
    p: number
}

export interface IsSpecial {
    values: Values68
}

export interface Values68 {
    k: number
    p: number
}

export interface CheckStartEndCharacter {
    values: Values69
}

export interface Values69 {
    k: number
    p: number
}

export interface SquirrelPlay {
    values: Values70
}

export interface Values70 {
    k: number
    p: number
}

export interface InOrder {
    values: Values71
}

export interface Values71 {
    k: number
    p: number
}

export interface IfElse2 {
    Examples: Examples18
    Challenges: Challenges18
    Coding: Coding19
}

export interface Examples18 {
    "ifelse.if_else_num": IfelseIfElseNum
    "ifelse.if_else_wage": IfelseIfElseWage
    "ifelse.if_else_if_grade": IfelseIfElseIfGrade
    "ifelse.nested_if_temperature": IfelseNestedIfTemperature
    "ifelse.nested_if_min_max": IfelseNestedIfMinMax
}

export interface IfelseIfElseNum {
    values: Values72
}

export interface Values72 {
    k: number
    p: number
}

export interface IfelseIfElseWage {
    values: Values73
}

export interface Values73 {
    k: number
    p: number
}

export interface IfelseIfElseIfGrade {
    values: Values74
}

export interface Values74 {
    k: number
    p: number
}

export interface IfelseNestedIfTemperature {
    values: Values75
}

export interface Values75 {
    k: number
    p: number
}

export interface IfelseNestedIfMinMax {
    values: Values76
}

export interface Values76 {
    k: number
    p: number
}

export interface Challenges18 {
    ifElseOddEven: IfElseOddEven
    JIfElseWages2: JifElseWages2
    JIfElseIfGrade2: JifElseIfGrade2
    JNestedIfTemperature2: JnestedIfTemperature2
    JNestedIfMaxOfThree: JnestedIfMaxOfThree
}

export interface IfElseOddEven {
    values: Values77
}

export interface Values77 {
    k: number
    p: number
}

export interface JifElseWages2 {
    values: Values78
}

export interface Values78 {
    k: number
    p: number
}

export interface JifElseIfGrade2 {
    values: Values79
}

export interface Values79 {
    k: number
    p: number
}

export interface JnestedIfTemperature2 {
    values: Values80
}

export interface Values80 {
    k: number
    p: number
}

export interface JnestedIfMaxOfThree {
    values: Values81
}

export interface Values81 {
    k: number
    p: number
}

export interface Coding19 {
    sortaSum: SortaSum
    twoAsOne: TwoAsOne
    greenTicket: GreenTicket
    without2: Without2
    in1To10: In1To10
}

export interface SortaSum {
    values: Values82
}

export interface Values82 {
    k: number
    p: number
}

export interface TwoAsOne {
    values: Values83
}

export interface Values83 {
    k: number
    p: number
}

export interface GreenTicket {
    values: Values84
}

export interface Values84 {
    k: number
    p: number
}

export interface Without2 {
    values: Values85
}

export interface Values85 {
    k: number
    p: number
}

export interface In1To10 {
    values: Values86
}

export interface Values86 {
    k: number
    p: number
}

export interface WhileLoops2 {
    Examples: Examples19
    Challenges: Challenges19
    Coding: Coding20
}

export interface Examples19 {
    "while_loops.divisor": WhileLoopsDivisor
    "while_loops.inputs": WhileLoopsInputs
    "while_loops.j_average": WhileLoopsJAverage
    "while_loops.j_check_adjacent": WhileLoopsJCheckAdjacent
    "while_loops.j_digits": WhileLoopsJDigits
    "while_loops.win_percentage": WhileLoopsWinPercentage
}

export interface WhileLoopsDivisor {
    values: Values87
}

export interface Values87 {
    k: number
    p: number
}

export interface WhileLoopsInputs {
    values: Values88
}

export interface Values88 {
    k: number
    p: number
}

export interface WhileLoopsJAverage {
    values: Values89
}

export interface Values89 {
    k: number
    p: number
}

export interface WhileLoopsJCheckAdjacent {
    values: Values90
}

export interface Values90 {
    k: number
    p: number
}

export interface WhileLoopsJDigits {
    values: Values91
}

export interface Values91 {
    k: number
    p: number
}

export interface WhileLoopsWinPercentage {
    values: Values92
}

export interface Values92 {
    k: number
    p: number
}

export interface Challenges19 {
    JLargestDivisor: JlargestDivisor
    JInput2: Jinput2
    JInput3: Jinput3
    JInput4: Jinput4
    JAverageEvenNums: JaverageEvenNums
    JAverageDouble: JaverageDouble
    JAdjacentConsecutives: JadjacentConsecutives
    JAdjacentGreater: JadjacentGreater
    JSumDigits: JsumDigits
    JReverseNumber: JreverseNumber
    JWinPercentageInput: JwinPercentageInput
    JWinPercentageWonEqual: JwinPercentageWonEqual
}

export interface JlargestDivisor {
    values: Values93
}

export interface Values93 {
    k: number
    p: number
}

export interface Jinput2 {
    values: Values94
}

export interface Values94 {
    k: number
    p: number
}

export interface Jinput3 {
    values: Values95
}

export interface Values95 {
    k: number
    p: number
}

export interface Jinput4 {
    values: Values96
}

export interface Values96 {
    k: number
    p: number
}

export interface JaverageEvenNums {
    values: Values97
}

export interface Values97 {
    k: number
    p: number
}

export interface JaverageDouble {
    values: Values98
}

export interface Values98 {
    k: number
    p: number
}

export interface JadjacentConsecutives {
    values: Values99
}

export interface Values99 {
    k: number
    p: number
}

export interface JadjacentGreater {
    values: Values100
}

export interface Values100 {
    k: number
    p: number
}

export interface JsumDigits {
    values: Values101
}

export interface Values101 {
    k: number
    p: number
}

export interface JreverseNumber {
    values: Values102
}

export interface Values102 {
    k: number
    p: number
}

export interface JwinPercentageInput {
    values: Values103
}

export interface Values103 {
    k: number
    p: number
}

export interface JwinPercentageWonEqual {
    values: Values104
}

export interface Values104 {
    k: number
    p: number
}

export interface Coding20 {
    while1_coding: While1Coding
    while2_coding: While2Coding
    while3_coding: While3Coding
    while4_coding: While4Coding
    while5_coding: While5Coding
    smallest_integer: SmallestInteger
}

export interface While1Coding {
    values: Values105
}

export interface Values105 {
    k: number
    p: number
}

export interface While2Coding {
    values: Values106
}

export interface Values106 {
    k: number
    p: number
}

export interface While3Coding {
    values: Values107
}

export interface Values107 {
    k: number
    p: number
}

export interface While4Coding {
    values: Values108
}

export interface Values108 {
    k: number
    p: number
}

export interface While5Coding {
    values: Values109
}

export interface Values109 {
    k: number
    p: number
}

export interface SmallestInteger {
    values: Values110
}

export interface Values110 {
    k: number
    p: number
}

export interface ForLoops2 {
    Examples: Examples20
    Challenges: Challenges20
    Coding: Coding21
}

export interface Examples20 {
    "for_loops.j_for_one": ForLoopsJForOne
    "for_loops.j_for_two": ForLoopsJForTwo
    "for_loops.j_for_three": ForLoopsJForThree
    "for_loops.j_squares": ForLoopsJSquares
}

export interface ForLoopsJForOne {
    values: Values111
}

export interface Values111 {
    k: number
    p: number
}

export interface ForLoopsJForTwo {
    values: Values112
}

export interface Values112 {
    k: number
    p: number
}

export interface ForLoopsJForThree {
    values: Values113
}

export interface Values113 {
    k: number
    p: number
}

export interface ForLoopsJSquares {
    values: Values114
}

export interface Values114 {
    k: number
    p: number
}

export interface Challenges20 {
    JForOne2: JforOne2
    JForTwo2: JforTwo2
    JForThree2: JforThree2
    JWriteSquaresOdd: JwriteSquaresOdd
    JWriteSquaresRange: JwriteSquaresRange
}

export interface JforOne2 {
    values: Values115
}

export interface Values115 {
    k: number
    p: number
}

export interface JforTwo2 {
    values: Values116
}

export interface Values116 {
    k: number
    p: number
}

export interface JforThree2 {
    values: Values117
}

export interface Values117 {
    k: number
    p: number
}

export interface JwriteSquaresOdd {
    values: Values118
}

export interface Values118 {
    k: number
    p: number
}

export interface JwriteSquaresRange {
    values: Values119
}

export interface Values119 {
    k: number
    p: number
}

export interface Coding21 {
    for1_coding: For1Coding
    for2_coding: For2Coding
    for3_coding: For3Coding
    for4_coding: For4Coding
    sum_square_difference: SumSquareDifference
    largest_prime_factor: LargestPrimeFactor
    largest_palindrome_product: LargestPalindromeProduct
}

export interface For1Coding {
    values: Values120
}

export interface Values120 {
    k: number
    p: number
}

export interface For2Coding {
    values: Values121
}

export interface Values121 {
    k: number
    p: number
}

export interface For3Coding {
    values: Values122
}

export interface Values122 {
    k: number
    p: number
}

export interface For4Coding {
    values: Values123
}

export interface Values123 {
    k: number
    p: number
}

export interface SumSquareDifference {
    values: Values124
}

export interface Values124 {
    k: number
    p: number
}

export interface LargestPrimeFactor {
    values: Values125
}

export interface Values125 {
    k: number
    p: number
}

export interface LargestPalindromeProduct {
    values: Values126
}

export interface Values126 {
    k: number
    p: number
}

export interface ObjectsAndClasses2 {
    Examples: Examples21
    Challenges: Challenges21
    Coding: Coding22
}

export interface Examples21 {
    "objects.classes.point": ObjectsClassesPoint
    "objects.classes.tv": ObjectsClassesTv
    "objects.classes.account": ObjectsClassesAccount
    "objects.classes.loan": ObjectsClassesLoan
}

export interface ObjectsClassesPoint {
    values: Values127
}

export interface Values127 {
    k: number
    p: number
}

export interface ObjectsClassesTv {
    values: Values128
}

export interface Values128 {
    k: number
    p: number
}

export interface ObjectsClassesAccount {
    values: Values129
}

export interface Values129 {
    k: number
    p: number
}

export interface ObjectsClassesLoan {
    values: Values130
}

export interface Values130 {
    k: number
    p: number
}

export interface Challenges21 {
    PointTester2: PointTester2
    TVTester2: Tvtester2
    Transactions2: Transactions2
    LoanTester2: LoanTester2
}

export interface PointTester2 {
    values: Values131
}

export interface Values131 {
    k: number
    p: number
}

export interface Tvtester2 {
    values: Values132
}

export interface Values132 {
    k: number
    p: number
}

export interface Transactions2 {
    values: Values133
}

export interface Values133 {
    k: number
    p: number
}

export interface LoanTester2 {
    values: Values134
}

export interface Values134 {
    k: number
    p: number
}

export interface Coding22 {
    object_classes_1: ObjectClasses1
    object_classes_2: ObjectClasses2
    object_classes_3: ObjectClasses3
    object_classes_4: ObjectClasses4
}

export interface ObjectClasses1 {
    values: Values135
}

export interface Values135 {
    k: number
    p: number
}

export interface ObjectClasses2 {
    values: Values136
}

export interface Values136 {
    k: number
    p: number
}

export interface ObjectClasses3 {
    values: Values137
}

export interface Values137 {
    k: number
    p: number
}

export interface ObjectClasses4 {
    values: Values138
}

export interface Values138 {
    k: number
    p: number
}

export interface NestedLoops2 {
    Examples: Examples22
    Challenges: Challenges22
    Coding: Coding23
}

export interface Examples22 {
    "nested_for.star_patterns": NestedForStarPatterns
    "nested_for.repeated_sequence": NestedForRepeatedSequence
}

export interface NestedForStarPatterns {
    values: Values139
}

export interface Values139 {
    k: number
    p: number
}

export interface NestedForRepeatedSequence {
    values: Values140
}

export interface Values140 {
    k: number
    p: number
}

export interface Challenges22 {
    JStars2: Jstars2
    JRepeatedSequence2: JrepeatedSequence2
}

export interface Jstars2 {
    values: Values141
}

export interface Values141 {
    k: number
    p: number
}

export interface JrepeatedSequence2 {
    values: Values142
}

export interface Values142 {
    k: number
    p: number
}

export interface Coding23 {
    nested_loops_1: NestedLoops1
    nested_loops_2: NestedLoops22
    symmetrical_array: SymmetricalArray
}

export interface NestedLoops1 {
    values: Values143
}

export interface Values143 {
    k: number
    p: number
}

export interface NestedLoops22 {
    values: Values144
}

export interface Values144 {
    k: number
    p: number
}

export interface SymmetricalArray {
    values: Values145
}

export interface Values145 {
    k: number
    p: number
}

export interface Arrays2 {
    Examples: Examples23
    Challenges: Challenges23
    Coding: Coding24
}

export interface Examples23 {
    "arrays.j_array_basic": ArraysJArrayBasic
    "arrays.j_array_fill": ArraysJArrayFill
    "arrays.j_array_change": ArraysJArrayChange
    "arrays.j_array_process_elements": ArraysJArrayProcessElements
    "arrays.j_array_min_max": ArraysJArrayMinMax
    "arrays.j_temperature": ArraysJTemperature
    "arrays.j_array_rotate": ArraysJArrayRotate
    "arrays.j_search_array": ArraysJSearchArray
}

export interface ArraysJArrayBasic {
    values: Values146
}

export interface Values146 {
    k: number
    p: number
}

export interface ArraysJArrayFill {
    values: Values147
}

export interface Values147 {
    k: number
    p: number
}

export interface ArraysJArrayChange {
    values: Values148
}

export interface Values148 {
    k: number
    p: number
}

export interface ArraysJArrayProcessElements {
    values: Values149
}

export interface Values149 {
    k: number
    p: number
}

export interface ArraysJArrayMinMax {
    values: Values150
}

export interface Values150 {
    k: number
    p: number
}

export interface ArraysJTemperature {
    values: Values151
}

export interface Values151 {
    k: number
    p: number
}

export interface ArraysJArrayRotate {
    values: Values152
}

export interface Values152 {
    k: number
    p: number
}

export interface ArraysJSearchArray {
    values: Values153
}

export interface Values153 {
    k: number
    p: number
}

export interface Challenges23 {
    JArrayBasic2: JarrayBasic2
    JArrayBasic3: JarrayBasic3
    JArrayFillUserInput: JarrayFillUserInput
    JArraySwapAdjacentElements: JarraySwapAdjacentElements
    JAverageArrayElements: JaverageArrayElements
    JArrayMin: JarrayMin
    JTemperatureListDaysAboveThreshold: JtemperatureListDaysAboveThreshold
    JArrayRotateLeftTwice: JarrayRotateLeftTwice
    JArrayRotateRight: JarrayRotateRight
    JArrayRotateRightTwice: JarrayRotateRightTwice
    JSearchArrayTotalCounts: JsearchArrayTotalCounts
    JSearchArrayCountsEach: JsearchArrayCountsEach
}

export interface JarrayBasic2 {
    values: Values154
}

export interface Values154 {
    k: number
    p: number
}

export interface JarrayBasic3 {
    values: Values155
}

export interface Values155 {
    k: number
    p: number
}

export interface JarrayFillUserInput {
    values: Values156
}

export interface Values156 {
    k: number
    p: number
}

export interface JarraySwapAdjacentElements {
    values: Values157
}

export interface Values157 {
    k: number
    p: number
}

export interface JaverageArrayElements {
    values: Values158
}

export interface Values158 {
    k: number
    p: number
}

export interface JarrayMin {
    values: Values159
}

export interface Values159 {
    k: number
    p: number
}

export interface JtemperatureListDaysAboveThreshold {
    values: Values160
}

export interface Values160 {
    k: number
    p: number
}

export interface JarrayRotateLeftTwice {
    values: Values161
}

export interface Values161 {
    k: number
    p: number
}

export interface JarrayRotateRight {
    values: Values162
}

export interface Values162 {
    k: number
    p: number
}

export interface JarrayRotateRightTwice {
    values: Values163
}

export interface Values163 {
    k: number
    p: number
}

export interface JsearchArrayTotalCounts {
    values: Values164
}

export interface Values164 {
    k: number
    p: number
}

export interface JsearchArrayCountsEach {
    values: Values165
}

export interface Values165 {
    k: number
    p: number
}

export interface Coding24 {
    arrays_1: Arrays1
    arrays_2: Arrays22
    arrays_3: Arrays3
    array_4: Array4
    fixing_order_of_numbers: FixingOrderOfNumbers
}

export interface Arrays1 {
    values: Values166
}

export interface Values166 {
    k: number
    p: number
}

export interface Arrays22 {
    values: Values167
}

export interface Values167 {
    k: number
    p: number
}

export interface Arrays3 {
    values: Values168
}

export interface Values168 {
    k: number
    p: number
}

export interface Array4 {
    values: Values169
}

export interface Values169 {
    k: number
    p: number
}

export interface FixingOrderOfNumbers {
    values: Values170
}

export interface Values170 {
    k: number
    p: number
}

export interface TwoDimensionalArrays2 {
    Examples: Examples24
    Challenges: Challenges24
    Coding: Coding25
}

export interface Examples24 {
    "arrays2d.j_array2d_basic": Arrays2dJArray2dBasic
    "arrays2d.j_print_medals": Arrays2dJPrintMedals
    "arrays2d.j_soda_survery": Arrays2dJSodaSurvery
}

export interface Arrays2dJArray2dBasic {
    values: Values171
}

export interface Values171 {
    k: number
    p: number
}

export interface Arrays2dJPrintMedals {
    values: Values172
}

export interface Values172 {
    k: number
    p: number
}

export interface Arrays2dJSodaSurvery {
    values: Values173
}

export interface Values173 {
    k: number
    p: number
}

export interface Challenges24 {
    JArrays2dBasic2: Jarrays2dBasic2
    JArrays2dBasic3: Jarrays2dBasic3
    JPrintMedalsRowColumnTotal: JprintMedalsRowColumnTotal
    JSodaSurverySodaAvg: JsodaSurverySodaAvg
    JSodaSurverySodaRespondentAvg: JsodaSurverySodaRespondentAvg
}

export interface Jarrays2dBasic2 {
    values: Values174
}

export interface Values174 {
    k: number
    p: number
}

export interface Jarrays2dBasic3 {
    values: Values175
}

export interface Values175 {
    k: number
    p: number
}

export interface JprintMedalsRowColumnTotal {
    values: Values176
}

export interface Values176 {
    k: number
    p: number
}

export interface JsodaSurverySodaAvg {
    values: Values177
}

export interface Values177 {
    k: number
    p: number
}

export interface JsodaSurverySodaRespondentAvg {
    values: Values178
}

export interface Values178 {
    k: number
    p: number
}

export interface Coding25 {
    pcrs_2d_arrays_1: Pcrs2dArrays1
    pcrs_2d_arrays_2: Pcrs2dArrays2
    pcrs_2d_arrays_3: Pcrs2dArrays3
}

export interface Pcrs2dArrays1 {
    values: Values179
}

export interface Values179 {
    k: number
    p: number
}

export interface Pcrs2dArrays2 {
    values: Values180
}

export interface Values180 {
    k: number
    p: number
}

export interface Pcrs2dArrays3 {
    values: Values181
}

export interface Values181 {
    k: number
    p: number
}

export interface ExceptionHandling2 {
    Examples: Examples25
    Challenges: Challenges25
    Coding: Coding26
}

export interface Examples25 {
    "exceptions.j_check_age": ExceptionsJCheckAge
    "exceptions.j_check_producut_code": ExceptionsJCheckProducutCode
}

export interface ExceptionsJCheckAge {
    values: Values182
}

export interface Values182 {
    k: number
    p: number
}

export interface ExceptionsJCheckProducutCode {
    values: Values183
}

export interface Values183 {
    k: number
    p: number
}

export interface Challenges25 {
    JCheckAge2: JcheckAge2
    JCheckProductCode2: JcheckProductCode2
}

export interface JcheckAge2 {
    values: Values184
}

export interface Values184 {
    k: number
    p: number
}

export interface JcheckProductCode2 {
    values: Values185
}

export interface Values185 {
    k: number
    p: number
}

export interface Coding26 { }

export interface FileProcessing2 {
    Examples: Examples26
    Challenges: Challenges26
    Coding: Coding27
}

export interface Examples26 {
    "files.j_work_hours": FilesJWorkHours
    "files.j_input_stat": FilesJInputStat
}

export interface FilesJWorkHours {
    values: Values186
}

export interface Values186 {
    k: number
    p: number
}

export interface FilesJInputStat {
    values: Values187
}

export interface Values187 {
    k: number
    p: number
}

export interface Challenges26 {
    JWorkHours2: JworkHours2
    JInputStat2: JinputStat2
}

export interface JworkHours2 {
    values: Values188
}

export interface Values188 {
    k: number
    p: number
}

export interface JinputStat2 {
    values: Values189
}

export interface Values189 {
    k: number
    p: number
}

export interface Coding27 { }

export interface ArrayLists2 {
    Examples: Examples27
    Challenges: Challenges27
    Coding: Coding28
}

export interface Examples27 {
    "arraylist.vocabulary": ArraylistVocabulary
}

export interface ArraylistVocabulary {
    values: Values190
}

export interface Values190 {
    k: number
    p: number
}

export interface Challenges27 {
    JVocabulary2: Jvocabulary2
}

export interface Jvocabulary2 {
    values: Values191
}

export interface Values191 {
    k: number
    p: number
}

export interface Coding28 {
    array_lst_1: ArrayLst1
}

export interface ArrayLst1 {
    values: Values192
}

export interface Values192 {
    k: number
    p: number
}

export interface Inheritance2 {
    Examples: Examples28
    Challenges: Challenges28
    Coding: Coding29
}

export interface Examples28 {
    "inheritance.animals": InheritanceAnimals
    "inheritance.point": InheritancePoint
}

export interface InheritanceAnimals {
    values: Values193
}

export interface Values193 {
    k: number
    p: number
}

export interface InheritancePoint {
    values: Values194
}

export interface Values194 {
    k: number
    p: number
}

export interface Challenges28 {
    AnimalTester2: AnimalTester2
    InheritancePointTester2: InheritancePointTester2
}

export interface AnimalTester2 {
    values: Values195
}

export interface Values195 {
    k: number
    p: number
}

export interface InheritancePointTester2 {
    values: Values196
}

export interface Values196 {
    k: number
    p: number
}

export interface Coding29 {
    inheritance_1: Inheritance1
    inheritance_2: Inheritance22
}

export interface Inheritance1 {
    values: Values197
}

export interface Values197 {
    k: number
    p: number
}

export interface Inheritance22 {
    values: Values198
}

export interface Values198 {
    k: number
    p: number
}

export interface Group2 {
    name: string
    state: State
    learnerIds: string[]
}



export interface Topics2 {
    "Variables and Operations": VariablesAndOperations3
    Strings: Strings3
    "Boolean Expressions": BooleanExpressions3
    "If-Else": IfElse3
    "While Loops": WhileLoops3
    "For Loops": ForLoops3
    "Objects and Classes": ObjectsAndClasses3
    "Nested Loops": NestedLoops3
    Arrays: Arrays4
    "Two-Dimensional Arrays": TwoDimensionalArrays3
    "Exception handling": ExceptionHandling3
    "File processing": FileProcessing3
    ArrayLists: ArrayLists3
    Inheritance: Inheritance3
}

export interface VariablesAndOperations3 {
    values: Values199
}

export interface Values199 {
    Examples: Examples29
    Challenges: Challenges29
    Coding: Coding30
}

export interface Examples29 {
    k: number
    p: number
}

export interface Challenges29 {
    k: number
    p: number
}

export interface Coding30 {
    k: number
    p: number
}

export interface Strings3 {
    values: Values200
}

export interface Values200 {
    Examples: Examples30
    Challenges: Challenges30
    Coding: Coding31
}

export interface Examples30 {
    k: number
    p: number
}

export interface Challenges30 {
    k: number
    p: number
}

export interface Coding31 {
    k: number
    p: number
}

export interface BooleanExpressions3 {
    values: Values201
}

export interface Values201 {
    Examples: Examples31
    Challenges: Challenges31
    Coding: Coding32
}

export interface Examples31 {
    k: number
    p: number
}

export interface Challenges31 {
    k: number
    p: number
}

export interface Coding32 {
    k: number
    p: number
}

export interface IfElse3 {
    values: Values202
}

export interface Values202 {
    Examples: Examples32
    Challenges: Challenges32
    Coding: Coding33
}

export interface Examples32 {
    k: number
    p: number
}

export interface Challenges32 {
    k: number
    p: number
}

export interface Coding33 {
    k: number
    p: number
}

export interface WhileLoops3 {
    values: Values203
}

export interface Values203 {
    Examples: Examples33
    Challenges: Challenges33
    Coding: Coding34
}

export interface Examples33 {
    k: number
    p: number
}

export interface Challenges33 {
    k: number
    p: number
}

export interface Coding34 {
    k: number
    p: number
}

export interface ForLoops3 {
    values: Values204
}

export interface Values204 {
    Examples: Examples34
    Challenges: Challenges34
    Coding: Coding35
}

export interface Examples34 {
    k: number
    p: number
}

export interface Challenges34 {
    k: number
    p: number
}

export interface Coding35 {
    k: number
    p: number
}

export interface ObjectsAndClasses3 {
    values: Values205
}

export interface Values205 {
    Examples: Examples35
    Challenges: Challenges35
    Coding: Coding36
}

export interface Examples35 {
    k: number
    p: number
}

export interface Challenges35 {
    k: number
    p: number
}

export interface Coding36 {
    k: number
    p: number
}

export interface NestedLoops3 {
    values: Values206
}

export interface Values206 {
    Examples: Examples36
    Challenges: Challenges36
    Coding: Coding37
}

export interface Examples36 {
    k: number
    p: number
}

export interface Challenges36 {
    k: number
    p: number
}

export interface Coding37 {
    k: number
    p: number
}

export interface Arrays4 {
    values: Values207
}

export interface Values207 {
    Examples: Examples37
    Challenges: Challenges37
    Coding: Coding38
}

export interface Examples37 {
    k: number
    p: number
}

export interface Challenges37 {
    k: number
    p: number
}

export interface Coding38 {
    k: number
    p: number
}

export interface TwoDimensionalArrays3 {
    values: Values208
}

export interface Values208 {
    Examples: Examples38
    Challenges: Challenges38
    Coding: Coding39
}

export interface Examples38 {
    k: number
    p: number
}

export interface Challenges38 {
    k: number
    p: number
}

export interface Coding39 {
    k: number
    p: number
}

export interface ExceptionHandling3 {
    values: Values209
}

export interface Values209 {
    Examples: Examples39
    Challenges: Challenges39
    Coding: Coding40
}

export interface Examples39 {
    k: number
    p: number
}

export interface Challenges39 {
    k: number
    p: number
}

export interface Coding40 {
    k: number
    p: number
}

export interface FileProcessing3 {
    values: Values210
}

export interface Values210 {
    Examples: Examples40
    Challenges: Challenges40
    Coding: Coding41
}

export interface Examples40 {
    k: number
    p: number
}

export interface Challenges40 {
    k: number
    p: number
}

export interface Coding41 {
    k: number
    p: number
}

export interface ArrayLists3 {
    values: Values211
}

export interface Values211 {
    Examples: Examples41
    Challenges: Challenges41
    Coding: Coding42
}

export interface Examples41 {
    k: number
    p: number
}

export interface Challenges41 {
    k: number
    p: number
}

export interface Coding42 {
    k: number
    p: number
}

export interface Inheritance3 {
    values: Values212
}

export interface Values212 {
    Examples: Examples42
    Challenges: Challenges42
    Coding: Coding43
}

export interface Examples42 {
    k: number
    p: number
}

export interface Challenges42 {
    k: number
    p: number
}

export interface Coding43 {
    k: number
    p: number
}

export interface Activities3 {
    "Variables and Operations": VariablesAndOperations4
    Strings: Strings4
    "Boolean Expressions": BooleanExpressions4
    "If-Else": IfElse4
    "While Loops": WhileLoops4
    "For Loops": ForLoops4
    "Objects and Classes": ObjectsAndClasses4
    "Nested Loops": NestedLoops4
    Arrays: Arrays5
    "Two-Dimensional Arrays": TwoDimensionalArrays4
    "Exception handling": ExceptionHandling4
    "File processing": FileProcessing4
    ArrayLists: ArrayLists4
    Inheritance: Inheritance4
}

export interface VariablesAndOperations4 {
    Examples: Examples43
    Challenges: Challenges43
    Coding: Coding44
}

export interface Examples43 {
    "artithmetic.inc_dec_operators": ArtithmeticIncDecOperators2
    "arithmetic.f_to_c_conversion": ArithmeticFToCConversion2
    "arithmetic.time_conversion": ArithmeticTimeConversion2
    "artihmetic.vending_machine": ArtihmeticVendingMachine2
    "arithmetic.bmi_calculator": ArithmeticBmiCalculator2
    "arithmetic.pythagorean_theorem": ArithmeticPythagoreanTheorem2
}

export interface ArtithmeticIncDecOperators2 {
    values: Values213
}

export interface Values213 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ArithmeticFToCConversion2 {
    values: Values214
}

export interface Values214 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ArithmeticTimeConversion2 {
    values: Values215
}

export interface Values215 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ArtihmeticVendingMachine2 {
    values: Values216
}

export interface Values216 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ArithmeticBmiCalculator2 {
    values: Values217
}

export interface Values217 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ArithmeticPythagoreanTheorem2 {
    values: Values218
}

export interface Values218 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Challenges43 {
    JDecInc2: JdecInc22
    JDecInc3: JdecInc32
    FahrenheitToCelsius: FahrenheitToCelsius2
    DisplayTime2: DisplayTime22
    VendingMachine2: VendingMachine22
    BmiCalculator2: BmiCalculator22
    PythagoreanTheorem2: PythagoreanTheorem22
}

export interface JdecInc22 {
    values: Values219
}

export interface Values219 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JdecInc32 {
    values: Values220
}

export interface Values220 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface FahrenheitToCelsius2 {
    values: Values221
}

export interface Values221 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface DisplayTime22 {
    values: Values222
}

export interface Values222 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface VendingMachine22 {
    values: Values223
}

export interface Values223 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface BmiCalculator22 {
    values: Values224
}

export interface Values224 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface PythagoreanTheorem22 {
    values: Values225
}

export interface Values225 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Coding44 {
    second_in_days: SecondInDays2
    rectangle_perimeter: RectanglePerimeter2
    days_to_week_conversion: DaysToWeekConversion2
    percentage_correctness: PercentageCorrectness2
    compute_average: ComputeAverage2
}

export interface SecondInDays2 {
    values: Values226
}

export interface Values226 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface RectanglePerimeter2 {
    values: Values227
}

export interface Values227 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface DaysToWeekConversion2 {
    values: Values228
}

export interface Values228 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface PercentageCorrectness2 {
    values: Values229
}

export interface Values229 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ComputeAverage2 {
    values: Values230
}

export interface Values230 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Strings4 {
    Examples: Examples44
    Challenges: Challenges44
    Coding: Coding45
}

export interface Examples44 {
    "strings.substring": StringsSubstring2
    "strings.addition": StringsAddition2
    "strings.escape_chars": StringsEscapeChars2
    "strings.equals": StringsEquals2
    "strings.charAt": StringsCharAt2
}

export interface StringsSubstring2 {
    values: Values231
}

export interface Values231 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface StringsAddition2 {
    values: Values232
}

export interface Values232 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface StringsEscapeChars2 {
    values: Values233
}

export interface Values233 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface StringsEquals2 {
    values: Values234
}

export interface Values234 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface StringsCharAt2 {
    values: Values235
}

export interface Values235 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Challenges44 {
    Initials2: Initials22
    Initials3: Initials32
    StringAddition2: StringAddition22
    JEscapeChar2: JescapeChar22
    JEscapeChar3: JescapeChar32
    JStringEqual2: JstringEqual22
    JCharAt2: JcharAt22
}

export interface Initials22 {
    values: Values236
}

export interface Values236 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Initials32 {
    values: Values237
}

export interface Values237 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface StringAddition22 {
    values: Values238
}

export interface Values238 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JescapeChar22 {
    values: Values239
}

export interface Values239 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JescapeChar32 {
    values: Values240
}

export interface Values240 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JstringEqual22 {
    values: Values241
}

export interface Values241 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JcharAt22 {
    values: Values242
}

export interface Values242 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Coding45 {
    first_half: FirstHalf2
    non_start: NonStart2
    make_out_word: MakeOutWord2
    repeat_last_char: RepeatLastChar2
    first_last_swap: FirstLastSwap2
    end_characters: EndCharacters2
    "is_is_substring_or_ not_is_not_substring": IsIsSubstringOrNotIsNotSubstring2
}

export interface FirstHalf2 {
    values: Values243
}

export interface Values243 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface NonStart2 {
    values: Values244
}

export interface Values244 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface MakeOutWord2 {
    values: Values245
}

export interface Values245 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface RepeatLastChar2 {
    values: Values246
}

export interface Values246 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface FirstLastSwap2 {
    values: Values247
}

export interface Values247 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface EndCharacters2 {
    values: Values248
}

export interface Values248 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface IsIsSubstringOrNotIsNotSubstring2 {
    values: Values249
}

export interface Values249 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface BooleanExpressions4 {
    Examples: Examples45
    Challenges: Challenges45
    Coding: Coding46
}

export interface Examples45 {
    "booleans.phone_age": BooleansPhoneAge2
    "booleans.fail_course": BooleansFailCourse2
    "booleans.rent_car": BooleansRentCar2
    "booleans.hot_dry": BooleansHotDry2
    "booleans.three_booleans": BooleansThreeBooleans2
}

export interface BooleansPhoneAge2 {
    values: Values250
}

export interface Values250 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface BooleansFailCourse2 {
    values: Values251
}

export interface Values251 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface BooleansRentCar2 {
    values: Values252
}

export interface Values252 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface BooleansHotDry2 {
    values: Values253
}

export interface Values253 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface BooleansThreeBooleans2 {
    values: Values254
}

export interface Values254 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Challenges45 {
    JPhoneAge2: JphoneAge22
    JFailCourse2: JfailCourse22
    JFailCourse3: JfailCourse32
    JRentCar2: JrentCar22
    JRentCar3: JrentCar32
    JBooleanDryHot2: JbooleanDryHot22
    JBooleanDryHot3: JbooleanDryHot32
    JBooleanDryHot4: JbooleanDryHot42
    JThreeBoolean2: JthreeBoolean22
    JThreeBoolean3: JthreeBoolean32
}

export interface JphoneAge22 {
    values: Values255
}

export interface Values255 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JfailCourse22 {
    values: Values256
}

export interface Values256 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JfailCourse32 {
    values: Values257
}

export interface Values257 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JrentCar22 {
    values: Values258
}

export interface Values258 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JrentCar32 {
    values: Values259
}

export interface Values259 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JbooleanDryHot22 {
    values: Values260
}

export interface Values260 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JbooleanDryHot32 {
    values: Values261
}

export interface Values261 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JbooleanDryHot42 {
    values: Values262
}

export interface Values262 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JthreeBoolean22 {
    values: Values263
}

export interface Values263 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JthreeBoolean32 {
    values: Values264
}

export interface Values264 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Coding46 {
    love6: Love62
    is_special: IsSpecial2
    check_start_end_character: CheckStartEndCharacter2
    squirrel_play: SquirrelPlay2
    in_order: InOrder2
}

export interface Love62 {
    values: Values265
}

export interface Values265 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface IsSpecial2 {
    values: Values266
}

export interface Values266 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface CheckStartEndCharacter2 {
    values: Values267
}

export interface Values267 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface SquirrelPlay2 {
    values: Values268
}

export interface Values268 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface InOrder2 {
    values: Values269
}

export interface Values269 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface IfElse4 {
    Examples: Examples46
    Challenges: Challenges46
    Coding: Coding47
}

export interface Examples46 {
    "ifelse.if_else_num": IfelseIfElseNum2
    "ifelse.if_else_wage": IfelseIfElseWage2
    "ifelse.if_else_if_grade": IfelseIfElseIfGrade2
    "ifelse.nested_if_temperature": IfelseNestedIfTemperature2
    "ifelse.nested_if_min_max": IfelseNestedIfMinMax2
}

export interface IfelseIfElseNum2 {
    values: Values270
}

export interface Values270 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface IfelseIfElseWage2 {
    values: Values271
}

export interface Values271 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface IfelseIfElseIfGrade2 {
    values: Values272
}

export interface Values272 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface IfelseNestedIfTemperature2 {
    values: Values273
}

export interface Values273 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface IfelseNestedIfMinMax2 {
    values: Values274
}

export interface Values274 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Challenges46 {
    ifElseOddEven: IfElseOddEven2
    JIfElseWages2: JifElseWages22
    JIfElseIfGrade2: JifElseIfGrade22
    JNestedIfTemperature2: JnestedIfTemperature22
    JNestedIfMaxOfThree: JnestedIfMaxOfThree2
}

export interface IfElseOddEven2 {
    values: Values275
}

export interface Values275 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JifElseWages22 {
    values: Values276
}

export interface Values276 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JifElseIfGrade22 {
    values: Values277
}

export interface Values277 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JnestedIfTemperature22 {
    values: Values278
}

export interface Values278 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JnestedIfMaxOfThree2 {
    values: Values279
}

export interface Values279 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Coding47 {
    sortaSum: SortaSum2
    twoAsOne: TwoAsOne2
    greenTicket: GreenTicket2
    without2: Without22
    in1To10: In1To102
}

export interface SortaSum2 {
    values: Values280
}

export interface Values280 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface TwoAsOne2 {
    values: Values281
}

export interface Values281 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface GreenTicket2 {
    values: Values282
}

export interface Values282 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Without22 {
    values: Values283
}

export interface Values283 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface In1To102 {
    values: Values284
}

export interface Values284 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface WhileLoops4 {
    Examples: Examples47
    Challenges: Challenges47
    Coding: Coding48
}

export interface Examples47 {
    "while_loops.divisor": WhileLoopsDivisor2
    "while_loops.inputs": WhileLoopsInputs2
    "while_loops.j_average": WhileLoopsJAverage2
    "while_loops.j_check_adjacent": WhileLoopsJCheckAdjacent2
    "while_loops.j_digits": WhileLoopsJDigits2
    "while_loops.win_percentage": WhileLoopsWinPercentage2
}

export interface WhileLoopsDivisor2 {
    values: Values285
}

export interface Values285 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface WhileLoopsInputs2 {
    values: Values286
}

export interface Values286 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface WhileLoopsJAverage2 {
    values: Values287
}

export interface Values287 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface WhileLoopsJCheckAdjacent2 {
    values: Values288
}

export interface Values288 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface WhileLoopsJDigits2 {
    values: Values289
}

export interface Values289 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface WhileLoopsWinPercentage2 {
    values: Values290
}

export interface Values290 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Challenges47 {
    JLargestDivisor: JlargestDivisor2
    JInput2: Jinput22
    JInput3: Jinput32
    JInput4: Jinput42
    JAverageEvenNums: JaverageEvenNums2
    JAverageDouble: JaverageDouble2
    JAdjacentConsecutives: JadjacentConsecutives2
    JAdjacentGreater: JadjacentGreater2
    JSumDigits: JsumDigits2
    JReverseNumber: JreverseNumber2
    JWinPercentageInput: JwinPercentageInput2
    JWinPercentageWonEqual: JwinPercentageWonEqual2
}

export interface JlargestDivisor2 {
    values: Values291
}

export interface Values291 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Jinput22 {
    values: Values292
}

export interface Values292 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Jinput32 {
    values: Values293
}

export interface Values293 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Jinput42 {
    values: Values294
}

export interface Values294 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JaverageEvenNums2 {
    values: Values295
}

export interface Values295 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JaverageDouble2 {
    values: Values296
}

export interface Values296 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JadjacentConsecutives2 {
    values: Values297
}

export interface Values297 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JadjacentGreater2 {
    values: Values298
}

export interface Values298 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JsumDigits2 {
    values: Values299
}

export interface Values299 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JreverseNumber2 {
    values: Values300
}

export interface Values300 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JwinPercentageInput2 {
    values: Values301
}

export interface Values301 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JwinPercentageWonEqual2 {
    values: Values302
}

export interface Values302 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Coding48 {
    while1_coding: While1Coding2
    while2_coding: While2Coding2
    while3_coding: While3Coding2
    while4_coding: While4Coding2
    while5_coding: While5Coding2
    smallest_integer: SmallestInteger2
}

export interface While1Coding2 {
    values: Values303
}

export interface Values303 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface While2Coding2 {
    values: Values304
}

export interface Values304 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface While3Coding2 {
    values: Values305
}

export interface Values305 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface While4Coding2 {
    values: Values306
}

export interface Values306 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface While5Coding2 {
    values: Values307
}

export interface Values307 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface SmallestInteger2 {
    values: Values308
}

export interface Values308 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ForLoops4 {
    Examples: Examples48
    Challenges: Challenges48
    Coding: Coding49
}

export interface Examples48 {
    "for_loops.j_for_one": ForLoopsJForOne2
    "for_loops.j_for_two": ForLoopsJForTwo2
    "for_loops.j_for_three": ForLoopsJForThree2
    "for_loops.j_squares": ForLoopsJSquares2
}

export interface ForLoopsJForOne2 {
    values: Values309
}

export interface Values309 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ForLoopsJForTwo2 {
    values: Values310
}

export interface Values310 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ForLoopsJForThree2 {
    values: Values311
}

export interface Values311 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ForLoopsJSquares2 {
    values: Values312
}

export interface Values312 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Challenges48 {
    JForOne2: JforOne22
    JForTwo2: JforTwo22
    JForThree2: JforThree22
    JWriteSquaresOdd: JwriteSquaresOdd2
    JWriteSquaresRange: JwriteSquaresRange2
}

export interface JforOne22 {
    values: Values313
}

export interface Values313 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JforTwo22 {
    values: Values314
}

export interface Values314 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JforThree22 {
    values: Values315
}

export interface Values315 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JwriteSquaresOdd2 {
    values: Values316
}

export interface Values316 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JwriteSquaresRange2 {
    values: Values317
}

export interface Values317 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Coding49 {
    for1_coding: For1Coding2
    for2_coding: For2Coding2
    for3_coding: For3Coding2
    for4_coding: For4Coding2
    sum_square_difference: SumSquareDifference2
    largest_prime_factor: LargestPrimeFactor2
    largest_palindrome_product: LargestPalindromeProduct2
}

export interface For1Coding2 {
    values: Values318
}

export interface Values318 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface For2Coding2 {
    values: Values319
}

export interface Values319 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface For3Coding2 {
    values: Values320
}

export interface Values320 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface For4Coding2 {
    values: Values321
}

export interface Values321 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface SumSquareDifference2 {
    values: Values322
}

export interface Values322 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface LargestPrimeFactor2 {
    values: Values323
}

export interface Values323 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface LargestPalindromeProduct2 {
    values: Values324
}

export interface Values324 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ObjectsAndClasses4 {
    Examples: Examples49
    Challenges: Challenges49
    Coding: Coding50
}

export interface Examples49 {
    "objects.classes.point": ObjectsClassesPoint2
    "objects.classes.tv": ObjectsClassesTv2
    "objects.classes.account": ObjectsClassesAccount2
    "objects.classes.loan": ObjectsClassesLoan2
}

export interface ObjectsClassesPoint2 {
    values: Values325
}

export interface Values325 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ObjectsClassesTv2 {
    values: Values326
}

export interface Values326 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ObjectsClassesAccount2 {
    values: Values327
}

export interface Values327 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ObjectsClassesLoan2 {
    values: Values328
}

export interface Values328 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Challenges49 {
    PointTester2: PointTester22
    TVTester2: Tvtester22
    Transactions2: Transactions22
    LoanTester2: LoanTester22
}

export interface PointTester22 {
    values: Values329
}

export interface Values329 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Tvtester22 {
    values: Values330
}

export interface Values330 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Transactions22 {
    values: Values331
}

export interface Values331 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface LoanTester22 {
    values: Values332
}

export interface Values332 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Coding50 {
    object_classes_1: ObjectClasses12
    object_classes_2: ObjectClasses22
    object_classes_3: ObjectClasses32
    object_classes_4: ObjectClasses42
}

export interface ObjectClasses12 {
    values: Values333
}

export interface Values333 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ObjectClasses22 {
    values: Values334
}

export interface Values334 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ObjectClasses32 {
    values: Values335
}

export interface Values335 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ObjectClasses42 {
    values: Values336
}

export interface Values336 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface NestedLoops4 {
    Examples: Examples50
    Challenges: Challenges50
    Coding: Coding51
}

export interface Examples50 {
    "nested_for.star_patterns": NestedForStarPatterns2
    "nested_for.repeated_sequence": NestedForRepeatedSequence2
}

export interface NestedForStarPatterns2 {
    values: Values337
}

export interface Values337 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface NestedForRepeatedSequence2 {
    values: Values338
}

export interface Values338 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Challenges50 {
    JStars2: Jstars22
    JRepeatedSequence2: JrepeatedSequence22
}

export interface Jstars22 {
    values: Values339
}

export interface Values339 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JrepeatedSequence22 {
    values: Values340
}

export interface Values340 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Coding51 {
    nested_loops_1: NestedLoops12
    nested_loops_2: NestedLoops23
    symmetrical_array: SymmetricalArray2
}

export interface NestedLoops12 {
    values: Values341
}

export interface Values341 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface NestedLoops23 {
    values: Values342
}

export interface Values342 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface SymmetricalArray2 {
    values: Values343
}

export interface Values343 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Arrays5 {
    Examples: Examples51
    Challenges: Challenges51
    Coding: Coding52
}

export interface Examples51 {
    "arrays.j_array_basic": ArraysJArrayBasic2
    "arrays.j_array_fill": ArraysJArrayFill2
    "arrays.j_array_change": ArraysJArrayChange2
    "arrays.j_array_process_elements": ArraysJArrayProcessElements2
    "arrays.j_array_min_max": ArraysJArrayMinMax2
    "arrays.j_temperature": ArraysJTemperature2
    "arrays.j_array_rotate": ArraysJArrayRotate2
    "arrays.j_search_array": ArraysJSearchArray2
}

export interface ArraysJArrayBasic2 {
    values: Values344
}

export interface Values344 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ArraysJArrayFill2 {
    values: Values345
}

export interface Values345 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ArraysJArrayChange2 {
    values: Values346
}

export interface Values346 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ArraysJArrayProcessElements2 {
    values: Values347
}

export interface Values347 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ArraysJArrayMinMax2 {
    values: Values348
}

export interface Values348 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ArraysJTemperature2 {
    values: Values349
}

export interface Values349 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ArraysJArrayRotate2 {
    values: Values350
}

export interface Values350 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ArraysJSearchArray2 {
    values: Values351
}

export interface Values351 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Challenges51 {
    JArrayBasic2: JarrayBasic22
    JArrayBasic3: JarrayBasic32
    JArrayFillUserInput: JarrayFillUserInput2
    JArraySwapAdjacentElements: JarraySwapAdjacentElements2
    JAverageArrayElements: JaverageArrayElements2
    JArrayMin: JarrayMin2
    JTemperatureListDaysAboveThreshold: JtemperatureListDaysAboveThreshold2
    JArrayRotateLeftTwice: JarrayRotateLeftTwice2
    JArrayRotateRight: JarrayRotateRight2
    JArrayRotateRightTwice: JarrayRotateRightTwice2
    JSearchArrayTotalCounts: JsearchArrayTotalCounts2
    JSearchArrayCountsEach: JsearchArrayCountsEach2
}

export interface JarrayBasic22 {
    values: Values352
}

export interface Values352 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JarrayBasic32 {
    values: Values353
}

export interface Values353 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JarrayFillUserInput2 {
    values: Values354
}

export interface Values354 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JarraySwapAdjacentElements2 {
    values: Values355
}

export interface Values355 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JaverageArrayElements2 {
    values: Values356
}

export interface Values356 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JarrayMin2 {
    values: Values357
}

export interface Values357 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JtemperatureListDaysAboveThreshold2 {
    values: Values358
}

export interface Values358 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JarrayRotateLeftTwice2 {
    values: Values359
}

export interface Values359 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JarrayRotateRight2 {
    values: Values360
}

export interface Values360 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JarrayRotateRightTwice2 {
    values: Values361
}

export interface Values361 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JsearchArrayTotalCounts2 {
    values: Values362
}

export interface Values362 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JsearchArrayCountsEach2 {
    values: Values363
}

export interface Values363 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Coding52 {
    arrays_1: Arrays12
    arrays_2: Arrays23
    arrays_3: Arrays32
    array_4: Array42
    fixing_order_of_numbers: FixingOrderOfNumbers2
}

export interface Arrays12 {
    values: Values364
}

export interface Values364 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Arrays23 {
    values: Values365
}

export interface Values365 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Arrays32 {
    values: Values366
}

export interface Values366 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Array42 {
    values: Values367
}

export interface Values367 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface FixingOrderOfNumbers2 {
    values: Values368
}

export interface Values368 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface TwoDimensionalArrays4 {
    Examples: Examples52
    Challenges: Challenges52
    Coding: Coding53
}

export interface Examples52 {
    "arrays2d.j_array2d_basic": Arrays2dJArray2dBasic2
    "arrays2d.j_print_medals": Arrays2dJPrintMedals2
    "arrays2d.j_soda_survery": Arrays2dJSodaSurvery2
}

export interface Arrays2dJArray2dBasic2 {
    values: Values369
}

export interface Values369 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Arrays2dJPrintMedals2 {
    values: Values370
}

export interface Values370 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Arrays2dJSodaSurvery2 {
    values: Values371
}

export interface Values371 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Challenges52 {
    JArrays2dBasic2: Jarrays2dBasic22
    JArrays2dBasic3: Jarrays2dBasic32
    JPrintMedalsRowColumnTotal: JprintMedalsRowColumnTotal2
    JSodaSurverySodaAvg: JsodaSurverySodaAvg2
    JSodaSurverySodaRespondentAvg: JsodaSurverySodaRespondentAvg2
}

export interface Jarrays2dBasic22 {
    values: Values372
}

export interface Values372 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Jarrays2dBasic32 {
    values: Values373
}

export interface Values373 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JprintMedalsRowColumnTotal2 {
    values: Values374
}

export interface Values374 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JsodaSurverySodaAvg2 {
    values: Values375
}

export interface Values375 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JsodaSurverySodaRespondentAvg2 {
    values: Values376
}

export interface Values376 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Coding53 {
    pcrs_2d_arrays_1: Pcrs2dArrays12
    pcrs_2d_arrays_2: Pcrs2dArrays22
    pcrs_2d_arrays_3: Pcrs2dArrays32
}

export interface Pcrs2dArrays12 {
    values: Values377
}

export interface Values377 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Pcrs2dArrays22 {
    values: Values378
}

export interface Values378 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Pcrs2dArrays32 {
    values: Values379
}

export interface Values379 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ExceptionHandling4 {
    Examples: Examples53
    Challenges: Challenges53
    Coding: Coding54
}

export interface Examples53 {
    "exceptions.j_check_age": ExceptionsJCheckAge2
    "exceptions.j_check_producut_code": ExceptionsJCheckProducutCode2
}

export interface ExceptionsJCheckAge2 {
    values: Values380
}

export interface Values380 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface ExceptionsJCheckProducutCode2 {
    values: Values381
}

export interface Values381 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Challenges53 {
    JCheckAge2: JcheckAge22
    JCheckProductCode2: JcheckProductCode22
}

export interface JcheckAge22 {
    values: Values382
}

export interface Values382 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JcheckProductCode22 {
    values: Values383
}

export interface Values383 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Coding54 { }

export interface FileProcessing4 {
    Examples: Examples54
    Challenges: Challenges54
    Coding: Coding55
}

export interface Examples54 {
    "files.j_work_hours": FilesJWorkHours2
    "files.j_input_stat": FilesJInputStat2
}

export interface FilesJWorkHours2 {
    values: Values384
}

export interface Values384 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface FilesJInputStat2 {
    values: Values385
}

export interface Values385 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Challenges54 {
    JWorkHours2: JworkHours22
    JInputStat2: JinputStat22
}

export interface JworkHours22 {
    values: Values386
}

export interface Values386 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface JinputStat22 {
    values: Values387
}

export interface Values387 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Coding55 { }

export interface ArrayLists4 {
    Examples: Examples55
    Challenges: Challenges55
    Coding: Coding56
}

export interface Examples55 {
    "arraylist.vocabulary": ArraylistVocabulary2
}

export interface ArraylistVocabulary2 {
    values: Values388
}

export interface Values388 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Challenges55 {
    JVocabulary2: Jvocabulary22
}

export interface Jvocabulary22 {
    values: Values389
}

export interface Values389 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Coding56 {
    array_lst_1: ArrayLst12
}

export interface ArrayLst12 {
    values: Values390
}

export interface Values390 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Inheritance4 {
    Examples: Examples56
    Challenges: Challenges56
    Coding: Coding57
}

export interface Examples56 {
    "inheritance.animals": InheritanceAnimals2
    "inheritance.point": InheritancePoint2
}

export interface InheritanceAnimals2 {
    values: Values391
}

export interface Values391 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface InheritancePoint2 {
    values: Values392
}

export interface Values392 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Challenges56 {
    AnimalTester2: AnimalTester22
    InheritancePointTester2: InheritancePointTester22
}

export interface AnimalTester22 {
    values: Values393
}

export interface Values393 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface InheritancePointTester22 {
    values: Values394
}

export interface Values394 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Coding57 {
    inheritance_1: Inheritance12
    inheritance_2: Inheritance23
}

export interface Inheritance12 {
    values: Values395
}

export interface Values395 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Inheritance23 {
    values: Values396
}

export interface Values396 {
    k: number
    p: number
    a: number
    s: number
    t: number
    n: number
}

export interface Vis {
    topicSizeAttr: string[]
    color: Color
    userManual: string
    ui: Ui
}

export interface Color {
    binCount: number
    value2color: string
}

export interface Ui {
    params: Params
}

export interface Params {
    group: Group3
    user: User
}

export interface Group3 {
    uiTBarModeGrpChk: boolean
    uiTBarVis: boolean
    uiTBarGrpVis: boolean
    uiTBarModeVis: boolean
    uiTBarResVis: boolean
    defValResId: string
    uiTBarRepLvlVis: boolean
    uiTBarTopicSizeVis: boolean
    uiGridTimelineVis: boolean
    uiShowHelp: boolean
}

export interface User { }

export interface Configprops {
    agg_proactiverec_enabled: boolean
    agg_proactiverec_threshold: number
    agg_proactiverec_method: string
    agg_proactiverec_max: number
    agg_reactiverec_enabled: boolean
    agg_reactiverec_threshold: number
    agg_reactiverec_method: string
    agg_reactiverec_max: number
    agg_line_rec_enabled: boolean
    agg_kc_student_modeling: string
}

export interface RmcCount { }
