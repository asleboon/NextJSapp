import 'next';
import { sanityClient } from './client';

declare module 'next' {
    export interface NextPageContext {
        sanityClient: any;
    }
}
