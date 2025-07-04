import {
  Introduction,
  InformationWeCollect,
  HowDoWeUseThePersonalInformationWeCollect,
  WhoDoWeShareYourPersonalInformationWith,
  UseOfThirdPartyServices,
  Cookies,
  Hyperlinks,
  YourDataPrivacyRights,
} from "./components/PrivatePolicySections";

export default async function PrivacyPolicy() {
  return (
    <>
      <h1 className="font-bold text-2xl md:text-5xl mb-8 text-gray-800 text-center">
        PyCon Hong Kong Privacy Policy Statement
      </h1>
      <div className="mt-4">
        <Introduction />
      </div>

      <div className="space-y-8 mt-8">
        <InformationWeCollect />
        <HowDoWeUseThePersonalInformationWeCollect />
        <WhoDoWeShareYourPersonalInformationWith />
        <UseOfThirdPartyServices />
        <Cookies />
        <Hyperlinks />
        <YourDataPrivacyRights />
      </div>
    </>
  );
}
