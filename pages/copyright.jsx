import React from 'react';
import ReactMarkdown from 'react-markdown';

const CopyrightContent = `
# Copyright Information

## Copyright Notice

© Trustock 2023. All rights reserved.

## Terms of Use

By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws, and regulations, and agree that you are responsible for compliance with any applicable local laws.

## Use License

1. **Permission is granted** to temporarily download one copy of the materials (information or software) on Trustock's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
   - modify or copy the materials;
   - use the materials for any commercial purpose or for any public display (commercial or non-commercial);
   - attempt to decompile or reverse engineer any software contained on Trustock's website;
   - remove any copyright or other proprietary notations from the materials; or
   - transfer the materials to another person or "mirror" the materials on any other server.

2. This license shall automatically terminate if you violate any of these restrictions and may be terminated by Trustock at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.

## Disclaimer

The materials on Trustock's website are provided on an 'as is' basis. Trustock makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

Further, Trustock does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.

## Limitations

In no event shall Trustock or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Trustock's website, even if Trustock or a Trustock authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.

## Revisions and Errata

The materials appearing on Trustock's website could include technical, typographical, or photographic errors. Trustock does not warrant that any of the materials on its website are accurate, complete, or current. Trustock may make changes to the materials contained on its website at any time without notice. Trustock does not, however, make any commitment to update the materials.

## Links

Trustock has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Trustock of the site. Use of any such linked website is at the user's own risk.

## Site Terms of Use Modifications

Trustock may revise these terms of use for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms and Conditions of Use.

## Governing Law

Any claim relating to Trustock's website shall be governed by the laws of the country of [Your Company Location] without regard to its conflict of law provisions.

General Terms and Conditions applicable to Use of a Website.

For any questions about this copyright notice, you can contact us at sivasankarreddyvattigunta@gmail.com and hemadridonadula@gmail.com.

**Last updated: 06-11-2023**

*This document is CC-BY-SA. It was last updated on 06-11-2023.*
`;

const CopyrightComponent = () => {
  return (
    <div className="markdown-content">
      <ReactMarkdown>{CopyrightContent}</ReactMarkdown>
    </div>
  );
};

export default CopyrightComponent;
