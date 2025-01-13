import Foundation
import AdServices

@objc public class ASAID: NSObject {

    @objc public func getASAID() -> String {
         do {
             if #available(iOS 14.3, *) {
                 let attributionToken = try AAAttribution.attributionToken()
                 return attributionToken
             } else {
                 return ""
             }
        } catch {
            return ""
        }
    }

}
