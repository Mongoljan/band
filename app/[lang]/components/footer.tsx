interface FooterDictionary {
  footer: {
    allRights: string; // Adjust the type as needed
  };
}

export default function Footer({ dict }: { dict: FooterDictionary }) {
  const date = new Date();

  return (
    <div className="footer text-center py-2 text-sm mb-6">
      <p>&copy; Logo Company {date.getFullYear()}</p>
      <p>{dict.footer.allRights}</p>
    </div>
  );
}
