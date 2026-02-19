// app/insurance-guide/page.js
import InsuranceGuide from './component/InsuranceGuide';
import { insuranceData } from '../insurance/data/insuranceData';

export const metadata = {
  title: 'Insurance Guide - Understand Your Coverage Options',
  description: 'Comprehensive guide to understanding different types of insurance, coverage options, and how to choose the right protection for your needs.'
};

export default function InsuranceGuidePage() {
  return <InsuranceGuide insuranceData={insuranceData} />;
}