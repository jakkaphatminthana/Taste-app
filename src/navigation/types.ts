import { AppStackParamList } from "./AppStack";
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type AppScreenProps<RountName extends keyof AppStackParamList> = NativeStackScreenProps<
    AppStackParamList,
    RountName
>;