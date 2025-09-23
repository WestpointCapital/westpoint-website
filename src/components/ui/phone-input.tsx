import React, { useState } from 'react';
import { Input } from './input';
import { ChevronDown } from 'lucide-react';

interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

const countries: Country[] = [
  { code: 'US', name: 'United States', flag: '🇺🇸', dialCode: '+1' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', dialCode: '+44' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', dialCode: '+49' },
  { code: 'FR', name: 'France', flag: '🇫🇷', dialCode: '+33' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸', dialCode: '+34' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹', dialCode: '+39' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱', dialCode: '+31' },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪', dialCode: '+46' },
  { code: 'NO', name: 'Norway', flag: '🇳🇴', dialCode: '+47' },
  { code: 'DK', name: 'Denmark', flag: '🇩🇰', dialCode: '+45' },
  { code: 'FI', name: 'Finland', flag: '🇫🇮', dialCode: '+358' },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭', dialCode: '+41' },
  { code: 'AT', name: 'Austria', flag: '🇦🇹', dialCode: '+43' },
  { code: 'BE', name: 'Belgium', flag: '🇧🇪', dialCode: '+32' },
  { code: 'PL', name: 'Poland', flag: '🇵🇱', dialCode: '+48' },
  { code: 'CZ', name: 'Czech Republic', flag: '🇨🇿', dialCode: '+420' },
  { code: 'HU', name: 'Hungary', flag: '🇭🇺', dialCode: '+36' },
  { code: 'RO', name: 'Romania', flag: '🇷🇴', dialCode: '+40' },
  { code: 'BG', name: 'Bulgaria', flag: '🇧🇬', dialCode: '+359' },
  { code: 'HR', name: 'Croatia', flag: '🇭🇷', dialCode: '+385' },
  { code: 'SI', name: 'Slovenia', flag: '🇸🇮', dialCode: '+386' },
  { code: 'SK', name: 'Slovakia', flag: '🇸🇰', dialCode: '+421' },
  { code: 'LT', name: 'Lithuania', flag: '🇱🇹', dialCode: '+370' },
  { code: 'LV', name: 'Latvia', flag: '🇱🇻', dialCode: '+371' },
  { code: 'EE', name: 'Estonia', flag: '🇪🇪', dialCode: '+372' },
  { code: 'IE', name: 'Ireland', flag: '🇮🇪', dialCode: '+353' },
  { code: 'PT', name: 'Portugal', flag: '🇵🇹', dialCode: '+351' },
  { code: 'GR', name: 'Greece', flag: '🇬🇷', dialCode: '+30' },
  { code: 'CY', name: 'Cyprus', flag: '🇨🇾', dialCode: '+357' },
  { code: 'MT', name: 'Malta', flag: '🇲🇹', dialCode: '+356' },
  { code: 'LU', name: 'Luxembourg', flag: '🇱🇺', dialCode: '+352' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', dialCode: '+1' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', dialCode: '+61' },
  { code: 'NZ', name: 'New Zealand', flag: '🇳🇿', dialCode: '+64' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', dialCode: '+81' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷', dialCode: '+82' },
  { code: 'CN', name: 'China', flag: '🇨🇳', dialCode: '+86' },
  { code: 'IN', name: 'India', flag: '🇮🇳', dialCode: '+91' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', dialCode: '+55' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽', dialCode: '+52' },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷', dialCode: '+54' },
  { code: 'RU', name: 'Russia', flag: '🇷🇺', dialCode: '+7' },
  { code: 'TR', name: 'Turkey', flag: '🇹🇷', dialCode: '+90' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦', dialCode: '+966' },
  { code: 'AE', name: 'UAE', flag: '🇦🇪', dialCode: '+971' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦', dialCode: '+27' },
  { code: 'EG', name: 'Egypt', flag: '🇪🇬', dialCode: '+20' },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬', dialCode: '+234' },
  { code: 'KE', name: 'Kenya', flag: '🇰🇪', dialCode: '+254' },
  { code: 'IL', name: 'Israel', flag: '🇮🇱', dialCode: '+972' },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭', dialCode: '+66' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬', dialCode: '+65' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾', dialCode: '+60' },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩', dialCode: '+62' },
  { code: 'PH', name: 'Philippines', flag: '🇵🇭', dialCode: '+63' },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳', dialCode: '+84' },
];

interface PhoneInputProps {
  name: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  name,
  placeholder = "Phone number",
  className = "",
  value = "",
  onChange
}) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(value.replace(/^\+\d+\s/, '') || '');

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    const fullNumber = `${country.dialCode} ${phoneNumber}`;
    onChange?.(fullNumber);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value;
    setPhoneNumber(number);
    const fullNumber = `${selectedCountry.dialCode} ${number}`;
    onChange?.(fullNumber);
  };

  return (
    <div className="relative">
      <div className="flex">
        {/* Country Selector */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 h-10 bg-slate-800/50 border border-slate-700 rounded-l-md text-white hover:bg-slate-700/50 transition-colors"
          >
            <span className="mr-2">{selectedCountry.flag}</span>
            <span className="text-sm">{selectedCountry.dialCode}</span>
            <ChevronDown className="ml-1 w-4 h-4" />
          </button>
          
          {isOpen && (
            <div className="absolute top-full left-0 z-50 mt-1 w-64 max-h-60 overflow-y-auto bg-slate-800 border border-slate-700 rounded-md shadow-lg">
              {countries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  className="w-full flex items-center px-3 py-2 text-left text-white hover:bg-slate-700 transition-colors"
                >
                  <span className="mr-3">{country.flag}</span>
                  <span className="mr-2 text-sm">{country.dialCode}</span>
                  <span className="text-sm">{country.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Phone Number Input */}
        <Input
          name={name}
          type="tel"
          placeholder={placeholder}
          value={phoneNumber}
          onChange={handlePhoneChange}
          className={`flex-1 rounded-l-none border-l-0 ${className}`}
        />
      </div>
      
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={`${selectedCountry.dialCode} ${phoneNumber}`} />
    </div>
  );
};
