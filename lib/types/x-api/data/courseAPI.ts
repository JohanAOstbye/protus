export type Root = {
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

type Context = {
    learnerId: string
    group: Group
}

type Group = {
    id: string
    name: string
}

type ReportLevel = {
    id: string
    name: string
}

type Resource = {
    id: string
    name: string
    dim: Dim
    updateStateOn: UpdateStateOn
}

type Dim = {
    w: number
    h: number
}

type UpdateStateOn = {
    done: boolean
    winClose: boolean
    winCloseIfAct: boolean
}

type Topic = {
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

type Timeline = {
    covered: boolean
    current: boolean
}

type Activities = {
    Examples: Example[]
    Challenges: Challenge[]
    Coding: Coding[]
}

type Example = {
    id: string
    name: string
    url: string
    kcs: any[]
}

type Challenge = {
    id: string
    name: string
    url: string
    kcs: any[]
}

type Coding = {
    id: string
    name: string
    url: string
    kcs: any[]
}

type Learner = {
    id: string
    name: string
    isHidden: boolean
    state: State
    preferences: any[]
}

type State = {
    topics: Topics
    activities: Activities2
}

type Topics = {
    'Variables and Operations': ObjectValues
    Strings: ObjectValues
    'Boolean Expressions': ObjectValues
    'If-Else': ObjectValues
    'While Loops': ObjectValues
    'For Loops': ObjectValues
    'Objects and Classes': ObjectValues
    'Nested Loops': ObjectValues
    Arrays: ObjectValues
    'Two-Dimensional Arrays': ObjectValues
    'Exception handling': ObjectValues
    'File processing': ObjectValues
    ArrayLists: ObjectValues
    Inheritance: ObjectValues
}

type CodingSet = {
    k: number
    p: number
}

type Overall = {
    k: number
    p: number
}

type Activities2 = {
    'Variables and Operations': VariablesAndOperations2
    Strings: Strings2
    'Boolean Expressions': BooleanExpressions2
    'If-Else': IfElse2
    'While Loops': WhileLoops2
    'For Loops': ForLoops2
    'Objects and Classes': ObjectsAndClasses2
    'Nested Loops': NestedLoops2
    Arrays: Arrays2
    'Two-Dimensional Arrays': TwoDimensionalArrays2
    'Exception handling': ExceptionHandling2
    'File processing': FileProcessing2
    ArrayLists: ArrayLists2
    Inheritance: Inheritance2
}

type VariablesAndOperations2 = {
    Examples: Examples15
    Challenges: Challenges15
    Coding: Coding16
}

type Examples15 = {
    'artithmetic.inc_dec_operators': ObjectValues
    'arithmetic.f_to_c_conversion': ObjectValues
    'arithmetic.time_conversion': ObjectValues
    'artihmetic.vending_machine': ObjectValues
    'arithmetic.bmi_calculator': ObjectValues
    'arithmetic.pythagorean_theorem': ObjectValues
}

type Challenges15 = {
    JDecInc2: ObjectValues
    JDecInc3: ObjectValues
    FahrenheitToCelsius: ObjectValues
    DisplayTime2: ObjectValues
    VendingMachine2: ObjectValues
    BmiCalculator2: ObjectValues
    PythagoreanTheorem2: ObjectValues
}

type Coding16 = {
    second_in_days: ObjectValues
    rectangle_perimeter: ObjectValues
    days_to_week_conversion: ObjectValues
    percentage_correctness: ObjectValues
    compute_average: ObjectValues
}

type Strings2 = {
    Examples: Examples16
    Challenges: Challenges16
    Coding: Coding17
}

type Examples16 = {
    'strings.substring': ObjectValues
    'strings.addition': ObjectValues
    'strings.escape_chars': ObjectValues
    'strings.equals': ObjectValues
    'strings.charAt': ObjectValues
}

type Challenges16 = {
    Initials2: ObjectValues
    Initials3: ObjectValues
    StringAddition2: ObjectValues
    JEscapeChar2: ObjectValues
    JEscapeChar3: ObjectValues
    JStringEqual2: ObjectValues
    JCharAt2: ObjectValues
}

type Coding17 = {
    first_half: ObjectValues
    non_start: ObjectValues
    make_out_word: ObjectValues
    repeat_last_char: ObjectValues
    first_last_swap: ObjectValues
    end_characters: ObjectValues
    'is_is_substring_or_ not_is_not_substring': ObjectValues
}

type BooleanExpressions2 = {
    Examples: ObjectValues
    Challenges: ObjectValues
    Coding: ObjectValues
}

type ObjectValues = {
    [k: string]: values
}

type values = {
    values: {
        k: number
        p: number
        a?: number
        s?: number
        t?: number
        n?: number
    }
    overall?: Overall
}

type IfElse2 = {
    Examples: Examples18
    Challenges: Challenges18
    Coding: Coding19
}

type Examples18 = {
    'ifelse.if_else_num': ObjectValues
    'ifelse.if_else_wage': ObjectValues
    'ifelse.if_else_if_grade': ObjectValues
    'ifelse.nested_if_temperature': ObjectValues
    'ifelse.nested_if_min_max': ObjectValues
}

type Challenges18 = {
    ifElseOddEven: ObjectValues
    JIfElseWages2: ObjectValues
    JIfElseIfGrade2: ObjectValues
    JNestedIfTemperature2: ObjectValues
    JNestedIfMaxOfThree: ObjectValues
}

type Coding19 = {
    sortaSum: ObjectValues
    twoAsOne: ObjectValues
    greenTicket: ObjectValues
    without2: ObjectValues
    in1To10: ObjectValues
}

type WhileLoops2 = {
    Examples: Examples19
    Challenges: Challenges19
    Coding: CodingSet
}

type Examples19 = {
    'while_loops.divisor': ObjectValues
    'while_loops.inputs': ObjectValues
    'while_loops.j_average': ObjectValues
    'while_loops.j_check_adjacent': ObjectValues
    'while_loops.j_digits': ObjectValues
    'while_loops.win_percentage': ObjectValues
}

type Challenges19 = {
    JLargestDivisor: ObjectValues
    JInput2: ObjectValues
    JInput3: ObjectValues
    JInput4: ObjectValues
    JAverageEvenNums: ObjectValues
    JAverageDouble: ObjectValues
    JAdjacentConsecutives: ObjectValues
    JAdjacentGreater: ObjectValues
    JSumDigits: ObjectValues
    JReverseNumber: ObjectValues
    JWinPercentageInput: ObjectValues
    JWinPercentageWonEqual: ObjectValues
}

type ForLoops2 = {
    Examples: Examples20
    Challenges: Challenges20
    Coding: CodingSet1
}

type Examples20 = {
    'for_loops.j_for_one': ObjectValues
    'for_loops.j_for_two': ObjectValues
    'for_loops.j_for_three': ObjectValues
    'for_loops.j_squares': ObjectValues
}

type Challenges20 = {
    JForOne2: ObjectValues
    JForTwo2: ObjectValues
    JForThree2: ObjectValues
    JWriteSquaresOdd: ObjectValues
    JWriteSquaresRange: ObjectValues
}

type CodingSet1 = {
    for1_coding: ObjectValues
    for2_coding: ObjectValues
    for3_coding: ObjectValues
    for4_coding: ObjectValues
    sum_square_difference: ObjectValues
    largest_prime_factor: ObjectValues
    largest_palindrome_product: ObjectValues
}

type ObjectsAndClasses2 = {
    Examples: Examples21
    Challenges: Challenges21
    Coding: CodingSet2
}

type Examples21 = {
    'objects.classes.point': ObjectValues
    'objects.classes.tv': ObjectValues
    'objects.classes.account': ObjectValues
    'objects.classes.loan': ObjectValues
}

type Challenges21 = {
    PointTester2: ObjectValues
    TVTester2: ObjectValues
    Transactions2: ObjectValues
    LoanTester2: ObjectValues
}

type CodingSet2 = {
    object_classes_1: ObjectValues
    object_classes_2: ObjectValues
    object_classes_3: ObjectValues
    object_classes_4: ObjectValues
}

type NestedLoops2 = {
    Examples: Examples22
    Challenges: Challenges22
    Coding: CodingSet3
}

type Examples22 = {
    'nested_for.star_patterns': ObjectValues
    'nested_for.repeated_sequence': ObjectValues
}

type Challenges22 = {
    JStars2: ObjectValues
    JRepeatedSequence2: ObjectValues
}

type CodingSet3 = {
    nested_loops_1: ObjectValues
    nested_loops_2: ObjectValues
    symmetrical_array: ObjectValues
}

type Arrays2 = {
    Examples: Examples23
    Challenges: Challenges23
    Coding: CodingSet4
}

type Examples23 = {
    'arrays.j_array_basic': ObjectValues
    'arrays.j_array_fill': ObjectValues
    'arrays.j_array_change': ObjectValues
    'arrays.j_array_process_elements': ObjectValues
    'arrays.j_array_min_max': ObjectValues
    'arrays.j_temperature': ObjectValues
    'arrays.j_array_rotate': ObjectValues
    'arrays.j_search_array': ObjectValues
}

type Challenges23 = {
    JArrayBasic2: ObjectValues
    JArrayBasic3: ObjectValues
    JArrayFillUserInput: ObjectValues
    JArraySwapAdjacentElements: ObjectValues
    JAverageArrayElements: ObjectValues
    JArrayMin: ObjectValues
    JTemperatureListDaysAboveThreshold: ObjectValues
    JArrayRotateLeftTwice: ObjectValues
    JArrayRotateRight: ObjectValues
    JArrayRotateRightTwice: ObjectValues
    JSearchArrayTotalCounts: ObjectValues
    JSearchArrayCountsEach: ObjectValues
}

type CodingSet4 = {
    arrays_1: ObjectValues
    arrays_2: ObjectValues
    arrays_3: ObjectValues
    array_4: ObjectValues
    fixing_order_of_numbers: ObjectValues
}

type TwoDimensionalArrays2 = {
    Examples: Examples24
    Challenges: Challenges24
    Coding: CodingSet5
}

type Examples24 = {
    'arrays2d.j_array2d_basic': ObjectValues
    'arrays2d.j_print_medals': ObjectValues
    'arrays2d.j_soda_survery': ObjectValues
}

type Challenges24 = {
    Arrays2dBasic2: ObjectValues
    Arrays2dBasic3: ObjectValues
    JPrintMedalsRowColumnTotal: ObjectValues
    JSodaSurverySodaAvg: ObjectValues
    JSodaSurverySodaRespondentAvg: ObjectValues
}

type CodingSet5 = {
    pcrs_2d_arrays_1: ObjectValues
    pcrs_2d_arrays_2: ObjectValues
    pcrs_2d_arrays_3: ObjectValues
}

type ExceptionHandling2 = {
    Examples: Examples25
    Challenges: Challenges25
    Coding: CodingSet6
}

type Examples25 = {
    'exceptions.j_check_age': ObjectValues
    'exceptions.j_check_producut_code': ObjectValues
}

type Challenges25 = {
    JCheckAge2: ObjectValues
    JCheckProductCode2: ObjectValues
}

type CodingSet6 = {}

type FileProcessing2 = {
    Examples: Examples26
    Challenges: Challenges26
    Coding: CodingSet7
}

type Examples26 = {
    'files.j_work_hours': ObjectValues
    'files.j_input_stat': ObjectValues
}

type Challenges26 = {
    JWorkHours2: ObjectValues
    JInputStat2: ObjectValues
}

type CodingSet7 = {}

type ArrayLists2 = {
    Examples: Examples27
    Challenges: Challenges27
    Coding: CodingSet8
}

type Examples27 = {
    'arraylist.vocabulary': ObjectValues
}

type Challenges27 = {
    JVocabulary2: ObjectValues
}


type CodingSet8 = {
    array_lst_1: ObjectValues
}

type Inheritance2 = {
    Examples: Examples28
    Challenges: Challenges28
    Coding: CodingSet9
}

type Examples28 = {
    'inheritance.animals': ObjectValues
    'inheritance.point': ObjectValues
}

type Challenges28 = {
    AnimalTester2: ObjectValues
    InheritancePointTester2: ObjectValues
}

type CodingSet9 = {
    inheritance_1: ObjectValues
    inheritance_2: ObjectValues
}

type Group2 = {
    name: string
    state: State
    learnerIds: string[]
}

type Vis = {
    topicSizeAttr: string[]
    color: Color
    userManual: string
    ui: Ui
}

type Color = {
    binCount: number
    value2color: string
}

type Ui = {
    params: Params
}

type Params = {
    group: Group3
    user: User
}

type Group3 = {
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

type User = {}

type Configprops = {
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

type RmcCount = {}