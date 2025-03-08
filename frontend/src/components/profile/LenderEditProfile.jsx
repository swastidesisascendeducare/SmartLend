import ProfileForm from "../ProfileForm";

const LenderEditProfile = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Lender Profile</h1>
            <ProfileForm userType="lender" />
        </div>
    );
};

export default LenderEditProfile;
