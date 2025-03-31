import ProfileForm from "../ProfileForm";

const BorrowerEditProfile = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Borrower Profile</h1>
            <ProfileForm userType="borrower" />
        </div>
    );
};

export default BorrowerEditProfile;
