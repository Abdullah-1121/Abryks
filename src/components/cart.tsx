'use Client'
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addProduct , removeProduct , addOne , removeOne} from '@/redux/CartSlice'
import Image from 'next/image'
const cart = 